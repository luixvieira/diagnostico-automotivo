export default function ClienteDashboard() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Área do Cliente</h2>
      <p>Bem-vindo à sua área exclusiva. Aqui você pode acessar o diagnóstico, histórico de manutenção e agendar novos serviços.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-gray-100 rounded shadow">
          <h3 className="text-xl font-bold">Veículos</h3>
          <p className="mt-2">Lista de veículos cadastrados, com informações de manutenção.</p>
          <button className="bg-blue-500 text-white mt-4 p-2 rounded">Adicionar Veículo</button>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <h3 className="text-xl font-bold">Próximos Agendamentos</h3>
          <p className="mt-2">Verifique os agendamentos futuros e históricos de visitas ao mecânico.</p>
          <button className="bg-blue-500 text-white mt-4 p-2 rounded">Agendar Serviço</button>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <h3 className="text-xl font-bold">Formulário de Diagnóstico</h3>
          <p className="mt-2">Preencha um formulário para obter um diagnóstico inicial do seu veículo.</p>
          <button className="bg-blue-500 text-white mt-4 p-2 rounded">Fazer Diagnóstico</button>
        </div>
      </div>
    </div>
  );
}
