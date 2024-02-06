'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'

function Header() {
  const [menu, setMenu] = useState(false)

  return (
    <header className='container mx-auto fixed inset-x-0 top-[30px] z-20'>
      <div className='flex items-center justify-between p-8 bg-white shadow-card rounded-3xl'>
        <Link href='/'>
          <div className='flex flex-col'>
            <span className='flex leading-4 text-xl font-bold'>
              <span className='block text-primary'>Porto</span>folio
            </span>
            <span className='block leading-4 font-light'>
              Maker
            </span>
          </div>
        </Link>
        <nav>
          <HiOutlineMenu onClick={() => setMenu(!menu)} className='h-6 w-6 block md:hidden' />
          <ul className='hidden md:flex items-center space-x-8'>
            <li className='font-semibold cursor-pointer hover:text-primary transition-colors duration-300 ease-in-out'>
              <Link href='/my-portofolio'>
                My Portofolio
              </Link>
            </li>
            <li>
              <Link href='/create'>
                <Button>
                  Create
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div data-menu={menu} className='data-[menu=true]:block data-[menu=false]:hidden fixed inset-0'>
        <div
          onClick={() => setMenu(!menu)}
          className='bg-gray-100/40 w-full h-full backdrop-blur-sm'
        />
        <div className='fixed w-[80%] left-0 inset-y-0 bg-white shadow-card p-8 flex flex-col'>
          <Link href='/' onClick={() => setMenu(false)}>
            <div className='flex flex-col'>
              <span className='flex leading-4 text-xl font-bold'>
                <span className='block text-primary'>Porto</span>folio
              </span>
              <span className='block leading-4 font-light'>
                Maker
              </span>
            </div>
          </Link>
          <nav className='mt-8'>
            <ul>
              <li className='font-semibold cursor-pointer hover:text-primary transition-colors duration-300 ease-in-out'>
                <Link href='/my-portofolio'
                  onClick={() => setMenu(false)}
                >
                  My Portofolio
                </Link>
              </li>
            </ul>
          </nav>
          <Link href='/create' className='mt-auto'
            onClick={() => setMenu(false)}
          >
            <Button className='w-full'>
              Create
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
