import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <h1 className="fw-bold text-center text-primary">
        Feel Free to Contact Us
      </h1>
      <div style={{ width: "10rem", margin: "auto" }}>
        <button className="btn btn-success d-flex justify-content-center align-items-center">
          <WhatsAppIcon />
          <Link
            style={{
              width: "8rem",
              margin: "2rem auto",
              color: "black",
              fontSize: "1.5rem",
            }}
            to="https://api.whatsapp.com/message/PUDIO2WUSPQ3I1?autoload=1&app_absent=0"
          >
            WhatsApp
          </Link>
        </button>
      </div>
      <div style={{ width: "10rem", margin: "2rem auto" }}>
        <button className="btn btn-success d-flex justify-content-center align-items-center">
          <WhatsAppIcon />
          <Link
            style={{
              width: "8rem",
              margin: "2rem auto",
              color: "black",
              fontSize: "1.5rem",
            }}
            to="https://wa.me/message/E32C2UL42MJ2H1"
          >
            WhatsApp
          </Link>
        </button>
      </div>
      <div style={{ width: "10rem", margin: "2rem auto" }}>
        <button className="btn btn-primary d-flex justify-content-center align-items-center">
          <FacebookIcon />
          <Link
            style={{
              width: "8rem",
              margin: "2rem auto",
              color: "black",
              fontSize: "1.5rem",
            }}
            to="https://wa.me/message/E32C2UL42MJ2H1"
          >
            Facebook
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
