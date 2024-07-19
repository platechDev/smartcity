"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { HomeIcon, InformationCircleIcon, PhoneIcon, UserIcon } from '@heroicons/react/solid';21
import { animateNavBar } from '/src/app/animations/animation.js';

export default function NavBar() {

    const navbarItems = [
        { name: 'home', path: '/home', icon: HomeIcon },
        { name: 'about', path: '/about', icon: InformationCircleIcon },
        { name: 'contact', path: '/contact', icon: PhoneIcon },
        { name: 'ser', path: '/ser', icon: UserIcon }
    ];
    
    useEffect(() => {
        console.log("hola mundo")
        animateNavBar();
    }, []); 


    return (
      
       
        <div className='flex flex-row'>
            <div className="flex flex-col w-20 bg-gray-900 h-screen fixed transition-width duration-300">
                <ul className="flex flex-col justify-center items-center">
                    {navbarItems.map((item, index) => (
                        <li key={index} className="w-full">
                            <Link href={item.path} passHref>
                            <div className="flex flex-col justify-center items-center p-4 text-white hover:scale-110 transition-transform duration-200 cursor-pointer">
                                    <item.icon className="h-10 w-18 mb-1" />
                                    <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                                </div>
                                
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
    
}
