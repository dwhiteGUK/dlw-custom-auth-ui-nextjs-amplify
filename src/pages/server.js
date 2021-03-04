import { withSSRContext } from 'aws-amplify'

function ServerProtected({ authenticated, username }) {
  if (!authenticated) {
    return <h1>Not authenticated</h1>
  }

  return <h1>{username}, SSR route</h1>
}

export async function getServerSideProps(context) {
  const { Auth } = await withSSRContext(context)

  try {
    const user = await Auth.currentAuthenticatedUser()
    return {
      props: {
        authenticated: true,
        username: user.username
      }
    }
  } catch (error) {
    return {
      props: {
        authenticated: false
      }
    }
  }
}

export default ServerProtected
