export interface UserModel {
  id: number;
  userName: string;
  name: string;
  email: string;
  password: string;
  banner?: string;        // imagem de capa (base64)
  profileImg?: string;    // foto de perfil (base64)
  bio?: string;           // biografia
  formation?: string;     // formação acadêmica
}
