import axios from 'axios'

const url = "http://localhost:3000/"

export const getUserData = (id) =>{
     axios.get(url + 'profile' + id,{
        headers:{
            "Authorization" : localStorage.getItem('token')
        }
    })
    .then (res=>{
        console.log(res.data)
        this.setState({user:res.data})
    })
    .catch(e=>console.log(e))
}



export const uploadPic = (file) =>{
    const form = new FormData()
    form.append('file', file)
    const token = localStorage.getItem('token')
    return axios.post(url+ 'pictures/', form, {
        headers:{
            'Authorization':token
        }
    })
    .then(text=>text)
    .catch(e=>e)
}

export const uploadText = (file) =>{
    const form = new FormData()
    form.append('file', file)
    const token = localStorage.getItem('token')
    return axios.post(url+ 'text/', form, {
        headers:{
            'Authorization':token
        }
    })
    .then(picture=>picture)
    .catch(e=>e)
}