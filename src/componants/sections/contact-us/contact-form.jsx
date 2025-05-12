import Form from "../../common/form";
import banner from "../../../assets/About-imgs/banner.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutgoingMail } from "react-icons/md";
const ContactForm = () => {
  return (
    <div className=" w-full md:w-[80%] m-auto md:my-20 md:overflow-hidden flex flex-col-reverse md:flex-row justify-between bg-body md:rounded-4xl">
      <div className="md:w-[50%] mt-5 md:mt-0 p-7 flex flex-col gap-4">
        <div className="mb-5">
          <h1 className="font-bold text-[32px] mb-5">Get in Touch</h1>
          <p className="text-[#666C6F]">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>
        <Form type={'contact'} />
        <div className="flex items-center justify-center gap-10 w-full">
            <div className="flex items-center gap-2">
                <div className="text-2xl"><FiPhoneCall /></div>
                <div>
                    <p className="text-sm font-bold">PHONE</p>
                    <a href="#" className="text-main text-sm">+20 1200104424</a>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="text-4xl"><MdOutgoingMail /></div>
                <div>
                    <p className="text-sm font-bold">EMAIL</p>
                    <a href="#" className="text-main text-sm">info@marcc.com.au</a>
                </div>
            </div>
        </div>
      </div>
      <div className="w-full md:w-[30%] bg-main relative">
        <div className=" w-[90%] m-auto h-[200px] md:h-[600px] rounded-4xl -mb-9 mt-5 overflow-hidden relative md:mb-0 md:mt-0 md:absolute md:top-1/2 md:right-[40px] md:w-[400px] md:h-[500px]  md:transform md:-translate-y-1/2">
          <img
            className="w-full h-full object-cover"
            src={banner}
            alt="contact-img"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
