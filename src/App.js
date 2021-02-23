import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap-v5";
import { OrderForm } from "./components/OrderForm";
import { CustomersTable } from "./components/CustomersTable";
import CustomersContext from "./CustomersContext";
import Logo from "./logo.jpg";

function App() {
  return (
    <Container className="p-3">
      <div className="d-flex justify-content-center">
        <Image src={Logo} width="200px" height="200px" />
      </div>
      <Row>
        <Col xs={12} md={8}>
          <CustomersContext.Provider value={[{ name: "Abdul Fatah" }]}>
            <CustomersTable />
          </CustomersContext.Provider>
        </Col>
        <Col xs={12} md={4}>
          <OrderForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
