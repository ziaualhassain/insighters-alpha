import { NextResponse } from 'next/server'
import { validateUser } from '@/lib/auth'
import { sign } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: Request) {
  const { username, password } = await request.json()
  try {
    const user = await validateUser(username, password)
    if (user) {
      const token = sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' })
      const response = NextResponse.json({ message: 'Logged in successfully' }, { status: 200 })
      response.cookies.set('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
      return response
    } else {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ message: 'Error logging in' }, { status: 500 })
  }
}

