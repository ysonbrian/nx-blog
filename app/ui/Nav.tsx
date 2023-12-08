import Link from 'next/link'
import React from 'react'

const NavList = [
  { name: 'home', src: 'home' },
  { name: 'about', src: 'about' },
  { name: 'posts', src: 'posts' },
  { name: 'contract', src: 'contract' },
]

const Nav = () => {
  return (
    <div className={`flex justify-between p-6`}>
      <div>NX'sBlog</div>
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
