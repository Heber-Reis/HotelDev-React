import styles from "./Header.module.css";

function Header (){
  return(
    <div className={styles.Header}>
      <h1>Hotel Dev</h1>
      <p>O seu paraiso na terra</p>
      <button className={styles.button}>Reservar agora!</button>
    </div>
  )
}

export default Header;