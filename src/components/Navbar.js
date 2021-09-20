import Link from 'next/link';
import React from 'react'
import {signIn,signOut,useSession} from 'next-auth/client'
const Navbar = () =>{
    const [session,loading]=useSession()
    console.log(session,loading)
  return(    
     <nav className="bg-green-400">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <Link href="/">
            <a className="navbar-brand ">Note App</a>
        </Link>
        
        {
            !loading && !session && (
                
                
            <Link href="/api/auth/signin">
            <a onClick={e=>{e.preventDefault()
            signIn()}}>sign In</a>
        </Link>
        )
        }
        {
             session && (
                <div>
                <Link href="/new">
                <a className="create">Create Note    </a>
            </Link>
          
             <Link href="/api/auth/signout">
             <a onClick={e=>{e.preventDefault()
                 signOut()}}>  sign Out</a>
             </Link>
             </div>)
        }
        
        </div>
        </div>
    </nav>
  )
        }

export default Navbar

