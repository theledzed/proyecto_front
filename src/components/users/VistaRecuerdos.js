import React,{Component} from 'react'
// import { Button } from 'antd';
// import { Redirect } from 'react-router-dom'
import axios from 'axios'
import toastr from 'toastr'
import { Card, Col, Row } from 'antd';

const { Meta } = Card;




class VistaRecuerdos extends Component{
  state={
    recuerdo:{},
}

componentWillMount(){
  const recuerdo = JSON.parse(localStorage.getItem('recuerdo'))
  this.setState({recuerdo})
}

getPrivateInfo = () =>{
  axios.get('https://localhost:3000/text',{
      headers:{
          "Authorization" : localStorage.getItem('token')
      }
  })
  .then(res=>{
      console.log(res)
  })
  .catch(e=>toastr.error('Algo salió mal', e.message))
}
  render(){

    const {recuerdo} = this.state

    return(
      <div className="fondoRecuerdo" >

  <div style={{ padding: '30px' }}>

      <Row gutter={16}>
      <Col span={6}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://res.cloudinary.com/theledzed/image/upload/v1539789964/photo_2018-10-17_10-14-55.jpg" />}
      >
        <Meta
          title="Jordy 69"
          description="theledzed@gmail.com"
        />
      </Card>,
      </Col>
     


        <Col span={6}>
          <Card
          hoverable
          style={{ width: 240 }}
          cover={<img style={{ width: 240 ,height:360}} alt="example" src="https://res-console.cloudinary.com/theledzed/thumbnails/v1/image/upload/v1539789964/cGhvdG9fMjAxOC0xMC0xN18xMC0xNC00NQ==/preview" />}
        >
          <Meta
            title="Irvin pubertin"
            description="Fecha de entrega: 20/03/23"
  
          />
        </Card>,
        </Col>
        <Col span={6}>
          <Card
          hoverable
          style={{ width: 240 }}
          cover={<img  style={{ width: 240 ,height:360}} alt="example" src="https://res-console.cloudinary.com/theledzed/thumbnails/v1/image/upload/v1539789964/cGhvdG9fMjAxOC0xMC0xN18xMC0xNC00NV8y/preview" />}
        >
          <Meta
            title="Josepha y sus chinos"
            description="Fecha de entrega: 19/07/20"
          />
        </Card>,
        </Col>
        <Col span={6}>
          <Card
          hoverable
          style={{ width: 240 }}
          cover={<img  style={{ width: 240 ,height:360}} alt="example" src="https://res-console.cloudinary.com/theledzed/thumbnails/v1/image/upload/v1539789964/cGhvdG9fMjAxOC0xMC0xN18xMC0xNC01Mg==/preview" />}
        >
          <Meta
            title="¿Estan listos para la reta?"
            description="Fecha de entrega: 30/05/19"
          />
      </Card>,
        </Col>
      </Row>

    <Col span={6}>
        <Card style={{ width: 240 }} title="Experiencia en Ironhack" bordered={false}>........ <br/> Fecha de entrega:17/10/19 </Card>
      </Col>
      <Col span={6}>
        <Card style={{ width: 240 }} title="Hola Cris del futuro" bordered={false}>Al Cris del pasado le gustaba echar chela y juro no dejar de tomarla jamas <br/> Fecha de entrega:10/11/29 </Card>
      </Col>
      <Col span={6}>
        <Card style={{ width: 240 }} title="Que lees chismoso" bordered={false}> GGGGG alto ahi prro <br/> Fecha de entrega:18/10/18  </Card>
      </Col>
      <Col span={6}>
        <Card style={{ width: 240 }} title="Eras un niño rata a los 22años" bordered={false}> aunque te duela jugabas minecraft cons tus amigos, espero ya no lo seas <br/> Fecha de entrega:15/09/25 </Card>
      </Col>

  </div>,



      </div>
    )
  }
}


export default VistaRecuerdos