import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';


const pizzas = [
  [
    "https://assets.marthastewart.com/styles/wmax-1500/d31/pizza-margherita-0606-mla102155/pizza-margherita-0606-mla102155_sq.jpg?itok=3FuCCotM",
    "Marguerita Pizza",
    "Card subtitle",
    `This is a wider card with supporting text below as
                      a natural lead-in to additional content. This
                      content is a little bit longer.`
  ],
  [
    "https://www.giallozafferano.it/images/ricette/36/3601/foto_hd/hd450x300.jpg",
    "Pizza Arrotolata",
    "Card subtitle",
    `This is a wider card with supporting text below as
                      a natural lead-in to additional content. This
                      content is a little bit longer.`
  ],
  [
    "http://www.ricettapizzanapoletana.it/images/pizza_fritta_napoletana.jpg",
    "Pizza Fritta",
    "Fried Pizza",
    `This is a wider card with supporting text below as
                      a natural lead-in to additional content. This
                      content is a little bit longer.`,
  ],
],
pizzaComponents = pizzas.map(([src, title, subtitle, text], i) => {
    return (<Card className="pizza" key={`pizza_${i}`}>
        <CardImg src={src} alt="Card image cap" />
        <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{subtitle}</CardSubtitle>
            <CardText>
                {text}
                    </CardText>
            <Button className="button-Pizza">Button</Button>
        </CardBody>
    </Card>)
}),
pizzaOptions = pizzas.map(([_, title, __, ___], i) => {
    return <option key={`option${i}`} value={title}>{title}</option>
});

class PizzaDeck extends React.Component {
    render() {
        return <div>
            <div>
              <div className="titleStuff">
                <select className="optionBarCont" name="select">
                  {pizzaOptions}
                </select>
                <h2>Pizza</h2>
              </div>
            </div>

            <div className="pizzaGroup">
              <CardDeck className="pizzaCards">
                    {pizzaComponents}
              </CardDeck>
            </div>
          </div>;
    }
}


export default PizzaDeck;
