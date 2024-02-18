
import Hero from '../../components/hero/Hero'
import Layout from '../../components/layout/Layout'
import { useState, useEffect } from 'react';
import axios from 'axios';
const Home = () => {
  // State to hold hero data

  return (
    <>
        <Layout title={"HOME - PORTFOLIO"}>
          <Hero/>
        </Layout>
    </>
  )
}

export default Home