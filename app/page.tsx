"use client";

import { useActionState } from "react";
import { addToMailList } from "./actions";
import { MailListState } from "./interface";

export default function HomePage() {
  const [mailListState, formAction] = useActionState(
    addToMailList,
    MailListState.NotSignedUp
  );

  return (
    <div className="flex flex-col justify-center items-center m-5 p-5 border-2 rounded-full text-xl">
      <h1 className="text-2xl">Sign up for our newsletter!</h1>
      <form action={formAction} className="m-3 mb-1 p-3">
        <input
          type="email"
          name="emailAddress"
          className="border text-lg"
        ></input>
        <button
          type="submit"
          className="bg-black text-white rounded-full p-2 mx-2"
        >
          Sign Up
        </button>
      </form>
      {mailListState == MailListState.AlreadySignedUp && (
        <>
          <p className="m-2 mt-1 p-2 text-red-400">
            You already signed up with that email address
          </p>
        </>
      )}
      {mailListState == MailListState.SucessfullySignedUp && (
        <>
          <p className="m-2 mt-1 p-2">
            You have successfully signed up to our mailing list.
          </p>
        </>
      )}
      {mailListState == MailListState.ErrorSigningUp && (
        <>
          <p className="m-2 mt-1 p-2 text-red-400">
            An error occured an you were not signed up for the mailing list.
          </p>
        </>
      )}
    </div>
  );
}
