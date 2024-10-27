export default function HomePage() {
  return (
    <div className="container mx-auto text-center p-10">
      <h2 className="text-4xl font-bold mb-6">Bem-vindo ao AutoDiag</h2>
      <p className="text-lg mb-4">
        A plataforma digital que facilita o diagnóstico e manutenção do seu veículo com praticidade e segurança.
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <a href="/login" className="bg-blue-500 text-white p-3 rounded">Login</a>
        <a href="/cadastro" className="bg-green-500 text-white p-3 rounded">Cadastro</a>
      </div>
    </div>
  );
}
