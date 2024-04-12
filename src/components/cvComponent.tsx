import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ICV } from "@/cvDataTypes";
import { EntityDescriptionComponent } from "@/components/entityDescriptionComponent";
import { HeaderComponent } from "./headerComponent";

export interface ICVComponentProps {
    cv: ICV
}

export function CVComponent({ cv }: ICVComponentProps) {
    return (
        <Container>
            <HeaderComponent name={cv.name} jobTitle={cv.jobTitle} downloadUrl="StephenCooper-CV.pdf" />
            <Row>
                <Col xs={12} md={8} className="blue text-white d-flex justify-content-center align-items-center">
                    <p className="generated-message d-none">This document was auto generated from my live CV <a className="w-100" href="https://ste2425.github.io/CV"><u>here</u></a></p>
                </Col>
                <Col xs={4} className="d-none d-md-flex gray text-white justify-content-center align-items-center">
                    <h2 className="fs-4 p-3">Contact</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8} className="bg-white">
                    {cv.introduction.map((intro, i) => <p key={i} className="p-4">{intro}</p>)}
                </Col>
                <Col xs={12} className="d-md-none gray text-white d-flex justify-content-center align-items-center">
                    <h2 className="fs-4 p-3">Contact</h2>
                </Col>
                <Col xs={12} md={4} className="gray2">
                    {cv.socials.map(({ name, url }, i) =>
                        <div key={i} className="pt-3 text-center">
                            <a className="w-100 text-primary" href={url}><u>{name}</u></a>
                        </div>
                    )}
                </Col>
            </Row>
            <Row>
                <Col xs={8} className="d-none d-md-flex gray text-white justify-content-center align-items-center">
                    <h2 className="fs-4 p-3">Employment</h2>
                </Col>
                <Col xs={12} className="d-md-none blue text-white d-flex justify-content-center align-items-center">
                    <h2 className="fs-4 p-3">Employment</h2>
                </Col>
                <Col xs={4} className="d-none d-md-flex blue text-white d-flex justify-content-center align-items-center">
                    <h2 className="fs-4 p-3">Technologies</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8} className="bg-white">
                    <div className="p-4">
                        <EntityDescriptionComponent entities={cv.jobs} />
                    </div>
                </Col>
                <Col xs={12} className="d-md-none blue text-white d-flex justify-content-center align-items-center">
                    <h2 className="fs-4 p-3">Technologies</h2>
                </Col>
                <Col xs={12} md={4} className="gray2 p-0">
                    <div className="d-flex flex-wrap">
                        {cv.knownTechnologies.map((t, i) =>
                            <p className="ps-3 pe-3 pt-3" key={i}>{t}</p>
                        )}
                    </div>

                    <div className="gray text-white mt-3">
                        <h2 className="fs-4 p-3">
                            Education
                        </h2>
                    </div>

                    <div className="p-3">
                        <EntityDescriptionComponent entities={cv.certifications} />
                    </div>
                </Col>
            </Row>
            <Row className="bg-white">
                <Col className="blue text-white">
                    <h2 className="fs-4 p-3"> Personal Projects </h2>
                </Col>
            </Row>

            <Row className="bg-white pt-3 pe-3 ps-3">
                <EntityDescriptionComponent entities={cv.projects} />
            </Row>

            <Row className="bg-white pe-3 ps-3">
                <Col>
                    <h2 className="fs-4 pt-3 pb-3"> Contributions to Open-Source projects </h2>
                </Col>
            </Row>

            <Row className="bg-white pb-2 pe-3 ps-3">
                <EntityDescriptionComponent entities={cv.openSourceContributions} />
            </Row>
        </Container>
    );
}