import React, { Fragment, useState } from "react";
import { Button, Icon, Segment, Modal, Header, List, Divider, Grid, Image } from "semantic-ui-react";
import Background from "../background/background";
import Resources from "../Resources/Quotes.json";

import "./styles.css";

const Quotes = () => {
  const initialState = {
    quote: "Welcome to Quotes App",
    author: "Click for start & enjoy!",
    button: "Start",
    id: null,
  };

  const [quoteList, setQuoteList] = useState(initialState); // Quote
  const [bgColor, setBgColor] = useState({ universe: "#000", stars: "#fff" }); // Background
  const [open, setOpen] = useState(false); // Modal

  const handleQuote = () => {
    // Arroja un objeto con colores invertidos para el componente background
    bgColor.universe === "#000"
      ? setBgColor({ universe: "#fff", stars: "#000" })
      : setBgColor({ universe: "#000", stars: "#fff" });

    if (quoteList.id === null) {
      return setQuoteList({ ...Resources.quotes[0], id: 0, button: "Next" });
    } else {
      if (quoteList.id === 102) {
        return setQuoteList(initialState);
      } else {
        return setQuoteList({
          ...Resources.quotes[quoteList.id + 1],
          id: quoteList.id + 1,
          button: "Next",
        });
      }
    }
  };


  return (
    <Fragment>
      <Background universe={bgColor.universe} stars={bgColor.stars} />
      <div className="centerfixed">
        <div className="author" style={{ color: bgColor.stars }}> - {quoteList.author}</div>

        <div className="quotes" style={{ color: bgColor.stars }}>
          <Icon name="quote left" />
          {quoteList.quote}
          <Icon name="quote right" />
        </div>
        <Segment basic>
        <Button color="black" onClick={() => setOpen(true)} icon="info" />
          <Button
            disabled={quoteList.id === null ? true : false}
            color="twitter"
            as="a"
            href={
              'https://twitter.com/intent/tweet?text="' +
              quoteList.quote +
              '" - ' +
              quoteList.author
            }
          >
            <Icon name="twitter" /> Twitter
          </Button>
          <Button color='black'>
          {quoteList.id === null ? Resources.quotes.length : (quoteList.id + 1) + '/' + Resources.quotes.length } Quotes
          </Button>
          <Button
            color="black"
            content={quoteList.button}
            floated="right"
            onClick={handleQuote}
          />
        </Segment>
      </div>

      <Modal
        inverted
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        dimmer="inverted"
      >
        <Header as="h1" textAlign="center">
          About
        </Header>

        <Modal.Content>
          <List>
            <List.Item>
              <List.Icon name="expand" />
              <List.Content>
                <List.Header>Fullscreen</List.Header>
                <List.Description>
                  <b>Windows: </b> Enter this mode with <b>F11</b>
                  <br />
                  <b>OSX: </b> Enter this mode with <b>CMD + SHIFT + F</b>
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Content>
                <Divider horizontal>
                  <Header as="h4">
                    <Icon name="lab" />
                    This project was built with the following resources
                  </Header>
                </Divider>
              </List.Content>
            </List.Item>
          </List>
          <Grid columns={3} centered>
            <Grid.Column>
              <Image
                rounded
                src="https://miro.medium.com/max/3840/1*TpK5V6D6Gd0IKwd1mdNF4A.png"
              />
            </Grid.Column>
            <Grid.Column>
              <Image
                rounded
                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/64432744/original/73eb9acfc6b6b3e46367b52302159530df94ca2c/fix-your-ui-bugs.jpg"
              />
            </Grid.Column>
            <Grid.Column>
              <Image
                rounded
                src="https://vincentgarreau.com/particles.js/assets/img/particlesjs-og.png"
              />
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Developed by Daniel Camacho"
            floated="left"
            color="google plus"
          />
          <Button color="black" onClick={() => setOpen(false)}>
            <Icon name="times" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    </Fragment>
  );
};
export default Quotes;
