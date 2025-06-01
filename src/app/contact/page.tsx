"use client";

import React, { useState } from "react";

function Page() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!company.trim()) {
      setError("Please enter your company name.");
      return;
    }
    if (!price.trim()) {
      setError("Please enter your budget.");
      return;
    }

    setError(null);
    console.log({ email, name, company, price });
  };

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto p-4 h-screen justify-center ">
      <input
        type="email"
        name="email"
        placeholder="exp@xxxx.xxx"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="name"
        placeholder="Srujan"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="company"
        placeholder="Vithsutra"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        name="price"
        placeholder="20000-5000000"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 rounded"
      />
      {error && <div className="text-red-500">{error}</div>}
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
}

export default Page;
