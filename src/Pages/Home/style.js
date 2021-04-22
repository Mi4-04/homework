import styled from 'styled-components';

export const GeneralTop = styled.div`
  background: ${(props) => (props.dark ? 'rgb(41, 43, 44)' : 'black')};
  color: ${(props) => (props.dark ? 'white' : 'black')};
  height: 500px;
  padding-top: 30px;
  border: 1px solid rgba(2, 3, 3, 0.5);
  margin-top: 30px;
  box-shadow: 0 0 14px 0 rgba(3, 5, 7, 0.35);
`;

export const HeaderName = styled.div`
  display: block;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
`;

export const HeaderInfo1 = styled.div`
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 18px;
`;

export const HeaderInfo2 = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 1;
  margin-bottom: 40px;
`;
export const Iorders = styled.button`
  width: 160px;
  height: 60px;
  border: 1px solid rgba(2, 3, 3, 0.5);

  font-size: 16px;
`;

export const IExecutors = styled.button`
  width: 160px;
  height: 60px;
  border: 1px solid rgba(2, 3, 3, 0.5);

  font-size: 16px;
`;

export const DivButton = styled.div`
text-align: center;
display: flex;

justify-content: center;

align-items: center;
`;
