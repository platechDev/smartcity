'use client'
import React from 'react';
import Link from 'next/link';
import {FaHome} from 'react-icons'

export default function NavBar() {

    //const navbarNames = ['home','about','service','contact','ser']
    
    const navbarNames = [
        {name: 'home', path:'/home',icon:<FaHome/> },
        {name: 'about', path:'/about'},
        {name: 'contact', path:'/contact'},
        {name: 'ser', path:'/ser'}
    ];
  
    return (
        <div className=' flex flex-row'>
        <div className="flex flex-col w-[200px] bg-gray-900 h-screen fixed transition-width duration-300">
            <ul className="flex flex-col justify-center items-center ">
                {
                    navbarNames.map((navbarName, index) => <Link 
                        key={index} 
                        className='flex py-4 text-white text-center'
                        href={navbarName.path}
                    >
                       {navbarName.name}
                    </Link>)
                }
            </ul>
        </div>
    
        </div>
    );
}


