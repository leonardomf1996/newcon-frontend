import { useState } from 'react';
import { Container, Header, Form, Line, Input, Label, Datalist, InputDatalist, TextArea, Button, LineButton, ButtonBack } from './styles';
import Logo from '../../components/Logo';
import api from '../../services/api';
import { Link } from 'react-router-dom';

function NewPoint() {
   const initialFields = {
      name: '',
      city: '',
      state: '',
      description: '',
      reference: ''
   };
   const [values, setValues] = useState(initialFields);

   const handleInputChange = (event) => {
      let { name, value } = event.target;

      setValues({
         ...values,
         [name]: value
      })
   }

   const handleFormSubmit = (event) => {
      event.preventDefault();

      if (values.name === '' || values.city === '' || values.state === '' || values.state === '' || values.description === '' || values.reference === '') {
         return;
      }
      const json = {
         name: values.name,
         city: values.city,
         state: values.state,
         description: values.description,
         reference: values.reference
      };
      const response = api.post('points', json);
      /* const response = await api.post("posts", {image, title, content }); */
      setValues(initialFields);
   }

   return (
      <Container>

         <Header>
            <Logo />
         </Header>

         <Form onSubmit={handleFormSubmit}>
            <Line>
               <Label>
                  Nome:
               </Label>
               <Input
                  placeholder="..."
                  name="name"
                  value={values.name}
                  onChange={handleInputChange}
               />
            </Line>

            <Line>
               <Label>
                  Localização
               </Label>
            </Line>

            <Line>
               <Label>
                  UF/Cidade
               </Label>
               <InputDatalist
                  list="uf"
                  placeholder="UF"
                  name="state"
                  value={values.state}
                  onChange={handleInputChange}
               />
               <Datalist id="uf">
                  <option value="AC" />
                  <option value="AL" />
                  <option value="AM" />
                  <option value="AP" />
                  <option value="BA" />
                  <option value="CE" />
                  <option value="DF" />
                  <option value="ES" />
                  <option value="GO" />
                  <option value="MA" />
                  <option value="MG" />
                  <option value="MS" />
                  <option value="MT" />
                  <option value="PA" />
                  <option value="PB" />
                  <option value="PE" />
                  <option value="PI" />
                  <option value="PR" />
                  <option value="RJ" />
                  <option value="RN" />
                  <option value="RO" />
                  <option value="RR" />
                  <option value="RS" />
                  <option value="SC" />
                  <option value="SE" />
                  <option value="SP" />
                  <option value="TO" />
               </Datalist>
               <Input
                  placeholder="..."
                  name="city"
                  value={values.city}
                  onChange={handleInputChange}
               />
            </Line>

            <Line>
               <Label>
                  Referência:
               </Label>
               <Input
                  placeholder="..."
                  name="reference"
                  value={values.reference}
                  onChange={handleInputChange}
               />
            </Line>

            <Line>
               <Label>
                  Descrição:
               </Label>
               <TextArea
                  placeholder="..."
                  name="description"
                  value={values.description}
                  onChange={handleInputChange}
               />
            </Line>

            <LineButton>

               <Button>
                  Cadastrar
               </Button>
            </LineButton>
         </Form>

         <Link to={'/'}>
            <ButtonBack>
               Voltar
            </ButtonBack>
         </Link>

      </Container>
   );
}

export default NewPoint;
