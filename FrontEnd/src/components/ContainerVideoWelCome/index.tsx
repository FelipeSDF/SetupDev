import UniverseVideo from '../../assets/video/universo.mp4'
import styles from './styles.module.css'

export function ContainerVideoWelCome(){
  return(
    <div className={styles.videoContainer}>
      <video className={styles.video} src={UniverseVideo} autoPlay loop muted playsInline></video>
      <div className={styles.containerTitleWelcome}>
        <h1 className={styles.title}>Bem vindo a Capmar</h1>
        <p className={styles.paragrafo}>Pronto para elevar seu projeto?</p>
      </div>
    </div>
  )
}