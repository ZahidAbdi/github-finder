import { useEffect, useState } from 'react'
import Loading from '../layout/Loading'
import UserItems from './UserItems'

function UserResults() {
  const [users, setUsers] = useState([])
  const [loading, setLoading ] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])


  // Fethching users from the Github API
  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    })

    const data = await response.json()
    setUsers(data);
    setLoading(false)
  }

  if(!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:gid-cols-3 md:gid-cols-2'>
        {/* Mapping the data to make a list of users */}
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    )
  } else {
    return <Loading />
  }
}

export default UserResults
