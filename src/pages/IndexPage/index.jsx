import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function IndexPage() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default IndexPage
