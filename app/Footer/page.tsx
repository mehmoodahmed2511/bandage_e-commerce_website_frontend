

export default function Footer(){
    return(
        <>
        
        <img className="mt-32" src="bandage.jpg" alt="" />

<footer className="flex justify-center gap-20 px-40 py-16">
    <div className="flex flex-col items-start gap-4  text-xs">
        <h1 className="text-sm font-bold">Company Info</h1>
        <h1 className="font-bold text-gray-500">About Us</h1>
        <h1 className="font-bold text-gray-500"> Carrier</h1>
        <h1 className="font-bold text-gray-500">We are hiring</h1>
        <h1 className="font-bold text-gray-500">Blog</h1>
    </div>

    <div className="flex flex-col items-start gap-4 text-xs">
        <h1 className="text-sm font-bold">Legal</h1>
        <h1 className="font-bold text-gray-500">About Us</h1>
        <h1 className="font-bold text-gray-500"> Carrier</h1>
        <h1 className="font-bold text-gray-500">We are hiring</h1>
        <h1 className="font-bold text-gray-500">Blog</h1>
    </div>

    <div className="flex flex-col items-start gap-4 text-xs">
        <h1 className="text-sm font-bold">Features</h1>
        <h1 className="font-bold text-gray-500">Business Marketing</h1>
        <h1 className="font-bold text-gray-500">User Analytic</h1>
        <h1 className="font-bold text-gray-500">Live Chat</h1>
        <h1 className="font-bold text-gray-500">Unlimited Support</h1>
    </div>

    <div className="flex flex-col items-start gap-4 text-xs">
        <h1 className="text-sm font-bold">Resources</h1>
        <h1 className="font-bold text-gray-500">IOS & Android</h1>
        <h1 className="font-bold text-gray-500">Watch a Demo</h1>
        <h1 className="font-bold text-gray-500">Customers</h1>
        <h1 className="font-bold text-gray-500">API</h1>
    </div>

    <div className="flex flex-col items-start gap-4 text-xs">
        <h1 className="text-sm font-bold">Get In Touch</h1>
        <div className="flex">
            <input className="border-none bg-gray-100 px-3 text-xs" type="text" placeholder="Your Email" />
            <button className="py-3 px-4 bg-sky-500 text-white text-xs">Subscribe</button>
        </div>
        <p className="text-xs text-gray-500">Lorem ipsum dolor Amit</p>
    </div>
</footer>
<div className="text-gray-600 bg-gray-100 font-bold text-start px-44 py-6 text-xs">Made With Love By Finland All Right Reserved </div>
        </>
    )
}