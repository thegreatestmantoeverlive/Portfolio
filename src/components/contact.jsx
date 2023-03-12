import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  function handleSubmit(event) {
    event.preventDefault(); 
    const form = document.getElementById("form-element");

    const formData = {};

    for (let i = 0; i < form.elements.length; i++) {
      const element = form.elements[i];
      if (element.type !== "submit") {
        formData[element.name] = element.value;
      }
    }
    document.getElementsByTagName("textarea")[0].value = "";
    let inputs = document.getElementsByTagName("input");
    for(let i = 0;i<inputs.length ;i++)
      inputs[i].value = "";

    emailjs.send('service_2s0tdw8','template_v43ybav' , formData , 'r1RxFUECvV7hRLZVT');
  }

  return (
    <div id="contact">
      <div id="contact-form">
        <div id="contact-socials">
        <a href="https://t.me/AdithyaDS"><i class="contact-icons fa-brands fa-telegram"></i><span>Telegram</span></a><br /> 
          <a href="https://twitter.com/SourDragon123"><i class="contact-icons fa-brands fa-twitter"></i><span>Twitter</span></a><br /> 
          <a href="https://github.com/sourdragon"><i class="contact-icons fa-brands fa-github"></i><span>Github</span></a>
        </div>
        <form onSubmit={handleSubmit} id="form-element">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" id="contact-button" value="Send" />
      </form>
      </div>
      
      <img src="https://i.imgur.com/JwKZdHu.png" id="contact-img" alt="A cyberpunk themed man">

      </img>
    </div>
  );
};

export default Contact;
