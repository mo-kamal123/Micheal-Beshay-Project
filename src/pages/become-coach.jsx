import BecomeCoachForm from '../componants/sections/become-coach/become-coach-form';
import Clients from '../componants/sections/shared/clients';
import NumbersCard from '../componants/sections/shared/number-card';

const BecomeCoach = () => {
  return (
    <div>
      <BecomeCoachForm />
      <div className="w-[90%] m-auto my-10 grid grid-cols-2 gap-10 md:w-[80%] md:grid-cols-4">
        <NumbersCard number={'4385 +'} title={'Session'} active={true} />
        <NumbersCard number={'100'} title={'Coaches Trained'} />
        <NumbersCard number={'13'} title={'Countries'} />
        <NumbersCard number={'13'} title={'Years of Experience'} />
      </div>
      <Clients />
    </div>
  );
};

export default BecomeCoach;
