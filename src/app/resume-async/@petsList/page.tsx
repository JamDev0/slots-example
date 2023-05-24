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

async function asyncFunction() {
  const oneSecondsDelay = new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))

  return oneSecondsDelay;
}

export default async function PetsList() {
  await asyncFunction();
  
  return (
    <ul className="list-disc">
      {
        petsName.map((name) => <li key={name}>{name}</li>)
      }
    </ul>
  )
}