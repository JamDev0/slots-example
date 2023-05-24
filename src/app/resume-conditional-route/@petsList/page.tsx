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
]

export default function PetsList() {
  return (
    <ul className="list-disc">
      {
        petsName.map((name) => <li key={name}>{name}</li>)
      }
    </ul>
  )
}