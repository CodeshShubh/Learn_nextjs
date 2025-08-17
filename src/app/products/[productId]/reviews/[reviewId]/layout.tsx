export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
             <div>fixed layout</div>
            {children}
        </section>
    );
}