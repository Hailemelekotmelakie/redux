import { useDispatch, useSelector } from 'react-redux'
import { actionAdd, actionMinus } from './redux/action/userAction';
import { Button, Input, Wrapper } from './Styles/Button';

function App() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list)
  return (
    <Wrapper>
      <Button
        onClick={() => {
          dispatch(actionAdd({ name: 7 }))
        }}
      >
        Add
      </Button>
      <Button
        onClick={() => {
          dispatch(actionMinus({ name: 67 }))
        }}
      >
        Add
      </Button>
      <Input placeholder='email' />
      <div>
        {list.map((val) => {
          return <div>{val.name}</div>
        })}
      </div>
    </Wrapper>
  );
}

export default App;
