import {getSession, signIn} from 'next-auth/react'

function Login(){
    return <div>
        <button 
        style={{margin: '50px', backgroundColor: '#2299dd', color: 'white', border: 'none', borderRadius: '10px', padding: '15px'}} 
        onClick={()=> signIn('google')}>
            Login Google
        </button>
    </div>
}

export default Login

export async function getServerSideProps(context){
    const session = await getSession(context)

    if(session){
        return {
            redirect: {
                destination: '/auth/profile'
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