import Link from 'next/link'
import HelperRoute from '/helper/route'
import FormUser from '/components/form_user'

function IndexUsers({ users }) {
    return <>
        <h1>Users</h1>
        
        {users.data.map((user) => {
            return (
                <div key={user.id}>
                    <Link href={`/user/${user.id}`}>
                        <a>{user.nama}</a>
                    </Link>
                </div>
            )
        })}

        <FormUser />
    </>
}

export default IndexUsers

export async function getServerSideProps(){ // Jika GetStatic selain return props, juga return revalidate: int(second)
    const route = HelperRoute()
    const response = await fetch(route.urlGetUsers)
    const dataUsers = await response.json()

    return {
        props: {
            users: dataUsers
        }
    }
}