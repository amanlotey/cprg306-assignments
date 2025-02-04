import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1 className="text-xl mt-6">Amandeep Singh</h1>
      <Link className="decoration-fuchsia-600 hover:underline" href="https://github.com/amanlotey">Github Profile</Link>
    </main>
  );
}
