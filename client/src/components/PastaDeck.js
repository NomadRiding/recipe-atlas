import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
const pastas = [
  [
    'https://www.giallozafferano.it/images/ricette/198/19843/foto_hd/hd650x433_wm.jpg',
    'Pasta allo Scarpariello',
    'Tiramisu is an elegant and rich layered Italian dessert made with delicate ladyfinger cookies, espresso or instant espresso, mascarpone cheese, eggs, sugar, Marsala wine, rum and cocoa powder.' ,
  ],
  [
    'https://images-gmi-pmc.edge-generalmills.com/5b31acd1-946b-4eb1-bb5c-b9141056178f.jpg',
    'chicken Alfredo Pasta',
    'This is an incredibly moist, intensely chocolate cake, perfect for chocoholics, chicken Alfredo Pasta is so delicious, ',

  ],
  [
    'https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/11/Creamy-Sundried-Tomato-Pasta-with-Italian-Sausage-and-Veggies-GI-365-6.jpg',
    'Creamy Tuscan Sausage Pasta',
    'This recipe is a family gem that was passed down from my grandmother and mother. Garnished with shaved lemon zest, the moist four-layer cake is the perfect dessert when you want to impress',
  ],
],
pastaComponents = pastas.map(([src, title, subtitle, text], i) => {
    return (
      <Card className="pasta" key={`pasta${i}`}>
      <CardImg className='pasta-cards' src={src} alt="Card image cap" />
      <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
          <CardText>
              {text}

          </CardText>
          <Button>Button</Button>
      </CardBody>
    </Card>
  )
  }),
  pastaOptions = pastas.map(([_, title, __, ___], i) => {
    return <option key={`option${i}`} value={title}>{title}</option>
  });

  class PastaDeck extends React.Component {
    render() {
        return <div>
            <div>
              <div className="titleStuff">
                <select className="optionBarCont" name="select">
                  {pastaOptions}
                </select>
                <h2>Pasta</h2>
              </div>
            </div>
            
            <div>
              <CardDeck className="pasta-group">
                {pastaComponents}
              </CardDeck>
            </div>
          </div>;
    }
  }
export default PastaDeck;


//pasta allo scarpariello: https://www.giallozafferano.it/images/ricette/198/19843/foto_hd/hd650x433_wm.jpg
//chicken alfredo: https://images-gmi-pmc.edge-generalmills.com/5b31acd1-946b-4eb1-bb5c-b9141056178f.jpg
//creamy tuscan sausage pasta:
