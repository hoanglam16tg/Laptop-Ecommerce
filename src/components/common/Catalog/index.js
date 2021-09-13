import React from "react";
import { Row, Col, Pagination } from "antd";
import { Route, Switch } from "react-router";

import ButtonTagDelete from "./ButtonTagDelete";
import BreadcrumbCatalog from "./BreadcrumbCatalog";
import CatalogColumLeft from "../Catalog/CatalogColumLeft/index";
import CatalogNav from "./CatalogNav";
import ListCard from "../BodyDetails/ListCard";
import ListProductCardRow from "./ListProductCardRow";
import MoreInfo from "./MoreInfo";

const styleH1 = {
  fontWeight: "600",
  fontSize: "32px",
  lineHeight: "48px",
};

const Catalog = () => {
  return (
    <div className="container catalogProduct">
      <BreadcrumbCatalog />
      <h1 style={styleH1}>MSI PS Series (20)</h1>
      <CatalogNav />
      <Row>
        <Col span={4}>
          <CatalogColumLeft />
        </Col>
        <Col span={20} style={{ paddingLeft: "4px" }}>
          <Row style={{ padding: "5px 0" }}>
            <ButtonTagDelete title={"CUSTOM PCS"} number={"24"} />
            <ButtonTagDelete title={"HP/COMPAQ PCS"} number={"24"} />
            <ButtonTagDelete title={"HP/COMPAQ PCS"} number={"24"} />
          </Row>
          <Row className="catalogProduct__wrapProduct">
            <Switch>
              <Route exact path="/catalog">
                <ListCard />
              </Route>
              <Route exact path="/catalog/list-row">
                <ListProductCardRow />
              </Route>
            </Switch>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "60px",
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
  );
};

export default Catalog;
