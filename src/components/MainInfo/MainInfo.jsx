import styles from "./style.module.css"

function MainInfo () {
  return(
    <div>
      <div className={styles.Info}> 
        <img src="/images/imagem-cidade.jpg" className={styles.img}/>
        <div className={styles.Resumo}>
          <h1>Salvador, BA, Brasil</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ea veniam odio sed, enim voluptate rem exercitationem at est odit reiciendis corrupti facere? Eaque a, hic nam labore assumenda numquam.</p>
          <button className={styles.button}>Reservar agora!</button>
        </div>
      </div>
      <div className={styles.Services}>
        <h1>Serviços</h1>
        <div className={styles.ServicesContent}>
          <div className={styles.ServicesCard}>
            <img src="/images/imagem-carro.jpg" className={styles.imgServices}/>
            <div className={styles.ServicesText}>Translados gratuitos</div>
          </div>
          <div className={styles.ServicesCard}>
            <img src="/images/imagem-quarto.jpg" className={styles.imgServices}/>
            <div className={styles.ServicesText}>Quartos arejados</div>
          </div>
          <div className={styles.ServicesCard}>
            <img src="/images/imagem-vista.jpg" className={styles.imgServices}/>
            <div className={styles.ServicesText}>Vista para o mar</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainInfo;