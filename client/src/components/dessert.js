import React from 'react';
// import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import { Card, Icon, Image } from 'semantic-ui-react';
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
],
dessertComponents = desserts.map(([src, title, description], i) => {
  return (<Card key={`dessert_${i}`}>
    <Image src={src} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </Card>)
}),
DessertDeck = () => dessertComponents;




// lemon ricotta cake: https://cmt.azureedge.net/media/orig_lemon_ricotta_cake_with_candied_lemons_20170403134855560196absb4.jpg
// chocolate amaretto cake: https://images.eatsmarter.com/sites/default/files/styles/facebook/public/chocolate-amaretto-cake-with-cream-topping-525182.jpg
// tiramisu: https://cocineroaficionado.com/wp-content/uploads/2015/09/tiraminu-s.jpg



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
