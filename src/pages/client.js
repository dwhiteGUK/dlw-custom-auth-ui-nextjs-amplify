import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function ClientProtected() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(err => setUser(null))
  }, [])

  return (
    <>
      { user && <h1>Welcome, {user.username}</h1>}
      <AmplifySignOut />
    </>
  )
}

export default withAuthenticator(ClientProtected)
