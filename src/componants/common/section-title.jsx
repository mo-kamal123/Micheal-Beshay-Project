import classess from '../sections/home/hero.module.css';

const SectionTitle = ({ children, className }) => {
  return <p className={`relative ${classess.line} ${className}`}>{children}</p>;
};

export default SectionTitle;
