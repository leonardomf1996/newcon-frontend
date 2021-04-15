import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import NewPoint from '../pages/NewPoint';

const Routes = () => (
   <BrowserRouter>
      <Switch>
         <Route exact path="/" component={Main} />
         <Route path="/NewPoint" component={NewPoint} />
      </Switch>
   </BrowserRouter>
)

export default Routes;