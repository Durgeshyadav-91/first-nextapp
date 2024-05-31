import Link from "next/link";

export default function() {
    return(
        <div>
            <h1>Hellooooooo About College Page</h1>
            <Link href={"/about"}>Go to about Page</Link><br/><br/>
            <Link href={"/"}>Back to Home page </Link>
        </div>
    )
}