import React, { ReactNode } from 'react';

interface NavLinkProps {
  icon: ReactNode;
  href: string;
  children: ReactNode;
}

export function NavLink({ icon, href, children }: NavLinkProps) {
  return (
    <a 
      href={href}
      className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors"
    >
      <span className="w-6 h-6">{icon}</span>
      <span className="font-medium">{children}</span>
    </a>
  );
}