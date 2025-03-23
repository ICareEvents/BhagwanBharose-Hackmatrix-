"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function IdentityVerificationPage() {
  // Personal Information
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  // Identity Document Details
  const [idType, setIdType] = useState("");
  const [idNumber, setIdNumber] = useState("");

  // Contact Information
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  // Address
  const [address, setAddress] = useState("");

  // Document Upload
  const [idDocument, setIdDocument] = useState<File | null>(null);

  // Agreement checkbox
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const captchaInput = (e.currentTarget.elements.namedItem("captcha") as HTMLInputElement).value;
    if (captchaInput !== "X8V2R5") {
      alert("Captcha does not match!");
      return;
    }
    if (!agreed) {
      alert("You must agree to the Terms and Conditions.");
      return;
    }
    alert("Identity Verification Application Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="govt-blue shadow-md">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src="/placeholder-logo.svg" alt="Government Logo" width={80} height={80} />
            </div>
            <div className="ml-4 text-white">
              <h1 className="text-xl font-bold">Identity Verification Portal</h1>
              <p className="text-sm">Government of India</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center">
            <div className="relative mr-4">
              <select className="bg-white text-gray-800 py-1 px-3 rounded-sm text-sm focus:outline-none">
                <option>English</option>
                <option>हिंदी</option>
                <option>বাংলা</option>
                <option>తెలుగు</option>
                <option>मराठी</option>
                <option>தமிழ்</option>
              </select>
            </div>
            <div className="flex mt-2 md:mt-0 space-x-2">
              <button className="bg-white text-blue-800 px-3 py-1 rounded-sm text-sm hover:bg-gray-200 focus:outline-none">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <Link href="#" className="block py-2 px-4 hover:bg-gray-700">About</Link>
            <Link href="#" className="block py-2 px-4 hover:bg-gray-700">Services</Link>
            <Link href="#" className="block py-2 px-4 hover:bg-gray-700">Documents</Link>
            <Link href="#" className="block py-2 px-4 hover:bg-gray-700">Contact Us</Link>
            <Link href="#" className="block py-2 px-4 hover:bg-gray-700">Important Links</Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="bg-white py-2 shadow-sm">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            <Link href="#" className="text-blue-600 hover:underline">Home</Link> &gt; 
            <Link href="#" className="text-blue-600 hover:underline"> Identity Verification</Link> &gt; 
            <span className="text-gray-600">New Application</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white shadow-md rounded p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-200">
            Identity Verification Application
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 pl-3 py-2 form-section">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Date of Birth
                  </label>
                  <input
                    id="dob"
                    type="date"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Gender
                  </label>
                  <select
                    id="gender"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Identity Document Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 pl-3 py-2 form-section">Identity Document Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="idType" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Document Type
                  </label>
                  <select
                    id="idType"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={idType}
                    onChange={(e) => setIdType(e.target.value)}
                    required
                  >
                    <option value="">Select Document Type</option>
                    <option value="aadhaar">Aadhaar Card</option>
                    <option value="voter">Voter ID</option>
                    <option value="passport">Passport</option>
                    <option value="driving">Driving License</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="idNumber" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Document Number
                  </label>
                  <input
                    id="idNumber"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 pl-3 py-2 form-section">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Address Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 pl-3 py-2 form-section">Address Details</h3>
              <div>
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2 required">
                  Address
                </label>
                <textarea
                  id="address"
                  className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>

            {/* Document Upload */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 pl-3 py-2 form-section">Upload Identity Document</h3>
              <div>
                <label htmlFor="idDocument" className="block text-gray-700 text-sm font-bold mb-2 required">
                  Upload Document (PDF/Image, Max 2MB)
                </label>
                <input
                  id="idDocument"
                  type="file"
                  accept=".pdf,.jpg,.png"
                  className="w-full py-2 px-3 border border-gray-300 rounded"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setIdDocument(e.target.files[0]);
                    }
                  }}
                  required
                />
              </div>
            </div>

            {/* Captcha */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="captcha" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Enter Captcha
                  </label>
                  <div className="flex">
                    <div className="bg-gray-200 p-2 mr-2 w-32 text-center font-bold">
                      X8V2R5
                    </div>
                    <input
                      id="captcha"
                      name="captcha"
                      type="text"
                      className="shadow appearance-none border rounded flex-grow py-2 px-3 focus:outline-none focus:shadow-outline"
                      placeholder="Enter captcha"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Agreement and Buttons */}
            <div className="flex items-center justify-between mt-8">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    required
                  />
                  <span className="ml-2 text-gray-700 text-sm">
                    I agree to the <Link href="#" className="text-blue-600 hover:underline">Terms and Conditions</Link>
                  </span>
                </label>
              </div>
              <div>
                <button
                  type="reset"
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="btn-govt font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="govt-blue text-white mt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">About Us</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:underline">About The Portal</Link></li>
                <li><Link href="#" className="hover:underline">Mission &amp; Vision</Link></li>
                <li><Link href="#" className="hover:underline">Objectives</Link></li>
                <li><Link href="#" className="hover:underline">Organization Structure</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Policies</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:underline">Terms &amp; Conditions</Link></li>
                <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:underline">Copyright Policy</Link></li>
                <li><Link href="#" className="hover:underline">Disclaimer</Link></li>
                <li><Link href="#" className="hover:underline">Hyperlink Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Help</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:underline">FAQ</Link></li>
                <li><Link href="#" className="hover:underline">Contact Us</Link></li>
                <li><Link href="#" className="hover:underline">Feedback</Link></li>
                <li><Link href="#" className="hover:underline">Sitemap</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="hover:opacity-80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
              </div>
              <p className="text-sm">Email: info@govreg.in</p>
              <p className="text-sm">Phone: +91-XXXXXXXXXX</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} GovReg Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom Global Styles */}
      <style jsx global>{`
        .govt-blue {
          background-color: #0066cc;
        }
        .btn-govt {
          background-color: #0066cc;
          color: white;
          transition: background-color 0.3s;
        }
        .btn-govt:hover {
          background-color: #004c99;
        }
        .form-section {
          border-left: 4px solid #0066cc;
          background-color: #f8f9fa;
        }
        .required:after {
          content: "*";
          color: red;
        }
      `}</style>
    </div>
  );
}