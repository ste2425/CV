import { Inter } from "next/font/google";
import { cvData } from "@/cvData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HeaderComponent } from "@/components/headerComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Test() {
  const cv = cvData;
  return (
    <main
      className={`flex h-100 flex-col items-center justify-between ${inter.className}`}
    >
      <Container>
            <HeaderComponent name={cv.name} jobTitle={cv.jobTitle} downloadUrl="StephenCooper-Cover.pdf" />

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
                  <p className="pt-4">I was lucky enough to begin my career during the build up to ES6 (now ES2015). This was a great time of excitement within the industry and any mention of JavaScript was followed by demonstrations of brilliant sounding new features, especially to a junior. I went to many conferences where engineers were demoing these brilliant new features, I remember one vividly where on one day JavaScript was powering a micro controller (this was before I knew what an Arduino was) and the second day I got my first demonstration of Angular.JS. It seemed like nothing was impossible with the technology and that excitement and desire to see more has stuck with me ever since.</p>
                  
                  <p className="pt-4">Since then I have over 10 years of experience working with JavaScript and TypeScript and have used some fantastic frameworks including NestJS, React and Angular. My experience is not limited to JavaScript based services but also C# and .net core.</p>

                  <p className="pt-4">I have extensive experience building scalable applications utilising a number of architectures including event driven architecture, monoliths and micro services. I have worked in teams of my peers where we all collaborated together working towards the same goal. I have also lead a team of juniors building and managing greenfield projects whilst upskilling them to skilled mid level engineers by the time I left.</p>

                  <p className="pt-4">Software engineering is not just a career but a hobby, I have many personal projects which can be viewed on my GitHub, most recently adding Bluetooth controller support to my Sony PSP. I use my personal projects as opportunities to learn technologies  my work does to allow me to use.</p>
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
        </Container>
    </main>
  );
}