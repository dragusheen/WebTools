/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import { PageConfig, ToolConfig, UpcomingToolConfig } from "../types/routeConfig";

/* ----- DATAS ----- */
const PagesConfigs: PageConfig[] = [
    { name: 'Home', content: HomePage, path: "/"},
    { name: 'Page Not Found', content: PageNotFound, path: "*"},
];

const ToolsConfig: ToolConfig[] = [
    // { name: 'Exemple', content: Exemple, path: "/exemple" },
];

const UpcomingToolsConfig: UpcomingToolConfig[] = [
    // { name: 'Exemple' },
    { name: 'Character Counter' },
    { name: 'Youtube Downloader' },
    { name: 'Image converter' },
];


/* ----- FUNCTIONS ----- */
export function getPagesConfigs(): PageConfig[] {
    const tools: PageConfig[] = ToolsConfig.map(tool => {
        return {
            name: tool.name,
            content: tool.content,
            path: tool.path,
            navbar_display: true,
        };
    });
    return [...PagesConfigs,...tools];
}

export function getToolsConfigs(): ToolConfig[] {
    return ToolsConfig.sort((a, b) => a.name.localeCompare(b.name));
}

export function getUpcomingToolsConfigs(): UpcomingToolConfig[] {
    return UpcomingToolsConfig.sort((a, b) => a.name.localeCompare(b.name));
}
