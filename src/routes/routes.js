import { Switch, Route } from 'react-router-dom';
import Players from '../pages/Home';
import EditPlayer from '../pages/EditPlayer';

export const routes = [
  {
    path: '/',
    component: Players,
    exact: true,
  },
  {
    path: '/edit/:id',
    component: EditPlayer,
    exact: true,
  },
];

function AppRoutes() {
  return <Switch>
    {routes.map(({ path, component, exact = false }, i) => (
      <Route key={i} exact={exact} path={path} render={component} />
    ))}
  </Switch>;
}

export default AppRoutes;
