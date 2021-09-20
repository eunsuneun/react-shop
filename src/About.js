import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

let Box = styled.div`
  padding: 20px;
  background: orange;
`;
let H4 = styled.p`
  padding: 20px;
  font-size: 20px;
  color: ${props => props.색상};
`;

function About() {
  let [alert, fnAlert] = useState(true);
  let [inputData, fnInputData] = useState('');
  useEffect(() => {
    let timer = setTimeout(() => {
      fnAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
      console.log('useEffect 이후');
    };
  }, []); // 페이지 처음 로드됐을 때만 []

  return (
    <div className='container'>
      <H4 색상='blue'>About 페이지</H4>
      {alert === true ? (
        <Box className='alert-box'>깜짝 쿠폰이 발급되었습니다.</Box>
      ) : null}
      <input
        onChange={e => {
          fnInputData(e.target.value);
        }}
      />
      <br />
      {inputData}
    </div>
  );
}

export default About;
