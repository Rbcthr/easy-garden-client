import React from "react";
import { FaEye } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const BrowseTips = () => {
  const tips = useLoaderData();

  // availability
  // :
  // "Public"
  // category
  // :
  // "Plant Care"
  // description
  // :
  // "A tomato is an edible berry, often referred to as a vegetable, that is round, smooth, and typically red, but can also be yellow, orange, or purple when ripe"
  // difficulty
  // :
  // "Easy"
  // email
  // :
  // "parvezhossain744471@gmail.com"
  // image
  // :
  // "https://i.ibb.co/jZkhMN5K/tomato.jpg"
  // name
  // :
  // "Parvez Hossain Alif"
  // title
  // :
  // "How to Perfectly grow tomato"
  // type
  // :
  // "tomato"
  // _id
  // :
  // "682d8a9ad7879c427cc5e7fa"

  return (
    <div className="w-11/12 mx-auto my-16">
      <h3 className="font-bold">Public Tips ({tips.length}):</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="dark:text-white">
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {tips.map((tip, index) => (
              <tr key={tip?._id} className="hover:bg-base-300 hover:dark:text-black">
                <th>0{index + 1}</th>
                <td>
                  <img className="w-12" src={tip?.image} alt="" />
                </td>
                <td>{tip?.title}</td>
                <td>{tip?.category}</td>
                <td>
                  <Link to={`/tip-details/${tip?._id}`}>
                    <FaEye size={20}></FaEye>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
