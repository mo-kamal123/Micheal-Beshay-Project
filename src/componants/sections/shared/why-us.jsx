import { useTranslation } from 'react-i18next';
import why_us from '../../../assets/home-imgs/why_us.jpg';
import SectionTitle from '../../common/section-title';

function WhyUs() {
  const { t } = useTranslation();

  const features = t('whyChooseUs.features', { returnObjects: true });

  return (
    <div>
      <div className="bg-main text-white w-full flex flex-col items-center justify-end md:flex-row md:h-[450px]">
        <div className="md:hidden w-[85%] rounded-2xl overflow-hidden my-10">
          <img src={why_us} alt="session img" />
        </div>
        <div className="w-[90%] mb-10 flex flex-col gap-2 md:w-1/2 md:mb-0">
          <SectionTitle className="text-[14px] ml-12 md:text-[23px] before:bg-white">
            {t('whyChooseUs.title')}
          </SectionTitle>
          <h1 className="text-[24px] md:text-[50px]">{t('whyChooseUs.heading')}</h1>
          <p className="text-[16px] leading-7 mt-3 md:text-[18px]">
            {t('whyChooseUs.description')}
          </p>
        </div>
      </div>

      <div className="w-[90%] m-auto flex justify-end relative gap-10">
        <div className="w-[470px] h-[700px] absolute -top-[370px] rtl:right-0 left-0 overflow-hidden rounded-2xl hidden md:block">
          <img src={why_us} alt="therapy session" />
        </div>

        <div className="md:w-[50%]">
          {features.map((feature, index) => (
            <div key={index} className="my-12 md:my-10">
              <div className="flex items-center ">
                <p className="text-[#5A717C] text-[24px] md:text-[56px]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <SectionTitle className="text-[16px] ml-16 md:text-[24px] before:bg-main">
                  {feature.title}
                </SectionTitle>
              </div>
              <p className="text-[#666C6F] text-[16px] leading-7 md:text-[18px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
