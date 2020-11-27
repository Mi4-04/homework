import styled from 'styled-components';

export const NameAuth = styled.div `
  text-align: center;
`;

export const FormControl = styled.input `
    display: block;
    box-sizing: border-box;
    border:1px solid #bebebe;
    padding: 10px;
    margin: 0 0 5px;
    width: 100%;
    outline:none;
    transition: all 300ms ease-in-out;
    border-radius: 5px;
    box-shadow: 1px 1px 1px #0e0e0e;
    cursor: pointer;

    :hover{
     background: rgba(195, 195, 190, .2);
   }

   }
`;

export const Button = styled.button `

display: block;
background: #343a40;
color: rgb(256,256, 256);
font-size: 16px;
width: 100%;
padding: 10px;
border-radius: 5px;
:hover{
  background: #23272b;
}
`;


export const ErrorMsg = styled.p `
color: red;
:before {
  display: inline;
  content: "⚠ ";
}
`;
