import { Black_Ops_One } from "next/font/google";

const blackOpsOne = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  async function addToMailList(formData: FormData) {
    "use server";
    console.log(
      `${formData.get("emailAddress")} signed up for the newsletter!`
    );
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center m-7 p-4">
        <header className={`font-bold text-3xl ${blackOpsOne.className}`}>
          Third Space
        </header>
      </div>
      <div className="flex flex-col justify-center items-center m-5 p-5 border-2 rounded-full text-xl">
        <h1 className="text-2xl">Sign up for our newsletter!</h1>
        <form action={addToMailList} className="m-3 p-3">
          <input
            type="text"
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
      </div>
    </div>
  );
}
