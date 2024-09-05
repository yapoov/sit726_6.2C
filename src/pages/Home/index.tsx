import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { SvgIcon } from "../../common/SvgIcon";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        Icon = {<img src={'/img/hero.png'} width="100%" height="100%" />}
        id="intro"
      />
     
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        Icon={<SvgIcon src={"eco.svg"} width="100%" height="100%" />}
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        Icon={<SvgIcon src={"plantcare.svg"} width="100%" height="100%" />}
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        Icon={<SvgIcon src={"modular.svg"} width="100%" height="100%" />}
        id="product"
      />
      <div>
      <section id="testimonials">
    <h2>What Our Customers Are Saying</h2>

    <div className="testimonial">
        <p>"This system has been a game-changer for my indoor garden! The real-time monitoring and automated watering have taken the guesswork out of plant care. I’ve seen a noticeable improvement in the health of my plants since using it."</p>
        <p><strong>– Sarah M., Home Gardener</strong></p>
    </div>

    <div className="testimonial">
        <p>"I love the convenience of the mobile app. I can check on my plants, adjust the settings, and even get alerts when they need attention – all from my phone. It’s perfect for someone like me with a busy schedule!"</p>
        <p><strong>– James R., Plant Enthusiast</strong></p>
    </div>

    <div className="testimonial">
        <p>"As someone who frequently travels, this system is a lifesaver. I no longer have to worry about my plants getting over or underwatered. The system takes care of everything, and the sensors are incredibly accurate."</p>
        <p><strong>– Emily K., Frequent Traveler</strong></p>
    </div>

    <div className="testimonial">
        <p>"The modular design makes it easy to expand the system as my garden grows. Plus, the automatic nutrient delivery has made a big difference in the growth and vibrancy of my plants!"</p>
        <p><strong>– David S., Urban Gardener</strong></p>
    </div>

    <div className="testimonial">
        <p>"The real-time data feature is amazing. I can see exactly what my plants need at any time, and the system makes sure they’re always well-watered and fed. It’s like having a personal gardener!"</p>
        <p><strong>– Rachel L., Plant Lover</strong></p>
    </div>
</section>

      </div>
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
