import { DefaultInput } from '../../components/DefaultInput';
import { DefaultTextArea } from '../../components/DefaultTextArea';
import { createProject } from '../../services/projectService';
import { useAuth } from '../../contexts/useAuth';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { ExitePage } from '../../components/ExitePage';
import { MainTemplate } from '../../templates/MainTemplate';

export function CreateProject() {
  const { user } = useAuth();
  console.log(user);
  const navigate = useNavigate();

  async function HandleSubmitProject(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get('projectName')?.toString().trim();
    const description = formData.get('descriptionProject')?.toString().trim();
    const coverFile = formData.get('coverProject') as File;
    const profileFile = formData.get('photoProfile') as File;

    const coverImageUrl = coverFile ? URL.createObjectURL(coverFile) : '';
    const profileImageUrl = profileFile ? URL.createObjectURL(profileFile) : '';

    if (!title || !description || !coverFile || !profileFile) {
      alert('Preencha todos os campos');
      return;
    }

    const projectData = {
      title,
      description,
      coverImage: coverImageUrl,
      profileImagemProject: profileImageUrl,
      authorUserName: user?.userName ?? '',
      createdAt: new Date().toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    try {
      await createProject(projectData);
      alert('Projeto criado com sucesso!');
      navigate('/profile');
    } catch (error) {
      alert('Erro ao criar o projeto');
      console.error(error);
    }
  }

  return (
    <MainTemplate>
      <form className={styles.form} onSubmit={HandleSubmitProject}>
        <ExitePage page='/profile' />
        <div className={styles.contentForm}>
          <div className={styles.containerInputName}>
            <DefaultInput
              labelText='Nome do projeto'
              name='projectName'
              placeholder='Nome do projeto'
            />
          </div>
          <div className={styles.containerInputDescription}>
            <DefaultTextArea
              labelText='Descrição do projeto'
              name='descriptionProject'
              placeholderText='Descrição do projeto'
            />
          </div>

          <div className={styles.containerFiles}>
            <div>
              <label>Foto de Perfil do projeto</label>
              <input type='file' name='photoProfile' />
            </div>

            <div>
              <label>Capa do projeto</label>
              <input type='file' name='coverProject' />
            </div>
          </div>

          <DefaultInput
            className={styles.btnSubmit}
            type='submit'
            value='Criar Projeto'
          />
        </div>
      </form>
    </MainTemplate>
  );
}
