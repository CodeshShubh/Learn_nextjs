import { Card } from "@/components/card";
import Link from "next/link";

export default function Notifiaciton() {
    return (
        <Card>
                <h1>Notifications</h1>
                <Link href={"/parallel-routes/Archived"}>Archived</Link>
        </Card>
    );
}