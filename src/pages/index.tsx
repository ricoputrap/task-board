import { NextPageWithLayout } from './_app'
import MainLayout from '@/components/layout/MainLayout'
import { ReactElement } from 'react'
import Header from '@/components/organisms/_board/Header'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Header />

      <main>
        Task Board Content
      </main>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default Home;