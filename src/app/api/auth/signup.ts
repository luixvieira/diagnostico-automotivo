import { NextApiRequest, NextApiResponse } from "next";

export default function signupHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { nome, sobrenome, email, tipo } = req.body;

    // Simula criação de usuário (aqui é onde salvamos no banco, se necessário)
    console.log("Novo usuário:", { nome, sobrenome, email, tipo });

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
