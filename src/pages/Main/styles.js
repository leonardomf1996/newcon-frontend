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

export const ButtonAdd = styled.button`
   width: 300px;
   height: 40px;
   background: #CCC;
   color: #000;
`;

export const Form = styled.form`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin-top: 40px;
   width: 60%;
`;

export const Input = styled.input`
   width: 70%;
   height: 40px;   
`;

export const ButtonSearch = styled.button`
   width: 20%;
   height: 40px;
   background: #CCC;
   color: #000;
`;

export const List = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   margin-top: 40px;
   padding: 10px;
   width: 60%;
   
`;

export const ItemList = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   margin-top: 10px;      
`;
