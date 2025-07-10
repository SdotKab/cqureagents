
import React from 'react'

const SampleCard = () => {
  return (

    <div className="grid gap-14 md:grid-cols-3 md:gap-5">
        <div className="rounded-xl bg-white p-6 text-center shadow-xl">
        <div
            className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
            Icon Here
        </div>
        <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">TREE AND SHRUB PRUNING</h1>
        <p className="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
            modi
            accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
        </div>
    </div>


  )
}

export default SampleCard