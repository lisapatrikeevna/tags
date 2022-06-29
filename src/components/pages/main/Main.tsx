import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import MessageItems, {messageType} from "./message/Message";
import {useSelector} from "react-redux";
import {StoreType} from "../../../bll/store";


const Main = () => {
    const messageList = useSelector<StoreType, Array<any>>(state => state.appReducer.messageList)
    const [text, setText] = useState('')
    const filter= useSelector<StoreType,string>(state => state.appReducer.filter)

    const filterItems = (filter: string) => {
        return filter ?
            messageList.filter((i:messageType) => i.tags.toLocaleLowerCase().includes(`#${filter}`))
            : messageList
    }
    const filteredMessages = filterItems(filter)
    return <>
        <Box>
            {filteredMessages ? filteredMessages.map((m:messageType) => {
                    return <MessageItems key={m.id} message={m}/>
                })
                : <p>messages not found</p>}
        </Box>
        <div>
            <TextField id="filled-basic" label="Filled" variant="filled" value={text}
                       onChange={(e) => setText(e.currentTarget.value)}/>
            <Button variant="contained">Contained</Button>
        </div>
    </>
};

export default Main;
