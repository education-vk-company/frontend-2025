import { useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'

import { getContacts } from './store/users/actions'

const UsersComponent = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch();

  const style = {
    color: 'red',
  }
  return (
    <div>
      <div style={style}>{users.error}</div>
      <button onClick={() => getContacts()(dispatch, users)}>
        {users.loading ? 'List Loading' : 'Load List'}
      </button>
      <div>
        {users.contacts.map(user => (
          <div key={user._id}>{user.name} {user.last_name}</div>
        ))}
      </div>
    </div>
  )
};

// const mapStateToProps = state => ({
//   loading: state.users.loading,
//   contacts: state.users.contacts,
//   error: state.users.error,
// })

// const mapActionToProps = {
//   getContacts,
// }


// const ReadyUsersComponent = connect(mapStateToProps, mapActionToProps)(UsersComponent)

function App() {

  return (
    <div>
      <UsersComponent />
    </div>
  )
}

export default App
