import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

interface IContactDetails {
  emailAddress: string,
  mobileNumber: string
}

interface ICertification {
  name: string,
  provider: string,
  date: string,
  outcome: string,
  description: string
}

interface ISocial {
  name: string,
  url: string
}

interface IProject {
  name: string,
  url?: string,
  description: string
}

interface IOSContribution {
  url: string,
  description: string,
  name: string
}

interface IJob {
  name: string,
  company: string,
  date: string,
  description: string
}

interface ICV {
  name: string,
  jobTitle: string,
  contactDetails: IContactDetails,
  introduction: string[],
  socials: ISocial[],
  knownTechnologies: string[],
  projects: IProject[],
  openSourceContributions: IOSContribution[],
  certifications: ICertification[],
  jobs: IJob[]
}

const inter = Inter({ subsets: ["latin"] });

interface ICVComponentProps {
  cv: ICV
}

interface IEntityDescription {
  name: string,
  subName?: string,
  date?: string,
  summary?: string,
  description: string,
  link?: string
}

interface IEntityDescriptionComponentProps {
  entities: IEntityDescription[]
}

function EntityDescriptionComponent({ entities }: IEntityDescriptionComponentProps) {
  return (<div>
    {entities.map((e, i) => 
              <div key={i}>
                <h3 className="fs-5">{e.name} {e.subName && <span> - <small>{e.subName}</small></span>}</h3>
                {e.date && <p className="pt-3 fs-6 text-primary">{e.date}</p>}
                {e.link && <a className="w-100 text-primary" href={e.link}><u>{e.link}</u></a>}
                { e.summary && <p className="pt-1 fs-6">{e.summary}</p>}
                <p className="pt-2 fs-6 pb-3">{e.description}</p>
              </div>
            )}
  </div>)
}

export function CVComponent({ cv }: ICVComponentProps) {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} className="gray text-white flex-column d-flex justify-content-center align-items-center">
          <h1 className="fs-1 p-5 pb-1 text-center">{cv.name}</h1>
          <a className="text-primary generate-message" href="StephenCooper-CV.pdf" download="StephenCooper-CV.pdf"><u>Download as PDF</u></a>
        </Col>
        <Col xs={12} md={4} className="blue text-white col-4 d-flex justify-content-center align-items-center">
          <p className="fs-4 p-3 text-center">{cv.jobTitle}</p>
        </Col>
      </Row>
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
              <div key={i}className="pt-3 text-center">
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
            {cv.jobs.map((job, i) => 
              <div key={i}>
                <h3 className="fs-5">{job.name} - <small>{job.company}</small></h3>
                <p className="pt-2 fs-6 text-primary">{job.date}</p>
                <p className="pt-2 fs-6 pb-3">{job.description}</p>
              </div>
            )}
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
            {cv.certifications.map((cert, i) => 
              <div key={i}>
                <h3 className="fs-5">{cert.name} - <small>{cert.provider}</small></h3>
                <p className="pt-3 fs-6 text-primary">{cert.date}</p>
                <p className="pt-1 fs-6">{cert.outcome}</p>
                <p className="pt-2 fs-6">{cert.description}</p>
              </div>
            )}
          </div>
        </Col>
      </Row>
      <Row className="bg-white">
        <Col className="blue text-white">
          <h2 className="fs-4 p-3"> Personal Projects </h2>
        </Col>
      </Row>
      
      <Row className="bg-white pt-3 pe-3 ps-3">
        <EntityDescriptionComponent entities={cv.projects.map(p => ({
                    name: p.name,
                    description: p.description,
                    link: p.url
                }))} />
      </Row>

      <Row className="bg-white pe-3 ps-3">
        <Col>
          <h2 className="fs-4 pt-3 pb-3"> Contributions to Open-Source projects </h2>
        </Col>
      </Row>

      <Row className="bg-white pb-2 pe-3 ps-3">
        <EntityDescriptionComponent entities={cv.openSourceContributions.map(o => ({
            name: o.name,
            description: o.description,
            link: o.url
        }))} />
      </Row>
    </Container>
  );
}

