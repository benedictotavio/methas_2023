import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import styles from "./InitialContent.module.css";
const InitialContent = () => {
  return (
    <>
      <Navbar />
      <div className={styles.initial}>
        <h1>METHAS</h1>
        <div className={styles.initial_btn}>
          <Link to="/login">Entre</Link>
          <Link to={"/register"}>Registre-se</Link>
        </div>
      </div>
    </>
  );
};

export default InitialContent;
