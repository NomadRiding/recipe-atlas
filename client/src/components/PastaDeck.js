import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';




class PastaDeck extends React.Component {
    render() {
        return(
            <div className="pastaGroup-A">
                <div>
                <div className="pastaStuff">
                <select className="optionBar" name="select">
                    <option value="first Dish">First Pasta</option>
                    <option value="second Dish">Second Pasta</option>
                    <option value="third Dish">Third Pasta</option>
                </select>
                <h2>Pasta</h2>
             </div>
             </div>
                <div className="pastaGroup">
                <CardDeck className="pastaCards">
                    < Card className = "firstPasta" >
                    <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                    </Card>
                     < Card className = "secondPasta" >
                    <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                    </Card>
                     < Card className = "thirdPasta" >
                    <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                    </Card>
                </CardDeck>
            </div>
            </div>
        )
    }
}


//pasta allo scarpariello: https://www.giallozafferano.it/images/ricette/198/19843/foto_hd/hd650x433_wm.jpg
//chicken alfredo: https://images-gmi-pmc.edge-generalmills.com/5b31acd1-946b-4eb1-bb5c-b9141056178f.jpg
//creamy tuscan sausage pasta:
