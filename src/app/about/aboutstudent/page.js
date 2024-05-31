import Link from "next/link";

export default function() {
    return(
        <div>
            <h1>Hellooooooo About Student Page</h1>
            <Link href={"/"}>Back to Home page </Link><br/><br/>
            <Link href={"/about"}>Go to about Page</Link>
        </div>
    )
}