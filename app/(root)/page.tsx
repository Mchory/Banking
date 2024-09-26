import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIN = { firstName: 'Mchory', lastName: 'Aroun', email:'aroun@gmail.com'};

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
            RECENT TRANSACTIONS
        </div>
         <RightSidebar 
          user={loggedIN}
          transactions={[]}
          banks={[{}, {}]}
         />

        </section> 
    </div>
  )
}

export default Home
