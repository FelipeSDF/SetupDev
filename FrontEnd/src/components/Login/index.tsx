import styles from './styles.module.css';
import logoLogin from '../../assets/img/logoLogin.png'
import { Link } from 'react-router';

export function Login() {
  return (
    <div className={styles.containerPageLogin}>
      <div className={styles.loginCard}>
        <figure className={styles.containerImgLogin}>
          <img
            src={logoLogin}
            alt='Capivara no foguete rodando o planeta terra'
          />
        </figure>

        <div className={styles.containerFormLogin}>
          <h2>Entre com sua conta</h2>
          <form className={styles.formLogin}>
            <label>
              <span>E-mail:</span>
              <input
                type='text'
                name='email'
                placeholder='Digite seu e-mail:'
              />
            </label>

            <label className={styles.passwordLabelLogin}>
              <span>Senha:</span>
              <input
                name='password'
                placeholder='Digite sua senha:'
              />
            </label>

            <div>
              <input type='submit' value='Entrar' />
            </div>
          </form>

          <div className={styles.containerCadastrarUser}>
            <p>
              Não tem conta? <Link to='/register'>Cadastra-se</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
