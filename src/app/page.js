"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  }
  
  return (
    <div>
        <h1 className="items-center">Hello home Page</h1>
        <Link href={"/about"}>GO To About Page</Link><br/>
        <Link href={"/login"}>GO To Login page</Link><br/><br/>

        <button onClick={() => navigate("/about")}>Click to Move About Page</button><br/>
        <button onClick={() => navigate("/login")}>Click to Move Login Page</button>
    </div>
  );
}