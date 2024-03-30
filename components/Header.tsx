"use client";
import Link from "next/link";
import { links, links2, practiceAreas } from "@/constants/links";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import { Container } from "@mui/material";
import { Close, KeyboardArrowDown, Menu } from "@mui/icons-material";
import { useState } from "react";
import Button from "./Button";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [showArea, setShowArea] = useState<boolean>(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleShowArea = () => {
        setShowArea(true);
    };

    const handleCloseArea = () => {
        setShowArea(false);
    };

    return (
        <header className="bg-white shadow relative z-50">
            <Container maxWidth="xl">
                <nav className="flex justify-between items-center px-4 py-4">
                    <div>
                        <Image src={logo} alt="brand logo" width={100} />
                    </div>
                    <ul className="lg:space-x-1 xl:space-x-4 hidden lg:flex items-center text-[16.5px] ">
                        {links.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className="link text-navy hover:border-b hover:border-navy ">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                            onMouseEnter={handleShowArea}
                            onMouseLeave={handleCloseArea}
                                href={"/practic-areas"}
                                className="link relative text-navy hover:border-b hover:border-navy">
                                Practice Areas <KeyboardArrowDown />
                            </Link>
                            {showArea && (
                                <div className="absolute">
                                    <ul>
                                        {practiceAreas.map((area) => (
                                            <li key={area.path}>
                                                <Link href={area.path}>area.name</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                        {links2.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className="link text-navy hover:border-b hover:border-navy ">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Button
                                title="request an appointment"
                                classes="ml-6 lg:ml-10"
                            />
                        </li>
                    </ul>
                    <button
                        onClick={handleMenu}
                        type="button"
                        title="Menu Button"
                        className={`p-3 bg-navy text-white rounded lg:hidden ${
                            menuOpen ? "open" : ""
                        }`}>
                        <span className="transition-opacity duration-500">
                            {menuOpen ? <Close /> : <Menu />}
                        </span>
                    </button>
                </nav>
            </Container>
            {menuOpen ? (
                <div
                    className={`fixed inset-y-0 left-0 bg-opacity-50 z-20 w-full duration-500 ${
                        menuOpen ? "translate-y-[130px]" : "-translate-y-0"
                    }`}>
                    <ul>
                        {links.map((link) => (
                            <li key={link.path}>
                                <div className="w-[full] text-navy border-t bg-white border-gray px-10 py-3">
                                    <Link href={link.path} className="py-2">
                                        {link.name}
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div></div>
            )}
        </header>
    );
};

export default Header;
