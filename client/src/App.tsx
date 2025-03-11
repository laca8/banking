import Account from './pages/account/Account'
import Transactions from './pages/process/Transactions'
import Deposit from './components/process/Deposit'
import Transfer from './components/process/Transfer'
import Withdraw from './components/process/Withdraw'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/features/Header'
import Footer from './components/features/Footer'
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Account />}></Route>
        <Route path='/process/deposit' element={<Deposit />}></Route>
        <Route path='/process/transfer' element={<Transfer />}></Route>
        <Route path='/process/withdraw' element={<Withdraw />}></Route>
        <Route path='/process' element={<Transactions />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
