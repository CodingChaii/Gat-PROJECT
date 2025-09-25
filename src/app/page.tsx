"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "./component/nav"
export default function Component() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="center-container">
        <Nav/>
        <span>Signed in as {session.user?.email}</span> <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  return (
    <div className="center-container">
      <span>Not signed in</span> <br />
      <button onClick={() => signIn('github')} className="github-style-button">
        Sign in with GitHub
      </button>
    </div>
  )
}