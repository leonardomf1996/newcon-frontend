import { useState } from 'react';
import { Container, Header, ButtonAdd, Form, Input, ButtonSearch, List, ItemList } from './styles';
import Logo from '../../components/Logo';
import api from '../../services/api';
import { Link } from 'react-router-dom';

function Main() {
   const [points, setPoints] = useState(null); // Armazena o resultado da busca na API
   const [errors, setErrors] = useState(null); // Responsável pelos erros
   const [inputPoints, setInputPoints] = useState(''); // Responsável pelo input

   const handleChange = (event) => {
      setInputPoints(event.target.value);
   };

   const handleSubmit = async (event) => {
      event.preventDefault();

      if (!inputPoints) {
         try {
            const response = await api.get(`points/`);         
            setPoints(response.data);
            setErrors(null);
         } catch (error) {
            setErrors('Pontos turísticos não encontrados!');
            setPoints(null);
         }
      }

      try {         
         const response = await api.get(`points/${inputPoints}`);               
         setPoints(response.data);
         setErrors(null);

      } catch (error) {
         setErrors('Ponto turístico não encontrado!');
         setPoints(null);
      }
   };

   return (
      <Container>
         <Header>
            <Logo />
            <Link to={'/NewPoint'}>
               <ButtonAdd>
                  cadastrar um ponto turístico
               </ButtonAdd>
            </Link>
         </Header>

         <Form onSubmit={handleSubmit}>
            <Input
               value={inputPoints}
               placeholder="Digite um termo para buscar um ponto turístico"
               onChange={handleChange}
            />
            <ButtonSearch>
               Buscar
            </ButtonSearch>
         </Form>

         {errors && (<span>{errors}</span>)}
         <List>
            
            {points && points.map(point => (
               <ItemList key={point.id}>
                  <h1>{point.name}</h1>
                  <p>{point.description}</p>
                  <p>{point.city}/{point.state}</p>
                  <p>{point.reference}</p>
               </ItemList>
            ))}
         </List>

      </Container>
   );
}

export default Main;
