import React from "react";
import { Row, Col } from "reactstrap";

import Navigation from "components/Frontend/Navigation";
import HeroBranding from "components/Frontend/HeroBranding";
import SideBySide from "components/Frontend/SideBySide";
import GenericCard from "components/Frontend/GenericCard";
import OurBusinessesSection from "components/Frontend/Sections/OurBusinessesSection";
import ContactUsSection from "components/Frontend/Sections/ContactUsSection";

import { useRef } from "react";

function ContactUsPage() {
  const beforeAfterRef = useRef(null);
  return (
    <>
      <Navigation />
      <div className="main">
        <ContactUsSection />
      </div>
    </>
  );
}

export default ContactUsPage;
