"use client";
import { useState } from "react";

export default function DiagnosticoPage() {
  const [problema, setProblema] = useState("");

  // Torne a função assíncrona
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/diagnostico", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ problema }),
    });

    const data = await response.json();
    alert(`Diagnóstico: ${data.diagnostico}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Formulário de Diagnóstico</h2>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow">
        <label className="block mb-2 font-bold">Descreva o problema do veículo:</label>
        <textarea
          value={problema}
          onChange={(e) => setProblema(e.target.value)}
          className="border p-2 w-full mb-4"
          placeholder="Exemplo: O motor faz um ruído estranho ao acelerar"
        ></textarea>
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Enviar Diagnóstico
        </button>
      </form>
    </div>
  );
}
