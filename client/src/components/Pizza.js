import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';


const pizzas = [
  [
    "https://assets.marthastewart.com/styles/wmax-1500/d31/pizza-margherita-0606-mla102155/pizza-margherita-0606-mla102155_sq.jpg?itok=3FuCCotM",
    "Marguerita Pizza",
    
    `Pizza Margherita is a typical Neapolitan pizza, made with San Marzano tomatoes, 
    mozzarella fior di latte, fresh basil, salt and extra-virgin olive oil.`
  ],
  [
    "https://www.giallozafferano.it/images/ricette/36/3601/foto_hd/hd450x300.jpg",
    "Pizza Arrotolata",
    
    `The rolled pizza , known as pizza Stromboli, 
    is a preparation that comes from the USA, but brings with it exquisitely Italian flavors.`
  ],
  [
    "http://www.ricettapizzanapoletana.it/images/pizza_fritta_napoletana.jpg",
    "Pizza Fritta",
  
    `The Italian dish of pizza fritta (plural pizze fritte) originates in Napoli, and is usually 
    made by frying a disk of pizza dough before applying toppings and serving.`,
  ],
],
pizzaComponents = pizzas.map(([src, title, subtitle, text], i) => {
    return (<Card className="pizza" key={`pizza_${i}`}>
        <CardImg className='pizza-cards' src={src} alt="Card image cap" />
        <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{subtitle}</CardSubtitle>
            <CardText>
                {text}
                    </CardText>
            <Button className="button-Pizza">view recipe</Button>
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
            
            <div>
              <CardDeck className="pizza-group">
                    {pizzaComponents}
              </CardDeck>
            </div>
          </div>;
    }
}


export default PizzaDeck;
