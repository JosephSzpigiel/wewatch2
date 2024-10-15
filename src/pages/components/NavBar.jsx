import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

function NavBar({setToken, token}) {
    const router = useRouter()

    const links = [
        {
            title:"Home",
            path: '/'
        },
        {
            title:"Search",
            path: '/search'
        }
    ]

    function LinkButtons(){
        return links.map(link=>{
            return <Link href={link.path}>
                <Button>{link.title}</Button>
                </Link>
        })
    }

    function handleLogout(){
        console.log('clicked!')
        sessionStorage.removeItem('token')
        setToken(false)
        router.push('/')
    }



    return (
        <nav className=' px-10 py-7 max-w-full flex justify-between h-10 items-center bg-black '>
            <Link className=' text-4xl font-bold' href='/'>WeWatch</Link>
            <div className=' flex justify-between w-64 min-w-fit'>
                <LinkButtons/>
                {token?  
                    <Button onClick={handleLogout}>
                        Log Out
                    </Button>:
                    <Link href={'/login'}>
                        <Button>{'Login'}</Button>
                    </Link>
                }
            </div>
        </nav>
    )
}

export default NavBar