import { useRouter } from 'next/router';

export default function OficinaPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h2 className="text-3xl font-bold">Detalhes da Oficina {id}</h2>
      <p>Informações específicas da oficina selecionada.</p>
    </div>
  );
}
