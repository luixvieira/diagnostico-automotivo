import { NextApiRequest, NextApiResponse } from "next";

export default function diagnosticoHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { problema } = req.body;

    // Lógica simulada de diagnóstico baseada na descrição do problema
    let diagnostico = "Não identificado";
    if (problema.includes("ruído")) {
      diagnostico = "Possível problema no motor ou sistema de escapamento";
    } else if (problema.includes("freio")) {
      diagnostico = "Verifique as pastilhas de freio";
    }

    res.status(200).json({ diagnostico });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
