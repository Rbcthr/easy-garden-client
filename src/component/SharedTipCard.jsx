import React from "react";

const SharedTipCard = ({ tip }) => {
  const { title, image, type, description, difficulty } = tip;
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-lg hover:shadow-green-300 transition-all duration-500">
      <figure>
        <img src={image} className=" w-1/2 object-cover py-5" alt="Shoes" />
      </figure>

      <div className="card-body">
        
        <h2 className="card-title">
          {title}
          <div className="badge badge-success">{difficulty}</div>
        </h2>
        <div className="card-actions justify-start">
          <span className="font-bold">Type:</span> <div className="badge badge-outline badge-success">{type}</div>
        </div>
        <p>
          {
            description.slice(0, 200)
          }
          ...
        </p>
      </div>
    </div>
  );
};

export default SharedTipCard;
