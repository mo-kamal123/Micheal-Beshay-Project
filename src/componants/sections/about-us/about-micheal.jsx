import banner from '../../../assets/About-imgs/banner.jpg';
import NumbersCard from '../shared/number-card';
const AboutMicheal = () => {
  return (
    <div className="h-fit">
      <div className="bg-main h-[200px] md:h-[400px] mt-10"></div>
      <div className="relative w-[95%] md:w-2/3 rounded-2xl overflow-hidden m-auto -mt-30 md:-mt-70">
        <img
          className="rounded-2xl w-full object-cover h-[200px] md:h-[400px]"
          src={banner}
          alt="about-banner"
        />
        <div>
          <div>
            <h1 className="text-[24px] md:text-[40px] font-bold my-5">
              About Michael Beshay Coaching
            </h1>
            <p className=" text-[#666C6F] ">
              IELTS score is internationally recognized as an English Language proficiency
              requirement for higher education, in almost all countries including the USA, the
              United Kingdom, Australia, Canada, and New Zealand. The highest IELT Academic module
              test assesses whether you have adequate possible band score is 9.0; most universities
              accept a score of 6.0 for undergraduate admission and 6.0-7.0 for graduate admission.
              There are two versions of the{' '}
            </p>
          </div>
          <div>
            <h1 className="text-[24px] md:text-[40px] font-bold my-5">Our Vision</h1>
            <p className=" text-[#666C6F] ">
              IELTS score is internationally recognized as an English Language proficiency
              requirement for higher education, in almost all countries including the USA, the
              United Kingdom, Australia, Canada, and New Zealand. The highest IELT Academic module
              test assesses whether you have adequate possible band score is 9.0; most universities
              accept a score of 6.0 for undergraduate admission and 6.0-7.0 for graduate admission.
              There are two versions of the{' '}
            </p>
          </div>
          <div>
            <h1 className="text-[24px] md:text-[40px] font-bold my-5">Our mission</h1>
            <p className=" text-[#666C6F]  ">
              IELTS score is internationally recognized as an English Language proficiency
              requirement for higher education, in almost all countries including the USA, the
              United Kingdom, Australia, Canada, and New Zealand. The highest IELT Academic module
              test assesses whether you have adequate possible band score is 9.0; most universities
              accept a score of 6.0 for undergraduate admission and 6.0-7.0 for graduate admission.
              There are two versions of the{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMicheal;
