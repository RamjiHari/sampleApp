import React from "react";
import axios from "axios";
import { Api } from "../../utils/Api";


let datetime = new Date();
let appUrl=Api;
//action

export const onUserLogin=(username,password)=>{

    const data={signinUsername:username,signinPassword:password}

    return async(dispatch)=>{
        try {
            const response=await axios.post(`${appUrl}loginUser`,data)
            console.log(response,"response")
            if(response.data.status=='success'){
                dispatch({type:'DO_LOGIN',payload:response.data.user,token:'logged'})
            }else{
                dispatch({type:'DO_LOGIN',token:Math.floor(Math.random() * 100) + 1})
                }

        } catch (error) {
            console.log("Check Internet")
            dispatch({type:'ON_ERROR',payload:error})
        }

    }
}





export const onUserLogout=()=>{
    return (dispatch)=>{
          dispatch({ type: 'LOGOUT' });

    }
}

