import React, { useRef } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_hgb76hq", form.current, "LUYNqUJORVgtVVq27")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="app__contact">
      <form className="app__contact-form" ref={form} onSubmit={sendEmail}>
        <h2 className="heading-2 mb--3">Contact Me</h2>

        <label htmlFor="input-name">Name</label>
        <input
          className="input"
          id="input-name"
          placeholder="Name"
          type="text"
          name="name"
        />

        <label htmlFor="input-email">Email</label>
        <input
          className="input"
          id="input-email"
          placeholder="Email"
          type="email"
          name="email"
        />

        <label htmlFor="input-msg">Message</label>
        <textarea
          className="input"
          id="input-msg"
          placeholder="Message"
          name="message"
        />

        <div className="btn btn--white" type="submit">
          <FaPaperPlane />
          <input type="submit" value="Send" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
