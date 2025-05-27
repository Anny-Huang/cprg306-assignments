import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl font-bold mt-[5%] ml-[15%] mb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li> <Link href="/week-2" className="text-lg ml-[15%] hover:text-red-400 hover:underline" > Week 2 Assignment</Link></li>
        <li><Link href="/week-3" className="text-lg ml-[15%] hover:text-red-400 hover:underline" > Week 3 Assignment</Link></li>
        <li><Link href="/week-4" className="text-lg ml-[15%] hover:text-red-400 hover:underline" > Week 4 Assignment</Link></li>
      </ul>
    </main>
  );
}