import React from "react"
import { Switch, BrowserRouter, Route} from "react-router-dom"

import Home from "./pages/Home"

export default function Routes({ toggleTheme }){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/"
                    render={props => <Home toggleTheme={toggleTheme} />}
                    toggleTheme={toggleTheme}
                />
            </Switch>
        </BrowserRouter>
    )
}