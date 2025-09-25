"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "./component/nav"
export default function Component() {
  const { data: session } = useSession()

  if (session) {
    return (
      
    <>
    <Nav/>
      <div className="center-container">
        
        <span className="text-white">Signed in as {session.user?.name}</span> <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    </>
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