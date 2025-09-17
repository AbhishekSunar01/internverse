"use client";

import Link from "next/link";
import { Bell, BriefcaseBusiness, House, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 bg-white flex items-center justify-between border-b px-60 py-4 transition-all duration-300 
      ${scrolled ? "bg-white/70 backdrop-blur-md" : "bg-transparent"}`}
    >
      <Link href="/employee" className="text-2xl font-semibold text-primary">
        Interverse
      </Link>

      <ul className="flex items-center gap-10">
        <NavItem href="/employee">
          <House size={16} />
          Home
        </NavItem>
        <NavItem href="/employee/jobs">
          <BriefcaseBusiness size={16} />
          Jobs
        </NavItem>
        <NavItem href="/employee/notifications">
          <Bell size={16} />
          Notification
        </NavItem>
        <NavItem href="/employee/profile">
          <UserRound size={16} />
          Profile
        </NavItem>
        <Button variant="secondary">Logout</Button>
      </ul>
    </div>
  );
}

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

function NavItem({ href, children }: Readonly<NavItemProps>) {
  return (
    <li>
      <Link
        href={href}
        className="flex flex-col items-center gap-1 text-xs font-medium hover:text-primary"
      >
        {children}
      </Link>
    </li>
  );
}
