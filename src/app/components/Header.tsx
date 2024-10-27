import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">AutoDiag</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/login" className="hover:underline">Login</Link></li>
            <li><Link href="/cadastro" className="hover:underline">Cadastro</Link></li>
            <li><Link href="/cliente" className="hover:underline">Área do Cliente</Link></li>
            <li><Link href="/mecanico" className="hover:underline">Área do Mecânico</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
