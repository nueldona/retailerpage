// common types of retailer
function Types() {
  const retailTypes = [
    {
      id: 1,
      title: 'Independent Retailer',
      path: <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
      body: 'An independent retailer is someone who builds his/her business from the ground up. Usually, the owner does it all, but he/she may have assistants or hire someone extra.',
    },
    {
      id: 2,
      title: 'Existing Retail Business',
      path: <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />,
      body: 'An existing retail business is, as the name suggests, a retail business that is up-and-running. Typically, someone inherits or buys an existing business and takes over its ownership and responsibilities.',
    },
    {
      id: 3,
      title: 'Franchise',
      path: <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
      body: 'A franchise is an existing business plan, including a trademarked name, an already determined set of products, and established business concepts. If a retailer wants to become part of a franchise, they are granted permission to use all of the above elements. ',
    },
    {
      id: 4,
      title: 'Dealership',
      path: <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />,
      body: 'A dealership is a cross between a franchise and an independent retailer. A retailer that works with a dealership has the license to sell a brand of products (usually there is a variety of brands).',
    },
  ]

  const Retail = retailTypes.map( (retailType) => (
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {retailType.path}
          </svg>
        </div>
      </div>
      <div className="ml-4">
        <dt className="text-lg leading-6 font-medium text-gray-900">
          {retailType.title}
        </dt>
        <dd className="mt-2 text-base text-gray-500">
          { retailType.body }
        </dd>
      </div>
    </div>
  ))
  return <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
    {Retail}
  </dl> 
}


export const Main = () => {
  return (
    <main>
      <section className="">
        <section className="container">
          <div className="pt-32 md:pb-32 pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="mt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl uppercase">who is a Retailer <span className="text-yellow-400">?</span></h2>
                <p className="mt-5 max-w-full text-xl text-gray-500 md:mx-auto lg:text-center">
                  Retailer is a company that buys products from a manufacturer or wholesaler and sells them to end users or customers. In a sense, a retailer is an intermediary or middleman that customers use to get products from the manufacturers.
                  Retailers are experts in marketing, sales, merchandise inventory, and knowing their customers. They purchase the goods from the manufacturers at cost and market them to consumers at retail prices. The retail price can be anywhere from 10 percent to 50 percent higher than the manufacturer cost. You can think of this as a marketing and advertising fee. Retailers spend millions of dollars on marketing campaigns to help sell products they carry. These advertising budgets come from the markup on the goods.
                </p>
                <a href="https://www.myaccountingcourse.com/accounting-dictionary/retailer" type="button" className=" mt-10 btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-blue-700 hover:bg-blue-700 text-grey-400 hover:text-white font-normal py-2 px-5 rounded-full">Explore more</a>
              </div>

              <div className="mt-32">
                <h2 className="my-10 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl uppercase">Common retail types <span className="text-yellow-400">:</span></h2>
                <Types />
                <a href="https://erply.com/what-is-retail/" type="button" className=" mt-14 btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-blue-700 hover:bg-blue-700 text-grey-400 hover:text-white font-normal py-2 px-5 rounded-full">Explore more</a>
              </div>
            </div>
          </div>

        </section>
      </section>
    </main>
  )
}