import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <button
      onClick={async () => {
        await signOut();
      }}
    >
      Sign out
    </button>
  );
};
