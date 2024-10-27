"use client";
import { useState } from "react";

export default function CadastroPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Email:", email, "Senha:", password);  // Verifique se os dados estão corretos

  const response = await fetch("/api/auth/signup.ts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (response.ok) {
    alert("Cadastro realizado com sucesso!");
  } else {
    alert("Erro ao cadastrar. Verifique o email.");
  }
};

  return (
    <form onSubmit={handleSignup} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Cadastro</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        required
        className="w-full mb-4 p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Cadastrar
      </button>
    </form>
  );
}
