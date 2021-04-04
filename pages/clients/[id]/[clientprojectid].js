import {useRouter} from 'next/router';

function SelectedClientProjectPage() {
    const router = useRouter()
    return (
        <div>
            <h1>The Project for a specific project for a selected client.</h1>
        </div>
    )
};

export default SelectedClientProjectPage;