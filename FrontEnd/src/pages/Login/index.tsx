import styles from './styles.module.css';
import logoLogin from '../../assets/img/logoLogin.png'
import { Link, useNavigate } from 'react-router-dom';
import { getAllUsers } from '../../services/userService';
import { useAuth } from '../../contexts/useAuth';
import { DefaultInput } from '../../components/DefaultInput';


export function Login() {

  const navigate = useNavigate()
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const userNameOrEmail = formData.get('userNameOremail')?.toString().trim()
    const password = formData.get('password')?.toString().trim()

    const users = await getAllUsers()
    const userFound = users.find(user => (user.userName === userNameOrEmail || user.email === userNameOrEmail) && user.password === password)

    if(!userFound){
      alert('Usuario ou senha incorreto')
      return
    }

    login(userFound)
    navigate('/home')
  }



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
          <form className={styles.formLogin} onSubmit={handleSubmit}>

            <label>
              <span>E-mail ou userName:</span>
              <DefaultInput
                type='text'
                name='userNameOremail'
                placeholder='Digite seu e-mail ou userName:'
              />
            </label>

            <label className={styles.passwordLabelLogin}>
              <span>Senha:</span>
              <DefaultInput
              type='password'
                name='password'
                placeholder='Digite sua senha:'
              />
            </label>

            <div>
              <DefaultInput type='submit' value='Entrar'/>
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
