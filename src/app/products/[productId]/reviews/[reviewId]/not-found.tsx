'use client';
import { usePathname } from "next/navigation";

export default function Page() {
     const pathname = usePathname();

      const productId = pathname.split('/')[2]
      const reviewId = pathname.split('/')[4]


    return (
        <div>not found 404 page for products{productId} and for Reviews{reviewId}</div>
    );
}