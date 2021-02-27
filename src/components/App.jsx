import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Home.jsx";
import AboutPage from "./About.jsx";
import Header from "./Header.jsx";
import PageNotFound from "./PageNotFound.jsx";
import CoursesPage from "./courses/CoursesPage.jsx";

function App() {
  return (
    <div className="container-fluid">
      <Header />

      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route exact path="/" component={HomePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
