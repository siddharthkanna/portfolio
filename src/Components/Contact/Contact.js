import React from "react";
import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, message } = user;

    if (name && email && message) {
      const res = await fetch(
        "https://portfolio-5d240-default-rtdb.firebaseio.com/ContactData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      if (res) {
        setUser({
          name: "",
          email: "",
          message: "",
        });
        alert("Details Submitted successfully");
      }
    } else {
      alert("Please fill the details properly");
    }
  };
  return (
    <div>
      <form method="POST">
        <div className="title">
          <h2>05.Contact</h2>
        </div>
        <div className="half">
          <div className="item">
            <label for="name">NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={getUserData}
              required
            />
          </div>
          <div class="item">
            <label for="email">EMAIL</label>
            <input
              type="text"
              id="email"
              name="email"
              value={user.email}
              onChange={getUserData}
              required
            />
          </div>
        </div>
        <div class="full">
          <label for="message">MESSAGE</label>
          <textarea
            name="message"
            id="message"
            value={user.message}
            onChange={getUserData}
            required
          ></textarea>
        </div>
        <div className="action">
          <button type="submit" onClick={postData}>
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
