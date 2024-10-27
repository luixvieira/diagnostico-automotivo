import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

let users: { email: string; password: string }[] = [];

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Verificar se o email já está registrado
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return NextResponse.json({ message: "Email já registrado." }, { status: 400 });
  }

  // Criptografar a senha antes de salvar
  const hashedPassword = await bcrypt.hash(password, 10);

  // Salvar o novo usuário
  users.push({ email, password: hashedPassword });
  return NextResponse.json({ message: "Usuário cadastrado com sucesso!" }, { status: 201 });
}
