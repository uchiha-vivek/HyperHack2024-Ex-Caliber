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
                            <h5 className="mt-1 mb-6 text-xl " >Carbon Credit Generation</h5>
                            <p>Our system enables businesses and organizations to generate carbon credits by implementing sustainable practices such as renewable energy projects, reforestation, and energy efficiency improvements. Each credit represents one ton of carbon dioxide reduced, providing an opportunity for companies to actively contribute to climate change mitigation. This not only helps the environment but also opens up new revenue streams by monetizing your green initiatives.  </p>
                        </div>

                    </div>
                    <div className="w-full sm:1/2 lg:w-1/3 " >
                        <div className="flex mx-6 h-10 p-2 bg-neutral-900 text-green-500 justify-center rounded-full items-center  " >
                            <BotMessageSquare />
                        </div>
                        <div className="justify-center items-center flex flex-col " >
                            <h5 className="mt-1 mb-6 text-xl " >Carbon Credit Trading Platform</h5>
                            <p>Trade your carbon credits effortlessly on our secure platform, connecting buyers and sellers from around the world. Our transparent marketplace allows companies to purchase credits to offset their emissions, meeting regulatory requirements and enhancing their sustainability profile. By trading carbon credits, businesses can balance their carbon footprint and support global efforts to reduce greenhouse gas emissions.  </p>
                        </div>

                    </div>
                    <div className="w-full sm:1/2 lg:w-1/3 " >
                        <div className="flex mx-6 h-10 p-2 bg-neutral-900 text-green-500 justify-center rounded-full items-center  " >
                            <BotMessageSquare />
                        </div>
                        <div className="justify-center items-center flex flex-col " >
                            <h5 className="mt-1 mb-6 text-xl " >Carbon Credit Verification and Compliance</h5>
                            <p>Ensure the integrity of your carbon credits with our rigorous verification and compliance process. Our system adheres to international standards, validating that each credit reflects a genuine reduction in emissions. This provides confidence to buyers and supports credibility in the carbon market. We handle all aspects of verification, from project evaluation to continuous monitoring, ensuring that every carbon credit is backed by real, measurable climate action. </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Feature