import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Home.jsx";
import AboutPage from "./About.jsx";
import Header from "./Header.jsx";
import PageNotFound from "./PageNotFound.jsx";
import CoursesPage from "./courses/CoursesPage.jsx";
import ManageCoursePage from "./courses/ManageCoursePage.jsx";

function App() {
  return (
    <div className="container-fluid">
      <Header />

      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route exact path="/" component={HomePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
