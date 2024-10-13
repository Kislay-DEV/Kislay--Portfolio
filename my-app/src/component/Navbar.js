"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

const links = [
    {
        name: 'home',
        path: '/'
    },

    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    }
]
export default function Navbar() {
    return (
        <nav className='h-12'>

        </nav>
    )
}
