import SectionTitle from '../../common/section-title';
import CoachFeedback from './coach-feedback';

const CoachDetails = () => {
  return (
    <>
      <div className="m-auto flex justify-end">
        <div className="w-[90%] md:w-[52%] my-10">
          <SectionTitle className={'ml-12 mb-10 text-[20px] before:bg-black'}>
            Details of coach
          </SectionTitle>
          <p className="text-[#666C6F] mr-5">
            Massa odio interdum quisque massa ut mattis eget. Rhoncus sed convallis nulla sit
            facilisis vitae id lacus. Pharetra ultrices nisl.Massa odio interdum quisque massa ut
            mattis eget. Rhoncus sed convallis nulla sit facilisis vitae id lacus. Pharetra ultrices
            nisl.Massa odio interdum quisque massa ut mattis eget. Rhoncus sed convallis nulla sit
            facilisis vitae id lacus. Pharetra ultrices nisl.Massa odio interdum quisque massa ut
            mattis eget. Rhoncus sed convallis nulla sit facilisis vitae id lacus. Pharetra ultrices
            nisl.Massa odio interdum quisque massa ut mattis eget. Rhoncus sed convallis nulla sit
            facilisis vitae id lacus. Pharetra ultrices nisl.Massa odio interdum quisque massa ut
            mattis eget. Rhoncus sed convallis nulla sit facilisis vitae id lacus. Pharetra ultrices
            nisl.Massa odio interdum quisque massa ut mattis eget. Rhoncus sed convallis nulla sit
            facilisis vitae id lacus. Pharetra ultrices nisl.Massa odio interdum quisque massa ut
            mattis eget. Rhoncus sed convallis nulla sit facilisis vitae id lacus. Pharetra ultrices
            nisl.
          </p>
        </div>
      </div>
      <CoachFeedback />
    </>
  );
};

export default CoachDetails;
