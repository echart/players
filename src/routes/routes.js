import { Switch, Route } from 'react-router-dom';
import Players from '../pages/Home';
import Edit from '../pages/Edit';

export const routes = [
  {
    path: '/',
    component: Players,
    exact: true,
  },
  {
    path: '/edit/:id',
    component: Edit,
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
