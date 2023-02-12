import Carousel from 'react-bootstrap/Carousel';
import icon from '../resources/icon.PNG'
function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={icon}
          style = {{height: '70vh', marginBottom: '3rem'}}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-primary text-bold'>Easy Order</h3>
          <p>Order your Product with just one Click</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={icon}
          style = {{height: '70vh', marginBottom: '3rem'}}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='text-primary text-bold'>Shimple Ship</h3>
          <p>We Deliver Your Product in no time with no extra charges</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={icon}
          style = {{height: '70vh', marginBottom: '3rem'}}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='text-primary text-bold'>Discount Offer</h3>
          <p>
            Avail huge discounts to get multiple products.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;