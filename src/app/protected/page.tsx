import { auth } from "../../../auth"
import { SignInButton } from "../components/auth/SignInButton"
 
export default async function Page() {
  const session = await auth()

  if (!session) return (
    <div>Hey there ! You are not authenticated. But you can sign in <SignInButton btnValue="here" redirectPath="/protected"/></div>
  )
 
  return (
    <div>
      Hey {session.user?.name} !
    </div>
  )
}