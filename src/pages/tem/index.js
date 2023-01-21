import Modal from "./Modal";
import { useState } from "react";
import "./index.css";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function AddTask({ onClose, open }) {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [name, setName] = useState("");
  const [state, setState] = useState({});

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "busstop"), {
        latitude: lat,
        longitude: long,
        name: name,
      });
      onClose();
    } catch (err) {
      alert(err);
    }
  };
  // console.log("name:",name)
  // console.log("lat:",title)

  // console.log("lonf:",description)

  // const handleChange = ({ target }, upperCase = false) => {
  //   const { name, value } = target;

  //   setState((prevState) => ({
  //     ...prevState,
  //     [name]: upperCase ? value.toUpperCase() : value,
  //   }));
  // };

  return (
    <div>
      <form onSubmit={handleSubmit} className="addTask" name="addTask">
        <input
          type="text"
          name="latitude"
          // onChange={(e) => handleChange(e)}
          onChange={(e) => setLat(e.target.value.toUpperCase())}
          value={lat}
          placeholder="lattitude"
        />
        <textarea
          onChange={(e) => setLong(e.target.value)}
          name="longitude"
          placeholder="longitude"
          value={long}
        ></textarea>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value.toUpperCase())}
          value={name}
          placeholder="name"
        />
        <button type="submit">Done</button>
      </form>
    </div>
  );
}

export default AddTask;
