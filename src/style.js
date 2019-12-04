import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    display: block;
    background: darkgrey;
    width:100%;
    height: 100vh;
`
export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    background:darkseagreen;
    overflow: hidden;
`
export const Obj = styled.div`
    position: relative;
    height: 70%;
    background: red;
    display: flex;
    top:50%;
    transform: translateY(-50%);
  `
export const Item = styled.div`
    height: 100%;
    transition: all 1s;
    display:flex;
    align-items:center;
    justify-content:center;
    h1{
        font-size:24px;
        color:#484848;
    }
    &:nth-child(1){
        background: yellow;
    }
    &:nth-child(2){
        background: yellowgreen;
    }
    &:nth-child(3){
        background:violet;
    }
`