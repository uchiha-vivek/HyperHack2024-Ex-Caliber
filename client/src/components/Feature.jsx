import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";


const Feature = () => {
    return (
        <>
            <div className="relative mt-20 border-b border-neutral-800 min-h-[700px] " >
                <div className="text-center">
                    <span className="bg-neutral-900 text-green-600 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase " >
                        Features
                    </span>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide  " > Trade your credits for better future </h2>
                </div>
                <div className="flex-wrap flex mt-10 lg:mt-20 " >
                    <div className="w-full sm:1/2 lg:w-1/3 " >
                        <div className="flex mx-6 h-10 p-2 bg-neutral-900 text-green-500 justify-center rounded-full items-center  " >
                            <BotMessageSquare />
                        </div>
                        <div className="justify-center items-center flex flex-col ">
                            <h5 className="mt-1 mb-6 text-xl " >Importance of Carbon</h5>
                            <p>Carbon credits are a market-driven approach to reducing greenhouse gas emissions.  </p>
                        </div>

                    </div>
                    <div className="w-full sm:1/2 lg:w-1/3 " >
                        <div className="flex mx-6 h-10 p-2 bg-neutral-900 text-green-500 justify-center rounded-full items-center  " >
                            <BotMessageSquare />
                        </div>
                        <div className="justify-center items-center flex flex-col " >
                            <h5 className="mt-1 mb-6 text-xl " >Importance of Carbon</h5>
                            <p>Carbon credits are a market-driven approach to reducing greenhouse gas emissions.  </p>
                        </div>

                    </div>
                    <div className="w-full sm:1/2 lg:w-1/3 " >
                        <div className="flex mx-6 h-10 p-2 bg-neutral-900 text-green-500 justify-center rounded-full items-center  " >
                            <BotMessageSquare />
                        </div>
                        <div className="justify-center items-center flex flex-col " >
                            <h5 className="mt-1 mb-6 text-xl " >Importance of Carbon</h5>
                            <p>Carbon credits are a market-driven approach to reducing greenhouse gas emissions.  . </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Feature