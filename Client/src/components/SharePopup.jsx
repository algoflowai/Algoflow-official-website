"use client";
import React, { useState } from "react";
import { IconShare, IconCheck, IconX } from "@tabler/icons-react";

export default function SharePopup({ blogId }) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  // Get base URL based on environment
  const getBaseUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.hostname === "localhost"
        ? "http://localhost:3000"
        : "https://algoflowai.com";
    }
    return "";
  };

  const shareUrl = `${getBaseUrl()}/blog/${blogId}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      // fallback for older browsers
      const input = document.createElement("input");
      input.value = shareUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors font-semibold"
      >
        <IconShare className="h-5 w-5" />
        <span>Share</span>
      </button>
      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded shadow-lg min-w-[320px] relative">
            {/* Cancel icon in top right */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
              title="Close"
            >
              <IconX className="h-6 w-6" />
            </button>

            <p className="mb-2 font-semibold text-gray-800 pr-8">
              Share this link:
            </p>
            <div className="mb-3">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="border px-3 py-2 w-full rounded text-gray-900 font-medium bg-gray-50 focus:bg-white focus:outline-green-400"
                onFocus={(e) => e.target.select()}
              />
            </div>

            {/* Copy button below the input */}
            <button
              onClick={handleCopy}
              className={`w-full px-4 py-2 rounded bg-green-500 text-white font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2 ${
                copied ? "bg-green-700" : ""
              }`}
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <IconCheck className="h-4 w-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <span>Copy Link</span>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
