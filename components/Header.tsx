"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { NAV_LINKS, APP_STORE_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/logo/Logo-bc.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-primary/5 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-foreground"
        >
          <Image
            src={logo}
            alt="Budget Copain"
            width={32}
            height={32}
            className="rounded-lg"
          />
          Budget Copain
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              Télécharger
            </a>
          </Button>
        </nav>

        {/* Menu mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface md:hidden"
              aria-label="Ouvrir le menu"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 text-lg">
                <Image
                  src={logo}
                  alt="Budget Copain"
                  width={28}
                  height={28}
                  className="rounded-lg"
                />
                Budget Copain
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="border-b border-primary/5 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="px-4 pt-2">
              <Button asChild size="sm" className="w-full">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Télécharger sur l&apos;App Store
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
