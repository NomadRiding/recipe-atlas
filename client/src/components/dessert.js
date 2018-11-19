import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import { Card, Icon, Image } from 'semantic-ui-react';
const dessert1 ='./Images/dessert1.jpg';
const dessert2 = './Images/dessert2.jpg';
const dessert3 = './Images/dessert3.jpg';


const DessertDeck = () => (
  <Card>
    <Image src={dessert1} />
    <Card.Content>
      <Card.Header>Tiramisu</Card.Header>
      <Card.Description>Tiramisu is an elegant and rich layered Italian dessert made with delicate ladyfinger cookies, espresso or instant espresso, mascarpone cheese, eggs, sugar, Marsala wine, rum and cocoa powder.</Card.Description>
    </Card.Content>
  </Card>
  <Card>
    <Image src={dessert2} />
    <Card.Content>
      <Card.Header>Chocolate Amaretto Cake</Card.Header>
      <Card.Description>This is an incredibly moist, intensely chocolate cake, perfect for chocoholics</Card.Description>
    </Card.Content>
  </Card>
  <Card>
    <Image src={dessert3} />
    <Card.Content>
      <Card.Header>Lemon Ricotta Cake</Card.Header>
      <Card.Description>This recipe is a family gem that was passed down from my grandmother and mother. Garnished with shaved lemon zest, the moist four-layer cake is the perfect dessert when you want to impress</Card.Description>
    </Card.Content>
  </Card>






)




// class DessertDeck extends React.Component {
//     render() {
//         return(
//             <div>
//                <div>
//                 <div className="titleStuff">
//                 <select className="optionBarCont" name="select">
//                     <option value="first Dish">First Dessert</option>
//                     <option value="second Dish">Second Dessert</option>
//                     <option value="third Dish">Third Dessert</option>
//                 </select>
//                 <h2>Dessert</h2>
//              </div>
//              </div>
//                 <div className="dessertGroup">
//                 <CardDeck className="dessertCards">
//                     < Card className = "firstDessert" >
//                     <CardImg src={dessert1} alt="Card image cap" />
//                     <CardBody>
//                         <CardTitle>Tiramisu</CardTitle>
//                         <CardSubtitle>Card subtitle</CardSubtitle>
//                         <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
//                         <Button>Button</Button>
//                     </CardBody>
//                     </Card>
//                      < Card className = "secondDessert" >
//                     <CardImg src={dessert2} alt="Card image cap" />
//                     <CardBody>
//                         <CardTitle>Chocolate Amaretto Cake</CardTitle>
//                         <CardSubtitle>Card subtitle</CardSubtitle>
//                         <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
//                         <Button>Button</Button>
//                     </CardBody>
//                     </Card>
//                      < Card className = "thirdDessert" >
//                     <CardImg src={dessert3} alt="Card image cap" />
//                     <CardBody>
//                         <CardTitle>Lemon Ricotta Cake</CardTitle>
//                         <CardSubtitle>Card subtitle</CardSubtitle>
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


export default DessertDeck;
