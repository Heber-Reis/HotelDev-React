import styles from "./Header.module.css";
import BtnReserv from "../ButtonReserv/BtnReserv";

function Header (props){

  let ShowBtn 
  props.Btn === true ?  ShowBtn =  styles.button : ShowBtn = styles.buttonNone;
  return(
    <div className={styles.Header}>
      <h1>Hotel Dev</h1>
      <p>O seu paraiso na terra</p>
      <BtnReserv className={styles.button}/>
    </div>
  )
}

export default Header;