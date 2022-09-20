import {useSession, getSession, signOut} from 'next-auth/react'

function Login(){
    const {data: session} = useSession()

    if(session){ // Gak perlu dicek kalau getServerSide sebenarnya
        return <div>
            <div>Halo {session.user.name}! {session.user.email}</div>
            <button onClick={()=> signOut()}>Logout</button>
        </div>
    }

}

export default Login

export async function getServerSideProps(context){
    const session = await getSession(context)

    if(!session){
        return {
            redirect: {
                destination: '/api/auth/signin?callbackUrl=http://localhost:3000/auth/profile' // jika mau custom, redirect aja ke auth/login, passing param
            }
        }
    }

    return {
        props: {
            session,
        }
    }
}

// petunjuk di api/auth/nextauth.js