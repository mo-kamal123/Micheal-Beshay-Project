import videoImg from '../../../assets/home-imgs/video.jpg';
import SectionTitle from '../../common/section-title';
import { TbPlayerPlayFilled } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

function Video() {
  const { t } = useTranslation();

  return (
    <div className="w-[90%] mx-auto my-20 flex flex-col justify-center gap-5 md:w-[75%] ">
      <SectionTitle className="text-main text-[20px] before:bg-main ml-10">
        {t('video.title')}
      </SectionTitle>
      <h1 className="text-[24px] font-bold md:w-[60%] md:text-[45px]">{t('video.heading')}</h1>
      <div className="relative">
        <div className="absolute top-0 left-0 bg-black/20 w-full h-full rounded-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl bg-black text-white rounded-full p-4">
          <TbPlayerPlayFilled />
        </div>
        <img className="rounded-2xl w-full" src={videoImg} alt="Video img" />
      </div>
    </div>
  );
}

export default Video;
