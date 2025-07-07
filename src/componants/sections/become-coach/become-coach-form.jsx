import banner from '../../../assets/About-imgs/become_coach.png';
import { useBecomeCoach } from '../../../hooks/becomeCoach-hooks/useBecomeCoachQuery';
import Form from '../../common/form';
function BecomeCoachForm() {
  const { mutate, isPending, isError, isSuccess } = useBecomeCoach();
  return (
    <div className="h-fit">
      <div className="bg-main h-[200px] "></div>
      <div className="relative w-[90%] md:w-2/3 rounded-2xl overflow-hidden m-auto -mt-34 md:-mt-30">
        <img
          className="rounded-2xl w-full object-cover h-[200px] md:h-[300px]"
          src={banner}
          alt="about-banner"
        />
        <div className="my-10">
          <div>
            <h1 className="text-[40px]">Became coach</h1>
            <p>
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel,
              ornare non id blandit netus.
            </p>
          </div>
          <div>
            <Form
              type={'coach'}
              mutate={mutate}
              isError={isError}
              isPending={isPending}
              isSuccess={isSuccess}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeCoachForm;
