import React, { useEffect } from "react";
import anime from "animejs";

const Home = () => {
  useEffect(() => {
    const textWrapper = document.querySelector(".home-heading");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".home-heading .letter",
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el, i) => 150 * (i + 1),
        })
        .add({
          targets: ".home-heading",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    }
  }, []);

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="text-container">
          <div className="welcome-div">
            <p className="welcome-text">Welcome to</p>
            <div className="line"></div>
          </div>
          <h1 className="home-heading">Lioncap Ventures</h1>
          <p className="motto">Transforming ideas into impact</p>
        </div>
      </div>
      <div className="footer">
        <div className="socials">
          <a href="https://www.facebook.com/lioncapventures">
            <i className="ri-facebook-fill"></i>
          </a>
          <a href="https://wa.link/xl6ypy">
            <i className="ri-whatsapp-fill"></i>
          </a>
          <a href="https://www.linkedin.com/company/lioncapventures">
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a href="https://x.com/LioncapVentures">
            <i class="ri-twitter-x-line"></i>
          </a>
        </div>
        <div className="copyright-text">
          <p>
            <i className="ri-copyright-line"></i>lioncap ventures 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;