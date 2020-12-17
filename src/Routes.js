import React from "react";
import Login from "./components/Login/Login";
import MainForm from "./components/Form/MainForm";
import MainHome from "./components/Home/MainHome";
import MainQuestion from "./components/Question/MainQuestion";
import MainPoll from "./components/Polls/MainPoll";
import MainLeaderBoard from "./components/LeaderBoard/MainLeaderBoard";
import NotFound from "./components/NotFound/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

const Routes = () => {
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <ProtectedRoute
            path='/leaderBoard'
            isAuthenticated={isLoggedIn}
            component={MainLeaderBoard}
          />
          <ProtectedRoute
            path='/questions/:question_id'
            isAuthenticated={isLoggedIn}
            component={MainPoll}
          />
          <ProtectedRoute
            path='/question/:question_id'
            isAuthenticated={isLoggedIn}
            component={MainQuestion}
          />
          <ProtectedRoute
            path='/home'
            isAuthenticated={isLoggedIn}
            component={MainHome}
          />
          <ProtectedRoute
            path='/add'
            isAuthenticated={isLoggedIn}
            component={MainForm}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
