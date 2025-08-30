import Link from "next/link";

export default function Page() {
    return (
        <div>f1 content
            <Link href={'/f1/f2'}>f2</Link>
            <Link href={'/f3'}>f3</Link> 
            {/* /f3 because f3 is the same level of f1 */}
        </div>
    );
}