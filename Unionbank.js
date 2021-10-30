import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

export default function Unionbank() {
    let data={
        name:"ritu",
        lastname:"sudha"
    }
    return (
        <div>
        <Andhrabank info={data}/>
        <Corporationbank/>
        </div>
    )
}
