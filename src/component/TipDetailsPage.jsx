import React, { useState } from "react";
import { FaHeart, FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useLoaderData } from "react-router";

const TipDetailsPage = () => {
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
    totalLiked:tLiked
  } = tip;

  const [like, setLike] = useState(tLiked);

  const handleLike = (id) => {
    // setLike((prvLike) => (prvLike === 0 ? 1 : 0));
    setLike((prvLike) => prvLike + 1);
    let newLike = tLiked + 1;

    const tipInfo = {
      availability,
      category,
      description,
      difficulty,
      email,
      image,
      name,
      title,
      type,
      totalLiked: newLike,
    };

    // update like in database
    fetch(`https://assignment-10-server-nu-murex.vercel.app/tip-info-public/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tipInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log("after put data", data);
        }
        if(!data.modifiedCount){
          setLike(like)
        }
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
