"use client";
import { useParams, useRouter } from "next/navigation";

export default function OficinaPage() {
  const router = useRouter();
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-3xl font-bold">Detalhes da Oficina {id}</h2>
      <p>Informações específicas da oficina selecionada.</p>
    </div>
  );
}
