import Heading from "../componants/sections/coaches/Heading"
import CoachCard from "../componants/sections/coaches/coach-card"
import FilterBar from "../componants/sections/coaches/filter-bar"
import Clients from "../componants/sections/shared/clients"
import NumbersCard from "../componants/sections/shared/number-card"
import OurCoachesSlider from "../componants/sections/shared/our-coaches"
import WhyUs from "../componants/sections/shared/why-us"

const Coaches = () => {
  return (
    <div className="min-h-screen bg-body">
      <Heading />
      <FilterBar />
      <div className="grid grid-cols-1 gap-5 w-[90%] mb-10 m-auto md:grid-cols-2">
        <CoachCard />
        <CoachCard />
        <CoachCard />
        <CoachCard />
        <CoachCard />
        <CoachCard />
        <CoachCard />
        <CoachCard />
      </div>
      <OurCoachesSlider />
      <WhyUs />
      <Clients />
      <div className="w-[80%] m-auto my-10 grid grid-cols-4 gap-10">
        <NumbersCard number={"4385 +"} title={"Session"} active={true} />
        <NumbersCard number={"100"} title={"Coaches Trained"} />
        <NumbersCard number={"13"} title={"Countries"} />
        <NumbersCard number={"13"} title={"Years of Experience"} />
      </div>
    </div>
  )
}

export default Coaches