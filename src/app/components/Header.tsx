import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">AutoDiag</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/diagnostico">Diagnóstico</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
