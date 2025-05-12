import { Link } from "react-router-dom"

const YourWallet = () => {
  return (
    <div className="bg-white p-5 rounded-2xl">
        <div className="flex flex-col gap-2">
            <h2 className="text-[#0F172A] text-[24px] font-[500] mb-2 ">Your Wallet</h2>
            <p className="text-[#101928] text-[16px] font-[600] ">How you use your wallet</p>
            <p className="text-[#101928] text-[14px] ">Charge your wallet to have credit and use your credit to book your sessions and more.</p>
        </div>
        <div className="flex justify-between my-7">
            <p className="text-[#11141A] text-[16px] font-[700] ">Your Wallet credit <span className="font-[400]">340,00 EGP</span></p>
            <Link to='/profile/recharge-wallet' className="bg-main text-white py-2 px-4 rounded-xl ">Recharge</Link>
        </div>
        <div>
            <h3 className="text-[#11141A] text-[16px] font-[700] ">Your payment history</h3>
            <div className="border-b py-3">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-[#101928] text-[14px] font-[500] ">1 Sessions, Coach. Remond Hany</p>
                    <p className="text-[15px] ">300 EGP</p>
                </div>
                <p className="text-[13px] ">23 May 2024</p>
            </div>
        </div>
    </div>
  )
}

export default YourWallet