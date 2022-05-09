import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharacterList from './views/CharacterList';
import CharacterDetails from './views/CharacterDetails';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <CharacterList />
        </Route>

        <Route path="/characterDetails">
          <CharacterDetails />
        </Route>
      </Switch>
    </Router>
  );
}
