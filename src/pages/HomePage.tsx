/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import { Link } from "react-router-dom"; // Assuming you use React Router
import { getToolsConfigs, getUpcomingToolsConfigs } from "../router/routesConfig";
import Grid from "../components/grid/Grid";

const HomePage: React.FC = () => {
    const tools = getToolsConfigs();
    const upcomingTools = getUpcomingToolsConfigs();

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center py-10 px-6 text-center">
            <h1 className="text-4xl font-bold color-light mb-4">
                ✨ Welcome to WebTools! ✨
            </h1>
            <p className="color-light max-w-2xl mb-6">
                Your collection of small but powerful tools in one place. No more searching—just use WebTools!
            </p>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-10">
                <h2 className="text-2xl font-semibold color-light mb-2">About Me</h2>
                <p className="color-light mb-4">
                    Hi, I'm <span className="font-semibold color-light">Dragusheen</span>, a passionate developer working solo on this project!
                    If you like WebTools, feel free to contribute or check out my other work.
                </p>
                <div className="flex gap-4 justify-center">
                    <a href="https://github.com/dragusheen" className="text-blue-400 hover:underline" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/nathan-tirolf/" className="text-blue-400 hover:underline" target="_blank">LinkedIn</a>
                    <a href="https://dragusheen.com/" className="text-blue-400 hover:underline" target="_blank">Portfolio</a>
                </div>
            </div>

            <Grid title="🛠 Available Tools 🛠">
                {tools.map((tool, index) => (
                    <Link key={index} to={tool.path} className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
                        <span className="color-light">{tool.name}</span>
                    </Link>
                ))}
            </Grid>

            <Grid title="⌛ Coming Soon ⌛">
                {upcomingTools.map((tool, index) => (
                    <div key={index} className="bg-gray-700 p-4 rounded-lg opacity-50">
                        <span className="color-light">{tool.name}</span>
                    </div>
                ))}
            </Grid>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold color-light mb-2">💡 Suggest a Tool💡</h2>
                <p className="color-light mb-4">
                    Got an idea for a tool? Open an issue on GitHub or reach out!
                </p>
                <a href="https://github.com/dragusheen/WebTools" className="text-blue-400 hover:underline cursor-pointer" target="_blank">
                    Contribute on GitHub
                </a>
            </div>

        </div>
    );
};

export default HomePage;
