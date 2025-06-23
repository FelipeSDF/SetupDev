import { type UserModel } from '../models/UserModel';

const url: string = 'http://localhost:3001/usuarios';

export async function getAllUsers(): Promise<UserModel[]> {
  try {
    const response = await fetch(url);
    if(!response.ok){
      throw new Error('Erro ao buscar Usuarios')
    }
    const data: UserModel[] = await response.json()
    return data
  } catch (error) {
    console.error('Erro na chamada', error)
    return []
  }
}

export async function createUser(newUser: Omit<UserModel, 'id'>): Promise<void>{
try {
  const response = await fetch(url,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newUser)
  })

  if(!response.ok){
    throw new Error('Erro ao cadastrar usuario')
  }
} catch (error) {
  console.error('Erro no cadastro', error)
  throw error
}
}
