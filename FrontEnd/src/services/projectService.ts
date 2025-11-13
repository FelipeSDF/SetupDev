import { type ProjectModel } from '../models/ProjectModel';

const url = 'http://localhost:3000/projetos';

export async function createProject(data: ProjectModel): Promise<ProjectModel> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if(!response.ok){
      throw new Error('Erro ao criar o projeto')
    }

    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }

}


export async function getProjectsByUser(userName: string): Promise<ProjectModel[]> {
  try {
    const response = await fetch(`${url}?authorUserName=${userName}`);
    
    if (!response.ok) {
      throw new Error('Erro ao buscar os projetos do usuário');
    }

    const data: ProjectModel[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}


export async function getAllProjects(): Promise<ProjectModel[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Erro ao buscar projetos');
  }

  return await response.json();
}
