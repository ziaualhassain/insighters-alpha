import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Insighters</h1>
      <p className="text-xl text-gray-600 mb-8">
        Connect with others, share your thoughts, and discover new insights.
      </p>
      <div className="space-x-4">
        <Link
          href="/signup"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
        >
          Log In
        </Link>
      </div>
    </div>
  )
}

