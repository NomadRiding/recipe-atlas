import React from 'react';
// import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import { Card, Icon, Image } from 'semantic-ui-react';
const pizzas = [
  [
    'https://assets.marthastewart.com/styles/wmax-1500/d31/pizza-margherita-0606-mla102155/pizza-margherita-0606-mla102155_sq.jpg?itok=3FuCCotM',
    'Margueritta Pizza',
    'Tiramisu is an elegant and rich layered Italian dessert made with delicate ladyfinger cookies, espresso or instant espresso, mascarpone cheese, eggs, sugar, Marsala wine, rum and cocoa powder.' ,
  ],
  [
    'http://www.ricettapizzanapoletana.it/images/pizza_fritta_napoletana.jpg',
    'Pizza Fritta',
    'This is an incredibly moist, intensely chocolate cake, perfect for chocoholics',
  ],
  [
    'https://www.giallozafferano.it/images/ricette/36/3601/foto_hd/hd450x300.jpg',
    'Pizza Arrotolata',
    'This recipe is a family gem that was passed down from my grandmother and mother. Garnished with shaved lemon zest, the moist four-layer cake is the perfect dessert when you want to impress',
  ],
],
pizzaComponents = pizzas.map(([src, title, description], i) => {
  return (<Card key={`pizza_${i}`}>
    <Image src={src} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </Card>)
}),
PizzaDeck = () => pizzaComponents;
export default PizzaDeck;


















// import React from 'react';
// import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
// const pizza1 = './Images/pizza1.jpg';
// const pizza2 = './Images/pizza2.jpg';
// const pizza3 = './Images/pizza3.jpg';
//
//
// class PizzaDeck extends React.Component {
//     render() {
//         return(
//             <div>
//                  <div>
//                 <div className="titleStuff">
//                 <select className="optionBarCont" name="select">
//                     <option value="first Dish">First Pizza</option>
//                     <option value="second Dish">Second Pizza</option>
//                     <option value="third Dish">Third Pizza</option>
//                 </select>
//                 <h2>Pizza</h2>
//              </div>
//              </div>
//                 <div className="pizzaGroup">
//                 <CardDeck className="pizzaCards">
//                     < Card className = "firstPizza" >
//                     <CardImg src={pizza2} alt="Card image cap" />
//                     <CardBody>
//                         <CardTitle>Marguerita Pizza</CardTitle>
//                         <CardSubtitle>Card subtitle</CardSubtitle>
//                         <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
//                         <Button>Button</Button>
//                     </CardBody>
//                     </Card>
//                      < Card className = "secondPizza" >
//                     <CardImg src={pizza1} alt="Card image cap" />
//                     <CardBody>
//                         <CardTitle>Pizza Arrotolata</CardTitle>
//                         <CardSubtitle>Card subtitle</CardSubtitle>
//                         <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
//                         <Button>Button</Button>
//                     </CardBody>
//                     </Card>
//                      < Card className = "thirdPizza" >
//                     <CardImg src={pizza3} alt="Card image cap" />
//                     <CardBody>
//                         <CardTitle>Pizza Fritta</CardTitle>
//                         <CardSubtitle>Fried Pizza</CardSubtitle>
//                         <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
//                         <Button>Button</Button>
//                     </CardBody>
//                     </Card>
//                 </CardDeck>
//             </div>
//             </div>
//         )
//     }
// }
//
//
// export default PizzaDeck;

//marguerita pizza: https://assets.marthastewart.com/styles/wmax-1500/d31/pizza-margherita-0606-mla102155/pizza-margherita-0606-mla102155_sq.jpg?itok=3FuCCotM
//pizza fritta: http://www.ricettapizzanapoletana.it/images/pizza_fritta_napoletana.jpg
//pizza arrotolata: https://www.giallozafferano.it/images/ricette/36/3601/foto_hd/hd450x300.jpg
