import React from 'react';
// import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import { Card, Icon, Image } from 'semantic-ui-react';
const pastas = [
  [
    'https://www.giallozafferano.it/images/ricette/198/19843/foto_hd/hd650x433_wm.jpg',
    'Pasta allo Scarpariello',
    'Tiramisu is an elegant and rich layered Italian dessert made with delicate ladyfinger cookies, espresso or instant espresso, mascarpone cheese, eggs, sugar, Marsala wine, rum and cocoa powder.' ,
  ],
  [
    'https://images-gmi-pmc.edge-generalmills.com/5b31acd1-946b-4eb1-bb5c-b9141056178f.jpg',
    'chicken Alfredo Pasta',
    'This is an incredibly moist, intensely chocolate cake, perfect for chocoholics',
  ],
  [
    'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto/v1/hellofresh_s3/image/tuscan-sausage-and-pepper-spaghetti-743e2dd9.jpg',
    'Creamy Tuscan Sausage Pasta',
    'This recipe is a family gem that was passed down from my grandmother and mother. Garnished with shaved lemon zest, the moist four-layer cake is the perfect dessert when you want to impress',
  ],
],
pastaComponents = pastas.map(([src, title, description], i) => {
  return (<Card key={`pasta_${i}`}>
    <Image src={src} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </Card>)
}),
PastaDeck = () => pastaComponents;
export default PastaDeck;


//pasta allo scarpariello: https://www.giallozafferano.it/images/ricette/198/19843/foto_hd/hd650x433_wm.jpg
//chicken alfredo: https://images-gmi-pmc.edge-generalmills.com/5b31acd1-946b-4eb1-bb5c-b9141056178f.jpg
//creamy tuscan sausage pasta:
