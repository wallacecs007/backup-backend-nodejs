exports.seed = async (knex) => {
  await knex("users").insert([   

    { username: "boss", 
      first_name: "Super", 
      last_name: "Boss", 
      email: "big_boss@gmail.com",
      img_url: "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png",
      role: "administrator"
     },


  ])
}