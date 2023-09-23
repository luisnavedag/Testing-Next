async function fechUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data

}

export default async function Home() {
  const users = await fechUsers()
  console.log(users)

  return (
    <>
      <h1>Aqui se muestran los users</h1>
      <ul></ul>
      {
        users.map((user) => (
          <li key={user.id} >
            
            <h5>{user.id} - {user.first_name} {user.last_name}</h5>
            <img src={user.avatar} alt={user.id} />
            
          </li>
      ))
      }
    </>
  )
}
