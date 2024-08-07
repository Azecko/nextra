import { auth } from "../../auth";
import { SignInButton } from "./components/auth/SignInButton";
import { SignOutButton } from "./components/auth/SignOutButton";
import UserAvatar from "./components/UserAvatar";

export default async function Home() {

  const session = await auth()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900">
      <h1>Welcome to Nextra !</h1>
      {session ? (
        <div>
          <UserAvatar />
          <h4>{session.user?.name}</h4>
          <SignOutButton />
        </div>
      ) : (
        <SignInButton btnValue="Sign In" redirectPath="/" />
      )}
    </main>
  );
}
