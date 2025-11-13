import { type UserModel } from '../models/UserModel';

const url = 'http://localhost:3001/usuarios';

/**
 * 🔹 Retorna todos os usuários
 */
export async function getAllUsers(): Promise<UserModel[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao buscar usuários');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro na chamada:', error);
    return [];
  }
}

/**
 * 🔹 Cria um novo usuário
 */
export async function createUser(newUser: Omit<UserModel, 'id'>): Promise<void> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error('Erro ao cadastrar usuário');
    }
  } catch (error) {
    console.error('Erro no cadastro:', error);
    throw error;
  }
}

/**
 * 🔧 Atualiza os dados de perfil do usuário (imagem, bio, formação, etc.)
 * Aceita arquivos convertidos em Base64 (banner e profileImg).
 */
export async function updateUserProfile(
  userName: string,
  updatedData: Partial<UserModel> & Record<string, any>
): Promise<void> {
  try {
    // Busca o usuário pelo userName
    const response = await fetch(`${url}?userName=${encodeURIComponent(userName)}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar usuário');
    }

    const users = await response.json();
    const user = users[0];
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    // Atualiza apenas os campos enviados
    const updateResponse = await fetch(`${url}/${user.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    });

    if (!updateResponse.ok) {
      throw new Error('Erro ao atualizar perfil');
    }

    console.log(`✅ Perfil de "${userName}" atualizado com sucesso.`);
  } catch (error) {
    console.error('❌ Erro na atualização de perfil:', error);
    throw error;
  }
}
