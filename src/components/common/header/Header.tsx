import React, {ChangeEvent, useState} from 'react';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import cl from "./Header.module.css"
import {Box, Container, Modal, Paper, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setFilterValueAC} from '../../../bll/app-reducer';
import {StoreType} from "../../../bll/store";

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


const Header = () => {
    const [open, setOpen] = useState(false);
    const filter = useSelector<StoreType, string>(state => state.appReducer.filter)
    const dispatch = useDispatch()
    const candlerFilter = (e: ChangeEvent<HTMLInputElement>) => dispatch(setFilterValueAC(e.currentTarget.value))


    return (
        <div className={cl.header}>
            <Container maxWidth="lg">
                <TagRoundedIcon onClick={() => {
                    setOpen(!open)
                }}/>
                <Typography>filter by tags</Typography>
            </Container>
            <Modal
                keepMounted
                open={open}
                onClose={() => setOpen(!open)}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        Filter by tags
                    </Typography>
                    <input type="text" value={filter}
                           onChange={candlerFilter}/>
                </Box>
            </Modal>
        </div>
    );
};

export default Header;
