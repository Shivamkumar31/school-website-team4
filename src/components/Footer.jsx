import React from 'react';

export default function Footer() {
  return (
      <footer className="bg-white mt-12 pt-8 text-gray-700 text-sm">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Combined Logo and Contact Details */}
            <div>
              <div className="flex items-center mb-4"> {/* Flex container for logo and title */}
                <img
                    src="https://tse4.mm.bing.net/th/id/OIP.dYYZuUl1R4RwUTtFMrCitgAAAA?pid=Api&P=0&h=180"
                    width="50"
                    alt="logo"
                    className="mr-2" // Added margin right for spacing
                />
                <h6 className="font-semibold text-base">Vishwa Bharati Shiksha Sadan</h6> {/* School name as title */}
              </div>
              <p className="mb-1">
                Chaurasta, Bihiya<br/>
                Bhojpur, Bihar (802154)<br/>
                India
              </p>
              <a href="mailto:info@vishwabharati.com" className="text-blue-600 hover:underline">
                info@vishwabharati.com
              </a>
            </div>

            <div>
              <h6 className="font-semibold mb-2">Explore</h6>
              <ul className="space-y-1">
                <li>Welcome</li>
                <li>School Profile</li>
                <li>News</li>
                <li>Gallery</li>
              </ul>
            </div>

            <div>
              <h6 className="font-semibold mb-2">General Pages</h6>
              <ul className="space-y-1">
                <li>Teacher Data</li>
                <li>New Student Admission</li>
                <li>Guide</li>
                <li>Location</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h6 className="font-semibold mb-2">Social Media</h6>
              <div className="flex space-x-4">
                {/* Twitter */}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg className="w-6 h-6 text-blue-500 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.56c-.89.39-1.85.66-2.86.78a5.03 5.03 0 0 0 2.21-2.78c-.96.57-2.01.98-3.14 1.2a5.03 5.03 0 0 0-8.56 4.58A14.26 14.26 0 0 1 1.67 3.15a5.02 5.02 0 0 0 1.56 6.7A5.01 5.01 0 0 1 .96 9.1v.06a5.02 5.02 0 0 0 4.03 4.92 5.04 5.04 0 0 1-2.27.09 5.02 5.02 0 0 0 4.69 3.48A10.1 10.1 0 0 1 0 20.54a14.23 14.23 0 0 0 7.71 2.26c9.26 0 14.32-7.67 14.32-14.32 0-.22 0-.44-.02-.66A10.24 10.24 0 0 0 24 4.56z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg className="w-6 h-6 text-blue-700 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.5v-9.294H9.691v-3.622h3.134V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.462.098 2.795.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.326V1.326C24 .593 23.406 0 22.675 0z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg className="w-6 h-6 text-pink-500 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.5.3.9.7 1.2 1.2.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.5-.7.9-1.2 1.2-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6-.5-.3-.9-.7-1.2-1.2-.3-.5-.5-1.2-.6-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.5.7-.9 1.2-1.2.5-.3 1.2-.5 2.4-.6C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.5.2 4.4.5 3.6 1 .8 1.9 0 3.5 0 7c0 1.3 0 1.7.1 5s.1 3.6.1 5c0 3.5.8 5.1 3.6 6 1 .4 2.2.7 3.6.8 1.3.1 1.7.1 5 .1s3.6 0 5-.1c1.4-.1 2.6-.4 3.6-.8 2.8-.9 3.6-2.5 3.6-6 0-1.3 0-1.7-.1-5s-.1-3.6-.1-5c0-3.5-.8-5.1-3.6-6-1-.4-2.2-.7-3.6-.8C15.7 0 15.3 0 12 0zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2S15.4 5.8 12 5.8zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.6c0 .8-.6 1.4-1.4 1.4S15.6 5.2 15.6 4.4 16.2 3 17 3s1.4.6 1.4 1.4z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-6 pt-4 text-center text-gray-500">
            copyright 2025 © Vishwa Bharati Shiksha Sadan. All rights reserved. Hosting by IDCloudHost.
          </div>
        </div>
      </footer>
  );
}