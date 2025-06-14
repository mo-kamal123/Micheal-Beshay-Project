import PageHead from '../componants/sections/coaches/heading';
import CoachCard from '../componants/sections/coaches/coach-card';
import FilterBar from '../componants/sections/coaches/filter-bar';
import Clients from '../componants/sections/shared/clients';
import NumbersCard from '../componants/sections/shared/number-card';
import OurCoachesSlider from '../componants/sections/shared/our-coaches';
import WhyUs from '../componants/sections/shared/why-us';

const Coaches = () => {
  // Sample data for coaches, this will replaced with actual data from an API or database
  const coaches = [
    {
      id: 1,
      name: 'Amanda Clara',
      description:
        'A life coach is a professional who helps individuals set and achieve personal or professional goals, improve their mindset, and create a more fulfilling life. They provide guidance',
      price: '300',
      totalSessions: '33',
      feedback: '23',
      rate: '4.5',
    },
    {
      id: 2,
      name: 'Mo Clara',
      description:
        'A life coach is a professional who helps individuals set and achieve personal or professional goals, improve their mindset, and create a more fulfilling life. They provide guidance',
      price: '300',
      totalSessions: '33',
      feedback: '23',
      rate: '4.5',
    },
    {
      id: 3,
      name: 'Max Clara',
      description:
        'A life coach is a professional who helps individuals set and achieve personal or professional goals, improve their mindset, and create a more fulfilling life. They provide guidance',
      price: '300',
      totalSessions: '33',
      feedback: '23',
      rate: '4.5',
    },
    {
      id: 4,
      name: 'Niko Clara',
      description:
        'A life coach is a professional who helps individuals set and achieve personal or professional goals, improve their mindset, and create a more fulfilling life. They provide guidance',
      price: '300',
      totalSessions: '33',
      feedback: '23',
      rate: '4.5',
    },
    {
      id: 5,
      name: 'Andro Clara',
      description:
        'A life coach is a professional who helps individuals set and achieve personal or professional goals, improve their mindset, and create a more fulfilling life. They provide guidance',
      price: '300',
      totalSessions: '33',
      feedback: '23',
      rate: '4.5',
    },
    {
      id: 6,
      name: 'Mira Clara',
      description:
        'A life coach is a professional who helps individuals set and achieve personal or professional goals, improve their mindset, and create a more fulfilling life. They provide guidance',
      price: '300',
      totalSessions: '33',
      feedback: '23',
      rate: '4.5',
    },
  ];
  return (
    <div className="min-h-screen bg-body">
      <PageHead />
      <FilterBar />
      <div className="grid grid-cols-1 gap-5 w-[90%] mb-10 m-auto md:grid-cols-2">
        {coaches.map(coach => (
          <CoachCard key={coach.id} coach={coach} />
        ))}
      </div>
      <OurCoachesSlider />
      <WhyUs />
      <Clients />
      <div className="w-[80%] m-auto my-10 grid grid-cols-4 gap-10">
        <NumbersCard number={'4385 +'} title={'Session'} active={true} />
        <NumbersCard number={'100'} title={'Coaches Trained'} />
        <NumbersCard number={'13'} title={'Countries'} />
        <NumbersCard number={'13'} title={'Years of Experience'} />
      </div>
    </div>
  );
};

export default Coaches;
