"use client";

import { useActionState } from "react";
import { logInAdmin } from "../actions";

export default function AdminPage() {
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
            <input type="text" name="password"></input>
            <button type="submit">Log In</button>
          </form>
        </>
      )}
      {isAuthenticated && (
        <>
          <h1>Hello admin!</h1>
        </>
      )}
    </>
  );
}
