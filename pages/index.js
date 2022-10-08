import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import first from '../public/first.jpg'



export default function Home() {
  return (

    <div className='main_menu'>
      <Head>
        <title> androbik Photography </title>

      </Head>

      <div className='gallery'>
        <Image src={first} />
      </div>

    </div >



  )

}






{/* <div className='menu'>

  <h2>Home</h2>
  <br />
  <h2>German Bodybuilding - Vice</h2>
  <h2>Medusa - HUnger Magazine</h2>
  <h2>Dress to Kill - OffTheRails Magazine</h2>
  <h2>Eagle Noir - Numero Berlin</h2>
  <h2>The Edge - Contributor Magazine</h2>
  <h2>I Dance Alone - Dscene Magazine</h2>
  <h2>YNRY - Lookboock </h2>

  <br />

  <h2>contact/order</h2>
  <h2> IG @adrobik</h2>

</div> */}