import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

function Home() {
    return(
      <div>
        <h1>The Home Page</h1>
        <ul>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li href="/clients">Client</li>
        </ul>
      </div>
    )
}

export default Home;

