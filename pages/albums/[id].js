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
        "../edge/Nikolas_Androbik_01.jpg",
        "../edge/Nikolas_Androbik_02.jpg",
        "../edge/Nikolas_Androbik_04.jpg",
        "../edge/Nikolas_Androbik_05.jpg",
        "../edge/Nikolas_Androbik_06.jpg",
        "../edge/Nikolas_Androbik_07.jpg",
        "../edge/Nikolas_Androbik_08.jpg",
        "../edge/Nikolas_Androbik_09.jpg",
        "../edge/Nikolas_Androbik_10.jpg",
        "../edge/Nikolas_Androbik_12.jpg",
        "../edge/Nikolas_Androbik_14.jpg",
        "../edge/Nikolas_Androbik_15.jpg",
        "../edge/Nikolas_Androbik_16.jpg",
        "../edge/Nikolas_Androbik_17.jpg",
        "../edge/Nikolas_Androbik_19a.jpg",
        "../edge/Nikolas_Androbik_20.jpg",
        "../edge/Nikolas_Androbik_21.jpg",
        "../edge/Nikolas_Androbik_22.jpg",
        "../edge/Nikolas_Androbik_23.jpg",
        "../edge/Nikolas_Androbik_24.jpg",
        "../edge/Nikolas_Androbik_25.jpg",
        "../edge/Nikolas_Androbik_26.jpg"
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
        "../cake/A.jpg",
        "../cake/B.jpg",
        "../cake/C.jpg",
        "../cake/D.jpg",
        "../cake/E.jpg",
        "../cake/F.jpg",
        "../cake/G.jpg",
        "../cake/H.jpg",
        "../cake/J.jpg",
        "../cake/K.jpg",
        "../cake/L.jpg",
        "../cake/TIA_MAMIYA_4aaa.jpg",
    ],

    "aperitif": [
        "../aperitif/A.jpg",
        "../aperitif/B.jpg",
        "../aperitif/Ba.jpg",
        "../aperitif/C.jpg",
        "../aperitif/D.jpg",
        "../aperitif/E.jpg",
        "../aperitif/F.jpg",
        "../aperitif/G.jpg",
        "../aperitif/H.jpg",
        "../aperitif/I.jpg",
        "../aperitif/J.jpg",
        "../aperitif/K.jpg",
        "../aperitif/Z.jpg",
    ],

    "wrangler": [
        "../wrangler/1.jpg",
        "../wrangler/2.jpg",
        "../wrangler/3.jpg",
        "../wrangler/4.jpg",
        "../wrangler/5.jpg",
        "../wrangler/6.jpg",
        "../wrangler/7.jpg",
        "../wrangler/7a.jpg",
        "../wrangler/10.jpg",
        "../wrangler/10(1).jpg",
        "../wrangler/11.jpg",
        "../wrangler/12.jpg",
        "../wrangler/13.jpg",
        "../wrangler/14.jpg",
        "../wrangler/15.jpg",
        "../wrangler/16.jpg",
        "../wrangler/18.jpg",
        "../wrangler/20.jpg",
        "../wrangler/21.jpg",
        "../wrangler/22.jpg",
        "../wrangler/24.jpg",
        "../wrangler/25.jpg",
        "../wrangler/26.jpg",
        "../wrangler/27.jpg",
        "../wrangler/28.jpg",
        "../wrangler/29.jpg",
        "../wrangler/30.jpg",
        "../wrangler/31.jpg"
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
        "../keyi_magazine/14.jpg",
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
        "../fenyx/All_0.jpg",
    ],

    "herbert": [
        "../herbert/1.jpg",
        "../herbert/2.jpg",
        "../herbert/3.jpg",
        "../herbert/4.jpg",
        "../herbert/5.jpg"
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
        "../denim/12.jpg"

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


