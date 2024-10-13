import React from 'react'
import Link from 'next/link'

// Shadcn Imports
import { Button } from '@/components/ui/button'

// Component Imports
import Navbar from './Navbar'

export default function Header() {
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className='container mx-auto flex justify-center items-center'></div>
            {/* logo */}
            <Link href="/">
                <h1 className='text-4xl font-semibold'>Kislay
                    <span className='text-accent'>.</span>
                </h1>
            </Link>
            {/* desktop nav */}
            <div className='hidden xl:flex items-center gap-8'> <Navbar />
                <Link href="/contact">
                    <Button>Hire me</Button>
                </Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">mobilenav</div>
        </header>
    )
}
