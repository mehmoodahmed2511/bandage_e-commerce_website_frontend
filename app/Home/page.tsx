"use client"
import { client } from "@/sanity/lib/client"
import { useState, useEffect } from 'react'
import Footer from "@/app/Footer/page"


type Product = {
    title: string;
    description: string;
    productImage: string;
    price: number;
    tags: string[];
    discountPercentage: number;
    isNew: boolean;
};

export default function Home() {

    const [product, setProduct] = useState<Product[]>([]);
    const fetchData = async () => {
        const getData = await client.fetch(`*[_type=='product']{title, description, productImage, price, tags, discountPercentage, isNew}`);
        setProduct(getData);

        useEffect(() => {
            fetchData();
        }, []);
        console.log(product);
    }



    const editors_pick = [
        {
            image: "/men.jpeg",
            tag: "MEN"
        },
        {
            image: "/women.jpeg",
            tag: "WOMEN"
        },
        {
            image: "/accessories.jpeg",
            tag: "ACCESSORIES"
        },
        {
            image: "/kids.jpeg",
            tag: "KIDS"
        }
    ]

    //Featured Products
    const featured_products = [
        { image: "/gd/1.jpeg" },
        { image: "/gd/2.jpeg" },
        { image: "/gd/3.jpeg" },
        { image: "/gd/4.jpeg" },
        { image: "/gd/5.jpeg" },
        { image: "/gd/6.jpeg" },
        { image: "/gd/7.jpeg" },
        { image: "/gd/8.jpeg" }
    ]

    const featured_posts = [
        { image: "featured1.jpeg" }, { image: "featured2.jpeg" }, { image: "featured3.jpeg" }
    ]


    return (
        <>
            <div>

                <div id="new-collection" className="relative">
                    <img src="/front image.png" alt="" />
                    <div id="text" className="absolute inset-0 mt-[17%] ml-[10%] text-white ">
                        <p>SUMMER 2020</p><br />
                        <h1 className="font-bold text-6xl">NEW COLLECTION</h1><br />
                        <p >We know how large objects will act, <br />but things on a small scale.</p><br />
                        <button className="px-4 py-2 rounded-md bg-green-500 font-bold text-lg">SHOP NOW</button>
                    </div>
                </div>

                <div id="editors-pick-div" className="py-16 bg-gray-100">
                    <h1 className="font-bold text-xl text-center">EDITOR'S PICK</h1>
                    <p className=" text-center">Problems trying to resolve the conflict between</p>

                    <div id="editors-pick-images-div" className="flex justify-center gap-2 mt-8">
                        {
                            editors_pick.map((box, index) => (
                                <div key={index} id="box" className="relative h-40 w-40">
                                    <img src={`${box.image}`} alt="" />
                                    <p className="absolute bottom-0 text-xs px-6 py-2 bg-white font-bold cursor-pointer">{box.tag}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>


                <div id="featured-products" className="mt-20">
                    <h1 className="text-center text-gray-600 my-2">Featured Products</h1>
                    <h1 className="text-xl font-bold text-center">BESTSELLER PRODUCTS</h1>
                    <p className="text-center text-gray-600">Problems trying to resolve the conflict between</p>


                    {/* <div className="grid size-8/12 grid-cols-4 mx-auto p-10">
                        {featured_products.map((box, index) => (

                            <div id="box" className="text-center w-50 h-80 mx-2 my-14 ">
                                <img src={`${box.image}`} className="object-cover cursor-pointer hover:drop-shadow-lg " alt="" />
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
                    </div> */}

                    {product.length > 0 ?
                        (

                            <div className="grid size-8/12 grid-cols-4 mx-auto p-10">
                                {product.map((box:any, index:any) => (

                                    <div id="box" className="text-center w-50 h-80 mx-2 my-14 ">
                                        <img src={`${box.productImage}`} className="object-cover cursor-pointer hover:drop-shadow-lg " alt="" />
                                        <div id="text" className="flex flex-col gap-2 mt-4">
                                            <h1 className="font-bold">{box.title}</h1>
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
                        ) :
                        (
                            <h1 className="text-2xl font-bold text-center">Data Not found!</h1>
                        )
                    }

                </div>

                {/* Vita */}
                <div id="vita" className="bg-emerald-700 text-white flex justify-start px-5 gap-40">
                    <div className="px-40 py-32">
                        <p>SUMMER 2020</p><br />
                        <h1 className="text-5xl font-bold">Vita Classic <br />Product</h1><br />
                        <p className="text-xs">We know how large objects will act, We know <br />
                            how are objects will act, We know</p><br />
                        <div className="flex gap-6 items-center">
                            <h1><b>$16.48</b></h1>
                            <button className="px-6 py-2 rounded-md text-xs bg-green-500 ">ADD TO CART</button>
                        </div>
                    </div>
                    <img className="h-80 scale-150 mt-[8.5%]" src="/vita men.png" alt="" />

                </div>


                {/* Universe Section */}
                <div id="universe" className="flex justify-center gap-20 pt-8">

                    <div>
                        <img src="universe.png" width={400} alt="" />
                    </div>

                    <div id="text" className="mt-36">
                        <p className="text-gray-400 font-bold text-xs">SUMMER 2020</p><br />
                        <h1 className="font-bold text-2xl">Part of the Neural <br />Universe</h1><br />
                        <p className="text-gray-500 font-bold text-sm">We know how large objects will act,<br /> but things on a small scale.</p><br />

                        <div className="flex gap-2 items-center">
                            <button className="px-6 py-2 rounded-sm bg-green-500 text-white text-xs">BUY NOW</button>
                            <button className="px-6 py-2 rounded-sm bg-white border border-green-500 text-green-500 text-xs">READ MORE</button>
                        </div>
                    </div>
                </div>


                {/* Featured Posts */}
                <div id="featured-posts" className="text-center mt-20">
                    <p className="text-xs font-bold text-sky-600">Practice Advice</p><br />
                    <h1 className="text-2xl font-bold">Featured Posts</h1><br />
                    <p className="text-gray-700 text-sm">Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics</p>
                    <br />

                    <div className="flex justify-center gap-3">
                        {
                            featured_posts.map((post, index) => (

                                <div id="feature" className="w-50 bg-white drop-shadow-md cursor-pointer">
                                    <img src={`${post.image}`} width={260} alt="" />
                                    <div id="text" className="p-4">
                                        <div className="flex text-xs gap-5">
                                            <p className="text-sky-400">Google</p>
                                            <p className="text-gray-500">Trending</p>
                                            <p className="text-gray-500">New</p>
                                        </div><br />
                                        <h1 className="text-lg text-start">Loudest à la Madison #1<br />(L'integral)</h1><br />
                                        <p className="text-gray-500 text-sm text-start">We focus on ergonomics and meeting <br />you where you work. It's only a<br /> keystroke away.</p>

                                        <br />
                                        <div className="flex justify-between">
                                            <div className="flex items-center gap-2">
                                                <img className="h-4" src="/clock.png" alt="" />
                                                <p className="text-gray-500 text-xs">22 April 2021</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <img className="h-4" src="/stats.png" alt="" />
                                                <p className="text-gray-500 text-xs">10 comments</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center mt-6 gap-2">
                                            <h1 className="text-sm font-bold text-gray-500">Learn More</h1>
                                            <img className="h-4" src="angle bracket.png" alt="" />
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}
