import Footer from "@/app/Footer/page"

export default function Shop() {

    const images = [
        { image: "/shop/2/1.jpeg" },
        { image: "/shop/2/2.jpeg" },
        { image: "/shop/2/3.jpeg" },
        { image: "/shop/2/4.jpeg" },
        { image: "/shop/2/5.jpeg" },
        { image: "/shop/2/6.jpeg" },
        { image: "/shop/2/7.jpeg" },
        { image: "/shop/2/8.jpeg" },
        { image: "/shop/2/9.jpeg" },
        { image: "/shop/2/10.jpeg" },
        { image: "/shop/2/11.jpeg" },
        { image: "/shop/2/12.jpeg" }
    ]
    return (
        <>
            <div className="">

                <div className="px-36  bg-gray-100 py-6">
                    <div className="flex justify-between">
                        <h1 className="font-bold ml-3">Shop</h1>
                        <div className="flex gap-2">
                            <h1 className="text-bold text-xs">Home</h1>
                            <img className="h-3" src="angle bracket black.png" alt="" />
                            <h1 className="text-bold text-gray-400 text-xs">Shop</h1>
                        </div>
                    </div><br />
                    <div id="shop-images" className="flex justify-center gap-3">
                        <img className="w-52 hover:drop-shadow-xl cursor-pointer" src="/shop/1.jpg" alt="" />
                        <img className="w-52 hover:drop-shadow-xl cursor-pointer" src="/shop/2.jpg" alt="" />
                        <img className="w-52 hover:drop-shadow-xl cursor-pointer" src="/shop/3.jpg" alt="" />
                        <img className="w-52 hover:drop-shadow-xl cursor-pointer" src="/shop/4.jpg" alt="" />
                        <img className="w-52 hover:drop-shadow-xl cursor-pointer" src="/shop/5.jpg" alt="" />
                    </div>
                </div>


                <div className="flex justify-center items-center my-8 px-20 gap-60">
                    <p className="text-gray-500 text-sm font-bold">Showing all 12 results</p>

                    <div className="flex items-center gap-4">
                        <h1 className="text-sm font-bold text-gray-500">Views:</h1>
                        <img className="h-10" src="/shop/menu.png" alt="" />
                        <img className="h-10" src="/shop/check.png" alt="" />
                    </div>

                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 bg-gray-100 rounded-md">
                            <h1 className="text-xs">Popularity</h1>
                            <img className="h-3" src="/angle bracket black.png" alt="" />
                        </div>
                        <button className="px-8 rounded-md bg-sky-500 text-white text-xs font-bold">Filter</button>
                    </div>
                </div>

                <div id="logos" className="flex justify-center gap-24 py-10 bg-gray-100">
                    <img className="h-8" src="/shop/logos/1.png" alt="" />
                    <img className="h-10" src="/shop/logos/2.png" alt="" />
                    <img className="h-11" src="/shop/logos/3.png" alt="" />
                    <img className="h-8" src="/shop/logos/4.png" alt="" />
                    <img className="h-10" src="/shop/logos/5.png" alt="" />
                    <img className="h-10" src="/shop/logos/6.png" alt="" />
                </div>

                <Footer />

                <div className="grid size-9/12 grid-cols-4 mx-auto p-10">
                    {images.map((box, index) => (

                        <div id="box" className="text-center w-50 h-80 mb-20 mx-3 my-14 cursor-pointer hover:drop-shadow-xl">
                            <img src={`${box.image}`} className="object-cover" alt="" />
                            <div id="text" className="flex flex-col gap-2 mt-4">
                                <h1 className="font-bold">Graphic Design</h1>
                                <p className="text-gray-700 text-xs">English Department</p>
                                <h1 className="text-gray-400 text-sm">$16.48 <span className="text-green-800 text-bold">$6.48</span>
                                </h1>
                                <div id="circles" className="flex justify-center gap-1">
                                    <div className="h-3 w-3 rounded-full bg-sky-500"></div>
                                    <div className="h-3 w-3 rounded-full bg-green-600"></div>
                                    <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                                    <div className="h-3 w-3 rounded-full bg-black"></div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>


                <div className="flex justify-center mx-auto my-10 w-56 border border-gray-200 rounded-sm cursor-pointer">
                    <h1 className="text-xs font-bold text-gray-500 bg-gray-200 px-5 py-3 border border-gray-200 rounded-sm">First</h1>
                    <h1 className="text-xs font-bold text-sky-500 px-3 py-3">1</h1>
                        <h1 className="text-xs font-bold text-white bg-sky-500 px-3 py-3">2</h1>
                    <h1 className="text-xs font-bold text-sky-500 px-3 py-3">3</h1>
                    <h1 className="text-sky-500 font-bold text-xs px-5 py-3 border border-gray-200 rounded-sm">Next</h1>
                </div>

            </div>
        </>
    )
}