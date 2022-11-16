/* eslint-disable */
import { useEffect } from "react";
// import ImageSlider from "../components/Slider";
import "../styles/Main.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleImageSlider from "react-simple-image-slider";
import { Link, useNavigate } from "react-router-dom";

function Main() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  const navigate = useNavigate();

  const myJWT = sessionStorage.getItem("JWT");
  // 토큰 없을 시 로그인으로
  const userName = sessionStorage.getItem("ID");

  // 무한 렌더링 방지
  useEffect(() => {
    {
      myJWT == null && navigate("/");
    }
  }, []);

  const images = [{ url: "/assets/soju.jpg" }, { url: "images/2.jpg" }, { url: "images/3.jpg" }, { url: "images/4.jpg" }, { url: "images/5.jpg" }, { url: "images/6.jpg" }, { url: "images/7.jpg" }];
  return (
    <>
      {/* <div>
        <SimpleImageSlider width={1000} height={504} images={images} showBullets={true} showNavs={true} />
      </div> */}
      {/* <ImageSlider></ImageSlider> */}

      <p className="slider_title">오늘은 뭐로 달릴까?</p>

      <Slider {...settings}>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={"/assets/soju.jpg"} />
            </div>
            <ul className="social-icons">
              <li>
                <Link to={"/detail/0"}>
                  <p>문구창 클릭시이동</p>
                  <p className="fa fa-facebook">*문구창</p>
                </Link>
              </li>
            </ul>
            <div className="details">
              <h2>
                소주 <span className="job-title">4,000-5,000원</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={"/assets/whi.jpg"} />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <p className="fa fa-facebook">*문구창</p>
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                양주 <span className="job-title">80,000-200,000원 | 평균도수 30</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={"/assets/wine.jpg"} />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <p className="fa fa-facebook">*문구창</p>
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                와인 <span className="job-title">40,000-100,000원</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={"/assets/beer.jpg"} />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <p className="fa fa-facebook">*문구창</p>
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                맥주 <span className="job-title">5,000-6,000원</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div
              className="card-image"
              onClick={(e) => {
                e.preventDefault();
                console.log("say");
                navigate("/detail/막걸리");
              }}
            >
              <img src={"/assets/Mak.jpg"} />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fa fa-facebook">문구창 회전 안 함 버전</i>
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                막걸리 <span className="job-title">4,000-5,000원</span>
              </h2>
            </div>
          </div>
        </div>
      </Slider>
      <div>
        <h1>채팅방 - 안주 추천</h1>
        <h1>채팅방 - 술 같이 마실 사람 (?) </h1>
      </div>
      <div className="test">
        <SimpleImageSlider width={468} height={300} images={images} showBullets={true} showNavs={true} autoPlay={true} autoPlayDelay={2.0} />
      </div>
    </>
  );
}

export default Main;
