import { Metadata } from "next";

export const metadata:Metadata = {
    title:'products Page',
    description:'Product description'
}
export default function Products() {
    return (
        <div>
            <h1>page List</h1>
            <p> where user click on product so redirect on that perticuler product</p>
        </div>
    );
}