import Footer from "@/app/Footer/page"


export default function Contact(){
    return(
        <>
        <div>
            <div className="flex justify-evenly">
                <div id="left" className="p-28">
                    <p className="font-bold text-gray-600">CONTAC US</p><br />
                    <h1 className="text-4xl font-bold">Get in touch <br />today!</h1><br />
                    <p className="text-gray-500">We know how large objects will act,  <br />but things on a small scale</p><br />
                    <h1 className="font-bold">Phone: +451 215 215</h1>
                    <h1 className="font-bold">Fax: +451 215 215</h1><br />
                    <img className="w-40" src="/contact/logos.jpg" alt="" />
                </div>
                <img className="" src="/contact/background.jpg" width={480} alt="" />
            </div>

            <p className="font-bold text-gray-600 text-center mb-4">VISIT OUR OFFICE</p>
            <h1 className="text-3xl font-bold text-center mb-12">We help small businesses <br />with big ideas</h1>

            <div className="flex justify-center gap-6">
                <div className="flex flex-col items-center p-10">
                    <img className="w-16" src="/contact/call.png" alt="" />
                    <p className="font-semibold text-center my-2 text-sm">georgia.young@example.com <br />
                        georgia.young@ple.com</p>
                        <h1 className="font-bold text-center my-2">Get Support</h1>
                        <button className="px-6 py-2 rounded-full border border-sky-500 text-sky-500">Submit Request</button>
                </div>

                <div className="flex flex-col justify-center items-center p-10 bg-gray-900 text-white">
                    <img className="w-16" src="/contact/location.png" alt="" />
                    <p className="font-semibold text-center my-2 text-sm">georgia.young@example.com <br />
                        georgia.young@ple.com</p>
                        <h1 className="font-bold text-center my-2">Get Support</h1>
                        <button className="px-6 py-2 rounded-full border border-sky-500 text-sky-500">Submit Request</button>
                </div>

                <div className="flex flex-col items-center p-10">
                    <img className="w-16" src="/contact/email.png" alt="" />
                    <p className="font-semibold text-center my-2 text-sm">georgia.young@example.com <br />
                        georgia.young@ple.com</p>
                        <h1 className="font-bold text-center my-2">Get Support</h1>
                        <button className="px-6 py-2 rounded-full border border-sky-500 text-sky-500">Submit Request</button>
                </div>

            </div>

            <div className="flex flex-col justify-center items-center gap-4 my-20">
            <img className="w-16" src="/contact/arrow.jpg" alt="" />
            <p className="font-bold text-gray-500">WE Can't WAIT TO MEET YOU</p>
            <h1 className="font-bold text-4xl">Let's Talk</h1>
            <button className="px-7 py-2 rounded-sm bg-sky-500 text-white text-xs">Try it free now</button>
            </div>
        </div>
        <Footer/>
        </>
    )
}