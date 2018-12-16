import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Popper from "popper.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

library.add(faArrowLeft);
library.add(faArrowRight);
library.add(faLongArrowAltUp);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
