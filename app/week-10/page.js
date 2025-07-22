"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  console.dir(user);

  return (
    <main>
      <header className="mb-5">
        <h1 className="text-4xl font-bold">Shopping List App</h1>
      </header>
      {user ? (
        <div>
          <img src={user.photoURL} className="w-20 h-20 mb-5" />
          <p className="mb-5 text-xl">
            Sign in as {user.displayName} ( {user.email} )
          </p>  
          <button
            type="button"
            className="text-xl mb-5 hover:underline cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <p className="text-xl hover:underline">
            <Link href="/week-10/shopping-list/">
              Continue to your Shopping List
            </Link>
          </p>
        </div>
      ) : (
        <div>
          <button
            onClick={handleSignIn}
            className="text-xl ml-2 cursor-pointer hover:underline"
            type="button"
          >
            Sign in with GitHub
          </button>
        </div>
      )}
    </main>
  );
}
