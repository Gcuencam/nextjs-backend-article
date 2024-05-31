import { createConnection } from "../../../config/db-connection"

const connection = createConnection()

export async function GET() {
  const cars = await connection("Car").select("*")
  return Response.json({ cars })
}
