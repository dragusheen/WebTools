/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { Routes, Route, HashRouter } from "react-router-dom";
import { getPagesConfigs } from "./router/routesConfig";
import NavBar from "./components/layout/NavBar";

function App() {
    const pagesConfigs = getPagesConfigs();

    return (
        <>
            <div className="z-0 flex h-full w-full p-4">
                <HashRouter>
                    <NavBar />
                    <Routes>
                        {pagesConfigs.map((pageConfig) => {
                            return (
                                <Route key={pageConfig.name} path={pageConfig.path} element={<pageConfig.content />} />
                            );
                        })}
                    </Routes>
                </HashRouter>
            </div>
        </>
    )
}

export default App
