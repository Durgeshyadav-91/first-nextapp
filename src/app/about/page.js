"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function about(){
    const router = useRouter();

    let navigate=(name)=>{
        return(
            router.push(name)
        )
    }
    return(
        <div>
            <h1>Hello About Page</h1>
            <Link href={"/"}>Go To Home Page</Link><br/><br/>
            <Link href={"/about/aboutcollege"}>Go to About College Page</Link><br/><br/>
            <Link href={"/about/aboutstudent"}>Go to About Student Page</Link><br/><br/>
            <button onClick={()=>navigate("/")}>Click To Move Home Page</button>
        </div>
    )
}