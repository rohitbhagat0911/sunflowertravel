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
<<<<<<< HEAD
            
                <div className="contact-border">
                   
                  <li>Call Us </li>
                  <li className='phone-no'>+91 97333 11217</li>
                  
                  {/* this is the real number of the client */}
                </div>

                <div className="contact-border">
                   
                   <li>Email Us</li>
                   <li className='font-sty'>contact@sunflower.in</li>
                   
                   {/* this is the real number of the client */}
                 </div>

                 <div className="contact-border text-none-wrap">
                      <li>Follow Us</li>
                      <li> <div className='logo-align'> <span><BsFacebook /></span>
                       <span><AiFillInstagram /></span> 
                        <span><BsLinkedin /></span>
                        </div>
                        </li>
                 </div>
              </li>
              {/* just added the class of contact border to each of these links */}
              
              {/* <li className="contact-border"> 
=======
                <div className="contact-border">
                  <li>Call Us </li>
                  <li>+91 97333 11217</li>
                  {/* this is the real number of the client */}
                </div>
              </li>
              {/* just added the class of contact border to each of these links */}
              <li className="contact-border">
>>>>>>> 69728a0305f3495093cb8df0c9b45f074cfab797
                <a href="#services">About</a>
              </li>
              <li className="contact-border">
                <a href="#recommend">Places</a>
              </li>
              <li className="contact-border">
                <a href="#testimonials">Testimonials</a>
<<<<<<< HEAD
              </li> */}
=======
              </li>
>>>>>>> 69728a0305f3495093cb8df0c9b45f074cfab797
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
<<<<<<< HEAD
            <ul className="links content-position ext-position">
=======
            <ul className="links content-position">
>>>>>>> 69728a0305f3495093cb8df0c9b45f074cfab797
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
<<<<<<< HEAD
            <ul className="links content-position ext-position">
=======
            <ul className="links content-position">
>>>>>>> 69728a0305f3495093cb8df0c9b45f074cfab797
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
<<<<<<< HEAD

      {/* <ul className="social__links">
                      <li>
                        <BsFacebook />
                      </li>
                      <li>
                        <AiFillInstagram />
                      </li>
                      <li>
                        <BsLinkedin />
                      </li>
                    </ul> */}
      
=======
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
>>>>>>> 69728a0305f3495093cb8df0c9b45f074cfab797
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
<<<<<<< HEAD
        &:first-of-type{
          padding-top: 0.2em;
          margin-left: 6em;
        }


=======
    margin-left: 10em;
>>>>>>> 69728a0305f3495093cb8df0c9b45f074cfab797
  }
  .contact-border li {
    display: block;
    margin-top: -2em;
    padding-bottom: 0.5em;

    &:first-of-type {
      font-size: 1em;
      color: #6f6f6f;
      display: block;
      border-bottom: 2px solid #9e9e9e;
      width: 4em;
      margin-top: -1.5em;
      margin-bottom: 1.2em;

<<<<<<< HEAD
    }

    &:nth-of-type(2n) {
      font-weight: 500;
      padding-bottom: 1.2em;
      color: #202020;
    }

    
=======
  .contact-border {
    padding-top: -3vh;
    padding-down: 2vh;
    height: 4em;
    border-left: 3px solid red;

    padding-left: 1.2em;
>>>>>>> 69728a0305f3495093cb8df0c9b45f074cfab797
  }

  .text-none-wrap {
    white-space: nowrap;
  }

  .logo-align {
    display: flex;
    padding-top: -0.4em;
    column-gap: 1.4em;
  }

  // .ext-position{
  //   display: inline;
  //   padding-left: 9em;
  // }
  
  
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