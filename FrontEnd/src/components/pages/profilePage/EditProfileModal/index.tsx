import { useState } from 'react';
import styles from './styles.module.css';
import { updateUserProfile } from '../../../../services/userService';
import { useAuth } from '../../../../contexts/useAuth';
import type { UserModel } from '../../../../models/UserModel';

interface EditProfileModalProps {
  onClose: () => void;
  currentData: UserModel;
  setProfileData: React.Dispatch<React.SetStateAction<UserModel | null>>;
  userName: string;
}

export function EditProfileModal({ onClose, currentData, setProfileData, userName }: EditProfileModalProps) {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    banner: currentData.banner || '',
    profileImg: currentData.profileImg || '',
    bio: currentData.bio || '',
    formation: currentData.formation || '',
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (!files || files.length === 0) return;
    const file = files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({ ...prev, [name]: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUserProfile(userName, formData);
      setProfileData(prev => (prev ? { ...prev, ...formData } : prev));
      alert('Perfil atualizado com sucesso!');
      onClose();
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      alert('Erro ao atualizar perfil.');
    }
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContainer}>
        <h2>Editar Perfil</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Imagem de Capa:
            <input type="file" name="banner" accept="image/png, image/jpeg" onChange={handleImageChange} />
          </label>

          <label>
            Foto de Perfil:
            <input type="file" name="profileImg" accept="image/png, image/jpeg" onChange={handleImageChange} />
          </label>

          <label>
            Biografia:
            <textarea name="bio" value={formData.bio} onChange={handleTextChange} />
          </label>

          <label>
            Formação:
            <textarea name="formation" value={formData.formation} onChange={handleTextChange} />
          </label>

          <div className={styles.btnGroup}>
            <button type="submit">Salvar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
