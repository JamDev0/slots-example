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
]

async function asyncFunction() {
  const fiveSecondsDelay = new Promise<void>((resolve) => setTimeout(() => resolve(), 5000))


  return fiveSecondsDelay;
}

export default async function ClientsList() {
  await asyncFunction();
  
  return (
    <ul
      className="list-disc"
    >
      {
        usersName.map((name) => <li key={name}>{name}</li>)
      }
    </ul>
  )
}