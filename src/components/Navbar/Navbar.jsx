import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className='flex items-center justify-between pt-8 px-10'>
            {/* left-side */}
            <div className='flex items-center gap-8'>
                {/* logo */}
                <Image
                    width={150}
                    height={150}
                    src={"https://resido-v2.smartdemowp.com/wp-content/themes/resido/assets/images/logo.svg"}
                    alt='logo'
                />
                <div className='flex items-center space-x-8 mt-2 text-[#39466d] font-semibold'>
                    <Link href='/'>Home</Link>
                    <Link href='/agents'>Agents List</Link>
                    <Link href='/agencies'>Agencies List</Link>
                    <Link href='/blog'>Blog</Link>
                </div>
            </div>
            {/* right-side */}
            <div className='flex items-center gap-2 text-blue-500 font-semibold text-lg'>
                <FaUserCircle className='text-2xl' />
                <Link  href='/'>Signin</Link>

            </div>
        </nav>
    );
};

export default Navbar;