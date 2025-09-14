"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";

export default function EventRegisterForm() {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    address: "",
    college: "",
    course: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Must be 10 digits")
      .required("Phone number is required"),
    age: Yup.number().min(10).max(100).required("Age is required"),
    gender: Yup.string().required("Gender is required"),
    address: Yup.string().required("Address is required"),
    college: Yup.string().required("College is required"),
    course: Yup.string().required("Course is required"),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Form submitted:", values);
    // 🔗 Here you can connect to your API
    // await axios.post("/api/register-event", values);
    alert("Registration Successful!");
  };

  return (
    <section className="w-full flex justify-center mt-12 px-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900">
          Event Registration Form
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <Field
                type="text"
                name="fullName"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your full name"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Phone
              </label>
              <Field
                type="text"
                name="phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter phone number"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Age
              </label>
              <Field
                type="number"
                name="age"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter age"
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Gender
              </label>
              <Field
                as="select"
                name="gender"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Address
              </label>
              <Field
                type="text"
                name="address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your address"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* College */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                College
              </label>
              <Field
                type="text"
                name="college"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your college"
              />
              <ErrorMessage
                name="college"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Course */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Course
              </label>
              <Field
                type="text"
                name="course"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your course"
              />
              <ErrorMessage
                name="course"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Any additional info..."
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center mt-4">
              <Button
                type="submit"
                className="bg-red-500 hover:bg-yellow-800 text-white font-bold px-10 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                Submit Registration
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
