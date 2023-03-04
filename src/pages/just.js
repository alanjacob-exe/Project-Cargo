import React from "react";
import "./just.css";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

export default function Just(props) {
  return (
    <div>
      <div className="sidebar">
        <div>
          <div className="sidebartopelement">Project Cargo </div>
        </div>
        <div>
          <div className="sidebarelements">
            <div>
              <div className="icon">
                <BookOnlineIcon fontSize="small" />
              </div>
              <div className="name">Bookings</div>
            </div>
          </div>
          <div className="sidebarelements">
            <div>
              <div className="icon">
                <BookOnlineIcon fontSize="small" />
              </div>
              <div className="name">Profile</div>
            </div>
          </div>
          <div className="sidebarelements">
            <div>
              <div className="icon">
                <BookOnlineIcon fontSize="small" />
              </div>
              <div className="name">Contact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
