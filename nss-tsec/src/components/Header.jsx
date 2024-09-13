// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-white shadow-md">
      <Link className="flex items-center justify-center" to="/">
        <img src="/images/nss_logo.png" alt="NSS TSEC Logo" style={{ height: '50px', width: '89px' }} />
        <span className="sr-only">NSS TSEC</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="#about">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/events/all">
          Events
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/community">
          Community
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="#tracking">
          Tracking
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="#reporting">
          Reporting
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="#announcements">
          Announcements
        </Link>
      </nav>
    </header>
  );
}
