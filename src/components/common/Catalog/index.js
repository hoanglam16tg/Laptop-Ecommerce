import React from "react";
import { Row, Col, Pagination } from "antd";
import { Route, Switch } from "react-router";
import { CaretLeftOutlined } from "@ant-design/icons";

import ButtonTagDelete from "./ButtonTagDelete";
import BreadcrumbCatalog from "./BreadcrumbCatalog";
import CatalogColumLeft from "../Catalog/CatalogColumLeft/index";
import CatalogNav from "./CatalogNav";
import ListCard from "../BodyDetails/ListCard";
import ListProductCardRow from "./ListProductCardRow";
import MoreInfo from "./MoreInfo";

const Catalog = () => {
  return (
    <div className="catalogProduct">
      <div className="container">
        <BreadcrumbCatalog />
        <h1 className="catalogProduct--h1">MSI PS Series (20)</h1>
        <Row>
          <Col lg={{ span: 4 }} md={{ span: 7 }}>
            <div className="catalogProduct__navBar--left">
              {" "}
              <CaretLeftOutlined />
              Back
            </div>
            <CatalogColumLeft />
          </Col>
          <Col
            lg={{ span: 20 }}
            md={{ span: 17 }}
            style={{ paddingLeft: "4px" }}
          >
            <CatalogNav />
            <Row className="tagProduct" style={{ padding: "5px 0" }}>
              <ButtonTagDelete title={"CUSTOM PCS"} number={"24"} />
              <ButtonTagDelete title={"HP/COMPAQ PCS"} number={"24"} />
              <ButtonTagDelete title={"HP/COMPAQ PCS"} number={"24"} />
            </Row>
            <Row className="catalogProduct__wrapProduct">
              <Switch>
                <Route exact path="/all/list-grid">
                  <ListCard />
                </Route>
                <Route exact path="/all/list-row">
                  <ListProductCardRow />
                </Route>
              </Switch>
            </Row>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "15px 0 60px 0",
              }}
            >
              <Pagination defaultCurrent={1} total={15} />
            </Row>
            <Row>
              <MoreInfo />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Catalog;
