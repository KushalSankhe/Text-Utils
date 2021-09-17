// import logo from './logo.svg';
// import { useState } from "react/cjs/react.development";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#29245d";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title="Kushal Sankhe" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Switch>
            <Route exact path="/about">
            <About/>
            </Route>
            <Route exact path="/"> */}
              <TextForm
                showAlert={showAlert}
                heading="Enter text to analyse"
                mode={mode}
              />
            {/* </Route>
          </Switch> */}
          {/* <About/> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
