exports.seed = async (knex) => {
  await knex("users").truncate()

  // For postgress:
  // await knex("users").del()
}