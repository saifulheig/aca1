import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
               <Link href="/">
            <Image
                className=""
                src="/logo.png"
                alt="Solar-academy Logo"
                width={150}
                height={35}
                priority
              />
            </Link>
        </div>
    );
};

export default Logo;