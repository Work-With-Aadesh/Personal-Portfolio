import { Col, Row } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <h4>
            “Empower the business’s ascent with the right software – where
            innovation meets efficiency, creating the foundation for success.”
            <br />
            <br></br> <span> - Aadesh S. Lawange, The Developer </span>
          </h4>
        </Row>
      </div>
    </Col>
  );
};
