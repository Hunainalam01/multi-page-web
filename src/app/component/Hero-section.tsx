"use client";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import React from "react";

function HeroSection() {
  return (
    <div className="hero-parent">
      <div className="hero-heading font">
        <h1>CREATIVE </h1>
      </div>
      <div className="hero-heading-2 font">
        <h3>EXHIBITION</h3>
      </div>
      <div className="hero-para font">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          <br />
          autem alias quidem voluptatum nesciunt placeat aspernatur asperiores{" "}
          <br />
          corrupti harum qui.
        </p>
      </div>
      <div className="hero-btn font">learn More</div>
      <Link
        className="hero-link"
        href={"https://www.linkedin.com/in/hunain-alam-0328732ba/"}
        target="_blank"
      >
        www.linkedIn/hunain_alam.com
      </Link>

      <div className="icon-parent">
        <div className="icon-child">

          <div className="hero-icon">
          <a className="social-icon"
              href="https://www.facebook.com/hunainalam.hunainalam.31/"
              target="_blank"
            >
              <FacebookIcon sx={{ fontSize: 20 }} />
            </a>
          </div>

          <div className="hero-icon">
            <a className="social-icon"
              href="https://www.instagram.com/_hunain_01_/profilecard/?igsh=NmpvYmk5aXBhdjEx"
              target="_blank"
            >
              <InstagramIcon sx={{ fontSize: 20 }} />
            </a>
          </div>


          <div className="hero-icon">

            <a className="social-icon"
              href="https://www.linkedin.com/in/hunain-alam-0328732ba/"
              target="_blank"
            >
              <LinkedInIcon sx={{ fontSize: 20 }} />
            </a>
          </div>
        </div>

        <div className="icon-text"> 4K - Layout</div>
      </div>
    </div>
  );
}

export default HeroSection;
