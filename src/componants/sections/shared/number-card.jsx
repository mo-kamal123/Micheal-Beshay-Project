const NumbersCard = ({ number, title, active = false }) => {
  return (
    <div
      className={`bg-white  p-5 flex flex-col items-center justify-center gap-4 border-t-8 md:h-[160px] ${active ? 'border-sec ' : 'border-[#E7ECEE]'} `}
    >
      <h1 className="text-[26px] font-bold md:text-5xl">{number}</h1>
      <p className="text-[#666C6F] text-[11px] md:text-xl">{title}</p>
    </div>
  );
};

export default NumbersCard;
