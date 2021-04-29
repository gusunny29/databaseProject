import SAList from "./sportsAssociations/sa-list";
import TeamList from "./teams/team-list";
import PlayerList from "./players/player-list";
import SAEditorForm from "./sportsAssociations/sa-editor-form";
import TeamEditorForm from "./teams/team-editor-form";
import PlayerFormEditor from "./players/player-form-editor"


const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/sportAssociations", "/"]} exact={true}>
                    <SAList/>
                </Route>
                <Route path= {["/sportsAssociations/:saId", ' /sportsAssociations/create']} exact={true}>
                    <SAEditorForm/>
                </Route>
                <Route path= {["/sportsAssociations/:saId/teams", '/teams']} exact={true}>
                    <TeamList/>
                </Route>
                <Route path={['/sportsAssociations/:saId/teams/create',
                    '/sportsAssociations/:saId/teams/:teamId']} exact={true}>
                    <TeamEditorForm/>
                </Route>
                <Route path= {[ "/teams/:teamId/players" , '/players']} exact={true}>
                    <PlayerList/>
                </Route>
                <Route path= {["/teams/:teamId/players/:playerId", 'players/create', 'teams/:teamId/players/create']} exact={true}>
                    <PlayerFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
