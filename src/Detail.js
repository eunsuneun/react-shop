import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Detail.scss';

function Detail(props) {
  let history = useHistory();
  let { id } = useParams();
  let prdById = props.prd.find(prd => {
    return prd.id == id;
  });
  return (
    <div className='container'>
      <h4>Detail</h4>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src={`https://eunsuneun.github.io/react-shop/src/img/prd0${id}.jpg`}
            width='100%'
          />
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>{prdById.title}</h4>
          <p>{prdById.content}</p>
          <p>{prdById.price}</p>
          <Stock stock={props.stock}></Stock>
          <button
            className='btn btn-danger'
            onClick={() => {
              props.fnStock([8, 8, 8]);
            }}>
            주문하기
          </button>
          <br />
          <br />
          <button
            className='btn btn-dark'
            onClick={() => {
              history.goBack();
            }}>
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

function Stock(props) {
  return <p>재고 : {props.stock[0]}</p>;
}
export default Detail;
