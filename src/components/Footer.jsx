import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <FooterContainer>
      {/* <span>Copyright &copy; 2021 Travelo. All rights reserved</span> */}

      <div>
        <ul className="footer-guide">
          <li>NEED HELP?</li>
          <li>COMPANY</li>
          <li>POPULAR CATEGORIES</li>
          <li>TOP DESTINATION</li>
        </ul>

        <div className="footer-content">
          <div>
            <ul className="links">
              <li>
                <div className="contact-border">
                  <li>Call Us </li>
                  <li>+91 97333 11217</li>
                  {/* this is the real number of the client */}
                </div>
              </li>
              {/* just added the class of contact border to each of these links */}
              <li className="contact-border">
                <a href="#services">About</a>
              </li>
              <li className="contact-border">
                <a href="#recommend">Places</a>
              </li>
              <li className="contact-border">
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="links  content-position">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#services">About</a>
              </li>
              <li>
                <a href="#recommend">Places</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="links content-position">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#services">About</a>
              </li>
              <li>
                <a href="#recommend">Places</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="links content-position">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#services">About</a>
              </li>
              <li>
                <a href="#recommend">Places</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="social__links">
        <li>
          <BsFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <BsLinkedin />
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;
  padding-bottom: 4em;

  ul {
    list-style-type: none;
    gap: 2rem;
    li {
      padding-top: 1.5em;
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  .footer-guide {
    display: flex;
    column-gap: 8.6em;
    font-weight: 500;
  }

  .footer-guide li {
    border-bottom: 1px solid #f8f8f8;
    width: 8vw;
    white-space: nowrap;
    display: inline;
    padding-bottom: 1.5em;
  }

  .footer-content {
    display: flex;
  }

  .content-position {
    display: block;
    border: 0px solid red;
    margin-left: 10em;
  }

  .contact-border {
    padding-top: -3vh;
    padding-down: 2vh;
    height: 4em;
    border-left: 3px solid red;

    padding-left: 1.2em;
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
