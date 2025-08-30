export default function Layout({children , models}: {children: React.ReactNode, models:React.ReactNode}) {
    return (
        <section>
            {children}
            {models}
        </section>
    );
}