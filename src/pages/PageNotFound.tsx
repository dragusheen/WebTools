/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import { Link } from "react-router-dom";


/* ----- COMPONENT ----- */
const PageNotFound: React.FC = () => {
    return (
        <div className="w-full min-h-screen flex flex-col gap-2 justify-center items-center text-center">
            <h1 className="text-9xl font-bold text-color-light">404</h1>
            <p className="text-2xl text-color-light mb-4">Oops! Looks like you're lost in the internet space...</p>
            <p className="text-xl text-color-light">Don't worry, though! Click below to return to safety:</p>
            <Link to="/" className="bg-gray-800 mt-4 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
                <span className="color-light">Go back home...</span>
            </Link>
        </div>
    );
};

export default PageNotFound;
