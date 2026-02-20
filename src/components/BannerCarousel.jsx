import Carousel from "react-bootstrap/Carousel";
import banner1 from "../assets/img/banner1.png";
import banner2 from "../assets/img/banner2.png";
import banner3 from "../assets/img/banner3.png";
import banner4 from "../assets/img/banner4.png";
import "../css/BannerCarousel.css";

const BannerCarousel = () => (
  <Carousel fade interval={5000}>
    <Carousel.Item>
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${banner1})` }}
      ></div>
      <div className="container hero-content">
        <h1 className="display-6 mb-1">Accesorios Moto</h1>
        <p className="lead m-0">Versatilidad en dos ruedas.</p>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${banner2})` }}
      ></div>
      <div className="container hero-content">
        <h1 className="display-6 mb-1">Protección y estilo</h1>
        <p className="lead m-0">Encuentra tu equipo ideal.</p>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${banner3})` }}
      ></div>
      <div className="container hero-content">
        <h1 className="display-6 mb-1">Listo para la ruta</h1>
        <p className="lead m-0">Calidad a buen precio.</p>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${banner4})` }}
      ></div>
      <div className="container hero-content">
        <h1 className="display-6 mb-1">¡A rodar!</h1>
        <p className="lead m-0">Todo para tu aventura.</p>
      </div>
    </Carousel.Item>
  </Carousel>
);

export default BannerCarousel;
