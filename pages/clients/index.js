import Link from 'next/link';


function ClientPage() {
    return(
        <div>
            <h1>The Clients Page</h1>
            <ul>
                <li>
                    <Link href="/clients/max">Max</Link>
                </li>
                <li>
                    <Link href="/clients/manu">Manuel</Link>
                </li>
            </ul>
        </div>
    )
};

export default ClientPage;