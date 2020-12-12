import React from 'react'
import {useSelector} from "react-redux"

export const CounterDisplay = () => {
    
 const change = useSelector((state) => {
     return state.users.username
 }) 

    return (
        <div>
            <h1>We are sharing the state with the below component</h1>
            <h1>Name : {change}</h1>
        </div>
    )
}
