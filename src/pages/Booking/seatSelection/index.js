import React, { useState, useEffect } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import "./index.css";
import { MDBInput } from "mdb-react-ui-kit";
import Navbar from "../../../Components/Navbar";
import { collection, query, onSnapshot } from "firebase/firestore";
import db from "../../../firebase";
import { useAuthValue } from "../../Sign-up/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SeatSelection() {
  const [name, setName] = useState([]);
  const [arrowDown, setArrowDown] = useState(false);
  const [gender, setGender] = useState([]);
  const [reservedSeat, setReservedSeat] = useState([]);
  const [seatNumber, setSeatnumber] = useState([]);
  const { currentUser } = useAuthValue(); //for current user details
  const dummy = "disabled";
  const navigate = useNavigate();
  const [bookingColl, setbookingColl] = useState(null);
  const [sb, setsb] = useState([]);

  const set = localStorage.getItem("busid");
  const busid = set.trim();

  // console.log("bus id" + busid);
  const test = [];

  const busId = localStorage.getItem("busid");

  const seatQuery = async () => {
    const q = query(collection(db, "buses", busId, "bookings"));
    onSnapshot(q, (querySnapshot) => {
      setbookingColl(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };
  useEffect(() => {
    seatQuery();
  }, []);

  // useEffect(() => {
  //   if (bookingColl != null) {
  //     const limit = bookingColl.length;
  //     console.log(limit + "limitttt");
  //     for (var i = 0; i < limit; i++) {
  //       console.log(bookingColl[i].data.Seatnumber);
  //       setBseats(bookingColl[i].data.Seatnumber);
  //       setsb([...sb, Bseats]);
  //     }
  //   }
  // }, [bookingColl]);
  // console.log(sb);

  // const [Bseats, setBseats] = useState([]);

  useEffect(() => {
    // console.log("fromuse"+seatNumber)
    localStorage.setItem("bookedseat", seatNumber);
    // console.log(localStorage.getItem("bookedseat"));
  }, [seatNumber]);

  // // bookingColl.filter((buses) => setBseats(buses.data.seatNumber));

  // // console.log(Bseats);

  // const [user, setuser] = useState();
  // useEffect(() => {
  //   setuser(localStorage.getItem("users"));
  // }, []);
  // const selectedBus = localStorage.getItem("busid");
  // // console.log("selected bus" + selectedBus);

  const getSeatNumber = (e) => {
    renderPassengerData(seatNumber);
    let newSeat = e.target.value;
    if (reservedSeat.includes(newSeat)) {
      e.disabled = true;
      if (seatNumber.includes(newSeat)) {
        setSeatnumber(seatNumber.filter((seat) => seat !== newSeat));
      }
    } else {
      // console.log("selected seat:" + seatNumber);
      setSeatnumber([...seatNumber, newSeat]);
      setReservedSeat([...reservedSeat, newSeat]);
    }
  };
  const handleGender = (e, seatNo) => {
    const { value } = e.target;
    setGender(gender.concat(value));
    // console.log(value);
    // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Gender: value }))
  };
  const handlePassengerName = (e, seatNo) => {
    e.preventDefault();
    let value = e.target.value;
    // console.log(value)
    if (!value) {
      return setName("name is required");
    } else {
      setName(name.concat(value));
      // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Name: value }))
    }
  };

  useEffect(() => {
    // console.log("useeffect seat" + seatNumber[0]);
  }, [seatNumber]);

  // const [book, setbook] = useState()
  //   useEffect(() => {
  //     const q = query(collection(db, "buses"));
  //     onSnapshot(q, (querySnapshot) => {
  //       setbook(
  //         querySnapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       );
  //     });
  //     console.log(book.data)
  //   }, []);

  const bookingSubmit = async (e) => {
    localStorage.setItem("bookedseat", JSON.stringify(seatNumber));
    localStorage.setItem("bookingGender", JSON.stringify(gender));
    localStorage.setItem("bookingName", JSON.stringify(name));
    navigate("/payment");
  };
  // console.log("seatArray"+seatArray)

  const renderPassengerData = (seatArray) => {
    return seatArray.map((seat, idx) => {
      return (
        <form
          key={idx}
          style={{ borderRadius: "12px" }}
          className="container bg-glass px-5 mb-2 mt-4 "
        >
          <div className="text-xl text-center text-black">Seat No.{seat}</div>

          <div className="mt-3 text-white">
            <MDBInput
              className="text-black"
              label="Enter Name"
              id="formWhite"
              onBlur={(e) => handlePassengerName(e, seat)}
              type="text"
              name="passenger-name"
            />
          </div>
          <div className="w-full mt-2">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="Female"
                onClick={(e) => handleGender(e, seat)}
              />
              <label class="form-check-label" htmlFor="female">
                Female
              </label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="Male"
                  onClick={(e) => handleGender(e, seat)}
                />
                <label class="form-check-label" for="male">
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="Other"
                  value="Other"
                  onClick={(e) => handleGender(e, seat)}
                />
                <label class="form-check-label" for="male">
                  Other
                </label>
              </div>
            </div>
          </div>

          {/* <div className="mt-4">
            <MDBBtnGroup>
              <MDBRadio
                btn
                btnColor="primary"
                wrapperTag="span"
                label="Male"
                name="gender"
                id="male"
                value="Male"
                onClick={(e) => handleGender(e, seat)}
              />
              <div className="ml-3">
                <MDBRadio
                  btn
                  btnColor="primary"
                  wrapperTag="span"
                  label="Female"
                  name="gender"
                  id="female"
                  value="Female"
                  onClick={(e) => handleGender(e, seat)}
                />
              </div>
            </MDBBtnGroup>
          </div> */}

          {/* <p class="text-capitalize text-center ">Seat No:{seat}</p>
                    <input className="form-control seatInp" onBlur={e => handlePassengerName(e, seat)} type="text" name="passenger-name" placeholder="Enter Name" />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="male" value="Male" onClick={e => handleGender(e, seat)} />
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="female" value="Female" onClick={e => handleGender(e, seat)} />
                        <label class="form-check-label" htmlFor="female">Female</label>
                    // </div> */}
        </form>
      );
    });
  };

  // const [is1aset, setis1aset] = useState(false);
  // const [is1bset, setis1bset] = useState(false);
  // const [is1cset, setis1cset] = useState(false);

  // if (bookingColl != null) {
  //   for (var i = 0; i < bookingColl.length; i++) {
  //     if (bookingColl[0].data.Seatnumber == "1A") {
  //       setis1aset(true);
  //     }
  //     if (bookingColl[0].data.Seatnumber == "1B") {
  //       setis1bset(true);
  //     }
  //     if (bookingColl[0].data.Seatnumber == "1C") {
  //       setis1cset(true);
  //     }
  //   }
  // }
  let limit = 0;
  var booked = [];
  if (bookingColl != null) {
    for (let i = 0; i < bookingColl.length; i++) {
      // console.log(bookingColl[i].data.Seatnumber.length);
      test.push(bookingColl[i].data.Seatnumber);
    }
  }
  if (bookingColl?.length > 0) {
    for (let i = 0; i < bookingColl.length; i++) {
      if (bookingColl[i].data.Seatnumber.length > 0) {
        limit = bookingColl[i].data.Seatnumber.length;
        for (let temp = 0; temp < limit; temp++) {
          // console.log(bookingColl[i].data.Seatnumber[temp])
          booked.push(bookingColl[i].data.Seatnumber[temp]);
        }
      }
    }
  }
  // console.log("testtttttt" +booked);

  let is1a = false;
  let is1b = false;
  let is1c = false;

  let is2a = false;
  let is2b = false;
  let is2c = false;

  let is3a = false;
  let is3b = false;
  let is3c = false;

  let is4a = false;
  let is4b = false;
  let is4c = false;

  let is5a = false;
  let is5b = false;
  let is5c = false;

  let is6a = false;
  let is6b = false;
  let is6c = false;

  let is7a = false;
  let is7b = false;
  let is7c = false;

  let is8a = false;
  let is8b = false;
  let is8c = false;

  let is9a = false;
  let is9b = false;
  let is9c = false;

  let is10a = false;
  let is10b = false;
  let is10c = false;

  // console.log("bookings " + test[0]);

  if (booked?.length > 0) {
    for (let i = 0; i < booked.length; i++) {
      let value = booked[i];
      switch (value) {
        case "1A":
          is1a = true;
          break;
        case "1B":
          is1b = true;
          break;
        case "1C":
          is1c = true;
          break;
        case "2A":
          is2a = true;
          break;
        case "2B":
          is2b = true;
          break;
        case "2C":
          is2c = true;
          break;
        case "3A":
          is3a = true;
          break;
        case "3B":
          is3b = true;
          break;
        case "3C":
          is3c = true;
          break;
        case "4A":
          is4a = true;
          break;
        case "4B":
          is4b = true;
          break;
        case "4C":
          is4c = true;
          break;
        case "5A":
          is5a = true;
          break;
        case "5B":
          is5b = true;
          break;
        case "5C":
          is5c = true;
          break;
        case "6A":
          is6a = true;
          break;
        case "6B":
          is6b = true;
          break;
        case "6C":
          is6c = true;
          break;
        case "7A":
          is7a = true;
          break;
        case "7B":
          is7b = true;
          break;
        case "7C":
          is7c = true;
          break;
        case "8A":
          is8a = true;
          break;
        case "8B":
          is8b = true;
          break;
        case "8C":
          is8c = true;
          break;
        case "9A":
          is9a = true;
          break;
        case "9B":
          is9b = true;
          break;
        case "9C":
          is9c = true;
          break;
        case "10A":
          is10a = true;
          break;
        case "10B":
          is10b = true;
          break;
        case "10C":
          is10c = true;
          break;
        default:
        // console.log("nothing");
      }
    }
  }

  // if (bookingColl != null) {
  //   if (test.includes("7C")) {
  //     setis7cset(true);
  //   }
  // }

  return (
    <div className="ss">
      <div className="row">
        <div className="column1">
          <div>
            <Navbar />
          </div>
          <div className="plane mt-3">
            <div className="w-full p-6 m-auto  rounded-md shadow-xl shadow-black-100 lg:max-w-xl ">
              <form onChange={(e) => getSeatNumber(e)}>
                <ol className="cabin fuselage">
                  <li className="row row--1">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input
                          type="checkbox"
                          disabled={is1a}
                          value="1A"
                          id="1A"
                        />
                        <label htmlFor="1A">1A</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          disabled={is1b}
                          id="1B"
                          value="1B"
                        />
                        <label htmlFor="1B">1B</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          disabled={is1c}
                          value="1C"
                          id="1C"
                        />
                        <label htmlFor="1C">1C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--2">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="2A"
                          disabled={is2a}
                          id="2A"
                        />
                        <label htmlFor="2A">2A</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="2B"
                          disabled={is2b}
                          id="2B"
                        />
                        <label htmlFor="2B">2B</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="2C"
                          disabled={is2c}
                          id="2C"
                        />
                        <label htmlFor="2C">2C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--3">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="3A"
                          disabled={is3a}
                          id="3A"
                        />
                        <label htmlFor="3A">3A</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="3B"
                          disabled={is3b}
                          id="3B"
                        />
                        <label htmlFor="3B">3B</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="3C"
                          disabled={is3c}
                          id="3C"
                        />
                        <label htmlFor="3C">3C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--4">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input
                          type="checkbox"
                          disabled={is4a}
                          value="4A"
                          id="4A"
                        />
                        <label htmlFor="4A">4A</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="4B"
                          disabled={is4b}
                          id="4B"
                        />
                        <label htmlFor="4B">4B</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="4C"
                          disabled={is4c}
                          id="4C"
                        />
                        <label htmlFor="4C">4C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--5">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="5A"
                          disabled={is5a}
                          id="5A"
                        />
                        <label htmlFor="5A">5A</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="5B"
                          disabled={is5b}
                          id="5B"
                        />
                        <label htmlFor="5B">5B</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="5C"
                          disabled={is5c}
                          id="5C"
                        />
                        <label htmlFor="5C">5C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--6">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="6A"
                          disabled={is6a}
                          id="6A"
                        />
                        <label htmlFor="6A">6A</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="6B"
                          disabled={is6b}
                          id="6B"
                        />
                        <label htmlFor="6B">6B</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          disabled={is6c}
                          value="6C"
                          id="6C"
                        />
                        <label htmlFor="6C">6C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--7">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="7A"
                          disabled={is7a}
                          id="7A"
                        />
                        <label htmlFor="7A">7A</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="7B"
                          id="7B"
                          disabled={is7b}
                        />
                        <label htmlFor="7B">7B</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          disabled={is7c}
                          value="7C"
                          id="7C"
                        />
                        <label htmlFor="7C">7C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--8">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="8A"
                          id="8A"
                          disabled={is8a}
                        />
                        <label htmlFor="8A">8A</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="8B"
                          id="8B"
                          disabled={is8b}
                        />
                        <label htmlFor="8B">8B</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="8C"
                          id="8C"
                          disabled={is8c}
                        />
                        <label htmlFor="8C">8C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--9">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="9A"
                          id="9A"
                          disabled={is9a}
                        />
                        <label htmlFor="9A">9A</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="9B"
                          id="9B"
                          disabled={is9b}
                        />
                        <label htmlFor="9B">9B</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="9C"
                          id="9C"
                          disabled={is9c}
                        />
                        <label htmlFor="9C">9C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--10">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="10A"
                          id="10A"
                          disabled={is10a}
                        />
                        <label htmlFor="10A">10A</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="10B"
                          id="10B"
                          disabled={is10b}
                        />
                        <label htmlFor="10B">10B</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          value="10C"
                          id="10C"
                          disabled={is10c}
                        />
                        <label htmlFor="10C">10C</label>
                      </li>
                    </ol>
                  </li>
                </ol>
              </form>
            </div>
          </div>
        </div>
        <div className="column2 mt-9 ">
          <div className="seatInfo">
            <form style={{ borderRadius: "12px" }} className="form-group mt-3">
              {renderPassengerData(seatNumber)}
            </form>
            <div>
              <button
                onClick={(e) => bookingSubmit(e)}
                className="btn btn-info seatBT"
              >
                Confirm Details
              </button>
            </div>
            <div className={arrowDown ? "activeArrow2" : "nonActive"}>
              <FaAngleDoubleDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
