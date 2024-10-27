"use client";
import { useState } from "react";

export default function MecanicoDashboard() {
  const [prontuarios, setProntuarios] = useState([]);

  const fetchProntuarios = async () => {
    const response = await fetch("/api/prontuario");
    const data = await response.json();
    setProntuarios(data);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Área do Mecânico</h2>
      <p>Bem-vindo à sua área exclusiva. Aqui você pode visualizar e atualizar prontuários de clientes.</p>

      <button onClick={fetchProntuarios} className="bg-blue-500 text-white mt-4 p-2 rounded">
        Ver Prontuários
      </button>

      <div className="mt-4">
        {prontuarios.map((p) => (
          <div key={p.id} className="p-4 bg-gray-100 rounded shadow mb-2">
            <h3 className="font-bold">{p.cliente}</h3>
            <p>Veículo: {p.veiculo}</p>
            <p>Última manutenção: {p.manutencao}</p>
            <p>Data: {p.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
