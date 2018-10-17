import React,{Component} from 'react'
import { Button } from 'antd';
import { Redirect } from 'react-router-dom'
import {uploadText} from '../../services/userService'
import toastr from 'toastr'



class EndlessText extends Component{

    state ={
        txt:{
            name:'',
            endless:'',
            date:'',
            explication:'',
            destination:'',
            number:''
        }
    }

    onChange = (e) =>{
        console.log(e.target.name, e.target.value)
        const {txt}=this.state
        let field = e.target.name
        txt[field] = e.target.value
        this.setState({txt}) 
    }


    crearRecuerdoTxt  = (e) =>{
        e.preventDefault()
        const {txt} = this.state
        console.log(txt)
        fetch('http://localhost:3000/text',{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            },
            body:JSON.stringify(txt)
        })
        .then(r => r.json())
        .then(res => this.props.history.push('/profile'))
        .catch(err => console.log(err))
    }
        
    

    onChangeFiles = (e) =>{

        console.log(e.target.files[0]) 
        uploadText(e.target.files[0])
        .then(text=>console.log(text))
        .catch(e=>toastr.error(`Error`))
    
    }
    
    uploadTexts = () =>{
        this.refs.inputText.click()
    }

  render(){
    const{txt}=this.state
    return(
      <div>
      <div className="fonditoUpload" >
            <div className="signupUpload" >
                <form onSubmit={this.crearRecuerdoTxt}>
                <p>
                    <input 
                        name="name" 
                        type="text"
                        placeholder="Nombre de tu recuerdo"
                        onChange={this.onChange}
                        value={txt.name}
                    />
                </p>
                <p>
                    <input 
                        name="destination" 
                        type="email"
                        placeholder="Persona que recibira"
                        onChange={this.onChange}
                        value={txt.destination}
                    />
                </p>
                <p>
                    <textarea  rows="10" cols="40" 
                        name="endless" 
                        type="text"
                        placeholder="Escribe tu recuerdo"
                        onChange={this.onChange}
                        value={txt.endless}
                    />
                </p>
                <p>
                    <input 
                        name="date" 
                        type="datetime-local"
                        placeholder="Fecha de entrega"
                        onChange={this.onChange}
                        value={txt.date}
                    />
                </p>
                <p>
                    <input 
                        name="number" 
                        type="tel"
                        placeholder="Tu numerin"
                        onChange={this.onChange}
                        value={txt.number}
                    />
                </p>
                <button type="submit"  >Agregar</button>

                 <input accept=".doc,.txt,.pdf" onChange={this.onChangeFiles} ref="inputText" hidden type="file" />
                 <img style={{cursor:"pointer"}} width="50px" src="https://cdn0.iconfinder.com/data/icons/outline-ui-part-4-of-4/100/pack07-07-512.png"  onClick={this.uploadTexts} />
                
                
                </form>
            </div>
        </div>
      </div>
    )
  }
}

export default EndlessText