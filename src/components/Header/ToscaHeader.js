import React from "react";
import {Nav, Navbar, Tab} from "react-bootstrap";

import logo from "../../assets/img/logo_onap.png";

const ToscaHeader = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>
                <img
                    src={logo}
                    width="200"
                    height="43"
                    alt="ONAP - Tosca Control Loop"/>
            </Navbar.Brand>
            <Tab.Container id="tosca-main-nav" defaultActiveKey="monitoring">
                <Nav variant="pills" className="ml-auto">
                    <Nav.Item>
                        <Nav.Link eventKey="monitoring">Monitoring</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Tab.Container>
        </Navbar>
    );
}

export default ToscaHeader;
