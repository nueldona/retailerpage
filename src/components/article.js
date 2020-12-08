
export const Article = () => {
  return (
    <article className="footer bg-blue-500 py-20 mb-10">
      <section className="container mx-auto px-6">
        <div class="mt-5 flex flex-col items-center">
          <div class="sm:w-2/3 text-center py-6">
            <p class="text-4xl text-yellow-400 font-bold mb-2 tracking-widest">
              Get Started Today
            </p>
            <p class="text-sm text-white font-bold mb-8 tracking-widest">
              Available Freelancer - community of people who values their time.
            </p>
            <a href="/" type="button" className="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-blue-700 hover:bg-blue-700 text-grey-400 hover:text-white font-normal py-2 px-5 rounded-full">Get Started</a>
          </div>
        </div>
      </section>
    </article>
  )
}