import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import "@fortawesome/fontawesome-free/css/all.min.css";



const container = document.getElementById("root");
const root = createRoot(container);



root.render(<App />);
