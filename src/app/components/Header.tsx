import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AutoDiag</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/cadastro">Cadastro</Link></li>
            <li><Link href="/cliente">Área do Cliente</Link></li>
            <li><Link href="/mecanico">Área do Mecânico</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
