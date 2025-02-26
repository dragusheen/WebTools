/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";

/* ----- PROPS ----- */
interface Props {
    title: string;
    children: React.ReactNode;
    bigTitle?: boolean;
};

/* ----- COMPONENT ----- */
const Hint: React.FC<Props> = ({ title, children, bigTitle = false }) => {
    return (
        <div className=" bg-gray-800 p-6 rounded-xl shadow-lg">
            {
                bigTitle ?
                <h1 className="text-4xl font-semibold color-light mb-6">{title}</h1>:
                <h2 className="text-2xl font-semibold color-light mb-2">{title}</h2>
            }
            {children}
        </div>
    );
};

export default Hint;

