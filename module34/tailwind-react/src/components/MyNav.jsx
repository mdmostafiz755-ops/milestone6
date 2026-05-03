import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
const MyNav = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-between items-center p-5'>
            <span className=' flex gap-3' onClick={() => setOpen(!open)}>
                {
                    open ? <Menu className='md:hidden'></Menu> : <X className='md:hidden' />
                }
                <ul className={`font-medium md:hidden absolute ${open? '-top-40':'top-6'} 
                mx-8 duration-1000 z-10 bg-amber-300 text-black rounded-lg p-3`}>
                    <li><a href="">Olio</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <h3 className='font-bold hidden md:block'>MyNav</h3>
            </span>
            <ul className='md:flex justify-between p-5 font-bold gap-3 hidden'>
                <li><a href="">Olio</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <button className='btn btn-soft btn-info'>Sign up</button>
        </div>
    )
}

export default MyNav