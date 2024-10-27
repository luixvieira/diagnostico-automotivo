"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [codigo, setCodigo] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, codigo }),
      });

      if (response.ok) {
        // Redireciona para a área correta após o login
        const data = await response.json();
        data.tipoUsuario === "cliente"
          ? router.push("/cliente")
          : router.push("/mecanico");
      } else {
        alert("Falha ao autenticar. Verifique os dados e tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao autenticar", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Código Porto"
          className="border p-2 mb-4 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
          Entrar
        </button>
      </form>
    </div>
  );
}
