import styled from 'styled-components'

export const Main = styled.div`
height: 100vh;
width: 100vw;
background-color: rgba(0, 0, 0, .4);
position: fixed;
top: 0;
left: 0;
display: flex;
align-item: center;
justify-content: center;

`;

export const Content = styled.div`
margin-top: 100px;
padding: 20px;
border-radius: 12px;
background-color: rgba(245, 245, 245, 1);
height: 250px;
width: 450px;

`;

export const UploadInput = styled.input`
display: none;
`;

export const UploadLabel = styled.label`
border: 2px dashed green;
padding: 5px 10px;
cursor: pointer;
margin-left: 20px;
margin-bottom: 20px;
margin-right: 20px; 
`;

export const Div = styled.div`
display: flex;
align-item: left;
margin-top: 50px;
margin-left: 20px;
`;
