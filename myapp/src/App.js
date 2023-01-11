import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AddForm from './components/AddForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import AddTable from './components/AddTable';
function App() {
  return (
    <Container>
      <Navbar />
      <Row className="justify-content-md-center">
        <Col lg='6'>
          <AddForm />
          <AddTable /> 
          
        </Col>
      </Row>
    </Container>
  );
}

export default App;
