import { useState } from 'react';
import visa from '../../../assets/coach-imgs/Payment method icon.svg';
import master from '../../../assets/coach-imgs/Payment method icon (1).svg';
import vc from '../../../assets/coach-imgs/VC.png';
import fawry from '../../../assets/coach-imgs/Fawry.png';
import aman from '../../../assets/coach-imgs/Aman.png';
import coach from '../../../assets/About-imgs/coach.jpg';
import { Link } from 'react-router-dom';
import { IoWallet } from 'react-icons/io5';
const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState('visa');
  const [promoCode, setPromoCode] = useState('Active');

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between gap-10 w-[90%] mx-auto my-20 ">
      {/* Payment Method Section */}
      <div className="mb-8 bg-[#F8F8F8] border border-[#E2E2E2] p-6 rounded-lg h-fit md:w-[50%]">
        <h2 className="text-[24px] font-[500] mb-4">Payment Method</h2>
        <p className="text-[#828282] mb-6">Select the bank for payment of your item</p>

        <div className="space-y-4">
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
          <div
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedPayment === 'my-wallet' ? 'border-main ' : 'border-[#E2E2E2] bg-white'
            }`}
            onClick={() => setSelectedPayment('my-wallet')}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl text-main my-2">
                  <IoWallet />
                </p>
                <p className="text-sm text-gray-500">Pay with wallet credit available : 300 EGP</p>
              </div>
              <div className={`w-6 h-6 rounded-full border mr-3 flex items-center justify-center`}>
                {selectedPayment === 'my-wallet' && (
                  <div
                    className={`w-3 h-3 rounded-full ${
                      selectedPayment === 'my-wallet' ? 'border-main bg-main' : 'border-gray-400'
                    } `}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="mb-8 bg-[#F8F8F8] border border-[#E2E2E2] p-6 rounded-lg mdw-[50%]">
        ;<h2 className="text-xl font-semibold mb-4">Book your session</h2>
        <p className="text-gray-600 mb-6">The sum of all total payments for goods there</p>
        <div className="mb-6 flex justify-between items-center border border-[#E2E2E2] bg-white rounded-xl">
          <div className=" p-3 flex items-center gap-5">
            <div className="w-[80px] h-[80px] overflow-hidden rounded-2xl">
              {' '}
              <img src={coach} alt="coach img" />{' '}
            </div>
            <div className="flex flex-col gap-2">
              <span>One session with (Amand Clar)</span>
              <span className="text-[#828282]">Session: 1</span>
            </div>
          </div>
          <p className="mb-6 mr-3 text-[#52057B]">
            300 <span className="text-[8px]">EGP</span>
          </p>
        </div>
        <div className=" py-3 border-b border-[#E2E2E2]">
          <p className="text-[#666C6F] font-semibold">Promo code</p>
          <div className="flex gap-10 mt-4">
            <input type="text" className=" bg-white w-[70%] border border-main rounded-4xl" />
            <button className="bg-main text-white w-[30%] p-3 rounded-4xl">Active</button>
          </div>
          <div className="flex justify-between mt-6">
            <p className="font-bold text-[20px]">Subtotal</p>
            <p className="font-bold text-[20px]">300</p>
          </div>
        </div>
        <div className="space-y-4 mt-4 border-b border-[#E2E2E2]">
          <div className={`flex justify-between  font-semibold text-lg text-gray-700`}>
            <span className="text-[#828282] text-[16px] font-[400]">Discount (promo code)</span>
            <span className="text-[#3A3838] text-[16px]">-20</span>
          </div>
          <div className={`flex justify-between  font-semibold text-lg text-gray-700`}>
            <span className="text-[#828282] text-[16px] font-[400]">VAT (10%)</span>
            <span className="text-[#3A3838] text-[16px]">28</span>
          </div>
          <div className={`flex justify-between  font-semibold text-lg text-gray-700`}>
            <span>Total</span>
            <span>
              280 <span>EGP</span>
            </span>
          </div>
        </div>
        {/* Payment Button */}
        <Link
          to={'/session/select-date'}
          className="w-full flex justify-center py-3 mt-4 bg-main text-white rounded-lg font-medium "
        >
          Pay 280 EGP
        </Link>
      </div>
    </div>
  );
};

export default Payment;
