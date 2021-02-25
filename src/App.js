import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Navbar,
  NavDropdown,
  Nav,
} from "react-bootstrap-v5";
import { OrderForm } from "./components/OrderForm";
import { CustomersTable } from "./components/CustomersTable";
import CustomersContext from "./CustomersContext";
import Logo from "./logo.png";

function App() {
  const nav = (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <div className="d-flex justify-content-center">
          <Image src={Logo} width="70px" height="50px" />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="customers">Customers</Nav.Link>
          <Nav.Link href="orders">Orders</Nav.Link>
          <Nav.Link href="payments">Payments</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

  return (
    <>
      <div className="mx-3 px-2">{nav}</div>
      <Container fluid className="p-3">
        <Row>
          <Col md={8}>
            <CustomersContext.Provider value={[{ name: "Abdul Fatah" }]}>
              <CustomersTable />
            </CustomersContext.Provider>
          </Col>
          <Col md={4}>
            <OrderForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