export default function Home() {
  const cv: ICV = {
    name: 'Stephen Cooper',
    jobTitle: 'Software Engineer',
    contactDetails: {
      emailAddress: 'ste.cooper@live.co.uk',
      mobileNumber: ''
    },
    socials: [ {
      name: 'https://ste2425.github.io/',
      url: 'https://ste2425.github.io/'
    }, {
      name: 'ste.cooper@live.co.uk',
      url: 'mailto:ste.cooper@live.co.uk'
    }, {
      name: 'Github Repositories',
      url: 'https://github.com/ste2425'
    }, {
      name: 'Twitter',
      url: 'https://twitter.com/_s_cooper'
    }],
    introduction: [
      'I\'m a software engineer with experience in the HR, Payroll and Financial Regulation sectors. I recently led a team as a Senior developer working on greenfield projects migrating legacy systems to new platforms. Currently I work in a team of three other very skilled engineers. We collaborate closely designing and building new features as well as tackling bugs and technical debt to provide value to our customers. ',
     'I have several personal projects which I use to learn technologies I don\'t get the opportunity to use at work. Most recently being C++ in an embedded ESP32 environment where I\'m implementing Bluetooth controller support in my Sony PSP. '
    ],
    knownTechnologies: ['NodeJS', 'NestJS', 'Angular', 'React', '.NET Core', 'MVC', 'Banjo', 'NextJS', 'Kazooie'],
    projects: [{
      name: 'General DIY Projects',
      description: 'I like to consider myself somewhat mechanically minded. I believe that is why I enjoy software development so much. I get the same enjoyment understanding a system and problem solving as I did learning how to replace a timing belt. I\'m regularly doing repairs to the house or the cars. My most recent project on the house was putting up a wall and knocking through a doorway to make a bedroom for my son. On the car I recently replaced its timing belt (first time I\'ve attempted that) and fully rebuilt its suspension front and back. That included dropping both subframes and painting them in the process. Up next for the house is to build a driveway and a lean to so I can work on the car in the dry ready to respray some body panels (never done that before either but looking forward to trying).'
    }, {
      name: 'Dotnet Runner',
      url: 'https://github.com/ste2425/DotnetRunner',
      description: 'An ElectronJS based application to launch multiple .NET core applications. Whilst working at Cascade we had several .NET core applications and launching everyone individually was tedious. I wanted to learn Electron so decided to build a little app which could launch multiple for me from an easy to access context menu in the hosting operating systems tray. In hindsight IDE integrations would have made this somewhat redundant but it was a fun learning experience for technologies i had not used at this point. '
    }, {
      name: 'ESP32 OTA update Web Portal',
      url: 'https://github.com/ste2425/OTAWebapp',
      description: 'This is a webapp I built as part of my contributions to BluePad32. It utilizes the Web Bluetooth APIs to demonstrate communications between a web browser and a BLE enabled device, in this case an ESP32. Its current implementation supports an OTA (Over the Air Update) process. This allows programming of the ESP32 via Bluetooth.  '
    }, {
      name: 'PSP Consolizer',
      url: 'https://github.com/ste2425/PSP-Consolizer',
      description: 'A project to allow the use of Bluetooth controllers with Sony\'s handheld console the PSP. This is a long running project which i am still working on currently. I learnt many new things during this project, working on embedded systems and writing in C++, hardware development and PCB design. The first iteration was an eternal module that connected to the PSP\'s internal connectors. The second iteration I\'m currently working is ported to an ESP32 and miniaturized to fit inside the PSP (replacing the PSP\'s UMD drive) '
    }, {
      name: 'Electron CAN Viewer',
      url: 'https://github.com/ste2425/Electron-CAN-viewer',
      description: 'Before building my PSP Consolizer I started a project (I intend to return to) to add extra functionality to my car, features such as power folding mirrors, auto closing/opening window, welcome light etc. It was originally powered by an Arduino but will most likely be powered by an ESP32. This project allowed me to view the CANBus messages sent between the internal modules in my vehicle so I could intercept messages I needed relating to things like engine/road speed and the status of the door locks. I have big ideas for this project, using an ESP32 and writing a react native app to use BLE to control things in my car. I can then add support for Apple CarPlay and control things like ambient lighting via a custom interface in CarPlay. '
    }],
    openSourceContributions: [{
      name: 'BluePad32',
      url: 'https://github.com/ricardoquesada/bluepad32',
      description: 'This is a fantastic library that allows communication with Bluetooth based controllers on ESP32\'s and other microcontrollers. I use it heavily in my PSP Consolizer and worked closely with the maintainer to integrate OTA (Over the Air Updates) and general BLE two-way data communications whilst the library is also communicating with controllers. Up, until this point that was not possible. My implementation is now, currently, the recommended solution and provided as an example by BluePad32 for people using the Arduino IDE.'
    }, {
      name: 'VitaDock Plus',
      url: 'https://github.com/SilentNightx/VitaDockPlus',
      description: 'This is a project that allow a modified PlayStation Vita to project its video to a tv using a Raspberry PI. I added the ability to control the Raspberry PI via GPIO buttons and allow audio to be captured via AUX input instead of Bluetooth. This was a fun project as I had done little Linux scripting outside of simple CI scripts. '
    }, {
      name: 'ts-json-object',
      url: 'https://github.com/moshegottlieb/ts-json-object',
      description: 'I created a PR to help solve a bug regarding validating arrays. Unfortunately, my implementation did not land but I worked with the maintainer to help come to the final solution. '
    }],
    certifications: [{
      name: 'Music Technology & Software Development',
      provider: 'University of huddersfield',
      date: '2008 - 2012',
      outcome: 'Completed in 2012 with a 2:2',
      description: 'Degree focused on music technology including live and studio-based recordings. Final year had a software development module which sparked my interest in programming and lead me to seek a career in this field.'
    }],
    jobs: [{
      name: 'Web Developer',
      company: 'RegTransfers',
      date: '2023 - PRESENT',
      description: 'Part of a four-man team of highly experienced developers. My responsibilities are the maintenance of the various systems and infrastructure and to provide new value rich features for the business. I can work independently throughout all the stack layers as well as collaborate with other team members. We maintain the Kubernetes infrastructure and manage it with Flux. The solution is a highly distributed micro service architecture where services extensively leverage event-based communications. My most recently built feature is a search assistant tool built using Web Components (the first in the system, hopefully not the last!). '
    }, {
      name: 'Senior Developer',
      company: 'Trailight',
      date: '2021-2023',
      description: 'Senior developer in a team of three other developers taking on team lead responsibilities. Providing mentoring for other team members who have all increased to mid-level developers since starting as juniors. I was responsible for taking a lead design role, alongside our technical architect and implementation role to build a greenfield system which integrated functionality of two legacy monolith applications. I owned the implementation and was responsible for maintaining code quality of a React based application utilizing MFE\'s as well as multiple REST and GraphQL based services built with NestJS. '
    }, {
      name: 'Web Developer',
      company: 'Cascade HR (IRIS)',
      date: '2013 - 2021',
      description: 'Member of the core HR team. Worked primarily on the greenfield rewrite project on the HR application. This was an Angular based UI with .NET core based backend REST services. This was a small team of three developers who were leading the way with technologies that were entirely new to the business. Took ownership of the UI architecture. I performed many tech-talks to the other teams as part of knowledge sharing during this project '
    }, {
      name: 'Junior Web Developer',
      company: 'Cascade HR',
      date: '2012 - 2013',
      description: 'First role out of university. This time was spent doing extensive self-study. Tasks performed involved basic UI changes and bug fixes in a system used by over a thousand customers.  '
    }]
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <CVComponent cv={cv}/>
    </main>
  );
}