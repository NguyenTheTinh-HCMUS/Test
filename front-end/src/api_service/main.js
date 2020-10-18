import Axios from 'axios'

export const Axios_Get=url=>{
    return Axios(
        {
            method: "GET",
            url
        }
    )
}