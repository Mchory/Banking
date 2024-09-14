import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIN = { firstName: 'Mchory'};

  return (
    <div>
      <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
               <HeaderBox
                  type = "greeting"
                  title="Welcome"
                  user={loggedIN?.firstName || 'Guest'}
                  subtext="Acces and manage your account and transactions efficiently."
               />
               <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrencyBalance={1250.45}
              />
            </header>
            
        </div>
        </section> 
    </div>
  )
}

export default Home
