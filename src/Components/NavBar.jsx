
"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient, signOut } from "@/lib/auth-client"

const NavBar = () => {
    const { data: session } = authClient.useSession()

    const openLinks = <>
        <li>
            <Link
                href="/"
                className="rounded-lg hover:bg-primary/10 hover:text-primary"
            >
                Home
            </Link>
        </li>

        <li>
            <Link
                href="/about"
                className="rounded-lg hover:bg-primary/10 hover:text-primary"
            >
                About
            </Link>
        </li>

        <li>
            <Link
                href="/services"
                className="rounded-lg hover:bg-primary/10 hover:text-primary"
            >
                Services
            </Link>
        </li>

        <li>
            <Link
                href="/dashboard"
                className="rounded-lg hover:bg-primary/10 hover:text-primary"
            >
                Dashboard
            </Link>
        </li>

        <li>
            <Link
                href="/contact"
                className="rounded-lg hover:bg-primary/10 hover:text-primary"
            >
                Contact
            </Link>
        </li>
    </>


    const authLinks = <><li className="mb-1">
        <div className="flex flex-col items-start gap-0 py-3">
            <span className="font-semibold">
                {session?.user?.name}
            </span>
            <span className="text-xs opacity-60">
                {session?.user?.email}
            </span>
        </div>
    </li>

        <li>
            <Link href="/profile">
                Profile
            </Link>
        </li>

        <li>
            <Link href="/settings">
                Settings
            </Link>
        </li>

        <li>
            <button className="text-error" onClick={()=>signOut()}>
                Logout
            </button>
        </li></>
    const authBtn = <>
        <Link href='/sign-in'><button className="btn btn-soft btn-success">Sign In</button></Link>
        <Link href='/sign-up'><button className="btn btn-dash btn-warning">Sign Up</button></Link>
    </>


    const profileImage = <>
        <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Profile"
            width={40}
            height={40}
        />
    </>



    return (
        <div className="navbar sticky top-4 z-50 mx-auto w-[95%] max-w-7xl rounded-2xl border border-base-300 bg-base-100/90 px-4 shadow-lg backdrop-blur-md lg:px-6">

            {/* Mobile Menu Toggle */}
            <input
                id="navbar-toggle"
                type="checkbox"
                className="peer hidden"
            />

            {/* Overlay */}
            <label
                htmlFor="navbar-toggle"
                className="fixed inset-0 z-40 hidden bg-black/40 backdrop-blur-sm peer-checked:block lg:hidden"
            />

            {/* Left - Logo + Mobile Menu */}
            <div className="navbar-start">

                {/* Mobile Menu Button */}
                <label
                    htmlFor="navbar-toggle"
                    className="btn btn-ghost btn-circle mr-2 lg:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </label>

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 font-bold text-xl"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-content">
                        M
                    </div>

                    <span className="hidden sm:block">
                        MyWebsite
                    </span>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal items-center gap-1 px-1 font-medium">
                    {openLinks}
                </ul>
            </div>

            {/* Right Side */}
            <div className="navbar-end gap-2">

                {/* Theme Button */}
                <button
                    className="btn btn-ghost btn-circle hidden sm:flex"
                    aria-label="Toggle theme"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707m12.728 0-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                        />
                    </svg>
                </button>

                {/* Profile Dropdown */}
                {session?.user ? <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full ring-2 ring-primary/20">
                            {profileImage}
                        </div>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu dropdown-content z-[60] mt-3 w-56 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-xl"
                    >
                        {authLinks}
                    </ul>
                </div> : authBtn}


            </div>

            {/* Mobile Navigation */}
            <div className="fixed left-0 right-0 top-[85px] z-50 hidden px-4 peer-checked:block lg:hidden">
                <div className="rounded-2xl border border-base-300 bg-base-100 p-4 shadow-2xl">

                    <ul className="menu w-full gap-1">
                        {openLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;



