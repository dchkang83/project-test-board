import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { sampleBoardActions } from '~/slices/sample/board/sampleBoardSlice'

const SampleBoardRegister = (props) => {

    return (
        <div>
            <h2>SampleBoardRegister</h2>
            {props.data?.title}


            <Button variant="contained" onClick={props.handleSubmit}>
                등록
            </Button>

        </div>
    )
}


export default SampleBoardRegister;