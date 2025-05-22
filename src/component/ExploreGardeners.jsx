import React from "react";
import { useLoaderData } from "react-router";

const ExploreGardeners = () => {
  const gardeners = useLoaderData();
  console.log(gardeners);

  //   {
  //     "_id": "682db8f749891548a139d4d0",
  //     "name": "Alice Green",
  //     "status": "active",
  //     "image": "https://i.ibb.co/20CcRHHm/1.jpg",
  //     "age": "25",
  //     "experiences": "2",
  //     "gender": "female",
  //     "totalSharedTips": "5"
  // }

  return (
    <div className="w-11/12 mx-auto my-16 space-y-5">
      <h2 className="text-3xl font-bold ">
        Explore Gardeners ({gardeners.length}):
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {gardeners.map((gardener) => (
          <div key={gardener?._id} className="card bg-base-100 shadow-sm hover:shadow-lg hover:shadow-green-300 transition-all duration-500">
            <figure>
              <img
                src={gardener?.image}
                className=" w-full"
                alt="Shoes"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                <span className="dark:text-black">

                Name: {gardener?.name}
                </span>
                <span className="badge badge-success text-white">{gardener?.status}</span>
              </h2>
              <div className="card-actions justify-start">
                <span className="font-bold dark:text-black">Experience:</span>{" "}
                <div className="badge badge-outline badge-success">{gardener?.experiences}</div>
              </div>
              <p className="dark:text-black">Age: {gardener?.age}</p>
              <p className="dark:text-black">Gender: {gardener?.gender}</p>
              <p className="font-semibold dark:text-black">Total Shared Tips: {gardener.totalSharedTips}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardeners;
