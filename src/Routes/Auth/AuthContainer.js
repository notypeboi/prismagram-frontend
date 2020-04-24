import React ,{useState} from 'react';
import useInput from '../../Hooks/useInput'
import AuthPresenter from './AuthPresenter'


export default () =>{
    const [action,setAction] = useState('logIn');
    const username= useInput("");
    const password= useInput("");
    const email = useInput("");
    const firstname = useInput("");
    
    
    return (
        <AuthPresenter setAction={setAction} action ={action} username ={username} password={password} firstname={firstname} email ={email}/>
    
    );
}