import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import PrivateRoute from './utils/privateRoute';
import PublicRoute from './utils/publicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Switch>
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute  path="/dashboard" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>      
    </div>
  );
}

export default App;
