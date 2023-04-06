import React from "react";
import "./index.scss";

export default function TicketPage(props) {
  return (
    <>
      <h1 className="upcomming">upcomming gigs</h1>
      <div className="item">
        <div className="item-right">
          <h2 className="num">23</h2>
          <p className="day">Feb</p>
          <span className="up-border"></span>
          <span className="down-border"></span>
        </div>

        <div className="item-left">
          <p className="event">Music Event</p>
          <h2 className="title">Live In Sydney</h2>

          <div className="sce">
            <div className="icon">
              <i className="fa fa-table"></i>
            </div>
            <p>
              Monday 15th 2016 <br /> 15:20Pm & 11:00Am
            </p>
          </div>
          <div className="fix"></div>
          <div className="loc">
            <div className="icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <p>
              North,Soth, United State , Amre <br /> Party Number 16,20
            </p>
          </div>
          <div className="fix"></div>
          <button className="tickets">Tickets</button>
        </div>
      </div>
    </>
  );
}
