"use client"

import React from 'react'
import Header from '../components/Header'
import Image from 'next/image';

const Homepage = () => {
  return (
    <div className="container h-full w-[100%] bg-gray-100 bg-transparent p-8">
    <Header name="Project Management Dashboard" buttonComponent={undefined} />
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary md:col-span-2">
          <h3 className="mb-4 text-lg font-semibold dark:text-white">
            Forecasted vs. actual revenue
          </h3>
          <Image src="/tbd.png" alt="Sales team logo" width={300} height={300}/>
        </div>
        <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
          <h3 className="mb-4 text-lg font-semibold dark:text-white">
            Total target
          </h3>
          <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
        </div>
        <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
          <h3 className="mb-4 text-lg font-semibold dark:text-white">
            Total actual do date
          </h3>
          <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
        </div>
        <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
          <h3 className="mb-4 text-lg font-semibold dark:text-white">
            Active deals
          </h3>
          <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
        </div>
        <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary">
          <h3 className="mb-4 text-lg font-semibold dark:text-white">
            Team workload
          </h3>
          <Image src="/tbd.png" alt="Sales team logo" width={200} height={200}/>
        </div>
        <div className="rounded-lg bg-white p-4 shadow dark:bg-dark-secondary md:col-span-2">
          <h3 className="mb-4 text-lg font-semibold dark:text-white">
            Tasks
          </h3>
          <Image src="/tbd.png" alt="Sales team logo" width={300} height={300}/>
        </div>
      </div>
    </div>
  );
};

export default Homepage