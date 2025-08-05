'use client';
import { TActiveLinkProps } from '@/app/types';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function ActiveLink({ href, children }: TActiveLinkProps) {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 p-2 m-2 rounded-md transition-all ${clsx(
        'hover:bg-purple-300/10 hover:text-black',
        isActive && 'bg-purple-300 text-white'
      )}`}
    >
      {children}
    </Link>
  );
}
