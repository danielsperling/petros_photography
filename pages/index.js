import Head from 'next/head'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel from '../styles/Carousel.module.css'



export default function Home() {
  return (

    <div className='main_menu'>
      <Head>
        <title> androbik Photography </title>
      </Head>

	  <Carousel
	  		className={carousel.container}
			slide={false}
			controls={true}
			touch={true}
			
		>
			<Carousel.Item>
				<img
					className={carousel.image}
					src="../main_page_fotos/2-min.jpg"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item
			>
				<img
					className={carousel.image}
					src="../main_page_fotos/3-min.jpg"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item
>
				<img
					className={carousel.image}
					src="../main_page_fotos/4-min.jpg"
					alt="First slide"
				/>
			</Carousel.Item>

			<Carousel.Item>
				<img
					className={carousel.image}
					src="../main_page_fotos/5-min.jpg"
					alt="First slide"
				/>
			</Carousel.Item>	
			<Carousel.Item>
				<img
					className={carousel.image}
					src="../main_page_fotos/6-min.jpg"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className={carousel.image}
					src="../main_page_fotos/7-min.jpg"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className={carousel.image}
					src="../main_page_fotos/8a-min.jpg"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className={carousel.image}
					src="../main_page_fotos/9-min.jpg"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className={carousel.image}
					src="../main_page_fotos/10-min.jpg"
					alt="First slide"
				/>
			</Carousel.Item>		
		</Carousel>
		

    </div >
  )
}




