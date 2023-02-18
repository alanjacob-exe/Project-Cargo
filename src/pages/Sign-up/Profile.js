import "./Profile.css";
import { useAuthValue } from "./AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

function Profile() {
  const { currentUser } = useAuthValue();
  const { isLoggedin } = useAuthValue();

  console.log("signup loggedin" + isLoggedin);

  return (
    <div>
      <Navbar />
      <div className="center">
        <div className="profile">
          <h1>Profile</h1>
          <p>
            <strong>Email: </strong>
            {currentUser?.email}
          </p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <span
            onClick={() => {
              signOut(auth);
              localStorage.removeItem("user");
            }}
          >
            Sign Out
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
