import Link from "next/link";
import ItemList from "./item-list";

import next from "next";

export default function Page() {
    return (
      <>
        <main className="flex items-center flex-col">
            <h1 className="text-4xl font-bold mb-5">Shopping list</h1>
            <ItemList />
        </main>
        <Link href="/" className="text-blue-500 hover:underline absolute top-4 right-4">Back to home</Link>
      </>
    );
}