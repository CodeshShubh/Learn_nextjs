

export default async function ProductDetils({params}:{params:Promise<{id :string}>}) {

      const productId = (await params).id
    return (
        <div>{productId}</div>
    );
}