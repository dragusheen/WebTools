/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import Page1 from "../pages/page1";
import Page2 from "../pages/page2";
import PageNotFound from "../pages/PageNotFound";
import { PageConfig } from "../types/routeConfig";

/* ----- DATAS ----- */
const PagesConfigs: PageConfig[] = [
    { name: 'Page 1', content: Page1, path: "/", navbar_display: true },
    { name: 'Page 2', content: Page2, path: "/2", navbar_display: true },
    { name: 'Page Not Found', content: PageNotFound, path: "*", navbar_display: false },
]

/* ----- FUNCTIONS ----- */
export function getPagesConfigs(): PageConfig[] {
    return PagesConfigs;
}
