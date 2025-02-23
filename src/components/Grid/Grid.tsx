/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";

/* ----- PROPS ----- */
interface ButtonProps {
    title: string;
    children: React.ReactNode;
    limit?: boolean;
};


/* ----- COMPONENT ----- */
const Grid: React.FC<ButtonProps> = ({ title, children, limit = true }) => {
    return (
        <div className="w-full max-w-4xl">
            <h2 className="text-3xl font-semibold color-light mb-4">{title}</h2>
            <div className={`flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 ${ limit ? "max-h-[30vh] overflow-y-auto scrollbar": ""}`}>
                {children}
            </div>
        </div>
    );
};

export default Grid;

