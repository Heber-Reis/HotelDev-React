import styles from "./style.module.css";
import classNames from 'classnames';

function BtnReserv (props) {
  return(
    <button className={classNames(props.className,styles.button)}>Reservar agora!</button>
  )
}

export default BtnReserv;