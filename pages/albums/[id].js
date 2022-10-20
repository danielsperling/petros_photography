import { useRouter } from "next/router"
import { Carousel } from "react-bootstrap"
import Image from 'next/image'

import style from '../../styles/Carousel.module.css'


const gallery = {
    "vogue":[
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
    ],

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
        "../medusa/15.jpg"
        ],
    
    "dress_to_kill": [
        "../dress_to_kill/1.jpg",
        "../dress_to_kill/2.jpg",
        "../dress_to_kill/3.jpg",
        "../dress_to_kill/4.jpg",
        "../dress_to_kill/5.jpg",
        "../dress_to_kill/6.jpg",
        "../dress_to_kill/7.jpg",
        "../dress_to_kill/8.jpg",
        "../dress_to_kill/9.jpg",
        "../dress_to_kill/10.jpg",
        "../dress_to_kill/11.jpg",
        "../dress_to_kill/12.jpg",
        "../dress_to_kill/13.jpg",
        "../dress_to_kill/14.jpg",
        "../dress_to_kill/15.jpg",
        "../dress_to_kill/16.jpg",
        "../dress_to_kill/17.jpg",
        "../dress_to_kill/18.jpg",
        "../dress_to_kill/19.jpg",
        "../dress_to_kill/20.jpg",
        "../dress_to_kill/21.jpg",
        "../dress_to_kill/22.jpg",
        "../dress_to_kill/23.jpg",
        "../dress_to_kill/24.jpg",
        "../dress_to_kill/25.jpg",
        "../dress_to_kill/26.jpg",
        "../dress_to_kill/27.jpg",
        "../dress_to_kill/28.jpg",
        "../dress_to_kill/29.jpg",
        "../dress_to_kill/30.jpg",
        "../dress_to_kill/31.jpg"
        ],

        "vice_strip": [
            "../vice_strip/1.jpg",
            "../vice_strip/2.jpg",
            "../vice_strip/3.jpg",
            "../vice_strip/4.jpg",
            "../vice_strip/5.jpg",
            "../vice_strip/6.jpg",
            "../vice_strip/7.jpg",
            "../vice_strip/8.jpg",
            "../vice_strip/9.jpg",
            "../vice_strip/10.jpg",
            "../vice_strip/11.jpg",
            "../vice_strip/12.jpg",
            "../vice_strip/13.jpg",
            "../vice_strip/14.jpg",
            "../vice_strip/15.jpg"
        ],

        "lookbook": [
            "../lookbook/0.jpg",
            "../lookbook/1.jpg",
            "../lookbook/2.jpg",
            "../lookbook/3.jpg",
            "../lookbook/4AAA.jpg",
            "../lookbook/5.jpg",
            "../lookbook/6.jpg",
            "../lookbook/7.jpg",
            "../lookbook/8.jpg",
            "../lookbook/9.jpg",
            "../lookbook/10.jpg",
            "../lookbook/11.jpg",
            "../lookbook/12.jpg",
            "../lookbook/13.jpg",
            "../lookbook/14.jpg",
            "../lookbook/15.jpg",
            "../lookbook/16.jpg",
            "../lookbook/17.jpg",
            "../lookbook/18.jpg",
            "../lookbook/19.jpg",
            "../lookbook/20.jpg",
            "../lookbook/21.jpg",
            "../lookbook/22.jpg",
            "../lookbook/23.jpg",
            "../lookbook/25.jpg",
            "../lookbook/26.jpg",
            "../lookbook/27.jpg",
            "../lookbook/29.jpg",
            "../lookbook/30.jpg",
            "../lookbook/31.jpg"
        ],
    
        "matilda": [
            "../matilda/1.jpg",
            "../matilda/2.jpg",
            "../matilda/3.jpg",
            "../matilda/4.jpg",
            "../matilda/5.jpg",
            "../matilda/6.jpg",
            "../matilda/7.jpg",
            "../matilda/8.jpg",
            "../matilda/9.jpg",
            "../matilda/10.jpg"
        ],

        "eagle_noir": [
            "../eagle_noir/STEVE_1.jpg",
            "../eagle_noir/STEVE_2.jpg",
            "../eagle_noir/STEVE_3.jpg",
            "../eagle_noir/STEVE_4.jpg",
            "../eagle_noir/STEVE_7.jpg",
            "../eagle_noir/STEVE_8.jpg",
            "../eagle_noir/STEVE_9.jpg",
            "../eagle_noir/STEVE_10.jpg",
            "../eagle_noir/STEVE_10a.jpg",
            "../eagle_noir/STEVE_14.jpg",
            "../eagle_noir/STEVE_15.jpg",
            "../eagle_noir/STEVE_17.jpg",
            "../eagle_noir/STEVE_18.jpg",
            "../eagle_noir/STEVE_19.jpg",
            "../eagle_noir/STEVE_20.jpg",
            "../eagle_noir/STEVE_21.jpg",
            "../eagle_noir/STEVE_22aa.jpg"
        ],

        "dress_to_kill": [
            "../pandaland/PANDALAND_1.jpg",
            "../pandaland/PANDALAND_2.jpg",
            "../pandaland/PANDALAND_3.jpg",
            "../pandaland/PANDALAND_4.jpg",
            "../pandaland/PANDALAND_5.jpg",
            "../pandaland/PANDALAND_6.jpg",
            "../pandaland/PANDALAND_7.jpg",
            "../pandaland/PANDALAND_8.jpg",
            "../pandaland/PANDALAND_9.jpg",
            "../pandaland/PANDALAND_10.jpg",
            "../pandaland/PANDALAND_11.jpg",
            "../pandaland/PANDALAND_12.jpg",
            "../pandaland/PANDALAND_13.jpg",
            "../pandaland/PANDALAND_14.jpg",
            "../pandaland/PANDALAND_15.jpg",
            "../pandaland/PANDALAND_16.jpg",
            "../pandaland/PANDALAND_17.jpg",
            "../pandaland/PANDALAND_18.jpg",
            "../pandaland/PANDALAND_19.jpg",
            "../pandaland/PANDALAND_20.jpg",
            ],

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
        return <Carousel.Item key={picture}>
            <img
                className={style.image}
                src={picture}
                alt="First slide"
            />
        </Carousel.Item>
    })}
    </Carousel>
}

export default Album
