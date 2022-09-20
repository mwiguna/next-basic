import Link from 'next/link'
import { useRouter } from 'next/router'
import HelperLoading from 'helper/loading'
import Header from 'components/header'
import Footer from 'components/footer'

function Home() {
    const helper = HelperLoading()

    const router = useRouter()
    const multiParamBtn = () => {
        router.push('/all/1/2'); // push = push, replace = OffAll
    }

    if(helper.loading) return <div>Loading...</div>

    return (
        <>
            <Header />
            <ul>
                <li>
                    <Link href="/product/1/review/2"> 
                        <a>Dynamic Route</a>
                    </Link>
                </li>
                <li>
                    <Link href="/all/1/2">
                        <a>Multi Parameter</a>
                    </Link>
                </li>
                <li>
                    <button onClick={multiParamBtn}>
                        Multi Param Programmatically
                    </button>
                </li>
                <li>
                    <Link href="/user">
                        <a onClick={helper.startLoading}>Users</a>
                    </Link>
                </li>
                <li>
                    <Link href="/auth/login">
                        <a>Login</a>
                    </Link>
                </li>
            </ul>
            <Footer />
        </>
    )
}

export default Home

// passHref di tag Link jika bukan langsung diatas tag a
// Buat file 404.js di pages langsung jadi default 404
// Helper itu global variabel (buat sendiri, gak ada tutorialnya)
