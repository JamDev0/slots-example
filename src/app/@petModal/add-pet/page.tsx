'use client';

import { useRouter } from "next/navigation";

export default function Login() {
  const { back } = useRouter();

  return (
    <section className="w-96 h-96 text-gray-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-300 flex flex-col gap-y-6 items-center justify-center rounded-lg">
      <h1 className="text-2xl font-medium">Novo Pet</h1>
      
      <input placeholder="Nome" className="bg-slate-200 px-4 py-2 rounded" />

      <button
        className="cursor-pointer absolute top-5 right-5"
        onClick={() => back()}
      >
        X
      </button>
    </section>
  );
}