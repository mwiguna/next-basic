import HelperLoading from '/helper/loading'
import HelperRoute from '/helper/route'

function DetailUser({user}) {
    const helper = HelperLoading()

    if(helper.loading) return <div>Loading...</div>

    return <>
        <h1>Detail User</h1>
        <p>{user.data.nama}</p>
        <p>{user.data.email}</p>
    </>
}

export default DetailUser

export async function getServerSideProps(context){
    const {params, req, res, query} = context // req.headers.cookie dll console aja, res.SetHeader juga bisa 
    const route = HelperRoute()
    const response = await fetch(route.urlGetSingleUser + params.idUser)
    const dataUser = await response.json()

    return {
        props: {
            user: dataUser
        }
    }
}