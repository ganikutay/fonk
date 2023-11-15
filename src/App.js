import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import Button from 'react-bootstrap/Button'; // eger sadece react-bootstrap yazsaydik, butun componentleri ice cekerdi ancak kullanmadiklarimizi da ceker ve projeyi agirlastirirdi.


function App() {
  return (
    <div >
      <Footer />
      <Header />
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>


    </div>
  );
}

export default App;
