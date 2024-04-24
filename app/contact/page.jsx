"use client";
import React, { useState } from "react";
import FormGroup from "../(components)/FormGroup";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.prevenDefault();

    const message = {
      firstName,
      lastName,
      email,
      body,
    };

    const res = await fetch("http://localhost:3000/api/Contact", {
      method: "POST",
      headers: { ContentType: "application/json" },
      body: JSON.stringify(message),
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-start  items-center w-full mx-auto mt-24">
      <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
        <div className="flex space-x-3 items-center">
          <FormGroup
            placeholder={"First Name"}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            id={"first_Name"}
            inputLabel={"First Name"}
          />
          <FormGroup
            placeholder={"Last Name"}
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            id={"last_Name"}
            inputLabel={"Last Name"}
          />
        </div>
        <FormGroup
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id={"email"}
          inputLabel={"Email"}
        />
        <div className="mb-2">
          <label className="block text-sm mb-2 font-medium">Message</label>
          <textarea
            className="w-full px-3 py-2 rounded-lg text-black"
            cols={4}
            rows={5}
            onChange={(e) => setBody(e.target.value)}
            value={body}
            placeholder="Message"
          ></textarea>
        </div>
        <button className="rounded-full px-1 py-2 bg-green-500 hover:bg-green-700 w-[40%] place-self-end font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
