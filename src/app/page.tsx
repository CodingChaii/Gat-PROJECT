"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

export default function Component() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="github-login-container">
        <div className="github-card">
          <img
            src={session.user?.image || '/placeholder-avatar.png'}
            alt={session.user?.name || "User avatar"}
            className="avatar"
          />
          <span className="github-text">Signed in as {session.user?.name || session.user?.email}</span>
          <button onClick={() => signOut()} className="github-button">
            Sign out
          </button>
          <Link href="/main">
            <button className="github-button mt-5">Keep Going</button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="github-login-container">
      <div className="github-card">
        <span className="github-text">Not signed in</span>
        <button onClick={() => signIn('github')} className="github-button">
          Sign in with GitHub
        </button>
      </div>
    </div>
  )
}