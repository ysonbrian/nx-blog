import Link from 'next/link'
import React from 'react'

const NavList = [
  { name: 'home', src: '/' },
  { name: 'about', src: 'about' },
  { name: 'posts', src: 'posts' },
  { name: 'contact', src: 'contact' },
]

const Nav = () => {
  return (
    <div className={`flex justify-between px-16 py-6`}>
      <div className={`text-[28px] font-bold`}>NXs Blog</div>
      <ul className={`flex gap-2`}>
        {NavList.map((list) => (
          <Link key={list.name} href={`/${list.src}`}>
            {list.name}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Nav
