import React, { useState } from "react";
import { FaHeart, FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useLoaderData } from "react-router";

const TipDetailsPage = () => {
  const [like, setLike] = useState(0);

  const tip = useLoaderData();
  const {
    _id,
    availability,
    category,
    description,
    difficulty,
    email,
    image,
    name,
    title,
    type,
  } = tip;

  const handleLike = (id) => {
    setLike((prvLike) => (prvLike === 0 ? 1 : 0));

    const tipInfo = {
      _id,
      availability,
      category,
      description,
      difficulty,
      email,
      image,
      name,
      title,
      type,
      totalLiked: like,
    };

    // update like it database
    fetch(`http://localhost:3000/tip-info-public/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tipInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after patching data", data);
      });
  };

  return (
    <div className="w-11/12 mx-auto my-16 space-y-5">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="space-y-5">
        <div className="w-5/12 flex flex-wrap justify-between items-center font-bold gap-3">
          <p className="flex items-center gap-2">
            <FaRegUser /> {name}
          </p>
          <p className="flex items-center gap-2">
            <MdOutlineEmail /> {email}
          </p>
          <button
            onClick={() => handleLike(_id)}
            className="btn btn-success text-white"
          >
            <FaHeart size={20}></FaHeart>
            Like <span>{like}</span>
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="badge badge-outline badge-success">{type}</div>
          <div className="badge badge-outline badge-success">
            {availability}
          </div>
          <div className="badge badge-outline badge-success">{category}</div>
        </div>
        <h3 className="text-3xl font-bold flex flex-wrap items-center gap-3">
          {title}
          <span className="badge badge-outline badge-success">
            {difficulty}
          </span>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TipDetailsPage;
