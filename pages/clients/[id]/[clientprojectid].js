import {useRouter} from 'next/router';

function SelectedClientProjectPage() {
    const router = useRouter()
    console.log('router.query', router.query)
    console.log('router.pathname', router.pathname)
    return (
        <div>
            <h1>The Project for a specific project for a selected client.</h1>
        </div>
    )
};

export default SelectedClientProjectPage;