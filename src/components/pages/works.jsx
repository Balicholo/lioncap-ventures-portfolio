import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "./Works.css";
import image1 from "../../assets/images/1-removebg-preview.png";
import image2 from "../../assets/images/2-removebg-preview.png";
import image3 from "../../assets/images/3-removebg-preview.png";
import image4 from "../../assets/images/4-removebg-preview.png";
import image5 from "../../assets/images/project-5.png";
import image6 from "../../assets/images/project-6.png";
import image7 from "../../assets/images/project-7.png";
import image8 from "../../assets/images/project-8.png";
import image9 from "../../assets/images/project-9.png";


// const handleDescription = (description) => {
//   alert(description); // You can replace this with a modal if needed
// };
const Works = () => {
  return (
    <div className="works-container">
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={2}
        speed={600}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        className="swiper"
      >
        {/* Slides */}
  <SwiperSlide>
  <img src={image1} alt="project" />
  <div className="button-group" style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translate(-50%, -20px)', display: 'flex', gap: '10px' }}>
    <button
      onClick={() => window.open('https://www.guanxiholdings.com/', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Open
    </button>
    <button
      onClick={() => window.open('https://wa.link/ehcag3', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Contact Us
    </button>

    {/* <button
      onClick={() => handleDescription('Guanxi holdings is a company that specializes in tech hardware import and export.')}
      className="description-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Discription
    </button> */}
  </div>
</SwiperSlide>


<SwiperSlide>
  <img src={image2} alt="project" />
  <div className="button-group" style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translate(-50%, -20px)', display: 'flex', gap: '10px' }}>
    <button
      onClick={() => window.open('https://www.moyofunds.com', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Open
    </button>
    <button
      onClick={() => window.open('https://wa.link/hosv5y', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Contact Us
    </button>
    {/* <button
      onClick={() => handleDescription('We`re building Zimbabwe`s most trusted crowdfunding platform. Be the first to know when we launch.')}
      className="description-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Discription
    </button> */}
  </div>
</SwiperSlide>

{/* CARD */}
<SwiperSlide>
  <img src={image4} alt="project" />
  <div className="button-group" style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translate(-50%, -20px)', display: 'flex', gap: '10px' }}>
    <button
      onClick={() => window.open('https://www.stoneguard.co.zw', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Open
    </button>
    <button
      onClick={() => window.open('https://wa.link/h740di', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Contact Us
    </button>

    {/* <button
      onClick={() => handleDescription('StoneGuard is a leading provider of comprehensive data protection services')}
      className="description-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Discription
    </button> */}
  </div>
</SwiperSlide>
        {/* CARD */}
<SwiperSlide>
  <img src={image3} alt="project" />
  <div className="button-group" style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translate(-50%, -20px)', display: 'flex', gap: '10px' }}>
    <button
      onClick={() => window.open('https://www.shonatech.africa/', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Open
    </button>
    <button
      onClick={() => window.open('https://wa.link/6smpbc', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Contact Us
    </button>

    {/* <button
      onClick={() => handleDescription('We provide the most convenient access to Starlink products & services through our network of Shona stores around the African continent. .')}
      className="description-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Discription
    </button> */}
  </div>
</SwiperSlide>
{/* CARD 4 */}
<SwiperSlide>
  <img src={image5} alt="project" />
  <div className="button-group" style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translate(-50%, -20px)', display: 'flex', gap: '10px' }}>
    <button
      onClick={() => window.open('https://www.zuripay.app', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
        Open
    </button>
    <button
      onClick={() => window.open('https://wa.link/cw7nj7', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Contact Us
    </button>

    {/* <button
      onClick={() => handleDescription('Millions of businesses of all sizes use ZuriPay to accept payments, send payouts, and manage their businesses online')}
      className="description-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Discription
    </button> */}
  </div>
</SwiperSlide>
{/* CARD 5 */}
<SwiperSlide>
  <img src={image6} alt="project" />
  <div className="button-group" style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translate(-50%, -20px)', display: 'flex', gap: '10px' }}>
    <button
      onClick={() => window.open('https://avalonhealth.cloud', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
        Open
    </button>
    <button
      onClick={() => window.open('https://wa.link/7simgk', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Contact Us
    </button>

    {/* <button
      onClick={() => handleDescription('We`re simplifying your journey to wellness, giving doctors the tools they need, and patients the access they deserve')}
      className="description-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Discription
    </button> */}
  </div>
</SwiperSlide>
{/* CARD */}
<SwiperSlide>
  <img src={image7} alt="project" />
  <div className="button-group" style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translate(-50%, -20px)', display: 'flex', gap: '10px' }}>
    <button
      onClick={() => window.open('https://clinic.avalonhealth.cloud', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
        Open
    </button>
    <button
      onClick={() => window.open('https://wa.link/cjvmp4', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Contact Us
    </button>

    {/* <button
      onClick={() => handleDescription('Admin dashboard for Avalon Health, It contains information about the patients. ')}
      className="description-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Discription
    </button> */}
  </div>
</SwiperSlide>
{/* CARD */}
<SwiperSlide>
  <img src={image8} alt="project" />
  <div className="button-group" style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translate(-50%, -20px)', display: 'flex', gap: '10px' }}>
    <button
      onClick={() => window.open('https://www.zikimall.com', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
        Open
    </button>
    <button
      onClick={() => window.open('https://wa.link/o0d5qj', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Contact Us
    </button>

    {/* <button
      onClick={() => handleDescription('ZikiMall is Zimbabwe`s Digital Mall, it is an ecommerce platform where customers and merchants trade')}
      className="description-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Discription
    </button> */}
  </div>
</SwiperSlide>
{/* CARD*/}
<SwiperSlide>
  <img src={image9} alt="project" />
  <div className="button-group" style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translate(-50%, -20px)', display: 'flex', gap: '10px' }}>
    <button
      onClick={() => window.open('https://services.zikimall.com', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
        Open
    </button>
    <button
      onClick={() => window.open('https://wa.link/dmwjqb', '_blank')}
      className="view-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Contact Us
    </button>

    {/* <button
      onClick={() => handleDescription('Pay for all mobile providers, settle over 1000`s of billers, and more. Zikicash makes international money transfares easy')}
      className="description-button"
      style={{ padding: '5px 10px', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}
    >
      Discription
    </button> */}
  </div>
</SwiperSlide>
      </Swiper>
      
      <div className="footer works-footer">
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

export default Works;