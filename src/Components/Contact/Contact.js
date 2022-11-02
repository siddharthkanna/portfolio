import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div>
      <form>
        <div className="title">
          <h2>05.Contact</h2>
        </div>
        <div className="half">
          <div className="item">
            <label for="name">NAME</label>
            <input type="text" id="name" />
          </div>
          <div class="item">
            <label for="email">EMAIL</label>
            <input type="text" id="email" />
          </div>
        </div>
        <div class="full">
          <label for="message">MESSAGE</label>
          <textarea name="" id="message"></textarea>
        </div>
        <div className="action">
          <input type="submit" value="SEND MESSAGE" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
