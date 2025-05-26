import { useState } from 'react';
import slideImg from '../../../assets/home-imgs/slider.jpg';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import SectionTitle from '../../common/section-title';
import { useTranslation } from 'react-i18next';

const OurCoachesSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      name: t('coaching.coach.name'),
      description: t('coaching.coach.description'),
      image: slideImg,
    },
    {
      id: 2,
      name: 'C. Mohamed Ahmed2',
      description: 'Lorem Ipsum is simply dummy text the printing and provide best visa ever',
      image: slideImg,
    },
    {
      id: 3,
      name: 'C. Mohamed Ahmed3',
      description: 'Lorem Ipsum is simply dummy text the printing and provide best visa ever',
      image: slideImg,
    },
    {
      id: 4,
      name: 'C. Mohamed Ahmed4',
      description: 'Lorem Ipsum is simply dummy text the printing and provide best visa ever',
      image: slideImg,
    },
    {
      id: 5,
      name: 'C. Mohamed Ahmed5',
      description: 'Lorem Ipsum is simply dummy text the printing and provide best visa ever',
      image: slideImg,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="bg-main relative w-full overflow-hidden py-10">
      <div className="text-white w-[80%] lg:w-[70%] m-auto mb-10">
        <SectionTitle className="text-[20px] ml-4 lg:ml-12 before:bg-white">
          {t('coaching.title')}
        </SectionTitle>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-[24px] lg:text-[48px] font-bold">{t('coaching.heading')}</h1>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <button
              onClick={prevSlide}
              className="text-white border p-3 lg:p-4 rounded-full hover:bg-sec transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="text-white border p-3 lg:p-4 rounded-full hover:bg-sec transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="w-[95%] m-auto flex overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`px-4 transition-all duration-500 ease-in-out ${
                index === currentSlide ? 'w-[700px] md:w-[50%] opacity-100' : 'w-[30%] opacity-90'
              }`}
            >
              <div className="relative rounded-3xl shadow-lg overflow-hidden">
                <img src={slide.image} alt={slide.name} className="w-full h-[390px] object-cover" />
                <div
                  className={`bg-main/80 text-white w-[90%] max-h-[200px] overflow-hidden m-auto absolute bottom-5 left-3 rounded-3xl transition-all duration-700 p-6 ${
                    index === currentSlide ? 'opacity-100' : 'lg:opacity-0'
                  }`}
                >
                  <h4 className="text-lg font-semibold mt-2">{slide.name}</h4>
                  <p className="text-sm my-1">{slide.description}</p>
                  <button className="border rounded-4xl py-2 px-6 mt-2">
                    {t('coaching.coach.button')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCoachesSlider;
