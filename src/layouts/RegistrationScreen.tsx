import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { handleSubmit, handleDelete } from "../hooksDB/formHandlers";

function RegistrationScreen() {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <div className="grid place-items-center h-screen bg-gradient-to-r from-[#FE6053] to-[#FFAE53]">
      <div className="grid place-items-center h-[400px] w-[350px] bg-[white] rounded-[10px]">
        <h1 className="text-black font-bold text-[20px] mb-[-40px]">
          {userId ? "Cadastrar Novo Usuário" : "Cadastrar Novo Usuário"}
        </h1>
        <form
          onSubmit={(event) =>
            handleSubmit(
              event,
              userId,
              userName,
              userEmail,
              setUserId,
              setUserName,
              setUserEmail
            )
          }
        >
          <Label className="font-bold ml-[3px]">User ID (para deletar)</Label>
          <Input
            placeholder="Ex: 1"
            className="mb-1 w-[300px]"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <Label className="font-bold ml-[3px]">User Name</Label>
          <Input
            placeholder="Ex: João Silva"
            className="mb-1"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Label className="font-bold ml-[3px]">User E-mail</Label>
          <Input
            placeholder="Ex: joaosilva@gmail.com"
            className="mb-1"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <Button
            type="submit"
            className="text-white font-bold bg-black w-[100%] mt-2"
          >
            Cadastrar
          </Button>
          <Button
            type="button"
            className="text-white font-bold bg-[red] w-[100%] mt-2"
            onClick={() =>
              handleDelete(userId, setUserId, setUserName, setUserEmail)
            }
          >
            Deletar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationScreen;
