/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Header from "./Header";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";
import axios from "axios";
import { Parallax } from "react-parallax";
import api_key from "../api_config";

const sections = [
  { title: "New York", url: "/?search=new york" },
  { title: "Seoul", url: "/?search=seoul" },
  // { title: "Busan", url: "/?search=busan" },
  // { title: "Mumbai", url: "/?search=mumbai" },
  // { title: "Los Angeles", url: "/?search=los angeles" },
  // { title: "Tokyo", url: "/?search=tokyo" },
  // { title: "Brooklyn", url: "/?search=brooklyn" },
  { title: "Las Vegas", url: "/?search=las vegas" },
  // { title: "Singapore", url: "/?search=singapore" },
  // { title: "Seokcho", url: "/?search=seokcho" },
  // { title: "Gangneung", url: "/?search=gangneung" },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    if (search) {
      axios.get(api_key + `${search}`).then((res) => setPosts(res.data));
    } else {
      axios.get(api_key).then((res) => setPosts(res.data));
    }

    var refreshInterval = setInterval(function () {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        clearInterval(refreshInterval);
      } else {
        console.warn("window.instgrm is undefined not found");
      }
    }, 1000);
  }, [search]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Parallax strength={800}>
        <Container maxWidth="lg">
          <Header title="Foodygram" sections={sections} />
          <main style={{ marginTop: "30px" }}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}
            >
              <Masonry>
                {posts &&
                  posts.map((post, index) => <FeaturedPost post={post} />)}
              </Masonry>
            </ResponsiveMasonry>
          </main>
        </Container>
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </Parallax>
    </React.Fragment>
  );
}
