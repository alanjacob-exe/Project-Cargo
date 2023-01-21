import "./index.css";

import React from "react";
import { TransportMap } from "../TransportMap";

export default function Container(props) {
  return (
    <form>
      <div class="card">
        <h1>{props.location}</h1>
        <label>A scenic beauty of a place</label>
        <div class="card1">
          <h1>seperate section</h1>
        </div>
        <div>
            <TransportMap/>
        </div>
      </div>
    </form>
  );
}
