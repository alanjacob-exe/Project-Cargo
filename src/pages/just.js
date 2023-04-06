import React from "react";
import "./just.css";

export default function Just(props) {
  return (
    <>
        
          <article class="card fl-left">
            <section class="date">
              <time datetime="23th feb">
                <span>23</span>
                <span>feb</span>
              </time>
            </section>
            <section class="card-cont">
              <small>dj khaled</small>
              <h3>live in sydney</h3>
              <div class="even-date">
                <i class="fa fa-calendar"></i>
                <time>
                  <span>wednesday 28 december 2014</span>
                  <span>08:55pm to 12:00 am</span>
                </time>
              </div>
              <div class="even-info">
                <i class="fa fa-map-marker"></i>
                <p>nexen square for people australia, sydney</p>
              </div>
              <a href="#">tickets</a>
            </section>
          </article>
    </>
  );
}
