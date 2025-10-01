import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
const authStatus= useSelector((state) => state.auth.status)
const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Sign-up",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]



  return (
   <header className='bg-gray-700'>
    <Container>
        <nav className='flex py-4 items-center text-white text-xl'>
            <div>
               <Link to="/">
               <Logo width='70px' />
               </Link>
            </div>

            <ul className='flex gap-2 ml-auto'>
                {navItems.map((item) => 
                  item.active ? (
                    <li key={item.name} className='ml-4 border-b-2 text-white border-transparent hover:border-white transition-all duration-300'>
                      <Link to={item.slug}>{item.name}</Link>
                    </li>
                  ) : null
                )}
                {authStatus && (
                  <li className='ml-4'>
                    <LogoutBtn />
                  </li>
                )}
            </ul>
        </nav>
    </Container>
   </header>
  )
}

export default Header
