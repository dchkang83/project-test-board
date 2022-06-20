import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { sampleBoardActions } from '~/slices/sample/board/sampleBoardSlice'

const SampleBoardRegister = (props) => {

    return (
        <div>
            <h2>SampleBoardRegister</h2>
            {props.data?.title}
        </div>
    )
}


export default SampleBoardRegister;