import Link from "next/link"




export default function Navbar() {
    return (
        <>

            <div id="navbar" className="p-4 lg:flex justify-center gap-36 items-center">
                
                    <h1 className="text-2xl"><b>Bandage</b></h1>

                    <div id="hamburger-part" className="flex gap-6 text-md font-bold">
                        <div id="links" className="flex flex-row items-center gap-7 font-semibold text-base  text-gray-500 font-[Heebo] p-4">
                            <Link href="/Home" id="link">Home</Link>
                            <Link href="/Shop" id="link">Shop</Link>
                            <Link href="/About" id="link">About</Link>
                            <Link href="/Contact" id="link">Contact</Link>
                        </div>
                        <div className="lg:flex items-center gap-10 ml-20">
                            <div id="login-div" className="flex justify-center items-center gap-2 text-sky-500">
                                <img className="h-6" src="person icon.png" alt="" />
                                <Link className="font-regular" href="">Login / Register</Link>
                            </div>
                            <div className="flex flex-col items-center gap-6 lg:flex-row">
                                <img className="w-5" src="search.png" alt="" />
                                <div className="flex items-center">
                                    <img className="w-5" src="cart.png" alt="" />
                                    <h1 className="text-sky-500">1</h1>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-5" src="wishlist.png" alt="" />
                                    <h1 className="text-sky-500">1</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="h-8 lg:hidden" src="hamburger.png" alt="" />
                </div>

                {/* <div id="links" className="flex flex-col items-center gap-5 mt-4 text-lg font-light font-[Heebo] p-4 lg:flex-row">
                            <Link className="" href="" id="link">Home</Link>
                            <Link href="" id="link">Shop</Link>
                            <Link href="" id="link">About</Link>
                            <Link href="" id="link">Blog</Link>
                            <Link href="" id="link">Contact</Link>
                            <Link href="" id="link">Page</Link>
                        </div>
                        <div className="lg:flex items-center gap-10">
                            <div id="login-div" className="flex justify-center  gap-2 text-sky-500 mt-4">
                                <img className="h-6" src="person icon.png" alt="" />
                                <Link className="text-xl font-regular" href="">Login / Register</Link>
                            </div>
                            <div className="flex flex-col items-center gap-6 mt-6 lg:flex-row">
                                <img className="w-5" src="search.png" alt="" />
                                <div className="flex items-center">
                                    <img className="w-5" src="cart.png" alt="" />
                                    <h1 className="text-sky-500">1</h1>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-5" src="wishlist.png" alt="" />
                                    <h1 className="text-sky-500">1</h1>
                                </div>
                            </div>
                        </div>
                    </div> */}


           
        </>
    )
}