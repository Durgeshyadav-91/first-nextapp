import Link from "next/link";

export default function() {
    return(
        <div>
            <h1>HELLLO Teacher</h1>
            <Link href={"/"}>Back to Home page </Link><br/><br/>
            <Link href={"/login"}>Go to Login page</Link><br/><br/>
        </div>
    )
}