import "./App.css";

import { Container } from "./css/Container";
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
  Rightcontainerp
} from "./css/Rightcontainer";

const App = () => {
  return (
    <Container>
      <Topcontainer>
        <Topcontainertitle>Yakubu Amidu</Topcontainertitle>
        <Topcontainerp>Self-Tought Web Developer</Topcontainerp>
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
              <Leftcontainersectionp>GitHub</Leftcontainersectionp>
              <Leftcontainersectionicon>
                <FaSquareGithub />
              </Leftcontainersectionicon>
            </Leftcontainersection>
            <Leftcontainersection>
              <Leftcontainersectionp>Linkedin</Leftcontainersectionp>
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
              Nestseekers international 123 Fictional lane, New York, NY 9000
            </Rightcontaineraddress>
          </Rightcontaineraddressinfo>
          <Rightcontainerp>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ad ipsa dolore tempore, harum sit asperiores rerum quam iste officia
            veritatis saepe dicta cum molestiae nostrum sunt vero porro neque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consequatur error laboriosam hic molestiae dolor deleniti sint nihil
            qui provident consequuntur nemo deserunt eaque odit, sapiente
            doloremque necessitatibus quidem in? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Veniam vero, aliquid provident ea
            tempora autem minus at. Laboriosam, ea. Et nostrum quibusdam enim
            veniam vero repudiandae pariatur odio ex rerum?
          </Rightcontainerp>
        </Rightcontainer>
      </Maincontainer>
    </Container>
  );
};

export default App;
