import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { actionAdd, actionMinus, actionUpdata } from './redux/action/userAction';
import { Button, Input, Wrapper } from './Styles/Button';

function App() {
  const dispatch = useDispatch();
  const [id, setId] = useState(0)
  const [name, setName] = useState("")
  const [newName, setNewName] = useState("")
  const list = useSelector((state) => state.list)
  return (
    <div style={{
      display: "flex",
      alignItem: "center",
      justifyContent: "center",
    }}>
      <Wrapper>
        <Input placeholder='Id' onChange={(e) => { setId(e.target.value) }} />
        <Input placeholder='name' onChange={(e) => { setName(e.target.value) }} />
        <Button
          onClick={() => {
            dispatch(actionAdd({ id: id, name: name }))
          }}
        >
          Add
        </Button>
        <div>
          {list.map((val) => {
            return (

              <div style={{ padding: "10px" }}>
                <div style={{ display: 'none' }} id='update'>
                  <p>update</p>
                  <Input placeholder='Newname' value={newName} onChange={(e) => { setNewName(e.target.value) }} />
                  <button onClick={() => {
                    dispatch(actionUpdata({ id: id, name: newName }))
                    setNewName("")
                    document.getElementById('update').style.display = "none"
                  }}>UPDATE</button>
                </div>

                <div> {val.id}</div>
                <div> {val.name}</div>
                <button
                  onClick={() => {
                    dispatch(actionMinus({ id: val.id }))
                  }}
                >
                  remove
                </button>
                <button
                  onClick={() => {
                    setId(val.id)
                    document.getElementById('update').style.display = "block"
                  }}
                >
                  Update
                </button>
              </div>)
          })}
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
