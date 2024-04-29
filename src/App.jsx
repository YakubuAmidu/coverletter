import "./App.css";

import { Container, Containerinfo } from "./css/Container";
import {
  Topcontainer,
  Topcontainertitle,
  Topcontainerp,
} from "./css/Topcontainer";
import { Maincontainer } from "./css/Maincontainer";
import {
  Leftcontainer,
  Leftcontaineritems,
  Leftcontainertitle,
  Leftcontainersection,
  Leftcontainersectionp,
  Leftcontainersectionicon,
} from "./css/Leftcontainer";

import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

import {
  Rightcontainer,
  Rightcontainername,
  Rightcontaineraddress,
  Rightcontaineraddressinfo,
  Rightcontainerp,
  Rightcontainertext,
  Rightcontainertextname,
  Rightcontainerdate,
} from "./css/Rightcontainer";

const App = () => {
  return (
    <Containerinfo>
      <Container>
        <Topcontainer>
          <Topcontainertitle>Yakubu Amidu</Topcontainertitle>
          <Topcontainerp>Self-Tought Web and App Developer</Topcontainerp>
        </Topcontainer>
        <Maincontainer>
          <Leftcontainer>
            <Leftcontaineritems>
              <Leftcontainertitle>CONTACT</Leftcontainertitle>
              <Leftcontainersection>
                <Leftcontainersectionp>Yakubu@gmail.com</Leftcontainersectionp>
                <Leftcontainersectionicon>
                  <MdEmail />
                </Leftcontainersectionicon>
              </Leftcontainersection>
              <Leftcontainersection>
                <Leftcontainersectionp>666-888-8888</Leftcontainersectionp>
                <Leftcontainersectionicon>
                  <FaPhone />
                </Leftcontainersectionicon>
              </Leftcontainersection>
              <Leftcontainersection>
                <Leftcontainersectionp>
                  Los Angeles, California
                </Leftcontainersectionp>
                <Leftcontainersectionicon>
                  <FaLocationPin />
                </Leftcontainersectionicon>
              </Leftcontainersection>
              <Leftcontainersection>
                <Leftcontainersectionp>
                  https://github.com/YakubuAmidu
                </Leftcontainersectionp>
                <Leftcontainersectionicon>
                  <FaSquareGithub />
                </Leftcontainersectionicon>
              </Leftcontainersection>
              <Leftcontainersection>
                <Leftcontainersectionp>
                  https://www.linkedin.com/in/yakubu-amidu/
                </Leftcontainersectionp>
                <Leftcontainersectionicon>
                  <FaLinkedin />
                </Leftcontainersectionicon>
              </Leftcontainersection>
              <Leftcontainersection>
                <Leftcontainersectionp>
                  toprankprogramming.dev
                </Leftcontainersectionp>
                <Leftcontainersectionicon>
                  <FaGlobe />
                </Leftcontainersectionicon>
              </Leftcontainersection>
            </Leftcontaineritems>
          </Leftcontainer>
          <Rightcontainer>
            <Rightcontaineraddressinfo>
              <Rightcontainername>Microsoft</Rightcontainername>
              <Rightcontaineraddress>
                Nestseekers international
                <br />
                123 Fictional lane
                <br />
                New York, NY 9000
              </Rightcontaineraddress>
            </Rightcontaineraddressinfo>
            <Rightcontainertext>
              <Rightcontainertextname>Dear Sir or Madam</Rightcontainertextname>
              <Rightcontainerdate>February 19, 2024</Rightcontainerdate>
            </Rightcontainertext>
            <Rightcontainerp>
              Dear Hiring Manager, I am writing to express my interest in the
              Website and App Developer position at your company. With my
              experience as a full-stack software developer and my strong
              foundation in front-end and back-end technologies, I am confident
              that I can contribute my coding skills and passion for creating
              innovative solutions to your team.
              <br />
              <br />
              This position is perfect for my career right now because it allows
              me to utilize my strong foundation in front-end and back-end
              technologies. As an experienced developer, I have honed my skills
              in HTML5, CSS, ReactJS, React Native, and more. I am well-versed
              in frameworks such as Bootstrap and have a deep understanding of
              CSS grid and flexbox. On the back-end, I am proficient in
              JavaScript, Express, Mongoose, MongoDB, and Firebase. My ability
              to work with these technologies enables me to build seamless
              digital experiences and deliver high-quality code.
            </Rightcontainerp>
          </Rightcontainer>
        </Maincontainer>
      </Container>
    </Containerinfo>
  );
};

export default App;
