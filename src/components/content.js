import React from "react";
import { Container, Icon, Grid, Header, Label, Segment, Button, Divider } from "semantic-ui-react";

const Content = () => {
  return (
    <Container>
      <Segment basic padded>
        <Header inverted
          as="h1"
          content="Daniel Camacho"
          subheader="Desarrollador Front-end"
          textAlign="center"
        />
      </Segment>

      {/* Contenedor principal */}

      <Grid columns="2">
        <Grid.Column width="4">
          <Segment padded>
            <Header as="h3" content="Sobre mi" textAlign="center" />
            Bienvenidos, soy Daniel Camacho.
            <br />
            Tengo amplia experincia trabajando en el area industrial pero estoy
            preparandome para los nuevos retos que implica el desarrollo web.
            <br />
            Navega en mi sitio y conoce un poco mas sobre mi y sobre mi trabajo.
          </Segment>

          <Segment textAlign='center'>
            <Button circular color="linkedin" icon="linkedin" />
            <Button circular color="black" icon="github" />
            <Button circular color="google plus" icon="google plus" />
            <Button circular color="youtube" icon="mail" />
          </Segment>
        </Grid.Column>

        <Grid.Column width="12">
          <Segment raised stacked>
            <Label as="a" color="blue" ribbon='right'>
              <Icon name="graduation cap" />
              Educacion
            </Label>

            <Grid columns={2} padded="vertically">
              <Grid.Column width="3">
                <Header
                  as="h4"
                  content="Academlo"
                  subheader="2021"
                  textAlign="center"
                />
              </Grid.Column>

              <Grid.Column width="13">
                <Header
                  as="h4"
                  content="Academia de desarrollo web full-stack"
                  subheader="En esta academia obtuve conocimientos sobre fundamentos base del desarrollo web (HTML + CSS), asi como el reforzamiento necesario para tener un mejor manejo de mi primer lenguaje (JS), el cual me ha permitido incursionar en el desarrollo de interfaces del lado del front-end con el uso de la librera REACT y tambien las bases del backend con el framework (Node.js, Express.js)"
                  textAlign="left"
                />
              </Grid.Column>

              <Grid.Column width="3">
                <Header
                  as="h4"
                  content="IESQ"
                  subheader="2020"
                  textAlign="center"
                />
              </Grid.Column>

              <Grid.Column width="13">
                <Header
                  as="h4"
                  content="Instituto de educacion santiago de queretaro"
                  subheader="Bachillerato"
                  textAlign="left"
                />
              </Grid.Column>
              
            </Grid>
            <Divider />
            
            <Label as="a" color="orange" ribbon='right'>
              <Icon name="calendar alternate" />
              Experiencia laboral
            </Label>

            <Grid columns={2} padded="vertically">
              <Grid.Column width="3">
                <Header
                  as="h4"
                  content="ACSA"
                  subheader="2015 - 2020"
                  textAlign="center"
                />
              </Grid.Column>

              <Grid.Column width="13">
                <Header
                  as="h4"
                  content="Auto Climatizacion S.A. de C.V."
                  subheader="En esta empresa me desempeñe como supervisor de obra encargado del aire acondicionado en la industria hotelera"
                  textAlign="left"
                />
              </Grid.Column>

              <Grid.Column width="3">
                <Header
                  as="h4"
                  content="ATOTAL"
                  subheader="2013 - 2015"
                  textAlign="center"
                />
              </Grid.Column>

              <Grid.Column width="13">
                <Header
                  as="h4"
                  content="Acondicionamiento Total S.A. de C.V."
                  subheader="En esta empresa me desempeñe como tecnico de aire acondicionado y ventilacion industrial"
                  textAlign="left"
                />
              </Grid.Column>
            </Grid>

            <Label as="a" color="teal" ribbon='right'>
              <Icon name="building" />
              Proyectos
            </Label>

            <Grid columns={2} padded="vertically">
              <Grid.Column width="3">
                <Header
                  as="h4"
                  content="Hoteles City Express"
                  subheader="2015 + 2017"
                  textAlign="center"
                />
              </Grid.Column>

              <Grid.Column width="13">
                <Header
                  as="h4"
                  content="Corporativo de oficinas y hotel City Express Plus Santa Fe"
                  subheader="Durante 2 años lleve a cabo la direccion del proyecto de aire acondicionado como mi primer cargo de supervision del edificio que sirvio de oficinas centrales y un complejo hotelero de 14 niveles y mas de 500 habitaciones de lujo. En este lugar aprendi las bases que me llevaron a obtener la experiencia y conocimientos necesarios para incursionar en el diseño de planos arquitectonicos, estimaciones de cobro, etc. Durante este periodo tambien realice constantes capacitaciones tecnicas con los fabricantes de la maquinaria proporcionada para la ejecucion."
                  textAlign="left"
                />
              </Grid.Column>

              <Grid.Column width="3">
                <Header
                  as="h4"
                  content="Hoteles City Express"
                  subheader="2018 - 2019"
                  textAlign="center"
                />
              </Grid.Column>

              <Grid.Column width="13">
                <Header
                  as="h4"
                  content="Corporativo de oficinas y hotel City Express Plus Interlomas"
                  subheader="Durante 2 años lleve a cabo la direccion del proyecto de aire acondicionado del edificio que sirvio de oficinas centrales y un complejo hotelero de 12 niveles y mas de 150 habitaciones de lujo"
                  textAlign="left"
                />
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Content;
