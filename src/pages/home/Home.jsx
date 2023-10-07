import React from 'react'
import Layout from '../../components/layout/Layout'
import SimpleSlider from '../../components/carousel/Carousel'
import OurProduct from '../../components/ourproduct/OurProduct'


const Home = () => {

  return (
    <div className=' h-full'>
      <Layout  >
        <SimpleSlider />
        <OurProduct />
      </Layout>
    </div>

  )
}

export default Home