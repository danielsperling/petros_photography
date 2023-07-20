import { useRouter } from "next/router"
import Script from "next/script"
import { Carousel } from "react-bootstrap"

import style from '../../styles/Carousel.module.css'


const gallery = {
    "vogue": [
        "../vogue/1.jpg",
        "../vogue/2.jpg",
        "../vogue/3.jpg",
        "../vogue/4.jpg",
        "../vogue/5.jpg",
        "../vogue/6.jpg",
        "../vogue/7.jpg",
        "../vogue/8.jpg",
        "../vogue/9.jpg",
        "../vogue/10.jpg",
        "../vogue/11.jpg",
        "../vogue/12.jpg",
        "../vogue/13.jpg",
        "../vogue/14.jpg",
        "../vogue/15.jpg",
        "../vogue/16.jpg",
        "../vogue/17.jpg",
        "../vogue/18.jpg",
        "../vogue/19.jpg"
    ],

    "vice": [
        "../vice/1.jpg",
        "../vice/2.jpg",
        "../vice/3.jpg",
        "../vice/4.jpg",
        "../vice/5.jpg",
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
        "../vice/30.jpg"
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
        "../vice_strip/15.jpg",
        "../vice_strip/16.jpg"
    ],

    "lookbook": [
        "../lookbook/1.jpg",
        "../lookbook/2.jpg",
        "../lookbook/3.jpg",
        "../lookbook/4.jpg",
        "../lookbook/5.jpg",
        "../lookbook/6.jpg",
        "../lookbook/7.jpg",
        "../lookbook/8.jpg",
        "../lookbook/9.jpg",
        "../lookbook/10.jpg",
        "../lookbook/11.jpg",
        "../lookbook/12.jpg",
        "../lookbook/13.jpg",
        "../lookbook/14.jpg"
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
        "../eagle_noir/1.jpg",
        "../eagle_noir/2.jpg",
        "../eagle_noir/3.jpg",
        "../eagle_noir/4.jpg",
        "../eagle_noir/5.jpg",
        "../eagle_noir/5.jpg",
        "../eagle_noir/7.jpg",
        "../eagle_noir/8.jpg",
        "../eagle_noir/9.jpg",
        "../eagle_noir/10.jpg",
        "../eagle_noir/11.jpg",
        "../eagle_noir/12.jpg",
        "../eagle_noir/13.jpg",
        "../eagle_noir/14.jpg",
        "../eagle_noir/15.jpg"
    ],

    "pandaland": [

        "../pandaland/1.jpg",
        "../pandaland/2.jpg",
        "../pandaland/3.jpg",
        "../pandaland/4.jpg",
        "../pandaland/5.jpg",
        "../pandaland/6.jpg",
        "../pandaland/7.jpg",
        "../pandaland/8.jpg",
        "../pandaland/9.jpg",
        "../pandaland/10.jpg",
        "../pandaland/11.jpg",
        "../pandaland/12.jpg"
    ],

    "edge": [
        "../edge/1.jpg",
        "../edge/2.jpg",
        "../edge/3.jpg",
        "../edge/4.jpg",
        "../edge/5.jpg",
        "../edge/6.jpg",
        "../edge/7.jpg",
        "../edge/8.jpg",
        "../edge/9.jpg",
        "../edge/10.jpg",
        "../edge/11.jpg",
        "../edge/12.jpg",
        "../edge/13.jpg",
        "../edge/14.jpg",
        "../edge/15.jpg",
        "../edge/16.jpg",
        "../edge/17.jpg",
        "../edge/18.jpg",
        "../edge/19.jpg",

    ],

    "dscene": [
        "../dscene/1.jpg",
        "../dscene/2.jpg",
        "../dscene/3.jpg",
        "../dscene/4.jpg",
        "../dscene/5.jpg",
        "../dscene/6.jpg",
        "../dscene/7.jpg",
        "../dscene/8.jpg",
        "../dscene/9.jpg",
        "../dscene/10.jpg",
        "../dscene/11.jpg",
        "../dscene/12.jpg",
        "../dscene/13.jpg",
        "../dscene/14.jpg",
        "../dscene/15.jpg",
        "../dscene/16A.jpg"

    ],

    "cake": [
        "../cake/1.jpg",
        "../cake/2.jpg",
        "../cake/3.jpg",
        "../cake/4.jpg",
        "../cake/5.jpg",
        "../cake/6.jpg",
        "../cake/7.jpg",
        "../cake/8.jpg",
        "../cake/9.jpg",
        "../cake/10.jpg",
        "../cake/11.jpg",
        "../cake/12.jpg"
    ],

    "aperitif": [
        "../aperitif/1.jpg",
        "../aperitif/2.jpg",
        "../aperitif/3.jpg",
        "../aperitif/4.jpg",
        "../aperitif/5.jpg",
        "../aperitif/6.jpg",
        "../aperitif/7.jpg",
        "../aperitif/8.jpg",
        "../aperitif/9.jpg"
    ],

    "kreuzberg": [
        "../kreuzberg/1.jpg",
        "../kreuzberg/2.jpg",
        "../kreuzberg/3.jpg",
        "../kreuzberg/4.jpg",
        "../kreuzberg/5.jpg",
        "../kreuzberg/6.jpg",
        "../kreuzberg/7.jpg",
        "../kreuzberg/8.jpg",
        "../kreuzberg/9.jpg",
        "../kreuzberg/10.jpg"
    ],

    "bloodshrimp": [
        "../bloodshrimp/1.jpg",
        "../bloodshrimp/2.jpg",
        "../bloodshrimp/3.jpg",
        "../bloodshrimp/4.jpg",
        "../bloodshrimp/5.jpg"
    ],

    "tattoo": [
        "../tattoo/1.jpg",
        "../tattoo/2.jpg",
        "../tattoo/3.jpg",
        "../tattoo/4.jpg",
        "../tattoo/5.jpg",
        "../tattoo/6.jpg",
        "../tattoo/7.jpg",
        "../tattoo/8.jpg",
        "../tattoo/9.jpg",
        "../tattoo/10.jpg",
        "../tattoo/11.jpg",
        "../tattoo/12.jpg",
        "../tattoo/13.jpg",
        "../tattoo/14.jpg",
        "../tattoo/15.jpg",
        "../tattoo/16.jpg",
        "../tattoo/17.jpg",
        "../tattoo/18.jpg",
        "../tattoo/19.jpg",
        "../tattoo/20.jpg",
        "../tattoo/21.jpg",
        "../tattoo/22.jpg",
        "../tattoo/23.jpg",
        "../tattoo/24.jpg",
        "../tattoo/25.jpg",
        "../tattoo/26.jpg",
        "../tattoo/27.jpg",
        "../tattoo/28.jpg",
        "../tattoo/29.jpg",
        "../tattoo/30.jpg",
    ],
    
    "keyi_magazine": [
        "../keyi_magazine/1.jpg",
        "../keyi_magazine/2.jpg",
        "../keyi_magazine/3.jpg",
        "../keyi_magazine/4.jpg",
        "../keyi_magazine/5.jpg",
        "../keyi_magazine/6.jpg",
        "../keyi_magazine/7.jpg",
        "../keyi_magazine/8.jpg",
        "../keyi_magazine/10.jpg",
        "../keyi_magazine/11.jpg",
        "../keyi_magazine/12.jpg",
        "../keyi_magazine/13.jpg",
        "../keyi_magazine/14.jpg"
    ],

    "fenyx": [
        "../fenyx/1.jpg",
        "../fenyx/2.jpg",
        "../fenyx/3.jpg",
        "../fenyx/4.jpg",
        "../fenyx/6.jpg",
        "../fenyx/7.jpg",
        "../fenyx/8.jpg",
        "../fenyx/9.jpg",
        "../fenyx/11.jpg",
        "../fenyx/12.jpg",
        "../fenyx/13.jpg",
        "../fenyx/14.jpg"
        
    ],

    "herbert": [
        "../herbert/1.jpg",
        "../herbert/2.jpg",
        "../herbert/3.jpg",
        "../herbert/4.jpg",
        "../herbert/5.jpg",
        "../herbert/6.jpg",
        "../herbert/7.jpg"
    ],

    "denim": [
        "../denim/1.jpg",
        "../denim/2.jpg",
        "../denim/3.jpg",
        "../denim/4.jpg",
        "../denim/5.jpg",
        "../denim/6.jpg",
        "../denim/7.jpg",
        "../denim/8.jpg",
        "../denim/9.jpg",
        "../denim/10.jpg",
        "../denim/11.jpg",

    ],

    "wrangler": [
        "../wrangler/1.jpg",
        "../wrangler/2.jpg",
        "../wrangler/3.jpg",
        "../wrangler/4.jpg",
        "../wrangler/5.jpg",
        "../wrangler/6.jpg",
        "../wrangler/7.jpg",
        "../wrangler/8.jpg",
        "../wrangler/9.jpg",
        "../wrangler/10.jpg",
        "../wrangler/11.jpg",
        "../wrangler/12.jpg",
        "../wrangler/13.jpg",
        "../wrangler/14.jpg",
        "../wrangler/15.jpg",
        "../wrangler/16.jpg",
        "../wrangler/17.jpg",
        "../wrangler/18.jpg",
        "../wrangler/19.jpg",
        "../wrangler/20.jpg",
        "../wrangler/21.jpg",
        "../wrangler/22.jpg",
        "../wrangler/23.jpg",
        "../wrangler/24.jpg",
        "../wrangler/25.jpg",
        "../wrangler/26.jpg"
    ],

    "tattoo": [
        "../tattoo/1.jpg",
        "../tattoo/2.jpg",
        "../tattoo/3.jpg",
        "../tattoo/4.jpg",
        "../tattoo/5.jpg",
        "../tattoo/6.jpg",
        "../tattoo/7.jpg",
        "../tattoo/8.jpg",
        "../tattoo/9.jpg",
        "../tattoo/10.jpg",
        "../tattoo/11.jpg",
        "../tattoo/12.jpg",
        "../tattoo/13.jpg",
        "../tattoo/14.jpg",
        "../tattoo/15.jpg",
        "../tattoo/16.jpg",
        "../tattoo/17.jpg",
        "../tattoo/18.jpg",
        "../tattoo/19.jpg",
        "../tattoo/20.jpg",
        "../tattoo/21.jpg",
        "../tattoo/22.jpg",
        "../tattoo/23.jpg",
        "../tattoo/24.jpg",
        "../tattoo/25.jpg",
        "../tattoo/26.jpg"
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
                loading="lazy"
                className={style.image}
                src={picture}
                alt="First slide"
            />
        </Carousel.Item>
    })}
    </Carousel>
}

export default Album


