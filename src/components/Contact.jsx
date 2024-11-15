import RevealOnScroll from "./RevealOnScroll";
import DuckIMG from '../assets/duck.jpeg'

export default function Contact() {
    return (
        <section id="contact"
            className='bg-gradient-to-b from-blueberry-700 to-blueberry-900 h-max
        place-items-center justify-start gap-4 flex flex-col p-8 md:justify-center md:h-screen'
        >
            <div className="h-fit flex flex-col justify-start text-center
        md:justify-center overflow-hidden"
            >
                <RevealOnScroll>
                    <h1 className="font-semibold text-5xl mt-16 lg:mt-0 md:text-6xl
                    text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-yellow-500"
                    >
                        Contact
                    </h1>
                    <h2 className='font-semibold text-cyan-500 text-xl md:text-3xl'>
                        Let's get in touch!
                    </h2>
                </RevealOnScroll>

                <RevealOnScroll>
                    <img 
                        src={DuckIMG} 
                        alt="A cute picture" 
                        className='my-4 w-72 h-auto rounded-lg shadow-md mx-auto'
                    />
                </RevealOnScroll>

                <RevealOnScroll>
                    <div className='flex justify-center flex-col'>
                        <a href="mailto:ambrose.yip.04@gmail.com" target="_blank" rel="noreferrer">
                            <button className="text-lg bg-blueberry-900 border-yellow-500 box-border border-2 rounded-lg text-yellow-500 shadow-md p-2 m-4
                            hover:bg-yellow-500 hover:text-blueberry-900 transition-all duration-300">
                                Send an email to<span className="font-semibold text-cyan-400"> ambrose.yip.04@gmail.com</span>
                            </button>
                        </a>
                        <div className="text-white">
                            or
                            Contact me at <span className="font-semibold text-cyan-400">(647) 937-8711</span>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* <RevealOnScroll>
                    <form className="grid grid-rows-10 grid-cols-2 gap-2 bg-blueberry-900 p-4 m-4 rounded-lg w-auto
            md:grid-rows-4 md:w-[45rem] lg:w-[56rem]">
                        <input
                            type='text'
                            placeholder='Name'
                            className='bg-blueberry-800 text-gray-50 text-xl rounded-md p-2 col-span-2 row-span-1 focus:outline-none focus:bg-blueberry-700'
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            className='bg-blueberry-800 text-gray-50 text-xl rounded-md p-2 col-span-2 row-span-1 md:col-span-1 focus:outline-none focus:bg-blueberry-700'
                        />
                        <input
                            type="tele"
                            placeholder="Phone"
                            className="bg-blueberry-800 text-gray-50 text-xl rounded-md p-2 col-span-2 row-span-1 md:col-span-1 focus:outline-none focus:bg-blueberry-700"
                        />
                        <textarea
                            placeholder='Message'
                            className='bg-blueberry-800 text-gray-50 text-xl rounded-md p-2 col-span-2 row-span-4 focus:outline-none focus:bg-blueberry-700'
                        />
                        <div className="col-span-2 flex justify-center">
                            <button
                                type='submit'
                                className='bg-cyan-500 text-gray-50 text-xl rounded-md p-2 w-1/2 hover:bg-cyan-600'>
                                Submit
                            </button>
                        </div>
                    </form>
                </RevealOnScroll> */}
            </div>
        </section>
    );
}
