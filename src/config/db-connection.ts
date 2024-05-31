import knex from "knex"

const createConnection = () => {
  return knex({
    client: "sqlite3",
    connection: {
      filename: "./db.sqlite"
    },
    useNullAsDefault: true
  })
}

export { createConnection }
