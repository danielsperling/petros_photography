import { useRouter } from "next/router"
import { Carousel } from "react-bootstrap"
import style from '../../styles/Carousel.module.css'


const gallery = {
    "vice": [
        "../vice/0.jpg",
        "../vice/1.jpg",
        "../vice/2.jpg",
        "../vice/3.jpg",
        "../vice/4.jpg",
        "../vice/5.jpg",
        "../vice/5B.jpg",
        "../vice/6.jpg",
        "../vice/7.jpg",
        "../vice/8.jpg",
        "../vice/9.jpg",
        "../vice/10.jpg",
        "../vice/11.jpg",
        "../vice/12.jpg",
        "../vice/14.jpg",
        "../vice/15.jpg",
        "../vice/16.jpg",
        "../vice/17.jpg",
        "../vice/18.jpg",
        "../vice/19.jpg",
        "../vice/20.jpg",
        "../vice/21.jpg",
        "../vice/22.jpg",
        "../vice/23.jpg",
        "../vice/24.jpg",
        "../vice/25.jpg",
        "../vice/26.jpg",
        "../vice/27.jpg",
        "../vice/28.jpg",
        "../vice/29.jpg",
        "../vice/30.jpg",
        "../vice/31.jpg",
        "../vice/32.jpg",
        "../vice/44.jpg"
    ],
    "medusa": [
        "../medusa/1.jpg",
        "../medusa/2.jpg",
        "../medusa/3.jpg",
        "../medusa/4.jpg",
        "../medusa/5.jpg",
        "../medusa/6.jpg",
        "../medusa/7.jpg",
        "../medusa/8.jpg",
        "../medusa/9.jpg",
        "../medusa/10.jpg",
        "../medusa/11.jpg",
        "../medusa/12.jpg",
        "../medusa/13.jpg",
        "../medusa/14.jpg",
        "../medusa/15.jpg",
        ]
}

const Album = () => {
    const router = useRouter()
    const id = router.query.id
    const galleryIds = Object.keys(gallery)
    if (!galleryIds.includes(id)) {
        return <div>Gallery not found</div>
    }

    return <Carousel
        slide={false}
        fade
        className={style.container}
        indicators={false}
    > {gallery[id].map((picture) => {
        return <Carousel.Item>
            <img
                className={style.image}
                src={picture}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    })}
    </Carousel>
}

export default Album
