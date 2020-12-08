import image from '../sinitta-leunen--VMwJW8qdR4-unsplash.jpg';
import '../App.css';

let sectionStyle = {
  position: "relative",
  width: "100%",
  height: "91vh",
  backgroundImage: `url(${image})`,
  backgroundColor: "#fff",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export const Hero = () => {

  return (
    <section className="hero py-40" style={ sectionStyle }>
      <section className="md:container md:mx-auto z-10 relative font-sans text-center">
        <h1 className="md:text-5xl sm:text-4xl text-2xl sm:subpixel-antialiased md:antialiased font-bold text-gray-300 py-2 md:py-4 sm:py-4">Understanding The Concept Of <span className="text-yellow-400">:</span></h1>
        <h2 className="md:text-4xl sm:text-3xl text-2xl sm:subpixel-antialiased md:antialiased font-bold text-gray-300">Retailer, <span className="text-blue-500">Retailing</span> <span className="text-yellow-400">&</span> Retail</h2>
      </section>

      <section className="py-6 px-4 relative z-10">
        <div className="px-4 pt-3 pb-4 -mx-4 border-gray-400">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl text-left inline-block font-semibold text-gray-300 ">Join Our Newsletter</h2>
            <p className="text-blue-500 text-sm pl-px">
              Describe Your project and find a top talent team around the world, or near you. leave you E-mail to get invite for 30 days free trial!
            </p>
            <form action="#" className="mt-2 px-auto">
              <div className="flex items-center">
                <input type="email" className="md:w-4/5 md:px-6 md:py-3 w-3/5 px-5 py-2 mr-2  bg-gray-100 shadow-inner rounded-full border border-gray-400 focus:outline-none" required />
                <button className="bg-blue-700 text-gray-200 px-6 py-2  rounded-full shadow text-center spacing" >Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  )
}

