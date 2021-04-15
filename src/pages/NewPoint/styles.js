import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const Header = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin-top: 40px;
   width: 60%;
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   margin-top: 20px;
   width: 60%;
`;

export const Line = styled.div`
   width: 100%;
   height: 30px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin-top: 20px;
`;

export const Label = styled.label`
   color: #000;
   font-weight: bold;
   font-size: 16px;   
`;

export const Input = styled.input`
   width: 80%;
   height: 40px;   
`;

export const InputDatalist = styled.input`
   width: 10%;
   height: 40px;   
`;

export const Datalist = styled.datalist`
   width: 10%;
   height: 40px;
`;

export const TextArea = styled.textarea`
   width: 80%;
   height: 80px;   
   margin-top: 40px;
`;

export const Button = styled.button`
   width: 20%;
   height: 40px;
   background: #CCC;
   color: #000;
   margin-left: 600px;
   margin-top: 90px; 
`;

export const ButtonBack = styled.button`
   width: 150px;
   height: 40px;
   background: #CCC;
   color: #000;
   margin-right: 400px;
   
`;

export const LineButton = styled.div`
   width: 80%;
   height: 40px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin-top: 70px;
   margin-left: 180px;
`;
