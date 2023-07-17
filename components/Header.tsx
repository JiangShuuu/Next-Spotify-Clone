"use client";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import React from "react";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function Header({ children, className }: HeaderProps) {
  const router = useRouter();
  const handleLogout = () => {
    //
  };

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6 `,
        className
      )}
    >
      <div className="flex items-center justify-between mb-4 w-fill">
        <div className="items-center hidden md:flex gap-x-2"></div>
      </div>
    </div>
  );
}
