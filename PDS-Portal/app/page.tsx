"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RationCardPage() {
  // Personal Details
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");

  // Family Details
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [spouseName, setSpouseName] = useState("");
  const [familyMembers, setFamilyMembers] = useState("");

  // Address Details
  const [houseNumber, setHouseNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [stateAddress, setStateAddress] = useState("");
  const [pin, setPin] = useState("");

  // Document Uploads
  const [aadharFile, setAadharFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  // Agreement checkbox
  const [agreed, setAgreed] = useState(false);

  // Handle form submission with captcha check
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const captchaInput = (e.currentTarget.elements.namedItem("captcha") as HTMLInputElement).value;
    if (captchaInput !== "4F7H9K") {
      alert("Captcha does not match!");
      return;
    }
    if (!agreed) {
      alert("You must agree to the Terms and Conditions.");
      return;
    }
    alert("Ration Card Application Submitted Successfully!");
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
              <h1 className="text-xl font-bold">Identity Verification Portal for PDS</h1>
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
                Apply for Ration Card
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
            <Link href="#" className="block py-2 px-4 hover:bg-gray-700">Eligibility</Link>
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
            <Link href="#" className="text-blue-600 hover:underline"> Ration Card</Link> &gt; 
            <span className="text-gray-600">New Application</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white shadow-md rounded p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-200">
            Ration Card
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Personal Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 pl-3 py-2 form-section">Personal Details</h3>
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
                <div>
                  <label htmlFor="aadharNumber" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Aadhaar Number
                  </label>
                  <input
                    id="aadharNumber"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={aadharNumber}
                    onChange={(e) => setAadharNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Family Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 pl-3 py-2 form-section">Family Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fatherName" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Father's Name
                  </label>
                  <input
                    id="fatherName"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="motherName" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Mother's Name
                  </label>
                  <input
                    id="motherName"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={motherName}
                    onChange={(e) => setMotherName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="spouseName" className="block text-gray-700 text-sm font-bold mb-2">
                    Spouse Name (if applicable)
                  </label>
                  <input
                    id="spouseName"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={spouseName}
                    onChange={(e) => setSpouseName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="familyMembers" className="block text-gray-700 text-sm font-bold mb-2 required">
                    No. of Family Members
                  </label>
                  <input
                    id="familyMembers"
                    type="number"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={familyMembers}
                    onChange={(e) => setFamilyMembers(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Address Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 pl-3 py-2 form-section">Address Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="houseNumber" className="block text-gray-700 text-sm font-bold mb-2 required">
                    House No./Building
                  </label>
                  <input
                    id="houseNumber"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={houseNumber}
                    onChange={(e) => setHouseNumber(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="street" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Street/Locality
                  </label>
                  <input
                    id="street"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2 required">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="district" className="block text-gray-700 text-sm font-bold mb-2 required">
                    District
                  </label>
                  <input
                    id="district"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="stateAddress" className="block text-gray-700 text-sm font-bold mb-2 required">
                    State
                  </label>
                  <select
                    id="stateAddress"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={stateAddress}
                    onChange={(e) => setStateAddress(e.target.value)}
                    required
                  >
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
                  <label htmlFor="pin" className="block text-gray-700 text-sm font-bold mb-2 required">
                    PIN Code
                  </label>
                  <input
                    id="pin"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Document Upload */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 pl-3 py-2 form-section">Upload Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="aadharFile" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Aadhaar Card (PDF/Image, Max 2MB)
                  </label>
                  <input
                    id="aadharFile"
                    type="file"
                    accept=".pdf,.jpg,.png"
                    className="w-full py-2 px-3 border border-gray-300 rounded"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setAadharFile(e.target.files[0]);
                      }
                    }}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="photoFile" className="block text-gray-700 text-sm font-bold mb-2 required">
                    Passport-size Photograph (JPEG/PNG, Max 2MB)
                  </label>
                  <input
                    id="photoFile"
                    type="file"
                    accept=".jpg,.png"
                    className="w-full py-2 px-3 border border-gray-300 rounded"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setPhotoFile(e.target.files[0]);
                      }
                    }}
                    required
                  />
                </div>
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
                      4F7H9K
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
