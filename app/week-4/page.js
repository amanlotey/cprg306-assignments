import NewItem from "./new-item";
import Link from "next/link";
export default function Page() {
    return (
        <main>
            <NewItem/>
            <Link href="/" className="text-blue-500 hover:underline absolute top-4 right-4">Back to home</Link>
        </main>
    );
}