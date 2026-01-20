import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h1>Student Information</h1>
      <p>Name: Muhammad Talha Arif</p>
      <Link href="https://github.com/swemwave" target="_blank" rel="noreferrer"><p>GitHub Profile : swemwave  </p></Link>
    </div>
  );
}
