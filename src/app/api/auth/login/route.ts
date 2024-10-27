import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// Utilizando o mock `users` novamente - substitua pelo seu banco de dados real
export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Verificar se o email existe
  const user = users.find((user) => user.email === email);
  if (!user) {
    return NextResponse.json({ message: "Email ou senha incorretos." }, { status: 401 });
  }

  // Verificar a senha
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return NextResponse.json({ message: "Email ou senha incorretos." }, { status: 401 });
  }

  return NextResponse.json({ message: "Login realizado com sucesso!" }, { status: 200 });
}
