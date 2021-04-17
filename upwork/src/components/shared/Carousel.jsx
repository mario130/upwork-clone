import Slider from "react-slick";
import Btn from "../UI/Form/Btn/Btn";


const Carousel = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {props.slider.map(slider=>( <div key={slider.title}>
        <img  className= "w-full" src={slider.src} alt={slider.alt} />
        <div className=" flex justify-center text-center">
          <div className="p-4">
        <p className="text-sm text-gray-500 text-center mt-5 mb-3">We think you might like help with</p>
        <h3 className="text-xl font-bold mb-5">{slider.title}</h3>
        <Btn className="text-primary border border-hair"> Learn more</Btn>

          </div>

        </div>
      </div>))}
    </Slider>
  );
};

export default Carousel;
