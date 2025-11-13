import { DefaultInput } from '../../components/DefaultInput';
import { DefaultTextArea } from '../../components/DefaultTextArea';
import { createProject } from '../../services/projectService';
import { useAuth } from '../../contexts/useAuth';
import { useNavigate } from 'react-router-dom';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';

export function CreateProject() {
  const { user } = useAuth();
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
      <section className={styles.container}>
        <form className={styles.form} onSubmit={HandleSubmitProject}>
          <h1 className={styles.title}>Criar novo projeto</h1>
          <p className={styles.subtitle}>
            Preencha as informações abaixo para cadastrar um novo projeto na plataforma Capmar.
          </p>

          <div className={styles.fieldGroup}>
            <DefaultInput
              labelText='Nome do projeto'
              name='projectName'
              placeholder='Ex: Sistema de Gestão Comunitária'
            />
            <DefaultTextArea
              labelText='Descrição do projeto'
              name='descriptionProject'
              placeholderText='Descreva o propósito, público e objetivos do projeto...'
            />
          </div>

          <div className={styles.fileGrid}>
            <div className={styles.fileBox}>
              <label>Foto de perfil do projeto</label>
              <input type='file' name='photoProfile' />
            </div>
            <div className={styles.fileBox}>
              <label>Capa do projeto</label>
              <input type='file' name='coverProject' />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button
              type='submit'
              className={styles.btnSubmit}
            >
              Criar Projeto
            </button>
            <button
              type='button'
              className={styles.btnCancel}
              onClick={() => navigate('/profile')}
            >
              Cancelar
            </button>
          </div>
        </form>
      </section>
    </MainTemplate>
  );
}
