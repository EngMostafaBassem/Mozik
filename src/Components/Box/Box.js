import React from 'react'
import {Card,CardImg,CardBody,CardTitle,CardSubtitle} from 'reactstrap'
import './Box.scss'
import { Link } from 'react-router-dom'

const Box=({actorId,albumId,img,name,subtitle})=>{

  
return (
    <Card className="box">
        <Link to={albumId!=null?`/${albumId}/${actorId}/Tracks`:`/${actorId}/Albums`}>
       <CardImg  top width="100%" src={img} className="box__image"/>
       <CardBody className="box__body">
           <CardTitle className="box__body--title" > {name} </CardTitle>
           <CardSubtitle className="box__body--subtitle"  >{subtitle}</CardSubtitle>
       </CardBody>
       </Link>
    </Card>
)
}
export default Box