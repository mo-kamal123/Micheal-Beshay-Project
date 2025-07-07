import { useUserMutationQuery } from '../../../hooks/user-hooks/useUserMutationQuery';
import Form from '../../common/form';

const YourProfile = () => {
  const { mutate, isError, isPending, isSuccess } = useUserMutationQuery();
  return (
    <div className="">
      <div>
        <h2 className="text-[#0F172A] text-[24px] font-[500] mb-4 ">Your profile</h2>
        <p className="text-[#666C6F] text-[18px] ">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare
          non id blandit netus.
        </p>
      </div>
      <div>
        <Form mutate={mutate} isError={isError} isPending={isPending} isSuccess={isSuccess} />
      </div>
    </div>
  );
};

export default YourProfile;
