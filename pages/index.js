import Head from 'next/head'
import { useRouter } from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap"
import style from '../styles/Carousel.module.css'

// TODO: Add actual images
const gallery = {
	"vogue": [
		"../vogue/A.jpg",
		"../vogue/B.jpg",
		"../vogue/C.jpg",
		"../vogue/D.jpg",
		"../vogue/E.jpg",
		"../vogue/F.jpg",
		"../vogue/G.jpg",
		"../vogue/H.jpg",
		"../vogue/I.jpg",
		"../vogue/J.jpg",
		"../vogue/K.jpg",
		"../vogue/L.jpg",
		"../vogue/N.jpg",
		"../vogue/O.jpg",
		"../vogue/P.jpg",
		"../vogue/Q.jpg",
		"../vogue/R.jpg",
		"../vogue/S.jpg",
		"../vogue/T.jpg"
	]
}

const Home = () => {
	// const router = useRouter()
	const id = "vogue"
	const galleryIds = Object.keys(gallery)
	if (!galleryIds.includes(id)) {
		return <div>Gallery not found</div>
	}

	return (

		<div className='main_menu'>
			<Head>
				<title> androbik Photography </title>
			</Head>
			<Carousel
				slide={false}
				fade
				className={style.container}
				indicators={true}

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
