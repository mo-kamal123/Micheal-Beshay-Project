import { useState } from 'react';
import visa from '../../../assets/coach-imgs/Payment method icon.svg';
import master from '../../../assets/coach-imgs/Payment method icon (1).svg';
import vc from '../../../assets/coach-imgs/VC.png';
import fawry from '../../../assets/coach-imgs/Fawry.png';
import aman from '../../../assets/coach-imgs/Aman.png';

const RechargeWallet = () => {
  const [selectedPayment, setSelectedPayment] = useState('visa');

  return (
    <div className="bg-body">
      <div className="md:w-[50%] py-8 mx-auto bg-white p-6 rounded-lg ">
        <h2 className="text-[24px] font-[500] mb-4">Your Wallet</h2>
        <div className="w-full relative flex flex-col gap-2 ">
          <p className="text-[#2E3538] font-[500] ">What is your amount to add in your wallet?</p>
          <input
            type="number"
            className="w-full pr-8 pl-3 py-5 border border-main rounded-4xl focus:outline-none appearance-none [-moz-appearance:textfield]"
          />
          <span className="absolute right-3 top-1/2 transform translate-y-1/4 text-[#ACACAC] font-[300] pointer-events-none">
            EGP
          </span>
        </div>
        <div className="my-5">
          <h2 className="text-[#2E3538] text-[24px] font-[500] ">Charge your wallet</h2>
          <p className="text-[#828282]">Select the bank for payment of your item</p>
        </div>
        <div className="space-y-4 my-5">
          <div
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedPayment === 'card' ? 'border-main ' : 'border-[#E2E2E2] bg-white'
            }`}
            onClick={() => setSelectedPayment('card')}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2 my-2">
                  <img src={visa} alt="visa icon" className="w-12" />
                  <img src={master} alt="visa icon" className="w-12" />
                </div>
                <p className="text-sm text-gray-500">{'Available to pay with all banks'}</p>
              </div>
              <div className={`w-6 h-6 rounded-full border mr-3 flex items-center justify-center`}>
                {selectedPayment === 'card' && (
                  <div
                    className={`w-3 h-3 rounded-full ${
                      selectedPayment === 'card' ? 'border-main bg-main' : 'border-gray-400'
                    } `}
                  ></div>
                )}
              </div>
            </div>
          </div>
          <div
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedPayment === 'e-wallets' ? 'border-main ' : 'border-[#E2E2E2] bg-white'
            }`}
            onClick={() => setSelectedPayment('e-wallets')}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2 my-2">
                  <img src={vc} alt="visa icon" className="w-12 rounded-xl" />
                  <img src={fawry} alt="visa icon" className="w-12 rounded-xl" />
                  <img src={aman} alt="visa icon" className="w-12 rounded-xl" />
                </div>
                <p className="text-sm text-gray-500">Pay with E-wallets</p>
              </div>
              <div className={`w-6 h-6 rounded-full border mr-3 flex items-center justify-center`}>
                {selectedPayment === 'e-wallets' && (
                  <div
                    className={`w-3 h-3 rounded-full ${
                      selectedPayment === 'e-wallets' ? 'border-main bg-main' : 'border-gray-400'
                    } `}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
        <button className="w-full bg-main text-white py-3 rounded-xl">Pay</button>
      </div>
    </div>
  );
};

export default RechargeWallet;
