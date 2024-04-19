import React from 'react'
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]

const HomeSectionCarousel = ({data,sectionName}) => {
  return (
    <div>
       <div className="bg-white max-[700px]:p-5  ">
      <div className="mx-auto max-w-2xl px-1 py-5 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{sectionName}</h2>

        <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {data.slice(0,4).map((data) => (
            <div className="group relative ">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  group-hover:opacity-75 lg:h-80">
                <img
                  src={data.imageUrl}
                 
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {data.brand}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{data.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{data.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default HomeSectionCarousel
