import "./App.css";

import { Addresssection } from "./css/Addresssection";

import { Container } from "./css/Container";
import {
  Topcontainer,
  Topcontainername,
  Topcontainertext,
  Topcontainerp,
  Topcontainercontact,
} from "./css/Topcontainer";

import { Maincontainer } from "./css/Maincontainer";
import { Textsection, Textsectionone, Textsectiontwo } from "./css/Textsection";
import { Paragraphsection } from "./css/Paragraphsection";

const App = () => {
  return (
    <Container>
      <Topcontainer>
        <Topcontainername>Yakubu Amidu</Topcontainername>
        <Topcontainerp>
          Self Thought Full-stack Web and App Developer
        </Topcontainerp>
        <Topcontainertext>
          <Topcontainercontact>
            <strong>Phone: </strong>323-875-6263
          </Topcontainercontact>
          <Topcontainercontact>
            <strong>Email: </strong> yakubuamidu19@gmail.com
          </Topcontainercontact>
          <Topcontainercontact>
            <strong>Location: </strong> Los Angeles, CA
          </Topcontainercontact>
        </Topcontainertext>
      </Topcontainer>
      <Addresssection>
        <strong>TO</strong>
        <br />
        <strong>Michael Smith</strong>
        <br />
        Microsoft company
        <br />
        123 Fictional Lane
        <br />
        Los Angele, CA, 90000
      </Addresssection>
      <Maincontainer>
        <Textsection>
          <Textsectionone>
            <strong>Dear Mr Michael, </strong>
          </Textsectionone>
          <Textsectiontwo>
            <strong>January 12, 2024</strong>
          </Textsectiontwo>
        </Textsection>
        <Paragraphsection>
          My journey as a self-taught web, and app developer has been a
          relentless pursuit of excellence. In the past four years of learning
          web development, and app on my own and working for a versatile range
          of clients, I have been able to successfully design and develop
          websites that not only reflect the unique brand identity of clients
          but also elevate their online presence to new heights. I believe that
          working at Nest Seekers International can help me grow personally and
          professionally.
          <br />
          <br />
          I am currently working as a freelancer, where my responsibilities
          entail creating user-centric, and highly functional web applications.
          My commitment to excellence extends beyond design and development as I
          have effectively implemented sophisticated website functionalities,
          shrinking load times from 3.2 seconds to 2.4 seconds and enhancing
          overall user experience.
          <br />
          <br />
          As a freelancer, my role as a web developer demanded coming up with
          modern solutions to optimize database performance and web asset
          management, where I achieved a 28% reduction in error rates.
          Troubleshooting and resolving technical issues was a regular part of
          my work, ensuring that websites remain operational, secure, and
          up-to-date with the latest web standards.
          <br />
          <br />
          Meanwhile, my collaboration with marketing and design as a freelancer
          was focused on improving user experience which aligns directly with
          the responsibilities outlined for this position. My adeptness at
          developing visually appealing, responsive designs and my deep
          understanding of UI/UX principles were demonstrated through a project
          that amplified user satisfaction by 19%. I have attached my resume
          along with my personal portfolio to showcase my projects. Thank you.
          <br />
          <br />
          Sincerely,
          <br />
          Yakubu Amidu
        </Paragraphsection>
      </Maincontainer>
    </Container>
  );
};

export default App;
