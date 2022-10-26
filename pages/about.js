import Image from 'next/image'


export const About = (props) => {
    return (
        <div className="main">
          <div className="text"> 
            <h2>IMPRINT / IMPRESSUM </h2>
            <h2> 
                Nikolas-Petros Androbik 
            </h2>
            <h2>     
                Marchlewskistraße 93
                10243 Berlin,Germany
            </h2>
            <h2>
                E-Mail: niko.androbik@gmail.com
            </h2>
            <h2>
                Tel.: +4917683279474
            </h2>
            <br/>
            <h2>
                All photos are available for purchase.
                Print on Fuji Cristal DP II or Kodak Pro. Sizes and prices on request via mail.
            </h2>
            <br/>
            <h2>
                ©️ 2022 Nikolas-Petros Androbik
                The content and works on these pages created by the site operators are subject to German copyright law. The duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the creator. Downloads and copies of this site, in any form or by any means, are not permitted for private or commercial use. All rights reserved.
            </h2>
            <br/>
            <br/>
            <h2>
                Love Niko ❤️
            </h2>
          </div>

          <div className="picture">
                <Image 
                  src="/about_page.jpg"
                  alt="Picture of the author"
                  width={750}
                  height={500}   
                />
          </div>

        </div>

    )
};

export default About;

