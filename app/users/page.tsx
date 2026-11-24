import Link from "next/link"
import { getUsers } from "../services/users"
import { Suspense } from "react"

type User = {
  id: number
  name: string
  username: string
}

const Users = async () => {
    return (
    <Suspense fallback={<p>Cargando lista de usuarios...</p>}>
        <UserList />
    </Suspense>
    )
}

const UserList = async () => {
  const users = await getUsers()

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user : User) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users