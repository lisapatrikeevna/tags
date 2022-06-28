import React, {ChangeEvent, useEffect, useState} from 'react';
import {Box, Button, Modal, Paper, TextField, Typography} from "@mui/material";
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {useDispatch} from "react-redux";
import {changeTagAC, removePostAC} from "../../../../bll/app-reducer";


export type messageType = {
    id: string
    title: string
    text: string
    tags: string
}
type propsType = {
    message: messageType
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const MessageItems = ({message, ...props}: propsType) => {
    const dispatch = useDispatch()
    const [field, setField] = useState(false)
    const [fieldValue, setFieldValue] = useState('')
    const [open, setOpen] = useState(false);
    const removePost = (id: string) => dispatch(removePostAC(id))
    const removeTeg = (id: string) => dispatch(changeTagAC(id,''))
    useEffect(()=>{
        setFieldValue(message.tags)
    },[dispatch])
    const changeTags=(e:ChangeEvent<HTMLInputElement>)=>{
        setFieldValue(e.currentTarget.value)
    }
    const updateTag=()=>{
        dispatch(changeTagAC(message.id,fieldValue))
        setField(!field)
    }
    return (
        <Paper sx={{p: 2, m: 1}}>
            <h4>{message.title}</h4>
            <p>{message.text}</p>
            <Box>
                {!field ?
                    <p>{message.tags}</p>
                    : <TextField value={fieldValue} onChange={changeTags} autoFocus
                                 onBlur={updateTag}/>
                }
                <Button variant="outlined" startIcon={<DeleteOutlineOutlinedIcon/>} onClick={() => setOpen(!open)}>
                    Delete
                </Button>
                <Button variant="outlined" startIcon={<AppRegistrationOutlinedIcon/>} onClick={() => setField(!field)}>
                    edit
                </Button>
            </Box>
            <Modal
                keepMounted
                open={open}
                onClose={() => setOpen(!open)}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    {message.tags?
                        <>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        what are we going to delete?
                    </Typography>
                            <button onClick={() => removeTeg(message.id)}>tags</button>
                    </>:<Typography variant="h6" component="h2">Are you sure you want to delete the post?</Typography>
                    }
                    <button onClick={() => removePost(message.id)}>post</button>

                </Box>
            </Modal>
        </Paper>

    );
};

export default MessageItems;
