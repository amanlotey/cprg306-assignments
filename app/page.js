import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-40">
      <h1 className="text-5xl mb-16  text-fuchsia-500">CPRG 306: Web Development 2 - Assignments</h1>
      <Link className="hover:underline decoration-fuchsia-600 text-xl" href="/week-2"> Week-2 Assignment</Link>
      <Link className="hover:underline decoration-fuchsia-600 text-xl"href="/week-3"> Week-3 Assignment</Link>
      <Link className="hover:underline decoration-fuchsia-600 text-xl" href="/week-4"> Week-4 Assignment</Link>
    </div>
  );
}
