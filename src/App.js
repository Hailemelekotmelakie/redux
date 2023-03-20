import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { actionAdd, actionMinus, actionUpdata } from './redux/action/userAction';
import { Button, Input, Wrapper, OneCont, ButtonsContainer, Body } from './Styles/Button';

function App() {
  const dispatch = useDispatch();
  const [id, setId] = useState(0)
  const [name, setName] = useState("")
  const [newName, setNewName] = useState("")
  const list = useSelector((state) => state.list)
  return (
    <Body>
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
        {list.map((val) => {
          return (

            <OneCont>
              <div
                style={{
                  visibility: "hidden",
                  display: 'flex',
                  position: 'absolute',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  backgroundColor: 'whitesmoke',
                  borderRadius: "20px",
                  zIndex: 2,
                  color: 'white',
                  gap: "20px",
                  padding: "20px",
                }}
                id='update'>
                <p>update</p>
                <Input placeholder='Newname' value={newName} onChange={(e) => { setNewName(e.target.value) }} />
                <ButtonsContainer>
                  <Button onClick={() => {
                    setNewName("")
                    document.getElementById('update').style.visibility = "hidden"
                  }}>Cancel</Button>
                  <Button onClick={() => {
                    dispatch(actionUpdata({ id: id, name: newName }))
                    setNewName("")
                    document.getElementById('update').style.visibility = "hidden"
                  }}>UPDATE</Button>
                </ButtonsContainer>
              </div>
              <div> {val.id}</div>
              <div> {val.name}</div>
              <ButtonsContainer>
                <Button
                  onClick={() => {
                    dispatch(actionMinus({ id: val.id }))
                  }}
                >
                  Delete
                </Button>
                <Button
                  onClick={() => {
                    setId(val.id)
                    document.getElementById('update').style.visibility = "visible"
                  }}
                >
                  Update
                </Button>
              </ButtonsContainer>
            </OneCont>
          )
        })}
      </Wrapper>
    </Body>
  );
}

export default App;
