import React,{Component} from 'react'
import toastr from 'toastr'
import {uploadPic} from '../../services/userService'
import axios from 'axios'


class EndlessImg extends Component{

    state ={
        img:{
            name:'',
            link:'',
            date:'',
            explication:'',
            destination:''
        }
    }

    onChange = (e) =>{

        console.log(e.target.name, e.target.value)
        const {img}=this.state
        let field = e.target.name
        img[field] = e.target.value
        this.setState({img}) 
    }

    sub=(e)=>{
        e.preventDefault()
        const {img} = this.state
        const form = new FormData()
        for(let key in img){
            form.append(key,img[key])
        }
        axios.post('https://endlessmemory.herokuapp.com//pictures', form, {
            headers :{
                "Authorization": localStorage.getItem('token')
            }
        }).then(r=>{
            console.log(r)
        }).catch(e=>{
            console.log(e)
        })
    }


    crearRecuerdo  = (e) =>{
        e.preventDefault()
        const {img} = this.state
        const form = new FormData()
        for(let key in img){
            form.append(key,img[key])
        }
        console.log(img, form)
        fetch('https://endlessmemory.herokuapp.com//pictures',{
            method : "post",
            body:JSON.stringify(form),
            headers :{
                "Authorization": localStorage.getItem('token')
            }
        })
        .then(r => r.json())
        .then(res => this.props.history.push('/profile'))
        .catch(err => console.log(err))
        
    }


    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user) return this.props.history.push('/login')
        this.setState({user})
    }


    // uploadPhoto = () =>{
    //     this.refs.input.click()
    //    }
       
       onChangeFile = (e) =>{
       
           console.log(e.target.files[0]) 
           const {img}=this.state
            let field = e.target.name
            img[field] = e.target.files[0]
            this.setState({img}) }

        //    uploadPic(e.target.files[0])
        //    .then(pic=>console.log(pic))
        //    .catch(e=>toastr.error(`Error`))}
       
       

  render(){
      const{img}=this.state
    return(
      <div>

      <div className="fonditoUpload" >
            <div className="signupUpload" >
                <form onSubmit={this.sub}>
                <p>
                    <input 
                        name="name" 
                        type="text"
                        onChange={this.onChange}
                        value={img.name}
                        placeholder="Nombre de tu recuerdo"
                    />
                </p>
                <p>
                    <input 
                        name="destination"  
                        type="email"
                        onChange={this.onChange}
                        value={img.destination}
                        placeholder="Persona que recibira"
                    />
                </p>
                <p>
                    <input  
                        name="explication" 
                        type="text"
                        onChange={this.onChange}
                        value={img.explication}
                        placeholder="Describe tu imagen (opcional)"
                    />
                </p>
                <p>
                    <input 
                        name="date" 
                        type="date"
                        onChange={this.onChange}
                        value={img.date}
                        placeholder="Fecha de entrega"
                    />
                </p>
                 <input  
                        name="file" 
                        type="file"
                        onChange={this.onChangeFile}
                        
                        placeholder="Sube tu imagen"
                    /> 
               <br/>
               <br/>
                <button type="submit"  >Agregar</button>

             <input accept="image/*"  onChange={this.onChangeFile} ref="input" hidden type="file" />
            
                
                </form>
            </div>
        </div>
      </div>
    )
  }
}

export default EndlessImg