import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-3xl p-10 bg-white rounded-xl shadow-2xl text-center">
        <h2 className="text-5xl font-bold text-blue-600 mb-6">Bem-vindo ao AutoDiag</h2>
        <p className="text-lg text-gray-700 mb-8">
          A plataforma digital que facilita o diagnóstico e manutenção do seu veículo com
          praticidade e segurança.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/login" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
            Login
          </Link>
          <Link href="/cadastro" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200">
            Cadastro
          </Link>
        </div>
      </div>
    </div>
  );
}
