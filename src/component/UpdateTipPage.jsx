import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateTipPage = () => {
  const tip = useLoaderData();
  const {
    _id,
    name,
    email,
    title,
    type,
    image,
    description,
    difficulty: diff,
    category: cat,
    availability: avail,
  } = tip;



  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState("");

  const handleUpdateTip = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const { title, type, image, description } = Object.fromEntries(
      formData.entries()
    );
    const tipInfo = {
      name,
      email,
      title,
      type,
      image,
      description,
      difficulty,
      category,
      availability,
    };
    // console.log(tipInfo);

    if (!difficulty || !category || !availability) {
      Swal.fire({
        icon: "error",
        title: "All fields are required",
        text: "Please make sure no field is left empty including difficulty, category, availability",
      });
      return;
    }

    // add tip info in the DB

    fetch(`https://assignment-10-server-nu-murex.vercel.app/tip-info-public-and-private/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tipInfo)
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        
        if (data?.matchedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully updated tip saved",
            showConfirmButton: false,
            timer: 1000,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto my-16 space-y-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Share a Garden Tip
      </h1>
      <form onSubmit={handleUpdateTip} className="w-1/2 mx-auto space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset">
            <label className="font-bold">Name</label>
            <input
              required
              name="name"
              value={name}
              type="text"
              className="input w-full focus:outline-0"
              placeholder="Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold">Email</label>
            <input
              required
              name="email"
              value={email}
              type="email"
              className="input w-full focus:outline-0"
              placeholder="Email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold">Title</label>

            <input
              required
              name="title"
              defaultValue={title}
              type="text"
              className="input w-full focus:outline-0"
              placeholder="e.g., “How I Grow Tomatoes Indoors"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold">Plant Type</label>
            <input
              required
              name="type"
              defaultValue={type}
              type="text"
              className="input w-full focus:outline-0"
              placeholder="Plant Type/Topic"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold">Difficulty Level</label>
            <select
              required
              defaultValue={diff}
              onChange={(e) => setDifficulty(e.target.value)}
              className="select w-full focus:outline-0"
            >
              <option disabled={true}>Select Difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold">Images url</label>
            <input
              required
              name="image"
              defaultValue={image}
              type="text"
              className="input w-full focus:outline-0"
              placeholder="Images url"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold">Category</label>
            <select
              required
              defaultValue={cat}
              onChange={(e) => setCategory(e.target.value)}
              className="select w-full focus:outline-0"
            >
              <option disabled={true}>Select Category</option>
              <option>Composting</option>
              <option>Plant Care</option>
              <option>Vertical Gardening</option>
            </select>
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold">Availability</label>
            <select
              required
              defaultValue={avail}
              onChange={(e) => setAvailability(e.target.value)}
              className="select w-full focus:outline-0"
            >
              <option disabled={true}>Select Availability</option>
              <option>Public</option>
              <option>Hidden</option>
            </select>
          </fieldset>
        </div>
        <fieldset className="fieldset">
          <label className="font-bold">Description</label>
          <textarea
            required
            name="description"
            defaultValue={description}
            rows={5}
            className="textarea focus:outline-0 w-full"
            placeholder="Description"
          ></textarea>
        </fieldset>
        <input
          className="btn btn-success text-white w-full"
          type="submit"
          value="Share a Tip"
        />
      </form>
    </div>
  );
};

export default UpdateTipPage;
