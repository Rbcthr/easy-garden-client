import React from "react";

const SharedTipCard = ({ tip }) => {
  const { title, image, type, description, difficulty } = tip;
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-lg hover:shadow-green-300 transition-all duration-500">
      <figure>
        <img
          src={image}
          className=" w-1/2 h-60 object-cover py-5"
          alt="Shoes"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          <span className="dark:text-black">{title}</span>
          <div className="badge badge-success text-white ">{difficulty}</div>
        </h2>
        <div className="card-actions justify-start">
          <span className="font-bold dark:text-black">Type:</span>{" "}
          <div className="badge badge-outline badge-success">{type}</div>
        </div>
        <p className="dark:text-black">
          {description.slice(0, 200)}
          ...
        </p>
      </div>
    </div>
  );
};

export default SharedTipCard;
