import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import UserLoanApplications from './UserLoanApplications';
import UserLoanOffers from './UserLoanOffers';
import ApplyLoan from './ApplyLoan';  

function App() {
  return (

    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/LoanOffers/:id" element={<UserLoanOffers />} />
        <Route path="/LoanApplications" element={<UserLoanApplications />} />
        <Route path="/ApplyLoan" element={<ApplyLoan />} />
      </Routes>   
  </BrowserRouter>

  );
}

export default App;
