import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap-v5";
import { OrderForm } from "./components/OrderForm";
import { CustomersTable } from "./components/CustomersTable";
import CustomersContext from "./CustomersContext";

function App() {
  return (
    <Container className="mt-4 p-3">
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
