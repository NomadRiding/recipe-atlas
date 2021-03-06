import React from 'react';
import { Carousel } from 'react-bootstrap';
import pasta1 from './Images/pasta1.jpg';
import pasta2 from './Images/pasta2.jpg';
import pasta3 from './Images/Pizza2.jpg';

const image = {
  height: "500px",
  width: '900px',
  margin: 'auto'
}

const PastaCarousel = () => {
  return(
    <div>
    <div className = "PastaCarousel">
    <Carousel style={image}>
      <Carousel.Item>
        <img style={image} width={900} height={500} src={'https://www.giallozafferano.it/images/ricette/36/3601/foto_hd/hd450x300.jpg'} alt="No picture" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img style={image} width={900} height={500} src={'https://images-gmi-pmc.edge-generalmills.com/5b31acd1-946b-4eb1-bb5c-b9141056178f.jpg'} />



        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img style={image} width={900} height={500} src={'https://cocineroaficionado.com/wp-content/uploads/2015/09/tiraminu-s.jpg'} />



        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
</div>
  )
}

export default PastaCarousel;

// <Carousel>
//   <Carousel.Item>
//     <img width={900} height={500} alt="Pasta allo scarpariello" src="/picture/burger.png" />
//     <Carousel.Caption>
//       <h3>Pasta allo scarpariello</h3>
//       <p>Spaguetti with tomato and cheese, classic and delicious.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//     <Carousel.Item>
//        <img width={900} height={500} alt="Italian Chicken Alfredo" src="/https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiStOWojtzeAhVHQ6wKHdP-DKwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pillsbury.com%2Frecipes%2Fchicken-alfredo-with-sun-dried-tomato-cream%2Fced4d088-8139-4bdc-9bc3-7238d9017ca3&psig=AOvVaw3tOsoE0apIVYRRYGD1sMeB&ust=1542567611135780" />
//        <Carousel.Caption>
//          <h3>Italian Chicken Alfredo</h3>
//          <p>The classic pasta we just cannot seem to get enough of.</p>
//        </Carousel.Caption>
//      </Carousel.Item>
//      <Carousel.Item>
//        <img width={900} height={500} alt="Creamy Tuscan Sausage Pasta" src="/https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj2xJO5jtzeAhVKXK0KHalCAbUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.hellofresh.com%2Frecipes%2Ftuscan-sausage-and-pepper-spaghetti-59fb7caa0534680c271f7c52&psig=AOvVaw0-NaN4So8JcQ53y-FeE3qo&ust=1542567643657375" />
//        <Carousel.Caption>
//          <h3>Creamy Tuscan Sausage Pasta</h3>
//          <p>Quick and easy linguine recipe you can never go wrong with.</p>
//        </Carousel.Caption>
//      </Carousel.Item>
//      <Carousel.Item>
//        <img width={900} height={500} alt="Marguerita Pizza" src="/https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj-xLHGjNzeAhUKOa0KHYchCFEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.marthastewart.com%2F1142600%2Fsimple-pizza-margherita&psig=AOvVaw2ce8dNFitl3vPn2aFs7UT0&ust=1542567136491465" />
//        <Carousel.Caption>
//          <h3>Marguerita Pizza</h3>
//          <p>Simple, yet delicious.</p>
//        </Carousel.Caption>
//      </Carousel.Item>
//      <Carousel.Item>
//        <img width={900} height={500} alt="Pizza Arrotolata" src="/https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiSkriGjdzeAhVFR6wKHUv1A0MQjRx6BAgBEAU&url=https%3A%2F%2Fricette.giallozafferano.it%2FPizza-arrotolata-pizza-Stromboli.html&psig=AOvVaw0tBNjDndT61veJMah7m-wE&ust=1542567271336997" />
//        <Carousel.Caption>
//          <h3>Pizza Arrotolata</h3>
//          <p>A fusion between pizza and a wrap</p>
//        </Carousel.Caption>
//      </Carousel.Item>
//      <Carousel.Item>
//        <img width={900} height={500} alt="Pizza Fritta" src="/https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjMp7imjdzeAhUFYKwKHeXWBN8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.foodiecrush.com%2Fhow-to-make-fried-pizza%2F&psig=AOvVaw1zfcP_Alqhi6-VT-DxfIau&ust=1542567319008482" />
//        <Carousel.Caption>
//          <h3>Pizza Fritta</h3>
//          <p>It is just like pizza, but fried!</p>
//        </Carousel.Caption>
//      </Carousel.Item>
//      <Carousel.Item>
//        <img width={900} height={500} alt="Tiramisu" src="/https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj_jb-9jdzeAhVIC6wKHcA9BaAQjRx6BAgBEAU&url=https%3A%2F%2Fcocineroaficionado.com%2Ftiramisu%2F&psig=AOvVaw2D_IA5c1tKKHz8fDLQWWgV&ust=1542567382318235" />
//        <Carousel.Caption>
//          <h3>Tiramisu</h3>
//        </Carousel.Caption>
//      </Carousel.Item>
//      <Carousel.Item>
//        <img width={900} height={500} alt="Chocolate Amaretti Cake" src="/https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjtvf3rjdzeAhUEbq0KHV7QCBkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.deliaonline.com%2Frecipes%2Fcollections%2Fdessert-cakes%2Famaretti-chocolate-cake&psig=AOvVaw1_eXiMXRQG5OTdnBXwdp8a&ust=1542567444390351" />
//        <Carousel.Caption>
//          <h3>Chocolate Amaretti Cake</h3>
//        </Carousel.Caption>
//      </Carousel.Item>
//      <Carousel.Item>
//        <img width={900} height={500} alt="Lemon Ricotta Cake" src="/https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjZsuuAjtzeAhVuja0KHaljA0AQjRx6BAgBEAU&url=https%3A%2F%2Fwww.copymethat.com%2Fr%2FMXdqAQR%2Flemon-ricotta-cake-with-candied-lemons%2F&psig=AOvVaw2OS3_90JTizwaMpc4keynd&ust=1542567525429108" />
//        <Carousel.Caption>
//          <h3>Lemon Ricotta Cake</h3>
//        </Carousel.Caption>
//      </Carousel.Item>
//     </Carousel>
