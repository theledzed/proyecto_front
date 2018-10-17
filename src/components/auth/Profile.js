import React,{Component} from 'react'

import axios from 'axios'
import toastr from 'toastr'
// import {uploadPic} from '../../services/userService'
// import {uploadText} from '../../services/userService'
import { Button } from 'antd';
import { Redirect } from 'react-router-dom'


class Profile extends Component{
    state={
        user:{},
       
      
    }


  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  setRedirects = () => {
    this.setState({
      redirects: true
    })
  }

  setRedirectss = () => {
    this.setState({
      redirectss: true
    })
  }

  renderRedirectss = () => {
    if (this.state.redirectss) {
      return <Redirect to='/Recuerdos'/>
    }
  }


  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/EndlessImg'/>
    }
  }
  renderRedirects = () => {
    if (this.state.redirects) {
      return <Redirect to='/EndlessText'/>
    }
  }


componentWillMount(){
    const user = JSON.parse(localStorage.getItem('user'))
    if(!user) return this.props.history.push('/login')
    this.setState({user})
}

getPrivateInfo = () =>{
    axios.get('https://localhost:3000/private',{
        headers:{
            "Authorization" : localStorage.getItem('token')
        }
    })
    .then(res=>{
        console.log(res)
    })
    .catch(e=>toastr.error('Algo salió mal', e.message))
}


// uploadPhoto = () =>{
//  this.refs.input.click()
// }

// onChangeFile = (e) =>{

//     console.log(e.target.files[0]) 
//     uploadPic(e.target.files[0])
//     .then(pic=>console.log(pic))
//     .catch(e=>toastr.error(`Error`))

// }


// onChangeFiles = (e) =>{

//     console.log(e.target.files[0]) 
//     uploadText(e.target.files[0])
//     .then(text=>console.log(text))
//     .catch(e=>toastr.error(`Error`))

// }

// uploadTexts = () =>{
//     this.refs.inputText.click()
// }

// recuerdo = React.createRef();
// para = React.createRef();

// createUser = (e) => {
//     e.preventDefault();
//     const recuerdoArr = [...this.state.recuerdo]
//     recuerdoArr.push(this.recuerdo.current.value)
//     this.setState({
//         recuerdo: recuerdoArr
//     })
//     console.log(this.state)
// }


render(){
    const {user} = this.state
    return(

        <div className="fondo" >


            <h1>Bienvenido a tu capsula {user.username}</h1> 
            {this.renderRedirect()}
              <Button type="primary"  className="boton11" onClick={this.setRedirect}>Agrega una imagen</Button>
           
            <br/>
            {this.renderRedirects()}
            <Button type="primary"  className="boton2" onClick={this.setRedirects}>Agrega un texto</Button>

            <br/>
            {this.renderRedirectss()}
            <Button type="primary"  className="boton3" onClick={this.setRedirectss}> Ver tus recuerdos </Button>
 
 

            
            {/* <input accept="image/*"  onChange={this.onChangeFile} ref="input" hidden type="file" />
            <img style={{cursor:"pointer"}} width="50px" src="http://simpleicon.com/wp-content/uploads/cloud-upload-2.png" onClick={this.uploadPhoto} /> */}

  

            {/* <input accept=".doc,.txt,.pdf" onChange={this.onChangeFiles} ref="inputText" hidden type="file" /> */}
            {/* <img style={{cursor:"pointer"}} width="50px" src="https://cdn0.iconfinder.com/data/icons/outline-ui-part-4-of-4/100/pack07-07-512.png"  onClick={this.uploadTexts} />
             */}

        </div>

    )
}

}

export default Profile