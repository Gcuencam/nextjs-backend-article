type Car = {
  brand: string
  model: string
}

export default async function CarsPage() {
  const res = await fetch("http://localhost:3000/api/cars")
  const { cars } = await res.json()
  return (
    <>
      <p>Cars list:</p>
      <ul>
        {cars.map((car: Car, i: number) => (
          <li key={i}>{`${car.brand} ${car.model}`}</li>
        ))}
      </ul>
    </>
  )
}
