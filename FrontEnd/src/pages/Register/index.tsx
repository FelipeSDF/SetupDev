import styles from './styles.module.css';
import logoLogin from '../../assets/img/logoLogin.png';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { getAllUsers } from '../../services/userService';
import { type UserModel } from '../../models/UserModel';
import { createUser } from '../../services/userService';
import { DefaultInput } from '../../components/DefaultInput';

export function Register() {
  const [users, setUsers] = useState<UserModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name')?.toString().trim();
    const userName = formData.get('username')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const password = formData.get('password')?.toString().trim();
    const confirmPassword = formData.get('confirmPassword')?.toString().trim();

    if (!name || !userName || !email || !password || !confirmPassword) {
      alert('Preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      alert('As senhas devem ser iguais');
    }

    const userExists = users.some(
      user => user.userName === userName || user.email === email,
    );

    if (userExists) {
      alert('Username ou email ja cadastrados');
      return;
    }

    const newUser = { name, userName, email, password };

    try {
      await createUser(newUser);
      alert('Usuario cadastrado com sucesso');
      navigate('/login');
    } catch (error) {
      alert('Erro ao cadastrar usuario');
    }
  };

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
          <form className={styles.formRegister} onSubmit={handleSubmit}>
            <div>
              <DefaultInput labelText='Nome:' type='text' name='name' placeholder='Digite seu nome:' />
            </div>
            <div>
              <DefaultInput
                labelText='Username:'
                type='text'
                name='username'
                placeholder='Digite seu username:'
              />
            </div>
            <div>
              <DefaultInput
              labelText='E-mail:'
                type='email'
                name='email'
                placeholder='Digite seu e-mail:'
              />
            </div>
            <div className={styles.passwordLabelRegister}>
              <DefaultInput
              labelText='Senha:'
                name='password'
                placeholder='Digite sua senha:'
                type='password'
              />
            </div>
            <div className={styles.passwordLabelRegister}>
              <DefaultInput
              labelText='Confirme sua senha:'
                name='confirmPassword'
                placeholder='Confirme sua senha:'
                type='password'
              />
            </div>
            <div>
              <DefaultInput type='submit' value='Criar' />
            </div>
          </form>

          <div className={styles.containerLogarUser}>
              <Link to='/login'>Já tem conta? Entrar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
