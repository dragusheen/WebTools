/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { getPagesConfigs } from "./router/routesConfig";

function App() {
    const pagesConfigs = getPagesConfigs();

    return (
        <>
            <Router>
                <body>
                    <div>
                        {pagesConfigs.map((pageConfig) => {
                            if (!pageConfig.navbar_display) return null;
                            return (
                                <NavLink key={pageConfig.name} to={pageConfig.path} className="color-light">
                                    {pageConfig.name}
                                </NavLink>
                            )
                        })}
                    </div>
                    <Routes>
                        {pagesConfigs.map((pageConfig) => {
                            return (
                                <Route key={pageConfig.name} path={pageConfig.path} element={<pageConfig.content />} />
                            );
                        })}
                    </Routes>
                </body>
            </Router>
        </>
    )
}

export default App
