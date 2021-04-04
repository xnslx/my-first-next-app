import {useRouter} from 'next/router'


function PortfolioPage() {
    const router = useRouter();
    console.log('router', router)
    return(
        <div>
            <h1>The Portfolio Project Page.</h1>
        </div>
    )
};

export default PortfolioPage;