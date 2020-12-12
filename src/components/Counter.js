import React , {useState} from 'react'
import {useDispatch , useSelector} from "react-redux"
import { counterUpdate, decrement, increment, incrementByAmount } from '../store/counterSlice'
import { userChange } from '../store/userSlice'


 const Counter = () => {
    //  const [counter , setCounter] = useState(0)
     let [value , Setvalue] = useState(0)
     const dispatch = useDispatch()

     
     const {counter , isLoading}  = useSelector((state) => {
         return {
             counter :  state.counters.count,
             isLoading : state.counters.isLoading
         }
     })

    

     const user = useSelector((state) => {
            return state.users.username
     })

     if (isLoading){
        return <div><h1>Loading....</h1></div>
    }
     
    return (
        <div>
            <h1>Counter {counter} </h1>

            <h1>Increment</h1>
            <button onClick = {
                () => {
                    // setCounter(counter+1)
                    dispatch((increment()))
                }
            } > Increment</button>
        
            <h1>Decrement</h1>
            <button onClick = {
                () => {
                    // setCounter(counter-1)
                    dispatch((decrement()))
                }
            } >Decrement</button>

            <h1>Input</h1>
            <input type="text" onChange = {
                (e) => {
                   Setvalue( e.target.value)
                }
            } />
            <h1>Counter + textField</h1>
            <button onClick = {
                () => {
                    // setCounter(Number(value) + counter)
                    dispatch(incrementByAmount(Number(value)))
                }
            } >Increment by value </button>

        <h1>Username {user}</h1>  
            <button onClick = {() => {
                    dispatch(userChange())
            }}>Name Change</button>

            <h1>Update the counter when date is sent from the server</h1>
            <button onClick = {
                () => {
                    dispatch(counterUpdate())
                }
            }>Update from server</button>

        </div>
    )
}

export default Counter