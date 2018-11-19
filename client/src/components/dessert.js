import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

const desserts = [
  [
    'https://cocineroaficionado.com/wp-content/uploads/2015/09/tiraminu-s.jpg',
    'Tiramisu',
    'Tiramisu is an elegant and rich layered Italian dessert made with delicate ladyfinger cookies, espresso or instant espresso, mascarpone cheese, eggs, sugar, Marsala wine, rum and cocoa powder.' ,
  ],
  [
    'https://images.eatsmarter.com/sites/default/files/styles/facebook/public/chocolate-amaretto-cake-with-cream-topping-525182.jpg',
    'Chocolate Amaretto Cake',
    'This is an incredibly moist, intensely chocolate cake, perfect for chocoholics',
  ],
  [
    'https://cmt.azureedge.net/media/orig_lemon_ricotta_cake_with_candied_lemons_20170403134855560196absb4.jpg',
    'Lemon Ricotta Cake',
    'This recipe is a family gem that was passed down from my grandmother and mother. Garnished with shaved lemon zest, the moist four-layer cake is the perfect dessert when you want to impress',
  ],
].map(e => [...e.slice(0, 3), 'my subtitle', ...e.slice(2)]), // insert a subtitle
dessertComponents = desserts.map(([src, title, subtitle, text], i) => {
  return (<Card className="dessert" key={`dessert_${i}`}>
  <CardImg src={src} alt="Card image cap" />
  <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
      <CardText>
          {text}
              </CardText>
      <Button>Button</Button>
  </CardBody>
</Card>)
}),
dessertOptions = desserts.map(([_, title, __, ___], i) => {
  return <option key={`option${i}`} value={title}>{title}</option>
});

class DessertDeck extends React.Component {
  render() {
      return <div>
          <div>
            <div className="titleStuff">
              <select className="optionBarCont" name="select">
                {dessertOptions}
              </select>
              <h2>Dessert</h2>
            </div>
          </div>
          
          <div className="pizzaGroup">
            <CardDeck className="pizzaCards">
                  {dessertComponents}
            </CardDeck>
          </div>
        </div>;
  }
}


export default DessertDeck;
