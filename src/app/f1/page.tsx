import Link from "next/link";

export default function Page() {
    return (
        <div>f1 content
            <Link href={'/f1/f2'}>f2</Link>
        </div>
    );
}