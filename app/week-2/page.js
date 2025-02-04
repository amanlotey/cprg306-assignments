import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold">Shopping list</h1>
      <StudentInfo />
      <Link href="/" className="text-blue-500 hover:underline absolute top-4 right-4">Back to home</Link>
    </main>
  );
}
