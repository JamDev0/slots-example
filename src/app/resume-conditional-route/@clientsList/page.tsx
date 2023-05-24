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

export default function ClientsList() {
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