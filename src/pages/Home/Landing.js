import React from 'react';
import bucketgirl from '../../assets/image/bucketgirl.png'
const Landing = () => {
    return (
        <>
            <div className="hero h-screen lg:h-[60vh] relative z-10 bg-accent mt-16 ">
                <div className="hero-content flex-col lg:flex-row">

                    <div>
                        <p data-aos="fade-right" data-aos-delay="100"
                            data-aos-duration="1000" className='text-xl'>Best Qulity</p>
                        <h1 data-aos="fade-right" data-aos-delay="500"
                            data-aos-duration="1000" className="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p data-aos="fade-right" data-aos-delay="700"
                            data-aos-duration="1000" className="py-6 max-w-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        <button data-aos="zoom-in" data-aos-delay="1200" className="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img data-aos="fade-left" data-aos-delay="500" src={bucketgirl} className="h-full" alt='' />
                    </div>
                </div>
            </div>
            <div className='rounded-2xl  mx-auto relative mt-[-100px] bg-base-200 z-20 shadow-lg p-10 w-5/6'>
                <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
                <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'>Get a Quote</button>
            </div>
        </>
    );
};

export default Landing;