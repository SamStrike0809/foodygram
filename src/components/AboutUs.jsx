// import { IconButton } from "@material-ui/core";
import "../css/aboutus.css";
import React from "react";
import Link from "@material-ui/core/Link";

export default function AboutUs() {
  return (
    <React.Fragment className="body">
      <div>
        <div className="about-section">
          <div class="inner-container">
            <h1>About Us</h1>
            <p class="text">
              All around the world people think about the most important
              question of the day, What’s should I get to eat. We share pictures
              and stories of the most delicious foods and restaurants that we
              try with our friends and on social media. Often, we travel and
              visit new cities and we don’t know what the most popular eats are
              in that city. Foodygram was created to share our best food ideas
              and pictures and give people a chance to brighten their days by
              trying some of the best restaurants that they may or may not have
              heard of. We hope you enjoy the site and Bon Appetite!
            </p>
            <Link href="/ContactUs">
              <button type="button" className="simple">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
