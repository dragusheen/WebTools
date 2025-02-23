/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import { Ellipsis, X } from "lucide-react";
import { getPagesConfigs } from "../../router/routesConfig";
import { NavLink } from "react-router-dom";


/* ----- COMPONENT ----- */
const NavBar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const pagesConfigs = getPagesConfigs();

    return (
        <>
            <div onClick={() => setOpen(!open)} className="cursor-pointer fixed p-4 z-50">
                {
                    open ?
                    <X size={32} stroke="var(--color-light)"/> :
                    <Ellipsis size={32} stroke="var(--color-light)"/>
                }
            </div>
            <div className={`fixed z-40 w-full h-full top-0 left-0 transition duration-300 ease-in-out backdrop-blur-xs ${open ? "opacity-100" : " opacity-0"}`}>
                <div className={`lg:w-1/3 md:w-1/2 sm:w-8/12 h-full flex flex-col p-16 bg-color-dark-2 top-0 left-0 transition duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className="py-8">
                        futur search bar
                    </div>
                    <div className="flex flex-col gap-4 overflow-y-auto max-h-full scrollbar">
                        {pagesConfigs.map((pageConfig) => {
                            if (!pageConfig.navbar_display) return null;
                            return (
                                <NavLink key={pageConfig.name} to={pageConfig.path} className="color-light p-2 rounded-md hover:bg-[var(--color-dark)] transition duration-300 ease-in-out" onClick={() => setOpen(false)}>
                                    {pageConfig.name}
                                </NavLink>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
