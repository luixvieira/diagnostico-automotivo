import { NextApiRequest, NextApiResponse } from "next";

export default function loginHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, codigo } = req.body;

    // Validação simulada do usuário (exemplo)
    if (email === "cliente@exemplo.com" && codigo === "1234") {
      res.status(200).json({ tipoUsuario: "cliente" });
    } else if (email === "mecanico@exemplo.com" && codigo === "5678") {
      res.status(200).json({ tipoUsuario: "mecanico" });
    } else {
      res.status(401).json({ message: "Credenciais inválidas" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
