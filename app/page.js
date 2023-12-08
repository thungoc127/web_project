import Link from "next/link";
import Image from 'next/image';
import LoginPage from "./LoginPage/page";


export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24 "
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <h1
        className="text-4xl font-bold text-center mb-12"
        style={{ color: "#4a5568" }} 
      >
        Manage your To Do tasks with SIMPLETASK
      </h1>
      <div className="flex flex-col space-y-6 w-full max-w-sm">
      <Link href="/LoginPage">
        <button className="w-full py-2 px-4 bg-[#DC8686] text-white rounded-md text-lg font-bold hover:bg-[#bf7676] transition duration-300">
          Log In
        </button>
      </Link>
      <Link href="/SignUpPage">
        <button className="w-full py-2 px-4 bg-[#DC8686] text-white rounded-md text-lg font-bold hover:bg-[#bf7676] transition duration-300">
          Sign Up
        </button>
      </Link>
      <Link href="/TaskPage">
      <button className="w-full py-2 px-4 bg-[#DC8686] text-white rounded-md text-lg font-bold hover:bg-[#bf7676] transition duration-300">
          Task Page
        </button>
      </Link>
      </div>
    </main>
  );
}

