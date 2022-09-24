import React, {useEffect, useState} from "react";

import { database } from "../Firebase/users";

export default function Login({setIsLog, setActualUser}){
    const [users, setUsers] = useState([])
    const [errorState, setErrorState] = useState(false);
    const [error, setError] = useState('');


    const getUsers = ()=> {
        const listOfUsers = database.collection('users');
        //console.log(listOfUsers)
        listOfUsers.get().then((query)=> setUsers(query.docs.map((doc)=>{
            return {...doc.data()}
        })))
    }


    function validateUser(){
       // setIsLog(true)
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const loginUser = users.filter(user => user.user === username)
        //const longinKey = users.filter(user => user.key === password)
        if(loginUser.length){
            if(password === loginUser[0].key){
                setActualUser(username)
                setIsLog(true)
            }else{
                setError('Password incorrect')
                setErrorState(true)
            }
        } else{
            setError('User doesn´t exist')
            setErrorState(true)
        }


    }

    function createUser(){
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const loginUser = users.filter(user => user.user === username)
        if(loginUser.length){
            setError('Username is already taken')
            setErrorState(true)
        }else if(username==='' || password === ''){
            setError('Fill the blanks')
            setErrorState(true)
        }else {
            const newUser ={
                user: username,
                key: password
            }
            const colecctionUsers = database.collection('users')
            colecctionUsers.add(newUser)
            setErrorState(false)
            setError('')
            setActualUser(username)
            setIsLog(true)
        }

    }

    useEffect(()=>{
        getUsers()
        setErrorState(false)
    },[])

    return(
        <div className='login-container'>

            <div className='login'>
            <h3>Quiz App!</h3>
            {
                errorState ? 
                <p>Error: {error}</p>
                : <></>
            }
            <div className='login-data'>
                <label htmlFor="">Username</label>
                <input type="text"  id='username'/>
                <label htmlFor="">Password</label>
                <input type="password" id='password'/>
            </div>
            <div className='login-btn'>
                <button onClick={validateUser}>Login</button>
                <button onClick={createUser}>Create User</button>
            </div>
            </div>
        </div>
    )
}