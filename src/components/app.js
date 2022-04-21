import { h } from "preact";
// import { Router } from "preact-router";
import style from "./style.css";

// import Header from "./header";
import Wa from "./wa";

// Code-splitting is automated for `routes` directory
// import Home from "../routes/home";
// import Profile from "../routes/profile";

const App = () => (
  <div id="app" class={style.bottomright}>
    {/* <Header /> */}
    <Wa tel="+573233640370" />
  </div>
);

export default App;
/*
<Header />
    <Router>
      <Home path="/" />
      <Profile path="/profile/" user="me" />
      <Profile path="/profile/:user" />
    </Router>
	*/
