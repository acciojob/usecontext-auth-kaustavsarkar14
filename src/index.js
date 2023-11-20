import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AuthContextProvider from "./context/AuthContextProvider";



ReactDOM.render(<AuthContextProvider><App />
    </AuthContextProvider> ,document.getElementById("root"));
