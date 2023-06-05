import { useContext } from "react";
import { Context } from "../../context/UserContext";
import styles from "./UserZone.module.css";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom"; 

const UserZone = () => {
  const { logout } = useContext(Context);
  return (
    <div className={styles.user_zone}>
      <img src="" alt="" />
      <h3>USERNAME</h3>
      <div className={styles.btn_zone}>
          <i>
            <Link to="/home">
              <TiArrowBackOutline />
            </Link>
          </i>
        <button onClick={() => logout()}>logout</button>
      </div>
    </div>
  );
};

export default UserZone;
