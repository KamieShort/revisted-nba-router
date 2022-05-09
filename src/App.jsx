import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharacterList from './views/CharacterList';
import CharacterDetails from './views/CharacterDetails';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CharacterList />
        </Route>

        <Route path="/characters/:id">
          <CharacterDetails />
        </Route>
      </Switch>
    </Router>
  );
}
