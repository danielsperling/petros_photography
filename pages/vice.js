import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel from '../styles/Carousel.module.css'


function UncontrolledExample() {
	return (
		<Carousel
			slide={false}
			className={carousel.container}
			indicators={false}
		>
			<Carousel.Item>
				<img
					className={carousel.image}
					src="../vice/0.jpg"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item
			>
				<img
					className={carousel.image}
					src="../vice/1.jpg"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item
>
				<img
					className={carousel.image}
					src="../vice/2.jpg"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className={carousel.image}
					src="../vice/3.jpg"
					alt="First slide"
				/>
			</Carousel.Item>	
			<Carousel.Item>
				<img
					className={carousel.image}
					src="../vice/4.jpg"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className={carousel.image}
					src="../vice/5.jpg"
					alt="First slide"
				/>
			</Carousel.Item>		
		</Carousel>
	);
}

export default UncontrolledExample;
