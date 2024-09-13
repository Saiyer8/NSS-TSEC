// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import EventSection from './components/EventSection';
import CommunityForum from './components/CommunityForum';
import Gallery from './components/Gallery';
import Announcements from './components/Announcements';
import ReportingSection from './components/ReportingSection';
import TrackingSection from './components/TrackingSection';
import EventDetailPage from './components/EventDetailPage'; // Import the EventDetailPage component
import AllEventsPage from './components/AllEventsPage'; // Import the AllEventsPage component

function Layout() {
  return (
    <>
      <Header />
      <HeroSection />
      <EventSection />
      <CommunityForum />
      <Gallery />
      <Announcements />
      <ReportingSection />
      <TrackingSection />
      <AboutSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/events" element={<EventSection />} />
        <Route path="/events/:id" element={<EventDetailPage />} /> {/* Route for event details */}
        <Route path="/all-events" element={<AllEventsPage />} /> {/* Route for all events */}
        <Route path="/community" element={<CommunityForum />} />
        {/* Define other routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
