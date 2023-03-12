import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  function handleSubmit(event) {
    event.preventDefault(); 
    const form = document.getElementById("form-element");

    // Create an object to store the form data
    const formData = {};

    // Loop through all the form elements and add them to the formData object
    for (let i = 0; i < form.elements.length; i++) {
      const element = form.elements[i];
      if (element.type !== "submit") {
        formData[element.name] = element.value;
      }
    }

    // Print the formData object to the console
    console.log(formData);
  }

  return (
    <div id="contact">
      <form onSubmit={this.handleSubmit} id="form-element">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
