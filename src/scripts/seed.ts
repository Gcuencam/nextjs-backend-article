import { createConnection } from "../config/db-connection"

const connection = createConnection()

connection.schema
  .hasTable("Car")
  .then(exists => {
    if (!exists) {
      return connection.schema
        .createTable("Car", table => {
          table.increments("id").primary()
          table.string("brand")
          table.string("model")
        })
        .then(() => {
          return connection("Car").insert([
            { brand: "Seat", model: "Ibiza" },
            { brand: "Seat", model: "León" }
          ])
        })
    }
  })
  .catch(err => {
    console.error("Error seeding:", err)
  })
  .finally(() => {
    connection.destroy()
  })
