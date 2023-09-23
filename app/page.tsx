import styles from "./page.module.css"

type user = {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

async function fechUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data

}

export default async function Home() {
  const users = await fechUsers()
  

  return (
    <>
      <h1>Users</h1>
      <ul className={styles.userList}>
      {
        users.map((user: user) => (
          <li key={user.id} >
            
            <h5>{user.id} - {user.first_name} {user.last_name}</h5>
            <img src={user.avatar} alt={user.first_name} className={styles.avatar} />
            
          </li>
      ))
      }
      </ul>
    </>
  )
}
