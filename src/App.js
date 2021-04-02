import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

import Layout from 'component/layout'
import Home from 'page/home'
import Login from 'page/login'
import ErrorPage from 'page/error'
import UserList from 'page/user'

function App() {
  const LayoutRouter = (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Home} />
        <Route path="/user/userList" component={UserList}></Route>
        <Redirect from="/user" to='/user/userList'></Redirect>
        <Route component={ErrorPage} />
      </Switch>
    </Layout>
  )
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" render={(props) => {
            return LayoutRouter
          }}></Route>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
