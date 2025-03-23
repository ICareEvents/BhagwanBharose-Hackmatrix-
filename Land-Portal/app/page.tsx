"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RegistrationPage() {
  // State for Nodal Officer details
  const [nodalName, setNodalName] = useState("");
  const [nodalDesignation, setNodalDesignation] = useState("");
  const [nodalMobile, setNodalMobile] = useState("");
  const [nodalEmail, setNodalEmail] = useState("");
  const [nodalLandline, setNodalLandline] = useState("");

  // State for Technical Officer details
  const [techName, setTechName] = useState("");
  const [techDesignation, setTechDesignation] = useState("");
  const [techMobile, setTechMobile] = useState("");
  const [techEmail, setTechEmail] = useState("");
  const [techLandline, setTechLandline] = useState("");

  // Checkbox state to copy nodal details to technical officer details
  const [copyNodal, setCopyNodal] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // Handle checkbox change: copy nodal details if checked, or clear if unchecked
  const handleCopyNodalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setCopyNodal(isChecked);
    if (isChecked) {
      setTechName(nodalName);
      setTechDesignation(nodalDesignation);
      setTechMobile(nodalMobile);
      setTechEmail(nodalEmail);
      setTechLandline(nodalLandline);
    } else {
      setTechName("");
      setTechDesignation("");
      setTechMobile("");
      setTechEmail("");
      setTechLandline("");
    }
  };

  // Handle form submission with captcha validation
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const captchaInput = (e.currentTarget.elements.namedItem("captcha") as HTMLInputElement).value;
    if (captchaInput !== "8X9rT2") {
      alert("Captcha does not match!");
      return;
    }
    if (!agreed) {
      alert("You must agree to the Terms and Conditions.");
      return;
    }
    alert("Registration successful!");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="govt-blue shadow-md">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/placeholder-logo.svg"
                alt="Government Logo"
                width={80}
                height={80}
              />
            </div>
            <div className="ml-4 text-white">
              <h1 className="text-xl font-bold">Identity Verification</h1>
              <p className="text-sm">Sponsored by Government of India</p>
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
              <button className="bg-green-600 text-white px-3 py-1 rounded-sm text-sm hover:bg-green-700 focus:outline-none">
                Register Provider
              </button>
              <button className="bg-orange-500 text-white px-3 py-1 rounded-sm text-sm hover:bg-orange-600 focus:outline-none">
                Register Verifier
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
            <Link href="#" className="block py-2 px-4 hover:bg-gray-700">Department</Link>
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
            <Link href="#" className="text-blue-600 hover:underline"> Registration</Link> &gt; 
            <span className="text-gray-600"> Verifier Registration</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white shadow-md rounded p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-200">
            Verifier Land Registration
          </h2>
          <form onSubmit={handleSubmit} id="registrationForm">
            {/* Organization Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 pl-3 py-2 form-section">User Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                  <label htmlFor="orgName" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Customer Full Name
                  </label>
                  <input id="orgName" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" required />
                </div>
                <div>
                  <label htmlFor="panTan" className="block text-gray-700 text-sm font-bold mb-2 required">
                    PAN/TAN
                  </label>
                  <input id="panTan" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" required />
                </div>
              <div>
                  <label htmlFor="headMobile" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Mobile Number
                  </label>
                  <input id="headMobile" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" required />
                </div>
                <div>
                  <label htmlFor="headEmail" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Email
                  </label>
                  <input id="headEmail" type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" required />
                </div>
                <div>
                  <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2 required">
                    State
                  </label>
                  <select id="state" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" required>
                    <option value="">Select State</option>
                    <option value="AP">Andhra Pradesh</option>
                    <option value="AR">Arunachal Pradesh</option>
                    <option value="AS">Assam</option>
                    <option value="BR">Bihar</option>
                    <option value="CG">Chhattisgarh</option>
                    <option value="GA">Goa</option>
                    <option value="GJ">Gujarat</option>
                    <option value="HR">Haryana</option>
                    <option value="HP">Himachal Pradesh</option>
                    <option value="JH">Jharkhand</option>
                    <option value="KA">Karnataka</option>
                    <option value="KL">Kerala</option>
                    <option value="MP">Madhya Pradesh</option>
                    <option value="MH">Maharashtra</option>
                    <option value="MN">Manipur</option>
                    <option value="ML">Meghalaya</option>
                    <option value="MZ">Mizoram</option>
                    <option value="NL">Nagaland</option>
                    <option value="OD">Odisha</option>
                    <option value="PB">Punjab</option>
                    <option value="RJ">Rajasthan</option>
                    <option value="SK">Sikkim</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="TG">Telangana</option>
                    <option value="TR">Tripura</option>
                    <option value="UK">Uttarakhand</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="WB">West Bengal</option>
                    <option value="AN">Andaman and Nicobar Islands</option>
                    <option value="CH">Chandigarh</option>
                    <option value="DN">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="DL">Delhi</option>
                    <option value="JK">Jammu and Kashmir</option>
                    <option value="LA">Ladakh</option>
                    <option value="LD">Lakshadweep</option>
                    <option value="PY">Puducherry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Department
                  </label>
                  <select id="department" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" required>
                    <option value="">Select Department</option>
                    <option value="revenue">Revenue Department</option>
                    <option value="education">Education Department</option>
                    <option value="agriculture">Agriculture Department</option>
                    <option value="health">Health Department</option>
                    <option value="urban">Urban Development</option>
                    <option value="rural">Rural Development</option>
                    <option value="home">Home Department</option>
                    <option value="finance">Finance Department</option>
                    <option value="irrigation">Irrigation Department</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Address
                  </label>
                  <textarea id="address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" rows={3} required></textarea>
                </div>
                <div>
                  <label htmlFor="pin" className="block text-gray-700 text-sm font-bold mb-2 required">
                    PIN Code
                  </label>
                  <input id="pin" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" required />
                </div>
              </div>
            </div>

            {/* Other Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 pl-3 py-2 form-section">Verification Request Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="orgType" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Locality comes under
                  </label>
                  <select id="orgType" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" required>
                    <option value="">Select Locality</option>
                    <option value="central">Central Government</option>
                    <option value="state">State Government</option>
                    <option value="psu">Public Sector Undertaking</option>
                    <option value="autonomous">Autonomous Body</option>
                    <option value="local">Local Body</option>
                    <option value="statutory">Statutory Organization</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Category
                  </label>
                  <select id="category" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" required>
                    <option value="">Select Category</option>
                    <option value="ministries">Ministries/Departments</option>
                    <option value="nationalInstitute">National Institute</option>
                    <option value="university">University/Educational Institution</option>
                    <option value="hospital">Hospital/Health Centre</option>
                    <option value="police">Police/Law Enforcement</option>
                    <option value="bank">Bank/Financial Institution</option>
                    <option value="utility">Utility Service Provider</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="purpose" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Purpose of Verification
                  </label>
                  <select id="purpose" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" required>
                    <option value="">Select Purpose</option>
                    <option value="certification">Certificate Verification</option>
                    <option value="landRecord">Land Record Verification</option>
                    <option value="identityVerification">Identity Verification</option>
                    <option value="propertyRegistration">Property Registration</option>
                    <option value="employment">Employment Verification</option>
                    <option value="education">Educational Credential Verification</option>
                    <option value="business">Business Registration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Upload Documents */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 pl-3 py-2 form-section">Upload Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="deptID" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Department ID (Max 2MB, PDF only)
                  </label>
                  <input id="deptID" type="file" accept=".pdf" className="w-full py-2 px-3 border border-gray-300 rounded" required />
                </div>
                <div>
                  <label htmlFor="authLetter" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Authorization Letter (Max 2MB, PDF only)
                  </label>
                  <input id="authLetter" type="file" accept=".pdf" className="w-full py-2 px-3 border border-gray-300 rounded" required />
                </div>
              </div>
            </div>

            {/* Department Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 pl-3 py-2 form-section">Department Selection for Verification</h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="verificationDept" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Select Department
                  </label>
                  <select id="verificationDept" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" required>
                    <option value="">Select Department</option>
                    <option value="revenue">Revenue Department</option>
                    <option value="education">Education Department</option>
                    <option value="agriculture">Agriculture Department</option>
                    <option value="health">Health Department</option>
                    <option value="urban">Urban Development</option>
                    <option value="rural">Rural Development</option>
                    <option value="home">Home Department</option>
                    <option value="finance">Finance Department</option>
                    <option value="irrigation">Irrigation Department</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Captcha and Terms */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="captcha" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Enter Captcha
                  </label>
                  <div className="flex">
                    <div className="bg-gray-200 p-2 mr-2 w-32 text-center font-bold">
                      8X9rT2
                    </div>
                    <input id="captcha" name="captcha" type="text" className="shadow appearance-none border rounded flex-grow py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" placeholder="Enter captcha" required />
                  </div>
                </div>
              </div>
            </div>

            {/* Agreement and Buttons */}
            <div className="flex items-center justify-between mt-8">
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} required />
                  <span className="ml-2 text-gray-700 text-sm">
                    I agree to the <Link href="#" className="text-blue-600 hover:underline">Terms and Conditions</Link>
                  </span>
                </label>
              </div>
              <div>
                <button type="reset" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline">
                  Reset
                </button>
                <button type="submit" className="btn-govt font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Register
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
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                {/* Add other social icons as needed */}
              </div>
              <p className="text-sm">Email: info@govreg.in</p>
              <p className="text-sm">Phone: +91-XXXXXXXXXX</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Identity Verification Portal. All rights reserved.</p>
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
