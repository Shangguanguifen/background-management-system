/*
 * @Author: Guifen Shangguan 
 * @Date: 2021-04-12 16:11:51 
 * @Last Modified by: Guifen Shangguan
 * @Last Modified time: 2021-05-07 13:16:26
 */
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import routers from 'router/index';
import { useSelector } from "react-redux";


import Layout from 'component/layout'
import Login from 'page/login';
import RenderRouter from 'router/renderRouter'



function routesMap(routes, roles) {
  let permission = false;
  if(roles.indexOf('admin') > -1) {
    permission = true;
  }

  return routes.map(route => {
    if(route.children) {
      const routeChildren = route.children;
      return routesMap(routeChildren, roles);
    }
    if(route.component) {
      return <RenderRouter key={route.path} {...route} permission={permission} />
    }

    return <RenderRouter key={route.path} {...route} permission={permission} />
  })
}

function App() {
  const roles = useSelector(state => state.roles);

  const LayoutRouter = (
    <Layout>
      <Switch>
          {
            routesMap(routers, roles)
          }
      </Switch>
    </Layout>
  )
  return (
    <div className="App">
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" render={(props) => {
            return LayoutRouter
          }}></Route>
        </Switch>
    </div>
  );
}

export default App;
