"use client";

import { useActionState } from "react";
import { logInAdmin } from "../actions";
import { AR_One_Sans } from "next/font/google";

const AROneSans = AR_One_Sans({
  subsets: ["latin"],
});

export default function AdminPage({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, authenticateAction] = useActionState(
    logInAdmin,
    false
  );
  return (
    <div
      className={`w-1/3 flex flex-col items-center gap-3 ${AROneSans.className}`}
    >
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
    </div>
  );
}
