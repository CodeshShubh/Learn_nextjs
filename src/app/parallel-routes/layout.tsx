

export default function Layout({children ,
    Notifications,
    UserAnalytics,
    UserRevenue
}: {children: React.ReactNode,
    Notifications:React.ReactNode,
    UserAnalytics:React.ReactNode,
    UserRevenue:React.ReactNode
}) {
    return (
        <section>
            {children}

            <div>
                  {Notifications}
                  {UserAnalytics}
                  {UserRevenue}
            </div>

        </section>
    );
}