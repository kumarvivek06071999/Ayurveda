import React from 'react'
import Layout from '../../components/layout/Layout'
import OurProduct from '../../components/ourproduct/OurProduct'
import OurClinics from '../ourclinics/OurClinics'
import ViewAll from '../../components/viewall/ViewAll'
import Carousel from '../../components/carousel/Carousel'
import Diseases from '../../components/diseases/Diseases'
import Services from '../../components/services/Services'


const Home = () => {

  const producturl = '/products'
  const diseasesurl = '/diseases'

  return (
    <div className=' h-full'>
      <Layout  >
        <Carousel />
        <OurProduct />
        <ViewAll url={producturl} />
        <OurClinics />
        {/* <Diseases /> */}
        {/* <ViewAll url={diseasesurl} /> */}
        <Services />
      </Layout>
    </div>

  )
}

export default Home