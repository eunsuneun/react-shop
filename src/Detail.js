import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail(props) {
  let history = useHistory();
  let { id } = useParams();
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src={`https://eunsuneun.github.io/react-shop/src/img/prd0${id}.jpg`}
            width='100%'
          />
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>{props.prd[id].title}</h4>
          <p>{props.prd[id].content}</p>
          <p>{props.prd[id].price}</p>
          <button className='btn btn-danger'>주문하기</button>
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

export default Detail;
