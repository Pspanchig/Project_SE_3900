import React, { Component, useEffect } from 'react';
import './css/Protected.css';
import Login from '../Login/Login.jsx';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const navigate = useNavigate();
    const {Component} = props

    useEffect(() => {
        const authorization =() =>{
            if(localStorage.getItem('Logged') === "true"){                
                setTimeout(() => {
                }, 1000);
            } else{
                navigate('/verify');
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            }
        }
        authorization();
    }, [])

  return ( 
        <>
            <Component/>
        </>
  );
}


export default Protected