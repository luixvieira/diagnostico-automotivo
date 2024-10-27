import { NextApiRequest, NextApiResponse } from "next";

// Dados simulados de prontuário
const prontuarios = [
  { id: 1, cliente: "José", veiculo: "Honda Civic", manutencao: "Troca de pastilhas de freio", data: "2023-10-15" },
  { id: 2, cliente: "Maria", veiculo: "Toyota Corolla", manutencao: "Troca de óleo", data: "2023-09-22" },
];

export default function prontuarioHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Retorna os prontuários
    res.status(200).json(prontuarios);
  } else if (req.method === "POST") {
    const { id, manutencao } = req.body;

    // Simula a atualização do prontuário com uma nova manutenção
    const prontuario = prontuarios.find((p) => p.id === id);
    if (prontuario) {
      prontuario.manutencao = manutencao;
      prontuario.data = new Date().toISOString().split("T")[0];
      res.status(200).json({ message: "Prontuário atualizado com sucesso!" });
    } else {
      res.status(404).json({ message: "Prontuário não encontrado" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
