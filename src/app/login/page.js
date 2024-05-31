"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function login(){
    const router = useRouter();
    let navigate=(name) => {
        return(
            router.push(name)
        )
    }

    return(
        <div>
            <h1>Hello LOGIN Page</h1>
            <Link href={"/"}>Go To Home Page</Link><br/><br/>
            <Link href={"/login/teacherlogin"}>Go to Teacher Login page</Link><br/><br/>
            <Link href={"/login/studentlogin"}>Go to Student Login page</Link><br/><br/>
            <button onClick={()=>navigate("/")}>Click To Move Home page</button>
        </div>
    )
}