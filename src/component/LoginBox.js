import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Container } from 'react-bootstrap';

const LoginBox = () => {
  const dispatch = useDispatch();
  let countOpen = useSelector((state) => state.countOpen);

  const login = (event) => {
    event.preventDefault();
    const id = event.target[0].value;
    const password = event.target[1].value;
    dispatch({
      type: 'LOGIN',
      payload: { id: id, password: password, countOpen: true },
    });
  };

  return (
    <Container className={`login-area ${countOpen === true ? '' : 'open'}`}>
      <Form onSubmit={(event) => login(event)}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>닉네임</Form.Label>
          <Form.Control type='text' placeholder='닉네임을 입력하세요.' />
        </Form.Group>

        <Button variant='dark' type='submit'>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginBox;
