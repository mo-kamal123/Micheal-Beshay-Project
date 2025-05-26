import SectionTitle from '../../common/section-title';
import banner from '../../../assets/About-imgs/banner.jpg';
import borderdImg from '../../../assets/About-imgs/borderd_img.jpg';
import shapeOne from '../../../assets/About-imgs/shape_1.png';
import ShapeTwo from '../../../assets/About-imgs/shape_2.png';

const Summery = () => {
  return (
    <div className="w-[90%] m-auto flex flex-col md:flex-row items-center justify-between py-10 gap-20 md:gap-0">
      <div className="md:w-1/2 flex flex-col gap-4 md:text-left">
        <p className="text-main text-sm md:text-base">About us</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">What about Michael Beshay?</h1>
        <SectionTitle className="text-[#666C6F] mt-4 text-sm md:text-base">
          Laoreet amet arcu quisque aliquam feugiat sit. Mauris quis vestibulum viverra nullam
          lobortis et eget tortor.
        </SectionTitle>
      </div>

      <div className="relative md:w-1/2 w-full h-[250px] sm:h-[450px] md:h-[500px]">
        {/* Image Layer 1 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[140px] rotate-6 h-[250px] sm:h-[300px] md:h-[400px] w-[200px] sm:w-[250px] md:w-[300px] overflow-hidden border-4 rounded-2xl shadow-lg">
          <img className="w-full h-full object-cover" src={banner} alt="about-img" />
        </div>

        {/* Image Layer 2 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[100px] -rotate-3 h-[250px] sm:h-[300px] md:h-[400px] w-[200px] sm:w-[250px] md:w-[300px]">
          <div className="overflow-hidden border-4 rounded-2xl shadow-lg">
            <img className="w-full h-full object-cover" src={borderdImg} alt="about-img" />
          </div>

          <img
            className="absolute -top-10 -left-10 w-16 sm:w-20 "
            src={shapeOne}
            alt="decorative shape"
          />
          <img className="absolute -top-12 -right-10 w-16 " src={ShapeTwo} alt="decorative shape" />
        </div>
      </div>
    </div>
  );
};

export default Summery;
