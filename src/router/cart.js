import React from 'react';
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {changeName, increase} from "../store/userSlice";

function Cart() {

    let state = useSelector((state) => state)
    let dispatch = useDispatch();

    return (<div>
        <h6>{state.user.name}{state.user.age}</h6>
        <button onClick = {() => {
            dispatch(increase(10))
        }}>btn
        </button>
        <Table>
            <thead>
            <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
            </tr>
            </thead>
            <tbody>
            {state.cart.map((a, i) => {
                return (<tr key = {i}>
                    <td>1</td>
                    <td>{state.cart[i].name}</td>
                    <td>안녕</td>
                    <td>안녕</td>
                    <td>
                        <button onClick = {() => {
                            dispatch(changeName)
                        }}>+
                        </button>
                    </td>
                </tr>);
            })}
            </tbody>
        </Table>
    </div>);
}

export default Cart;