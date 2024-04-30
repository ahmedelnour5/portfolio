"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import FormGroup from "../(components)/FormGroup";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [processed, setProcessed] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: yup.object({
      firstName: yup.string().trim().required("First Name is required"),
      lastName: yup.string().trim().required("Last Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      message: yup.string().trim().required("Message is required"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3000/api/Contact", {
          method: "POST",
          body: JSON.stringify(values, null, 2),
        });

        if (res.ok) {
          setProcessed(true);
          setLoading(false);
          formik.resetForm();
        }
      } catch (error) {
        console.log("Error processing message: ", error);
        setLoading(false);
        setProcessed(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col justify-start  items-center w-full mx-auto mt-24">
      {processed && (
        <p className="text-lg font-semibold justify-self-center">{`Thank you for reaching out! I will contact you soon.`}</p>
      )}
      {!processed && (
        <form
          className="flex flex-col space-y-2"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-full flex space-x-2">
            <div className="flex flex-col">
              <FormGroup
                inputLabel="First Name:"
                placeholder="First Name"
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.firstName && (
                <p className="text-sm text-pink-600 mt-1">
                  {formik.errors.firstName}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <FormGroup
                inputLabel="Last Name:"
                placeholder="Last Name"
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.lastName && (
                <p className="text-pink-600 text-sm mt-1">
                  {formik.errors.lastName}
                </p>
              )}
            </div>
          </div>
          <div className="mt-2">
            <FormGroup
              inputLabel="Email:"
              placeholder="Email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && (
              <p className="text-pink-600 text-sm mt-1">
                {formik.errors.email}
              </p>
            )}
          </div>
          <label htmlFor="message">Message:</label>
          <textarea
            cols={4}
            rows={4}
            placeholder="Message"
            id="message"
            name="message"
            className="rounded-md px-2 py-3 shadow-sm  text-black"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.message && (
            <p className="text-pink-600 text-sm mt-1">
              {formik.errors.message}
            </p>
          )}

          <button
            disabled={loading}
            type="submit"
            className="px-3 py-2 bg-green-500 rounded-lg shadow-sm mt-2 hover:bg-green-600"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
