import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

const CountBox = () => {
  const dispatch = useDispatch();
  let countOpen = useSelector((state) => state.countOpen);
  let count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);

  const increase = (num) => {
    dispatch({ type: 'INCREMENT', payload: { num: num } });
  };

  const decrease = (num) => {
    dispatch({ type: 'DECREMENT', payload: { num: num } });
  };

  return (
    <div>
      <Container className={`count-area ${countOpen === true ? 'open' : ''}`}>
        <div className='wrapper'>
          <div className='name-title'>{id} 님, 안녕하세요!</div>
          <div className='btn-area'>
            <button
              className='btn-style background-dark border-left'
              onClick={() => decrease(5)}
            >
              -5
            </button>
            <button className='btn-style' onClick={() => decrease(1)}>
              -1
            </button>
            <div className='num-area'>{count}</div>
            <button className='btn-style' onClick={() => increase(1)}>
              +1
            </button>
            <button
              className='btn-style background-dark border-right'
              onClick={() => increase(5)}
            >
              +5
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CountBox;
