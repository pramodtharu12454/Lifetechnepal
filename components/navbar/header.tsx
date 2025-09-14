"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";

export default function CompanyHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  const pathname = usePathname(); // detect current route
  const isHome = pathname === "/";

  const navItems = [
    { label: "Dashboard", href: "/" },
    { label: "About Us", href: "/About" },
    { label: "Training", href: "/tranning" },
    { label: "Event", href: "/event" },
    { label: "Our Services", href: "/services/viewallservice" },
    { label: "Gallery", href: "/gallery" },
    { label: "Other", href: "/other" },
  ];

  useEffect(() => {
    // Popup on first load
    setShowPopup(true);

    // Scroll listener for home page
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    if (isHome) window.addEventListener("scroll", handleScroll);

    return () => {
      if (isHome) window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isHome
            ? scrolled
              ? "bg-gradient-to-r from-red-500 to-red-700 shadow-lg"
              : "bg-transparent"
            : "bg-gradient-to-r from-red-500 to-red-700 shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-10 h-10 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="Life Tech Logo"
                  fill
                  className="object-contain drop-shadow-[2px_4px_6px_rgba(0,0,0,0.5)]"
                />
              </div>
              <span className="text-2xl font-bold text-white drop-shadow-lg">
                Life Tech
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-1 justify-center">
              <nav className="flex space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-white font-medium hover:text-yellow-300 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Talk to Expert + User Icon */}
            <div className="hidden md:flex items-center space-x-4 relative">
              <Link
                href="/letstalk"
                className="bg-yellow-400 hover:bg-yellow-500 text-red-900 font-semibold px-4 py-2 rounded-full shadow-md transition duration-300"
              >
                Talk to Expert
              </Link>

              {/* User Icon with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setUserDropdown(!userDropdown)}
                  className="text-white hover:text-yellow-300 transition-colors duration-200"
                >
                  <User size={24} />
                </button>

                {userDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-50">
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setUserDropdown(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setUserDropdown(false)}
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-white hover:text-yellow-300"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gradient-to-r from-red-500 to-red-700 shadow-lg">
            <nav className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white font-medium hover:text-yellow-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/letstalk"
                className="bg-yellow-400 hover:bg-yellow-500 text-red-900 font-semibold px-4 py-2 rounded-full shadow-md transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Talk to Expert
              </Link>

              {/* User Dropdown Mobile */}
              <div className="relative">
                <button
                  onClick={() => setUserDropdown(!userDropdown)}
                  className="text-white hover:text-yellow-300 transition-colors duration-200"
                >
                  <User size={24} />
                </button>

                {userDropdown && (
                  <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg overflow-hidden z-50">
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => {
                        setUserDropdown(false);
                        setMenuOpen(false);
                      }}
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => {
                        setUserDropdown(false);
                        setMenuOpen(false);
                      }}
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Image Popup on First Visit */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent
          className="p-0 overflow-hidden"
          style={{
            width: "75vw",
            height: "75vh",
            maxWidth: "none",
            maxHeight: "none",
          }}
        >
          <IconButton
            onClick={() => setShowPopup(false)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#fff",
              backgroundColor: "rgba(0,0,0,0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Image
            src="/popupimage.jpg"
            alt="Popup"
            fill
            style={{ objectFit: "fill" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
