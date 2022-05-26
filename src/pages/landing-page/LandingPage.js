import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Slider from "../../components/Slider";
import {ReactComponent as ProductSvg} from "../../assets/product.svg";
import useSWR from "swr";
import TypeItComponent from "../../components/TypeItComponent";

const LandingPage = () => {
  const { data: sliderData } = useSWR(
    "http://localhost:9000/slider"
  );
 


  return (
    <div>
      <Container>
        <Row>
          <Col xs={4}>
            <Slider data={sliderData} />
          </Col>
          <Col xs={8}>
            <ProductSvg className="h-75 w-50 position-relative start-50" />
            <TypeItComponent />
          </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default LandingPage;
