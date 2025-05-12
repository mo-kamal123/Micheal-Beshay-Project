import { useTranslation } from "react-i18next";
import FreeSession from "../componants/sections/home/free-session";
import Hero from "../componants/sections/home/hero";
import Video from "../componants/sections/home/video";
import Clients from "../componants/sections/shared/clients";
import NumbersCard from "../componants/sections/shared/number-card";
import OurCoachesSlider from "../componants/sections/shared/our-coaches";
import WhyUs from "../componants/sections/shared/why-us";

const Home = () => {
  const { t } = useTranslation();
  const stats = t("trust.stats", { returnObjects: true });

  return (
    <div className="bg-body">
      <Hero />
      <FreeSession />
      <WhyUs />
      <Clients />
      <div className="w-[90%] m-auto my-10 grid grid-cols-2 gap-10 md:w-[80%] md:grid-cols-4">
        {stats.map((item, index) => (
          <NumbersCard
            key={index}
            number={item.value}
            title={item.label}
            active={index === 0}
          />
        ))}
      </div>
      <OurCoachesSlider />
      <Video />
    </div>
  );
};

export default Home;
