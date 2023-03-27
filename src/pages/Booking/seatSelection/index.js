import React, { useState, useEffect } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import "./index.css";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBRadio, MDBBtnGroup } from "mdb-react-ui-kit";
import Navbar from "../../../Components/Navbar";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  query,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import db from "../../../firebase";
import { useAuthValue } from "../../Sign-up/AuthContext";
import { useNavigate } from "react-router-dom";
import { add } from "date-fns/esm";

export default function SeatSelection() {
  const [name, setName] = useState([]);
  const [arrowDown, setArrowDown] = useState(false);
  const [gender, setGender] = useState([]);
  const [reservedSeat, setReservedSeat] = useState(["1A", "2A", "2B"]);
  const [seatNumber, setSeatnumber] = useState([]);
  const { currentUser } = useAuthValue(); //for current user details
  const dummy = "disabled";
  const navigate = useNavigate();
  const [bookingColl, setbookingColl] = useState(null);

  const busid = localStorage.getItem("busid");
  console.log(busid);
  const test = [];

  useEffect(() => {
    const q = query(collection(db, "buses", busid, "bookings"));
    onSnapshot(q, (querySnapshot) => {
      setbookingColl(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  useEffect(() => {
    if (bookingColl != null) {
      for (var i = 0; i < bookingColl.length; i++) {
        test.push(bookingColl[i].data.Seatnumber);
      }
    }
  }, [bookingColl]);

  const [Bseats, setBseats] = useState([]);

  console.log(test);


  useEffect(() => {
    // console.log("fromuse"+seatNumber)
    localStorage.setItem("bookedseat",seatNumber)
    console.log("below")
    console.log(localStorage.getItem("bookedseat"))
  }, [seatNumber])

  

  

  // bookingColl.filter((buses) => setBseats(buses.data.seatNumber));

  // console.log(Bseats);

  const [user, setuser] = useState();
  useEffect(() => {
    setuser(localStorage.getItem("users"));
  }, []);
  const selectedBus = localStorage.getItem("busid");
  // console.log("selected bus" + selectedBus);

  const getSeatNumber = (e) => {
    renderPassengerData(seatNumber);
    let newSeat = e.target.value;
    if (reservedSeat.includes(newSeat)) {
      e.disabled = true;
      if (seatNumber.includes(newSeat)) {
        setSeatnumber(seatNumber.filter((seat) => seat !== newSeat));
      }
    } else {
      console.log("selected seat:"+newSeat)
      setSeatnumber([...seatNumber, newSeat]);
      setReservedSeat([...reservedSeat, newSeat]);
      console.log(seatNumber);
    }
  };
  const handleGender = (e, seatNo) => {
    const { value } = e.target;
    setGender(gender.concat(value));
    console.log(value);
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
    const userDetails = localStorage.getItem("user");
  }, []);

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
    navigate("/payment");
  };

  const renderPassengerData = (seatArray) => {
    return seatArray.map((seat, idx) => {
      return (
        <form key={idx} className="container bg-glass px-5 mb-2 ">
          <div className="text-xl text-center text-white">Seat No.{seat}</div>

          <div className="mt-3">
            <MDBInput
              label="Enter Name"
              id="formWhite"
              onBlur={(e) => handlePassengerName(e, seat)}
              type="text"
              name="passenger-name"
            />
          </div>

          <div className="mt-4">
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
          </div>

          {/* <p class="text-capitalize text-center ">Seat No:{seat}</p>
                    <input className="form-control seatInp" onBlur={e => handlePassengerName(e, seat)} type="text" name="passenger-name" placeholder="Enter Name" />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="male" value="Male" onClick={e => handleGender(e, seat)} />
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="female" value="Female" onClick={e => handleGender(e, seat)} />
                        <label class="form-check-label" htmlFor="female">Female</label>
                    </div> */}
        </form>
      );
    });
  };

  const [is1aset, setis1aset] = useState(false);
  const [is1bset, setis1bset] = useState(false);
  const [is1cset, setis1cset] = useState(false);

 if(bookingColl!=null)
 {
  for(var i=0;i<bookingColl.length;i++)
  {
    if(bookingColl[0].data.Seatnumber=="1A")
    {
      setis1aset(true)
    }
    if(bookingColl[0].data.Seatnumber=="1B")
    {
      setis1bset(true)
    }
    if(bookingColl[0].data.Seatnumber=="1C")
    {
      setis1cset(true)
    }
  }
 }

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
                          disabled={is1aset}
                          value="1A"
                          id="1A"
                        />
                        <label htmlFor="1A">1A</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          disabled={is1bset}
                          id="1B"
                          value="1B"
                        />
                        <label htmlFor="1B">1B</label>
                      </li>
                      <li className="seat">
                        <input
                          type="checkbox"
                          disabled={is1cset}
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
                        <input type="checkbox" value="2A" id="2A" />
                        <label htmlFor="2A">2A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="2B" id="2B" />
                        <label htmlFor="2B">2B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="2C" id="2C" />
                        <label htmlFor="2C">2C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--3">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="3A" id="3A" />
                        <label htmlFor="3A">3A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="3B" id="3B" />
                        <label htmlFor="3B">3B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="3C" id="3C" />
                        <label htmlFor="3C">3C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--4">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="4A" id="4A" />
                        <label htmlFor="4A">4A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="4B" id="4B" />
                        <label htmlFor="4B">4B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="4C" id="4C" />
                        <label htmlFor="4C">4C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--5">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="5A" id="5A" />
                        <label htmlFor="5A">5A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="5B" id="5B" />
                        <label htmlFor="5B">5B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="5C" id="5C" />
                        <label htmlFor="5C">5C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--6">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="6A" id="6A" />
                        <label htmlFor="6A">6A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="6B" id="6B" />
                        <label htmlFor="6B">6B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="6C" id="6C" />
                        <label htmlFor="6C">6C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--7">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="7A" id="7A" />
                        <label htmlFor="7A">7A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="7B" id="7B" />
                        <label htmlFor="7B">7B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="7C" id="7C" />
                        <label htmlFor="7C">7C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--8">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="8A" id="8A" />
                        <label htmlFor="8A">8A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="8B" id="8B" />
                        <label htmlFor="8B">8B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="8C" id="8C" />
                        <label htmlFor="8C">8C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--9">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="9A" id="9A" />
                        <label htmlFor="9A">9A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" disabled value="9B" id="9B" />
                        <label htmlFor="9B">9B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="9C" id="9C" />
                        <label htmlFor="9C">9C</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--10">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="10A" id="10A" />
                        <label htmlFor="10A">10A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="10B" id="10B" />
                        <label htmlFor="10B">10B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="10C" id="10C" />
                        <label htmlFor="10C">10C</label>
                      </li>
                    </ol>
                  </li>
                </ol>
              </form>
            </div>
          </div>
        </div>
        <div className="container2 ">
          <div className="seatInfo">
            <form className="">{renderPassengerData(seatNumber)}</form>
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
