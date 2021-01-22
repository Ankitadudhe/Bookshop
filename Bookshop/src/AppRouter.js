import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Login from "./component/pages/Login";
import Register from "./component/pages/register"
import Home from "./component/pages/home"
import Adventure from "./component/pages/adventure"
import Cooking from "./component/organisms/cooking"
import Travel from "./component/organisms/travel";
import Motivational from "./component/organisms/motivational"

const AppRouter = () => (
    <Router>
    <Route path="/" exact component={Login} />
    <Route path="/Register" exact component={Register} />
        <Route path="/home" exact component={Home} />
         <Route path="/home/Adventure" exact component={Adventure} />
        <Route path="/home/Cooking" exact component={Cooking} />
        <Route path="/home/Travel" exact component={Travel} />
        <Route path="/home/Motivational" exact component={Motivational} />


    </Router>
    )
export default AppRouter