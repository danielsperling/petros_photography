import Head from 'next/head'
import { useRouter } from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap"
import style from '../styles/Carousel.module.css'

// TODO: Add actual images
const gallery = {
	"home": [
		"../home/1.jpg",
		"../home/2.jpg",
		"../home/3.jpg",
		"../home/4.jpg",
		"../home/5.jpg",
		"../home/6.jpg",
		"../home/7.jpg",
		"../home/8.jpg",
		"../home/9.jpg",
		"../home/10.jpg",
		"../home/11.jpg",
		"../home/12.jpg",
		"../home/13.jpg",
		"../home/14.jpg",
		"../home/15.jpg",
		"../home/16.jpg",
		"../home/17.jpg",
		"../home/18.jpg",
		"../home/19.jpg",	
		"../home/20.jpg",
		"../home/21.jpg",
		"../home/22.jpg",
		"../home/23.jpg",
		"../home/25.jpg",
		"../home/26.jpg",
		"../home/27.jpg",
		"../home/28.jpg",
		"../home/29.jpg",
		"../home/30.jpg",

	]
}

const Home = () => {
	// const router = useRouter()
	const id = "home"
	const galleryIds = Object.keys(gallery)
	if (!galleryIds.includes(id)) {
		return <div>Gallery not found</div>
	}

	return (

		<div className='main_menu'>
			<Head>
				<title>Nikolas-Petros Androbik Photography </title>
			</Head>
			<Carousel
				slide={false}
				fade
				className={style.container}
				indicators={false}

			> {gallery[id].map((picture) => {
				return <Carousel.Item key={picture}>
					<img
						loading="lazy"
						className={style.image}
						src={picture}
						alt="First slide"
					/>
				</Carousel.Item>
			})}
			</Carousel>
		</div >
	)
}


export default Home

