import Footer from "@/app/Footer/page"


export default function About() {

    const team = [
        { image: "/about/team1.jpeg" }, { image: "/about/team2.jpeg" }, { image: "/about/team3.jpeg" }
    ]

    return (
        <>
            <div className="px-40">
                <div id="front" className="flex justify-between items-center">
                    <div id="text">
                        <p><b>ABOUT COMPANY</b></p><br />
                        <h1 className="text-4xl font-bold">ABOUT US</h1><br />
                        <p className="text-gray-500">We know how large objects will act, <br />but things on a small scale</p><br />
                        <button className="px-8 py-2 rounded md bg-sky-500 text-white text-sm ">Get Quote Now</button>
                    </div>

                    <img src="/about/background.png" width={480} alt="" />
                </div>

                <p className="text-red-500 mt-20">Problems Trying</p><br />
                <div className="flex gap-16">
                    <h1 className="font-bold">Met minim Mollie non desert <br />Alamo est sit cliquey dolor do <br />met sent.</h1>
                    <p className="text-gray-500">Problems trying to resolve the conflict between the two major realms of <br />
                        Classical physics: Newtonian mechanics </p>
                </div>

                <div className="flex justify-evenly py-28">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl font-extrabold">15K</h1>
                        <p className="text-xs font-bold text-gray-500">Happy Customers</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl font-extrabold">150K</h1>
                        <p className="text-xs font-bold text-gray-500">Monthly Visitors</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl font-extrabold">15</h1>
                        <p className="text-xs font-bold text-gray-500">Countries Worldwide</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl font-extrabold">100+</h1>
                        <p className="text-xs font-bold text-gray-500">Top Partners</p>
                    </div>
                </div>

                <img className="w-full cursor-pointer" src="about/video.png" alt="" />

                <div id="team" className="py-32">
                    <h1 className="text-xl font-bold text-center">Meet Our Team</h1>
                    <p className="text-gray-600 text-center">Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics</p>

                    <div className="flex justify-center gap-6 my-20">
                        {
                            team.map((box,index)=>(
                                <div>
                                    <img className="w-68" src={`${box.image}`} alt="" /><br />
                                    <p className="font-bold text-center text-sm">Username</p>
                                    <p className="text-xs text-gray-500 text-center font-bold my-2">Profession</p>
                                    <img className="mx-auto w-24" src="/about/logos.png" alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div id="big-companies"  className="py-20 bg-gray-100">
                    <h1 className="text-3xl font-bold text-center">Big Companies Are Here</h1><br />
                    <p className="text-gray-500 text-center">Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p><br /><br />
                    <img className="w-full" src="/about/logos div.png" alt="" />
                </div>

                <div className="flex">
                    <div id="left" className="text-white w-[72%] bg-sky-600 p-32">
                        <p><b>WORK WITH US</b></p><br />
                        <h1 className="text-4xl font-bold ">Now Let's grow Yours</h1><br />
                        <p className="text-xs">The gradual accumulation of information about atomic and <br />small-scale behavior during the first quarter of the 20th </p><br />
                        <button className="px-9 py-3 border border-white-2 rounded-sm text-xs font-bold">Button</button>
                    </div>
                    <div>
                        <img className="w-full" src="/about/pink girl.jpeg" alt="" />
                    </div>
                </div>

                <Footer/>
        </>
    )
}