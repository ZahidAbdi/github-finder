import { useContext } from 'react'
import Loading from '../layout/Loading'
import UserItems from './UserItems'
import GithubContext from '../../context/github/GithubContext'


function UserResults() {
  const {users, loading} = useContext(GithubContext)

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
