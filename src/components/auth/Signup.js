import React, {Component} from 'react'
import toastr from 'toastr'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Signup extends Component{
    state = {
        signup: {
            username: '',
            email: '',
            password: '',
            password2: ''
        }
    }

    onChange = (e) =>{
        console.log(e.target.name, e.target.value)
        const {signup} = this.state
        let field = e.target.name
        signup[field] = e.target.value        
        this.setState({signup})
    }

    createUser = (e)=>{
        e.preventDefault()
        const {signup} = this.state
        if (signup.password !== signup.password2){
            return toastr.error('No coinciden las contraseñas')
        }
        axios.post('http://localhost:3000/signup', signup)
        .then(user=>{
            console.log(user)
            toastr.success('Usuario Creado')
            const hist = this.props.history
            hist.push('/Login')
        })
        .catch(e=>toastr.error('Noup!'))
    }

    render(){
        const {signup} = this.state
        return(

            <div className="fondito" >

                <div className="signup" >
                     <form onSubmit={this.createUser}>
                    <p>
                        <input 
                            name="username" 
                            type="text" 
                            onChange={this.onChange} 
                            value={signup.username} 
                            placeholder="username"/>
                    </p>
                    <p>
                        <input 
                            name="email" 
                            type="email" 
                            onChange={this.onChange} 
                            value={signup.email} 
                            placeholder="correo"/>
                    </p>
                    <p>
                        <input 
                            name="password" 
                            type="password" 
                            onChange={this.onChange} 
                            value={signup.password} 
                            placeholder="contraseña"/>
                    </p>
                    <p>
                        <input 
                        name="password2" 
                        type="password" 
                        onChange={this.onChange} 
                        value={signup.password2} 
                        placeholder="repite tu contraseña"/>
                    </p>
                    <p>
                        <button    type="submit"> Registrate !</button>
                    </p>
                    <p>¿Ya tienes sesion? inicia<Link to="/login"> aqui</Link></p>
                   
                    </form>  
                </div>      

            </div>



        )
    }
}

export default Signup