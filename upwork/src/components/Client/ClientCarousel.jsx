import Carousel from "../shared/Carousel";

import sm from "./../../assets/imges/client-slider/social-media.png";
import wb from "./../../assets/imges/client-slider/web-design.png";
import wd from "./../../assets/imges/client-slider/web-dev.png";
const ClientCarousel = () => {
    const slidersContent = [
        {src:sm,alt:"social-media",title:"Social Media"},
        {src:wb,alt:"web-design",title:"Web Design"},
        {src:wd,alt:"web-dev",title:"Web Development"},

    ]
    return ( 
        <div className="bg-white">
            <Carousel slider={slidersContent}/>

        </div>
     );
}
 
export default ClientCarousel;