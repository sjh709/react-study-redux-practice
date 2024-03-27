import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginBox from './component/LoginBox';
import CountBox from './component/CountBox';
// import Box from './component/Box';

function App() {
  return (
    <div>
      <div className='title'>숫자 카운터</div>
      <LoginBox />
      <CountBox />

      {/* <div>
        <h1>
          {id},{password}
        </h1>
        <div>{count}</div>
        <button onClick={increase}>
          증가
        </button>
        <button onClick={login}>로그인</button>
        <Box />
      </div> */}
    </div>
  );
}

export default App;
