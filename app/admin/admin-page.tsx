"use client";

import { useActionState } from "react";
import { logInAdmin } from "../actions";

export default function AdminPage({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, authenticateAction] = useActionState(
    logInAdmin,
    false
  );
  return (
    <>
      {!isAuthenticated && (
        <>
          <h1>Log in to gain access to the admin page</h1>
          <form action={authenticateAction}>
            <input
              type="password"
              name="password"
              placeholder="Enter password..."
              className="p-2 pl-3 m-3 border-2 rounded-full"
            ></input>
            <button type="submit">Log In</button>
          </form>
        </>
      )}
      {isAuthenticated && (
        <>
          <h1>Hello admin!</h1>
          {children}
        </>
      )}
    </>
  );
}
