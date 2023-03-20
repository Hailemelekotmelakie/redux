import styled from 'styled-components'

const Body = styled.body`
    display: flex;
     align-item: center;
    justify-content: center;
    `
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    gap: 30px;
    width: min-content;
    text-align:center;
    font-size:18px;
}
 `
const OneCont = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    gap: 30px;
    width: min-content;
    text-align:center;
    font-size:18px;
    background-color: #b0c6dd;
    border-radius: 10px;
    color:blue;
 `

const Button = styled.button`
        display:flex;
        align-item: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 8px;
        color: blue;
        background: linear-gradient(to right, #9C27B0, #E040FB);
        border: 0;
         font-family: 'Ubuntu', sans-serif;
        font-size: 15px;
        padding:10px;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
    &:hover {
        background-color: #105b72;
     }
`
const Input = styled.input`
    display:flex;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
     border: 2px solid rgba(0, 0, 0, 0.02);
    ::placeholder,
    ::-webkit-input-placeholder {
        color: black;
    }
    :-ms-input-placeholder {
        color: black;
    }
    &:hover, 
    &:focus{
         border: 2px solid rgba(0, 0, 0, 0.18)
    }

`
const ButtonsContainer = styled.div`
        display: flex;
        flex-direction: row;
        gap: 10px;
        `


export { Button, Input, Wrapper, OneCont, ButtonsContainer, Body }