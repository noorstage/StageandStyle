import React from 'react';
import Nav from '../components/nav';  // Import the navigation bar component
import Cont from '../components/cont'  // Import the contact content component

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Nav />

      {/* Contact Page Content */}
      <Cont />
    </>
  );
};

export default ContactPage;
