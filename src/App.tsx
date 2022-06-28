import React, {useEffect} from 'react';
import './App.css';
import Main from "./components/pages/main/Main";
import cl from "./App.module.css"
import Header from "./components/common/header/Header";
import {useDispatch} from "react-redux";
import { setMessageAC} from "./bll/app-reducer";
import messageList from './mock/messageList.json'
function App() {
    const dispatch=useDispatch()
    useEffect(()=>{
        // dispatch(changeStartTimeTC())
        dispatch(setMessageAC(messageList))
    },[dispatch])

    return (
        <div className={cl.App}>
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
