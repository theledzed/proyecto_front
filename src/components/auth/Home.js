import React,{Component} from 'react'
import { Button } from 'antd';
import { Redirect } from 'react-router-dom'



class Home extends Component{

  state = {
    redirect: false
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
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/Signup'/>
    }
  }
  renderRedirects = () => {
    if (this.state.redirects) {
      return <Redirect to='/Login'/>
    }
  }

  render(){
    return(
      <div>
        <div className="papa" >

          <div className="img-trans" >

           
              <h1>Endless memory</h1>
              <br/>
              <p>Tus recuerdos encapsulados para el futuro</p>
              {this.renderRedirect()}
              <Button type="primary"  className="boton1" onClick={this.setRedirect}  >Signup</Button>
{/*             
            <br/>
            {this.renderRedirects()}
            <Button type="primary"  className="boton2" onClick={this.setRedirects}  >Login</Button>
 */}


          </div>
          {/* <div className="img-trans2" >

           
              <h2>The sentiments of the present in the future</h2>



          </div> 
         */}
        </div>
      </div>
    )
  }

}


export default Home