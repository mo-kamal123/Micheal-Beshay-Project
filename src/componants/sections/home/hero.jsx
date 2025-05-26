import { useTranslation } from 'react-i18next';
import SectionTitle from '../../common/section-title';
import classess from './hero.module.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <header
      className={`${classess.backgroundImg} h-[782px] flex items-end md:items-center md:justify-end`}
    >
      <div className="text-white w-[95%] mx-auto md:m-0 md:w-[50%] flex flex-col gap-5">
        <p className="text-[20px] font-light">{t('hero.title')}</p>
        <h1 className="text-[40px] md:text-[50px] font-[500] leading-14">{t('hero.subtitle')}</h1>
        <SectionTitle className="w-[80%] ml-14 mb-5 pl-3 text-[14px] leading-7 md:w-[70%] md:text-[16px] before:bg-white">
          {t('hero.description')}
        </SectionTitle>
      </div>
    </header>
  );
};

export default Hero;
