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
};


/* ----- COMPONENT ----- */
const Grid: React.FC<ButtonProps> = ({ title, children }) => {
    return (
        <div className="w-full max-w-4xl mb-10">
            <h2 className="text-3xl font-semibold color-light mb-4">{title}</h2>
            <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[30vh] overflow-y-auto scrollbar px-4">
                {children}
            </div>
        </div>
    );
};

export default Grid;

