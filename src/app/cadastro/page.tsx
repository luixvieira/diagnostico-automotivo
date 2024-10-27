"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CadastroPage() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("cliente");
  const router = useRouter();

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, sobrenome, email, tipo }),
      });

      if (response.ok) {
        alert("Cadastro realizado! Verifique seu e-mail para o código.");
        router.push("/login");
      } else {
        alert("Falha ao cadastrar. Verifique os dados e tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleCadastro} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Cadastro</h2>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Sobrenome"
          className="border p-2 mb-4 w-full"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2 mb-4 w-full"
        />
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="border p-2 mb-4 w-full"
        >
          <option value="cliente">Cliente</option>
          <option value="mecanico">Mecânico</option>
        </select>
        <button type="submit" className="bg-green-500 text-white p-2 w-full rounded">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
