import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.p`
  font-size: 20px;
  color: ${props => props.색상};
`;

function Detail(props) {
  let [flag, fnFlag] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      fnFlag(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  let [input, fnInput] = useState('');
  let history = useHistory();
  let { id } = useParams();
  let prdId = props.prd.find(p => {
    return p.id == id;
  });
  return (
    <div className='container'>
      <박스>
        <h4>Detail</h4>
      </박스>
      {input}
      <input
        onChange={e => {
          fnInput(e.target.value);
        }}
      />
      {flag === true ? (
        <div className='alert-box'>
          <제목 색상={'red'}>재고가 얼마 남지 않았습니다.</제목>
        </div>
      ) : null}
      <div className='row'>
        <div className='col-md-6'>
          <img
            src={`https://eunsuneun.github.io/react-shop/src/img/prd0${id}.jpg`}
            width='100%'
          />
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>{prdId.title}</h4>
          <p>{prdId.content}</p>
          <p>{prdId.price}</p>
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
