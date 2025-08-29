
export default function Layout({children ,
    Notifications,
    UserAnalytics,
    UserRevenue,
    login
}: {children: React.ReactNode,
    Notifications:React.ReactNode,
    UserAnalytics:React.ReactNode,
    UserRevenue:React.ReactNode,
    login:React.ReactNode
}) {
     const isLoggedin = true
    return isLoggedin ? (
        <section>
            {children}

            <div>
                  {Notifications}
                  {UserAnalytics}
                  {UserRevenue}
            </div>

        </section>
    ):(
        <div>
            {login}
        </div>
    );
}