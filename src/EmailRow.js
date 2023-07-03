import React from 'react'
import './EmailRow.css';
import  CheckBox  from '@material-ui/core/Checkbox';
import { IconButton } from '@material-ui/core';
import  StarBorderOutlinedIcon  from '@material-ui/icons/StarBorderOutlined';
import  LabelImportantOutlinedIcon  from '@material-ui/icons/LabelImportantOutlined';
import { useDispatch } from "react-redux";
import { selectMail } from './features/mailSlice';
import { useNavigate } from "react-router-dom";

function EmailRow({id, title, subject, description, time}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openMail = () =>{
        dispatch(
            selectMail({
            id, 
            title, 
            subject, 
            description, 
            time,
        })
        );
        navigate("/mail")
    };


  return (
    <div onClick={openMail} className='emailRow'>
        <div className='emailRow_options'>
        <CheckBox />
        <IconButton>
            <StarBorderOutlinedIcon />
        </IconButton>

        <IconButton>
            <LabelImportantOutlinedIcon />
        </IconButton>
        </div>

        <h3 className='emailRow_title'>
        {title}
        </h3>

        <div className='emailRow_message'>
            <h4>{subject} - {" "}
            <span className='emailRow_description'>
                {description}
            </span>
            </h4>
        </div>

        <p className='emailRow_time'>{time}</p>
    </div>
  )
}

export default EmailRow
