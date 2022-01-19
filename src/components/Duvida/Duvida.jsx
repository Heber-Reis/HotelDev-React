import styles from "./Duvida.module.css";

function Duvida () {
  return(
    <div className={styles.ContactContent}>
      <div className={styles.Contact}>
        <h1>Alguma dúvida? <br/> Entre em contato</h1>
        <p>(71) 99999-9999</p>
        <p>email@email.com</p>
      </div>
      <img src="/images/imagem-duvida.jpg" className={styles.Img}/>
    </div>
  )
}

export default Duvida;