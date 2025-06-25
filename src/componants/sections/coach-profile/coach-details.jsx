import { useSelector } from 'react-redux';
import SectionTitle from '../../common/section-title';
import CoachFeedback from './coach-feedback';

const CoachDetails = () => {
  const coach = useSelector(state => state.coach)
  console.log(coach);
  return (
    <>
      <div className="m-auto flex justify-end">
        <div className="w-[90%] md:w-[52%] my-10">
          <SectionTitle className={'ml-12 mb-10 text-[20px] before:bg-black'}>
            Details of coach
          </SectionTitle>
          <p className="text-[#666C6F] mr-5">
            {coach.description}
          </p>
        </div>
      </div>
      <CoachFeedback />
    </>
  );
};

export default CoachDetails;
