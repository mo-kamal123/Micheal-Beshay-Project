import { useState } from "react";
import visa from "../../../assets/coach-imgs/Payment method icon.svg";
import master from "../../../assets/coach-imgs/Payment method icon.svg";
import vc from "../../../assets/coach-imgs/VC.png";
import fawry from "../../../assets/coach-imgs/Fawry.png";
import aman from "../../../assets/coach-imgs/Aman.png";

const RechargeWallet = () => {
  const [selectedPayment, setSelectedPayment] = useState("visa");

  const paymentMethods = [
    { id: "visa", name: visa, description: "Available to pay with all banks" },
    { id: "fewry", name: fawry, description: "Pay with E-wallets" },
  ];

  return (
    <div className="bg-body">
      <div className="md:w-[50%] py-8 mx-auto bg-white p-6 rounded-lg ">
        <h2 className="text-[24px] font-[500] mb-4">Your Wallet</h2>
        <div className="w-full relative flex flex-col gap-2 ">
          <p className="text-[#2E3538] font-[500] ">
            What is your amount to add in your wallet?
          </p>
          <input
            type="number"
            className="w-full pr-8 pl-3 py-5 border border-main rounded-4xl focus:outline-none appearance-none [-moz-appearance:textfield]"
          />
          <span className="absolute right-3 top-1/2 transform translate-y-1/2 text-[#ACACAC] font-[300] pointer-events-none">
            EGP
          </span>
        </div>
        <div className="my-5">
          <h2 className="text-[#2E3538] text-[24px] font-[500] ">
            Charge your wallet
          </h2>
          <p className="text-[#828282]">
            Select the bank for payment of your item
          </p>
        </div>
        <div className="space-y-4 my-5">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                selectedPayment === method.id
                  ? "border-main "
                  : "border-[#E2E2E2] bg-white"
              }`}
              onClick={() => setSelectedPayment(method.id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <img src={method.name} alt="visa icon" className="w-14" />
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border mr-3 flex items-center justify-center`}
                >
                  {selectedPayment === method.id && (
                    <div
                      className={`w-3 h-3 rounded-full ${
                        selectedPayment === method.id
                          ? "border-main bg-main"
                          : "border-gray-400"
                      } `}
                    ></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full bg-main text-white py-3 rounded-xl">
          Pay
        </button>
      </div>
    </div>
  );
};

export default RechargeWallet;
