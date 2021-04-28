import Players from "./players";

const {HashRouter, Route} = window.ReactRouterDOM;

const App = () => {
    return (
        <div>
            <HashRouter>
                <Route path="/" exact={true}>
                    <Players/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
