import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IHeaderComponentProps {
    name: string,
    jobTitle: string,
    downloadUrl: string
}

export function HeaderComponent({ name, jobTitle, downloadUrl } : IHeaderComponentProps) {
    return (
        <Row>
            <Col xs={12} md={8} className="gray text-white flex-column d-flex justify-content-center align-items-center">
                <h1 className="fs-1 p-5 pb-1 text-center">{name}</h1>
                <a className="text-primary generate-message" href={downloadUrl} download={downloadUrl}><u>Download as PDF</u></a>
            </Col>
            <Col xs={12} md={4} className="blue text-white col-4 d-flex justify-content-center align-items-center">
                <p className="fs-4 p-3 text-center">{jobTitle}</p>
            </Col>
        </Row>
    );
}