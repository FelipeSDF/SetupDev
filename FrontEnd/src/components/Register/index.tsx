import styles from './styles.module.css';
import logoLogin from '../../assets/img/logoLogin.png';
import { Link } from 'react-router';

export function Register() {
  return (
    <div className={styles.containerPageRegister}>
      <div className={styles.registerCard}>
        <figure className={styles.containerImgRegister}>
          <img
            src={logoLogin}
            alt='Capivara no foguete rodando o planeta terra'
          />
        </figure>

        <div className={styles.containerFormRegister}>
          <h2>Crie sua conta</h2>
          <form className={styles.formRegister}>
            <label>
              <span>Username:</span>
              <input
                type='text'
                name='username'
                placeholder='Digite seu username:'
              />
            </label>
            <label>
              <span>Nome completo:</span>
              <input
                type='text'
                name='fullName'
                placeholder='Digite seu nome comleto:'
              />
            </label>

            <label>
              <span>E-mail:</span>
              <input
                type='e-mail'
                name='email'
                placeholder='Digite seu e-mail:'
              />
            </label>

            <label className={styles.passwordLabelRegister}>
              <span>Senha:</span>
              <input
                name='password'
                placeholder='Digite sua senha:'
              />
            </label>

            <label className={styles.passwordLabelRegister}>
              <span>Comfirme sua senha:</span>
              <input
                name='password'
                placeholder='Confirme sua senha:'
              />
            </label>

            <div>
              <input type='submit' value='Criar' />
            </div>
          </form>

          <div className={styles.containerLogarUser}>
            <p>
              Já tem conta? <Link to='/login'>Entrar</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
