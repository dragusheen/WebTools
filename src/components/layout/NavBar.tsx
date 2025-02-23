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
    const [filter, setFilter] = useState("");

    function noPageTodisplay() {
        const filteredPages = pagesConfigs.filter(page => page.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) && page.navbar_display);
        if (filteredPages.length === 0)
            return (
                <div className="color-light opacity-50">
                    No page found matching your search
                </div>
            );
        return null;
    }

    function changeOpen(value: boolean) {
        setFilter("");
        setOpen(value);
    }

    return (
        <>
            <div onClick={() => changeOpen(!open)} className="cursor-pointer fixed p-4 z-50">
                {
                    open ?
                    <X size={32} stroke="var(--color-light)"/> :
                    <Ellipsis size={32} stroke="var(--color-light)"/>
                }
            </div>
            <div className={`fixed z-40 w-full h-full top-0 left-0 transition duration-300 ease-in-out backdrop-blur-xs ${open ? "opacity-100" : " opacity-0"}`}>
                <div className={`2xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-8/12 h-full flex flex-col p-16 bg-color-dark-2 top-0 left-0 transition duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className="my-6 p-2 w-full rounded-md bg-color-dark">
                        <input type="text" className="w-full outline-none color-light" placeholder="Search Tool..." onChange={e => setFilter(e.target.value)} value={filter}/>
                    </div>
                    <div className="flex flex-col gap-4 overflow-y-auto max-h-full scrollbar">
                        {pagesConfigs.map((pageConfig) => {
                            if (!pageConfig.navbar_display) return null;
                            if (filter && !pageConfig.name.toLowerCase().includes(filter.toLowerCase())) return null;
                            return (
                                <NavLink key={pageConfig.name} to={pageConfig.path} className="color-light p-2 rounded-md hover:bg-[var(--color-dark)] transition duration-300 ease-in-out" onClick={() => setOpen(false)}>
                                    {pageConfig.name}
                                </NavLink>
                            )
                        })}
                        {noPageTodisplay()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
