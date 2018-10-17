import React, {Component} from 'react'
import axios from 'axios'
import toastr from 'toastr'
import { Link } from 'react-router-dom'



const url = 'http://localhost:3000/login'

class Login extends Component{
    state={
        auth:{}
    }


login = (e) =>{
    console.log('ĺoguini')
    e.preventDefault()
    const {auth} = this.state
    axios.post(url, auth)
    .then(res=>{
        console.log(res)
        toastr.success('Logueadoo')
        localStorage.setItem('user',JSON.stringify(res.data.user))
        localStorage.setItem('token', res.data.token)
        const hist = this.props.history
        hist.push('/profile')
    })
    .catch(e=>{
        console.log(e)
        toastr.error('malisiososbiscos!')
    })
}

onChange = (e) =>{
    const field = e.target.name
    const value = e.target.value
    const {auth} = this.state
    auth[field] = value
    this.setState({auth})
}

render() {
    const{auth} = this.state
    return(
        <div className="fondito" >
            <div className="signup" >
                <form onSubmit={this.login}>
                <p>
                    <input 
                        name="email" 
                        type="email"
                        onChange={this.onChange}
                        value={auth.email}
                        placeholder="tu correo"
                    />
                </p>

                <p>
                    <input 
                        name="password" 
                        type="password"
                        onChange={this.onChange}
                        value={auth.password}
                        placeholder="tu contraseña"
                    />
                </p>
                <button type="submit"  >Inicia sesión</button>
                <br/>
                <p>
                    ¿Aun no tienes sesion? registrate <Link to="/signup">aqui</Link>
                </p>
           

                </form>
            </div>
        </div>
    )
}
}


export default Login