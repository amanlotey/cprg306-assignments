import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-40">
      <h1 className="text-5xl mb-16  text-fuchsia-500">CPRG 306: Web Development 2 - Assignments</h1>
      <Link className="hover:underline decoration-fuchsia-600 text-xl" href="/week-2"> Week-2 Assignment</Link>
      <Link className="hover:underline decoration-fuchsia-600 text-xl" href="/week-3"> Week-3 Assignment</Link>
      <Link className="hover:underline decoration-fuchsia-600 text-xl" href="/week-4"> Week-4 Assignment</Link>
      <Link className="hover:underline decoration-fuchsia-600 text-xl" href="/week-5"> Week-5 Assignment</Link>
      <Link className="hover:underline decoration-fuchsia-600 text-xl" href="/week-6"> Week-6 Assignment</Link>
      <Link className="hover:underline decoration-fuchsia-600 text-xl" href="/week-7"> Week-7 Assignment</Link>
      <Link className="hover:underline decoration-fuchsia-600 text-xl" href="/week-8"> Week-8 Assignment</Link>
      <Link className="hover:underline decoration-fuchsia-600 text-xl" href="/week-9"> Week-9 Assignment</Link>
      <Link className="hover:underline decoration-fuchsia-600 text-xl" href="/week-10"> Week-10 Assignment</Link>
      

    </div>
  );
}
