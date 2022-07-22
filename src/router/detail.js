import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {Nav} from "react-bootstrap";

let YellowBtn = styled.button`
    background : ${props => props.bg};
    color : ${props => props.bg == 'blue' ? 'white' : 'black'}
    padding 10px;
`;


function Detail(props) {

    let [tab, setTab] = useState(2)
    let [num, setNum] = useState('')
    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    let {id} = useParams();
    let findItem = props.shoes.find(function (x) {
        return x.id == id
    });

    useEffect(() => {
        let a = setTimeout(() => {
            setAlert(false);
        }, 2000);
        return () => {
            clearTimeout(a);
        }
    }, []);

    useEffect(() => {
        if (isNaN(num) == true) {
            alert('dont')
        }
    }, [num]);

    return (<div className = "container">

        {// eslint-disable-next-line eqeqeq
            alert == true ? <div className = {"alert alert-warning"}>2초이내 구매시 할인</div> : null}

        <YellowBtn bg = {"blue"}></YellowBtn>
        {count}
        <button onClick = {() => {
            setCount(count + 1)
        }}>btn
        </button>
        <div className = "row">
            <div className = "col-md-6">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src = "https://codingapple1.github.io/shop/shoes1.jpg" width = "100%"/>
            </div>
            <div className = "col-md-6">
                <input type = "text" onChange = {(event) => {
                    setNum(event.target.value);
                }}></input>
                <h4 className = "pt-5">{findItem.title}</h4>
                <p>{findItem.content}</p>
                <p>{findItem.price}</p>
                <button className = "btn btn-danger">주문하기</button>
            </div>
            <Nav variant = {"tabs"} defaultActiveKey = {"link0"}>
                <Nav.Item>
                    <Nav.Link onClick = {() => {
                        setTab(0)
                    }} eventKey = {"link0"}>btn1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey = {"link1"}>btn2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey = {"link2"}>btn3</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabBody shoes={props.shoes} tab = {"tab"}/>
        </div>
    </div>);
}

function TabBody({tab,shoes}) {

    let [fade, setFade] = useState('');

    useEffect(() => {
        setTimeout(()=>{setFade('end')},10)
        return () => {
            setFade('');
        };
    },[tab]);

    return (<div className={'start ' + fade}>
        {[<div></div>, <div>bbb</div>, <div>내용</div>][tab]}
    </div>);
}


export default Detail;