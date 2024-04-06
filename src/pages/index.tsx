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
  url: string,
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

export function CVComponent({ cv }: ICVComponentProps) {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} className="gray text-white">
          <h1 className="fs-1 p-5 text-center">{cv.name}</h1>
        </Col>
        <Col xs={12} md={4} className="blue text-white col-4 d-flex justify-content-center align-items-center">
          <p className="fs-4 p-3 text-center">{cv.jobTitle}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8} className="blue text-white">
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
          <h2 className="fs-4 p-3">Employeement</h2>
        </Col>
        <Col xs={12} className="d-md-none blue text-white d-flex justify-content-center align-items-center">
          <h2 className="fs-4 p-3">Employeement</h2>
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
      <Row>
        <Col className="blue text-white">
          <h2 className="fs-4 p-3"> Personal Projects </h2>
        </Col>
      </Row>
      {cv.projects.map(({ name, url, description }, i) => (
        <Row key={i}>
          <h2>{name}</h2>
          <Button href={url}>{url}</Button>
          <p>{description}</p>
        </Row>))
      }
      <Row>
        <h2>Contributions to Open-Source projects</h2>
        <p>I’ve performed multiple contributions to open-source projects.</p>
        <ul>
          {cv.openSourceContributions.map(({ name, url, description}, i) =>
              <li key={i}>
                <Row>
                  <Col><Button href={url}>{name}</Button></Col>
                  <Col>{description}</Col>
                </Row>
            </li>
          )}
        </ul>
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
    socials: [{
      name: 'Github Repositories',
      url: 'https://github.com/ste2425'
    }, {
      name: 'Twitter',
      url: 'https://twitter.com/_s_cooper'
    }, {
      name: 'ste.cooper@live.co.uk',
      url: 'mailto:ste.cooper@live.co.uk'
    }, {
      name: 'https://ste2425.github.io/',
      url: 'https://ste2425.github.io/'
    }],
    introduction: ['I\’m a software engineer with experience in the HR, Payroll and Financial Regulation sectors. I recently led a team as a Senior developer working on greenfield projects migrating legacy systems to new platforms. Currently I work in a team of peers building fantastic features which provide value to our customers.', 'I have a number of personal projects which I use to learn technologies i don\'t get the opportunity to at work. Most recently being C++ in an embedded ESP32 environment where I\'m implementing Bluetooth controller support in my Sony PSP.'],
    knownTechnologies: ['NodeJS', 'NestJS', 'Angular', 'React', '.NET Core', 'MVC', 'NextJS', 'Bulbasour'],
    projects: [{
      name: 'Dotnet Runner',
      url: 'https://github.com/ste2425/DotnetRunner',
      description: 'An ElectronJS based application to launch multiple .NET core based applications. Whilst working at Cascade we had a number of .NET core based applications and launching each individual was tedious. I wanted to learn Electron so decided to build a little app which could launch multiple for me from a easy to access context menu in the hosting operating systems tray.'
    }, {
      name: 'PSP Consolizer',
      url: 'https://github.com/ste2425/PSP-Consolizer',
      description: 'A project to allow the use of Bluetooth controllers with Sony’s handheld console the PSP. This involved an Arduino NANO 33 IOT, a custom designed PCB and an ElectronJS based installer application. This was a very involved project which required learning multiple new technologies in hardware and software.'
    }],
    openSourceContributions: [{
      name: 'VitaDock Plus',
      url: 'https://github.com/SilentNightx/VitaDockPlus',
      description: 'Added the ability to use Aux audio and control via GPIO buttons.'
    }, {
      name: 'ts-json-object',
      url: 'https://github.com/moshegottlieb/ts-json-object',
      description: 'Created PR to change how arrays are validated'
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
      description: 'Part of a four-man team of highly experienced developers. My responsibilities are the maintenance of the various systems and infrastructure and to provide new value rich features for the business. We maintain the Kubernetes infrastructure and manage it with Flux. The solution is a highly distributed micro service architecture where services extensively leverage event based communications. My most recently built feature is a search assistant tool built using Web Components (the first in the system, hopefully not the last!).'
    }, {
      name: 'Senior Developer',
      company: 'Trailight',
      date: '2021-2023',
      description: 'Senior developer in a team of three other developers taking on team lead responsibilities. Providing mentoring for other team members who have all increased to mid-level developers from juniors.Working on a greenfield project to combine functionality from two existing monolith applications.Primary responsibilities are owning the architectural implementation and code quality of a React based application utilizing MFE\’s as well as multiple RESTand GraphQL based services built with NestJS.'
    }, {
      name: 'Web Developer',
      company: 'Cascade HR (IRIS)',
      date: '2013 - 2021',
      description: 'Member of the core HR team. Worked primarily on the greenfield rewrite project on the HR application. This was an Angular based UI with .NET core based backend REST services.This was a small team of three developers who were leading the way with technologies that were entirely new to the business.Took ownership of the UI architecture.I performed many tech-talks to the other teams as part of knowledge sharing during this project'
    }, {
      name: 'Junior Web Developer',
      company: 'Cascade HR',
      date: '2012 - 2013',
      description: 'First role out of university. This time was spent doing extensive self-study. Tasks performed involved basic UI changes and bug fixes in a system used byover a thousand customers.'
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