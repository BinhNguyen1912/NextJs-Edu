import { TMenuSidebar } from '@/app/types';
import ActiveLink from '@/component/common/ActiveLink';
import { menuSidebar } from '@/constants/menuSideBar';
import React from 'react';

export default function Sidebar() {
  return (
    <div className="m-3 ">
      <div className="logo font-bold text-[20px] mb-4">UCADEMY</div>
      <ul>
        {menuSidebar.map((item) => {
          return <MeuItem key={item.href} {...item} />;
        })}
      </ul>
    </div>
  );
}

function MeuItem({ href, label, icon }: TMenuSidebar) {
  return (
    <li className="">
      <ActiveLink href={href}>
        {icon}
        {label}
      </ActiveLink>
    </li>
  );
}
