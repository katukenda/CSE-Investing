import React, { useState } from 'react';
import {
  
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './Slider.scss';
import {Row,Col, Card} from 'reactstrap';

const items = [
    {

      src: 'https://scontent.fcmb10-1.fna.fbcdn.net/v/t1.0-9/108021537_169614024679621_2493885574940107358_n.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=Cy5TUFC_LTkAX9CG55n&_nc_ht=scontent.fcmb10-1.fna&oh=27ff9f96a32f4b18306590f8508b52b6&oe=5F96AEB4',
      altText: 'Slide 1',
      caption: 'Slide 1',
      
    },
  {
      src: "https://scontent.fcmb10-1.fna.fbcdn.net/v/t1.0-9/119779209_164440305359944_2287914920948287315_n.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=1I-3Fvmv4x4AX-rKuoo&_nc_ht=scontent.fcmb10-1.fna&oh=7c5c283f9e1772d6c892fe75845a9e92&oe=5F9500BF",
    altText: 'Slide 2',
    caption: 'Slide 2'
  },

{
    src : 'https://scontent.fcmb10-1.fna.fbcdn.net/v/t1.0-9/119469185_162617345542240_3033755568092049918_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=BEdqrpW0Xf8AX9kQD-n&_nc_ht=scontent.fcmb10-1.fna&oh=83476f9ad041136f1c04fca220fe6f75&oe=5F973015',
  altText: 'Slide 3',
  caption: 'Slide 3'
},
{
    src : 'https://scontent.fcmb10-1.fna.fbcdn.net/v/t1.0-9/119606177_162234988913809_4123002879528063255_n.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_ohc=A6SZSZ8OhLcAX9nnwfS&_nc_ht=scontent.fcmb10-1.fna&oh=aba3fbeb14a1549400e38785969baea1&oe=5F945BBF',
  altText: 'Slide 5',
  caption: 'Slide 5'
},
{
    src : "https://scontent.fcmb10-1.fna.fbcdn.net/v/t1.0-9/119009177_159021145901860_5407758878984222592_n.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_ohc=iXI7wM-mo0cAX-1Ddrj&_nc_ht=scontent.fcmb10-1.fna&oh=8444965d2c20d502b98e0ffcf9db4925&oe=5F950C29",
  altText: 'Slide 4',
  caption: 'Slide 4'
},
{
    src : 'https://scontent.fcmb10-1.fna.fbcdn.net/v/t1.0-9/118944147_188748596099497_6820811632800513946_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_ohc=CALDO_g8wRoAX-qpwUU&_nc_ht=scontent.fcmb10-1.fna&oh=a7e2e61f109268c6b1667ffee005f719&oe=5F94EC1E',
  altText: 'Slide 6',
  caption: 'Slide 6'
},
{
    src : 'https://scontent.fcmb10-1.fna.fbcdn.net/v/t1.0-9/116550120_178798540427836_8682434405414002167_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=9z2mT9egbeQAX_uW49a&_nc_oc=AQmEllrrVincoFsaN_78n6jGDZ6yLtwkayZANs9sN4WO72DMoJwlGgziYwH7qHiz1ys&_nc_ht=scontent.fcmb10-1.fna&oh=865058cb811a33b808793210ef5f2a26&oe=5F95D050',
  altText: 'Slide 7',
  caption: 'Slide 7'
},
{
    src : 'https://scontent.fcmb10-1.fna.fbcdn.net/v/t1.0-9/117343773_178498493791174_5062772885370215596_n.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_ohc=eE1H9xUvtGwAX89Os-g&_nc_ht=scontent.fcmb10-1.fna&oh=24524cca8c901a5902d7c93e504bb61a&oe=5F964FE4',
  altText: 'Slide 8',
  caption: 'Slide 8'
},
{
    src : 'https://scontent.fcmb10-1.fna.fbcdn.net/v/t1.0-9/109278584_173605577613799_3545595028002613461_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=HfX9Wcp4Aj8AX-ARetu&_nc_ht=scontent.fcmb10-1.fna&oh=80a06bf9ec1c4b9a374b43a301aa769f&oe=5F973576',
  altText: 'Slide 9',
  caption: 'Slide 9',
},
{
    src : 'https://scontent.fcmb10-1.fna.fbcdn.net/v/t1.0-9/109473280_172519827722374_7217320006910388994_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=KQrCNO-iu7kAX-m0LWv&_nc_ht=scontent.fcmb10-1.fna&oh=400025a688c052db79949a56770ed4e1&oe=5F96FEE8',
  altText: 'Slide 11',
  caption: 'Slide 11',
},
{
    src :'https://scontent.fcmb10-1.fna.fbcdn.net/v/t1.0-9/112337813_170853737888983_7858105196485856242_o.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_ohc=MJc7_D09qU8AX-4hJVJ&_nc_ht=scontent.fcmb10-1.fna&oh=df7c22a092076eb9832e78793e10aa57&oe=5F9417B5',
  altText: 'Slide 10',
  caption: 'Slide 10'
}




  
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (  
    <div  className={"main"}>

      <Row>
        <Col lg="12" >
          
    <Carousel
   
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
     
      
      {slides}
    
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
   
    </Col>
    </Row>
    </div> 
  );
}

export default Example;