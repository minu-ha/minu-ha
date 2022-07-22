import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
    background : ${props => props.bg};
    color : ${props => props.bg == 'blue' ? 'white' : 'black'}
    padding 10px;
`;


function Detail(props) {

    useEffect(() => {

    });

    let [count, setCount] = useState(0);

    let {id} = useParams();
    let findItem = props.shoes.find(function (x) {
        // eslint-disable-next-line eqeqeq
        return x.id == id
    });

    return (<div className = "container">
        <YellowBtn bg = {"blue"}></YellowBtn>
        {count}
        <button onClick = {() => {
            setCount(count+1)
        }}>btn</button>
        <div className = "row">
            <div className = "col-md-6">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src = "https://codingapple1.github.io/shop/shoes1.jpg" width = "100%"/>
            </div>
            <div className = "col-md-6">
                <h4 className = "pt-5">{findItem.title}</h4>
                <p>{findItem.content}</p>
                <p>{findItem.price}</p>
                <button className = "btn btn-danger">주문하기</button>
            </div>
        </div>
    </div>);
}

export default Detail;