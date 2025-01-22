'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Jordan from '@/public/images/Jordan.png';
import Link from 'next/link';
import { User } from 'next-auth';

const SecondaryHeader = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUser(data.user);
    };

    fetchUser();
  }, []);

  return (
    <div className="w-full h-[36px] flex justify-between items-center bg-lightgray md:px-10 px-4">
      <div>
        <Image
          alt=""
          src={Jordan}
          width={24}
          height={24}
          className="h-[24px] w-[24px]"
        />
      </div>
      <div className="flex items-center gap-2 text-[12px] font-normal">
        <div>Find a Store</div>
        <div>|</div>
        <Link href="/contact">
          <div>Help</div>
        </Link>
        {!user ? (
          <>
            <div>|</div>
            <Link href="/register">
              <div>Join Us</div>
            </Link>
            <div>|</div>
            <Link href="/login">
              <div>Sign In</div>
            </Link>
          </>
        ) : (
          <>
            <div>|</div>
            <div>Welcome, {user.name}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default SecondaryHeader;
