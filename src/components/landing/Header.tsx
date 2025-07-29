"use client";
import React, { useState } from "react";
import { Menu, Target, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menuItems = [
    { label: "Features", href: "#features" },
    { label: "Benefits", href: "#benefits" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-row items-center space-x-2">
              <Target color={"blue"} size={32} />
              <span className="text-xl font-bold text-gray-900">
                On-Target Brands
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-blue-600"
              onClick={() => router.push("/auth")}
            >
              Sign In
            </Button>
            <Button
              onClick={() => router.push("/auth")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col h-full">
                {/* Mobile Logo */}
                <div className="flex items-center justify-between pb-6 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">OT</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">
                      OnTarget
                    </span>
                  </div>
                  <button onClick={() => setIsOpen(false)}>{<X />}</button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-4 py-6">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium text-lg py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-auto space-y-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => router.push("/auth")}
                  >
                    Sign In
                  </Button>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
