import {Home} from "./components/Home";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"}>
                    <Home/>
                </Route>
                <Route exact path={"/logowanie"}>
                    {/*<Home/>*/}
                </Route>
                <Route exact path={"/rejestracja"}>
                    {/*<Home/>*/}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
