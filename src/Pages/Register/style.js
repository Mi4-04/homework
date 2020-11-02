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

export const ErrorMsg = styled.p `

color: red;
:before {
  display: inline;
  content: "⚠ ";
}
`;

export const DivSelect = styled.div `

text-align: center;

`;

export const LabelSelect  =styled.label `
font-size: 18px;
padding-bottom: 25px;
margin-left: 25px;
margin-right:15px;


`;
