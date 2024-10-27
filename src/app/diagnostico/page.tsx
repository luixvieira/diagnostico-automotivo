export default function DiagnosticoPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Diagnóstico Automotivo</h2>
      <p className="mb-6">Informe os detalhes do problema do veículo para obter um diagnóstico rápido.</p>
      <form className="space-y-4">
        <input type="text" placeholder="Modelo do Veículo" className="border p-2 w-full" />
        <textarea placeholder="Descreva o problema" className="border p-2 w-full"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar</button>
      </form>
    </div>
  );
}
