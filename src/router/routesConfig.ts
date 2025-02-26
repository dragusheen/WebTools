/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import ToolAlphabeticalOrder from "../Tools/AlphabeticalOrder/ToolAlphabeticalOrder";
import ToolPasswordGenerator from "../Tools/PasswordGnererator/PasswordGenerator";
import ToolTextStats from "../Tools/TextStats/ToolTextStats";
import { PageConfig, ToolConfig, UpcomingToolConfig } from "../types/routeConfig";

/* ----- DATAS ----- */
const PagesConfigs: PageConfig[] = [
    { name: 'Home', content: HomePage, path: "/"},
    { name: 'Page Not Found', content: PageNotFound, path: "*"},
];

const ToolsConfig: ToolConfig[] = [
    // { name: 'Exemple', content: Exemple, path: "/exemple" },
    { name: 'Text Stats', content: ToolTextStats, path: "/text-stats" },
    { name: 'Alphabetical Order', content: ToolAlphabeticalOrder, path: "/alphabetical-order" },
    { name: 'Password Generator', content: ToolPasswordGenerator, path: "/password-generator" },
];

const UpcomingToolsConfig: UpcomingToolConfig[] = [
    // { name: 'Exemple' },
    { name: 'Youtube Downloader' },
    { name: 'Image converter' },
    { name: 'Text Case' },
    { name: 'Base64 Encoder/Decoder' },
    { name: 'Lorem Ipsum Generator' },
    { name: 'Text Diff' },
    { name: 'QR Code Generator' },
    { name: 'Password Strength Checker' },
    { name: 'Unix Timestamp Converter' },
    { name: 'Color Picker & Converter' },
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
