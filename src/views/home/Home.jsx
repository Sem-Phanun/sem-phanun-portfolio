
import Hero from '../../components/hero/Hero'
import './home.scss'
import Layout from '../../components/layout/Layout'
const Home = () => {
  return (
    <>
        <Layout title={"HOME - PORTFOLIO"}>
          <Hero/>
          {/* <About/>
          <Skill/>
          <Project/> */}
        </Layout>
    </>
  )
}

export default Home