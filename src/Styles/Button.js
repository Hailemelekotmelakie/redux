import styled from 'styled-components'

const Wrapper = styled.div`
        display:flex;
        flex-direction: column;
        align-item:center;
        justify-content: center;
        background-color: #FFFFFF;
        gap:30px;
        border-radius: 1.5em;
        box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
`

const Button = styled.button`
    //     display:flex;
    //     cursor: pointer;
    //     border-radius: 8px;
    //     color: #fff;
    //     background: linear-gradient(to right, #9C27B0, #E040FB);
    //     border: 0;
    //     width:min-content;
    //     font-family: 'Ubuntu', sans-serif;
    //     font-size: 15px;
    //     padding:10px;
    //     box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
    // &:hover {
    //     background-color: #105b72;
    //  }
`
const Input = styled.input`
    //     display:flex;
    // width: 76%;
    // color: rgb(38, 50, 56);
    // font-weight: 700;
    // font-size: 14px;
    // letter-spacing: 1px;
    // background: rgba(136, 126, 126, 0.04);
    // padding: 10px 20px;
    // border: none;
    // border-radius: 20px;
    // outline: none;
    // box-sizing: border-box;
    // border: 2px solid rgba(0, 0, 0, 0.02);
    //      &:hover, &:focus{
    //         border: 2px solid rgba(0, 0, 0, 0.18)
    //     }
`



export { Button, Input, Wrapper }