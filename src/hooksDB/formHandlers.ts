import { createUser, deleteUser } from "./SubmitRoutes";

export async function handleSubmit(
  event: React.FormEvent,
  userId: string,
  userName: string,
  userEmail: string,
  setUserId: React.Dispatch<React.SetStateAction<string>>,
  setUserName: React.Dispatch<React.SetStateAction<string>>,
  setUserEmail: React.Dispatch<React.SetStateAction<string>>
) {
  event.preventDefault(); // Evita o comportamento padrão de recarregar a página

  if (userId) {
    // Criar usuário
    await createUser(userName, userEmail);
  }

  // Limpar os campos do formulário após o envio
  setUserId("");
  setUserName("");
  setUserEmail("");
}

export async function handleDelete(
  userId: string,
  setUserId: React.Dispatch<React.SetStateAction<string>>,
  setUserName: React.Dispatch<React.SetStateAction<string>>,
  setUserEmail: React.Dispatch<React.SetStateAction<string>>
) {
  if (userId) {
    await deleteUser(Number(userId));
    // Limpar os campos do formulário após a exclusão
    setUserId("");
    setUserName("");
    setUserEmail("");
  }
}
