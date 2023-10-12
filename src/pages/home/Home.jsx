import React from 'react'
import Layout from '../../components/layout/Layout'
import OurProduct from '../../components/ourproduct/OurProduct'
import OurClinics from '../ourclinics/OurClinics'
import ViewAll from '../../components/viewall/ViewAll'
import Carousel from '../../components/carousel/Carousel'
import Diseases from '../../components/diseases/Diseases'


const Home = () => {

  const producturl = '/products'

  return (
    <div className=' h-full'>
      <Layout  >
        <Carousel />
        <OurProduct />
        <ViewAll url={producturl} />
        <OurClinics />
        <Diseases />
      </Layout>
    </div>

  )
}

export default Home