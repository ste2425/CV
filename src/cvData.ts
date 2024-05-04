import { ICV } from "./cvDataTypes";

export const cvData: ICV = {
    name: 'Stephen Cooper',
    jobTitle: 'Software Engineer',
    contactDetails: {
        emailAddress: 'ste.cooper@live.co.uk',
        mobileNumber: ''
    },
    socials: [{
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
        'I\'m a software engineer with extensive experience working in full stack projects and a passion for JavaScript. I feel equally at home working in NodeJS or C# to build highly scalable RESTful APIs as I do working in Angular or React. I was recently the senior engineer taking ownership of a large scale greenfield React application powered by a series of NestJs based APIs.',
        'Currently I\'m back in the .NET world taking ownership of a project to replace an MVC based UI with Angular.',
        'My most recent personal project was the CV you\'re reading now. It is a NextJS based application, built using GitHub Actions. The PDF export is performed with Playwright as part of CI. I have several personal projects which I use to help learn new technologies, or refresh existing technologies, which my day-to-day job doesn\'t allow. Most recently being C++ in an embedded ESP32 environment where I\'m implementing Bluetooth controller support in my Sony PSP. '
    ],
    knownTechnologies: ['NodeJS', 'NestJS', 'Angular', 'React', '.NET Core', 'MVC', 'Banjo', 'NextJS', 'Kazooie'],
    projects: [{
        name: 'General DIY Projects',
        description: 'I like to consider myself somewhat mechanically minded. I believe that is why I enjoy software development so much. I get the same enjoyment understanding a system and problem solving as I did learning how to replace a timing belt. I\'m regularly doing repairs to the house or the cars. My most recent project on the house was putting up a wall and knocking through a doorway to make a bedroom for my son. On the car I recently replaced its timing belt (first time I\'ve attempted that) and fully rebuilt its suspension front and back. That included dropping both subframes and painting them in the process. Up next for the house is to build a driveway and a lean to so I can work on the car in the dry ready to respray some body panels (never done that before either but looking forward to trying).'
    }, {
        name: 'Dotnet Runner',
        link: 'https://github.com/ste2425/DotnetRunner',
        description: 'An ElectronJS based application to launch multiple .NET core applications. Whilst working at Cascade we had several .NET core applications and launching everyone individually was tedious. I wanted to learn Electron so decided to build a little app which could launch multiple for me from an easy to access context menu in the hosting operating systems tray. In hindsight IDE integrations would have made this somewhat redundant but it was a fun learning experience for technologies i had not used at this point. '
    }, {
        name: 'ESP32 OTA update Web Portal',
        link: 'https://github.com/ste2425/OTAWebapp',
        description: 'This is a webapp I built as part of my contributions to BluePad32. It utilizes the Web Bluetooth APIs to demonstrate communications between a web browser and a BLE enabled device, in this case an ESP32. Its current implementation supports an OTA (Over the Air Update) process. This allows programming of the ESP32 via Bluetooth.  '
    }, {
        name: 'PSP Consolizer',
        link: 'https://github.com/ste2425/PSP-Consolizer',
        description: 'A project to allow the use of Bluetooth controllers with Sony\'s handheld console the PSP. This is a long running project which i am still working on currently. I learnt many new things during this project, working on embedded systems and writing in C++, hardware development and PCB design. The first iteration was an eternal module that connected to the PSP\'s internal connectors. The second iteration I\'m currently working is ported to an ESP32 and miniaturized to fit inside the PSP (replacing the PSP\'s UMD drive) '
    }, {
        name: 'Electron CAN Viewer',
        link: 'https://github.com/ste2425/Electron-CAN-viewer',
        description: 'Before building my PSP Consolizer I started a project (I intend to return to) to add extra functionality to my car, features such as power folding mirrors, auto closing/opening window, welcome light etc. It was originally powered by an Arduino but will most likely be powered by an ESP32. This project allowed me to view the CANBus messages sent between the internal modules in my vehicle so I could intercept messages I needed relating to things like engine/road speed and the status of the door locks. I have big ideas for this project, using an ESP32 and writing a react native app to use BLE to control things in my car. I can then add support for Apple CarPlay and control things like ambient lighting via a custom interface in CarPlay. '
    }],
    openSourceContributions: [{
        name: 'BluePad32',
        link: 'https://github.com/ricardoquesada/bluepad32',
        description: 'This is a fantastic library that allows communication with Bluetooth based controllers on ESP32\'s and other microcontrollers. I use it heavily in my PSP Consolizer and worked closely with the maintainer to integrate OTA (Over the Air Updates) and general BLE two-way data communications whilst the library is also communicating with controllers. Up, until this point that was not possible. My implementation is now, currently, the recommended solution and provided as an example by BluePad32 for people using the Arduino IDE.'
    }, {
        name: 'VitaDock Plus',
        link: 'https://github.com/SilentNightx/VitaDockPlus',
        description: 'This is a project that allow a modified PlayStation Vita to project its video to a tv using a Raspberry PI. I added the ability to control the Raspberry PI via GPIO buttons and allow audio to be captured via AUX input instead of Bluetooth. This was a fun project as I had done little Linux scripting outside of simple CI scripts. '
    }, {
        name: 'ts-json-object',
        link: 'https://github.com/moshegottlieb/ts-json-object',
        description: 'I created a PR to help solve a bug regarding validating arrays. Unfortunately, my implementation did not land but I worked with the maintainer to help come to the final solution. '
    }],
    certifications: [{
        name: 'Music Technology & Software Development',
        subName: 'University of huddersfield',
        date: '2008 - 2012',
        summary: 'Completed in 2012 with a 2:2',
        description: 'Degree focused on music technology including live and studio-based recordings. Final year had a software development module which sparked my interest in programming and lead me to seek a career in this field.'
    }],
    jobs: [{
        name: 'Web Developer',
        subName: 'RegTransfers',
        date: '2023 - PRESENT',
        description: 'Part of a four-man team of highly experienced developers. My responsibilities are the maintenance of the various systems and infrastructure and to provide new value rich features for the business. I can work independently throughout all the stack layers as well as collaborate with other team members. We maintain the Kubernetes infrastructure and manage it with Flux. The solution is a highly distributed micro service architecture where services extensively leverage event-based communications. My most recently built feature is a search assistant tool built using Web Components (the first in the system, hopefully not the last!). '
    }, {
        name: 'Senior Developer',
        subName: 'Trailight',
        date: '2021-2023',
        description: 'Senior developer in a team of three other developers taking on team lead responsibilities. Providing mentoring for other team members who have all increased to mid-level developers since starting as juniors. I was responsible for taking a lead design role, alongside our technical architect and implementation role to build a greenfield system which integrated functionality of two legacy monolith applications. I owned the implementation and was responsible for maintaining code quality of a React based application utilizing MFE\'s as well as multiple REST and GraphQL based services built with NestJS. '
    }, {
        name: 'Web Developer',
        subName: 'Cascade HR (IRIS)',
        date: '2013 - 2021',
        description: 'Member of the core HR team. Worked primarily on the greenfield rewrite project on the HR application. This was an Angular based UI with .NET core based backend REST services. This was a small team of three developers who were leading the way with technologies that were entirely new to the business. Took ownership of the UI architecture. I performed many tech-talks to the other teams as part of knowledge sharing during this project '
    }, {
        name: 'Junior Web Developer',
        subName: 'Cascade HR',
        date: '2012 - 2013',
        description: 'First role out of university. This time was spent doing extensive self-study. Tasks performed involved basic UI changes and bug fixes in a system used by over a thousand customers.  '
    }]
};
