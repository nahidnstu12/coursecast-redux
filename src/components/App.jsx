import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Home.jsx";
import AboutPage from "./About.jsx";
import Header from "./Header.jsx";
import PageNotFound from "./PageNotFound.jsx";
import CoursesPage from "./courses/CoursesPage.jsx";
import ManageCoursePage from "./courses/ManageCoursePage.jsx";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
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
      <ToastContainer autoClose={2000} hideProgressBar />
    </div>
  );
}

export default App;
