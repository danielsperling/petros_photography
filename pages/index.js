import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import first from '../public/first.jpg'

const MyImage = (props) => {
  return (
    <Image
      src={first}
      alt="Picture of the author"
      width="350px"
      height="300px"
    />
  )

  export default function Home() {
    return (
      <div className='main'>

        <div className='title'><h1>Nikolas - Petros Androvik</h1> </div>

        <div className='main_menu'>
          <h2>Home</h2>
          <br />
          <h2>German Bodybuilding - Vice</h2>
          <h2>Medusa - HUnger Magazine</h2>
          <h2>Dress to Kill - OffTheRails Magazine</h2>
          <h2>Eagle Noir - Numero Berlin</h2>
          <h2>The Edge - Contributor Magazine</h2>
          <h2>I Dance Alone - Dscene Magazine</h2>
          <h2>YNRY - Lookboock </h2>
        </div>



      </div>




    )

  }


