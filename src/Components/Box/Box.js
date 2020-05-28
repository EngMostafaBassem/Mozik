import React from 'react'
import {Card,CardImg,CardBody,CardTitle,CardSubtitle} from 'reactstrap'
import './Box.scss'
const Box=({img,name,genres})=>{
return (
    <Card className="box">
       <CardImg  top width="100%" src={img} className="box__image"/>
       <CardBody className="box__body">
           <CardTitle className="box__body--title"> {name} </CardTitle>
           <CardSubtitle className="box__body--subtitle" >{genres}</CardSubtitle>
       </CardBody>
    </Card>
)
}
export default Box