export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
            <footer>
                this is footer
            </footer>
        </section>
    );
}