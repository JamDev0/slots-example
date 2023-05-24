import Link from "next/link";

const petsName = [
  'Bella',
  'Max',
  'Charlie',
  'Lucy',
  'Daisy',
  'Rocky',
  'Sadie',
  'Bailey',
  'Luna',
  'Toby'
];

const usersName = [
  'Ana',
  'Beatriz',
  'Carlos',
  'Daniela',
  'Eduardo',
  'Fernanda',
  'Gabriel',
  'Helena',
  'Isabela',
  'João',
  'Karina',
  'Lucas',
  'Mariana',
  'Nicolas',
  'Olivia',
  'Paulo',
  'Quirino',
  'Rafaela',
  'Samuel',
  'Tatiana',
  'Ulisses',
  'Valentina',
  'Wagner',
  'Ximena',
  'Yuri'
];

export default function ResumeWithModalPage() {
  return (
    <main
      className="flex flex-col items-center px-14 py-10"
    >
      <h1
        className="text-2xl font-medium mb-6"
      >
        Resumo dos dados cadastrados (Adição com Modal por Parallel Routes):
      </h1>

      <section
        className="flex justify-center w-full gap-x-16"
      >
        <div className="flex flex-col items-center gap-y-5">
          <span className="text-lg">
            Clientes
          </span>

          <ul
            className="list-disc"
          >
            {
              usersName.map((name) => <li key={name}>{name}</li>)
            }
          </ul>

          <Link href='/add-client'>Adicionar Cliente</Link>
        </div>

        <div className="flex flex-col items-center gap-y-5">
          <span className="text-lg" >
            Pets
          </span>

          <ul className="list-disc">
            {
              petsName.map((name) => <li key={name}>{name}</li>)
            }
          </ul>

          <Link href='/add-pet'>Adicionar Pet</Link>
        </div>
      </section>
    </main>
  )
}