import Image from 'next/image'
import Navbar from './navbar/page'
import Homes from './body/page'
import Category from './Category/page'
import Footer from './footer/footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Homes/>
      <Category/>
      <Footer/>
       
    </div>
  )
}
