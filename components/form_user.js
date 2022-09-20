function FormUser(){
     const handleSubmit = async (event) => {
        event.preventDefault()
        var nama = event.target.nama.value
        console.log(nama)

        const response = await fetch(`http://localhost/project/apitest/ranker/user/getSingle/${nama}`)
        const dataUser = await response.json()
        console.log(dataUser)
    }  
    
    return <>
        <form onSubmit={handleSubmit} method="post">
            <input type="text" name="nama" />
            <input type="submit" value="Add" />
        </form>
    </>
}

export default FormUser