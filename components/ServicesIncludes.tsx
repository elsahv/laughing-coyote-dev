import React from 'react'

const ServicesIncludes = () => {
  return (
    <div className="w-full">
         <section className="bg-teal">
        <h2 className="">Services Includes:</h2>
           <ul className="grid grid-cols-2 gap-2 text-center">
            <li className="bg-parchment">1</li>
            <li className="bg-parchment">2</li>
            <li className="bg-parchment">3</li>
            <li className="bg-parchment">4</li>
            <li className="bg-parchment">5</li>
            <li className="bg-parchment">6</li>
           </ul>
           </section>

           <section className="bg-test2">
           <ul className="flex justify-center gap-2">
            <li className="bg-parchment">A</li>
            <li className="bg-parchment">B</li>
            <li className="bg-parchment">C</li>
            <li className="bg-parchment">D</li>
           </ul>
           </section>
        </div>
  )
}

export default ServicesIncludes