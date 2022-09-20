function HelperRoute(){
    const base_url = "https://wiguna.cendikiawandigital.com/apitest/ranker/"

    const helper = {
        urlGetUsers: base_url + 'user/getUsers',
        urlGetSingleUser: base_url + 'user/getSingle/',
    }

    return helper
}

export default HelperRoute