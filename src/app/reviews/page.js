"use client";
import React, { useState } from "react";
//import reviews from "../data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addReview, editReview, deleteReview } from "@/features/reviewSlice";

//import reviews from "@/data/data";

const Review = () => {
  const reviews = useSelector((state) => state.reviews.reviews);
  const dispatch = useDispatch();
  console.log({ reviews });

  const [index, setIndex] = useState(0);
  //const { name, role: job, review: text } = reviews[index];
  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  const [error, setError] = useState();
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [nameerror, setusernameError] = useState();
  const [emailerror, setemailError] = useState();
  const [roleerror, setroleError] = useState();
  const [reviewerror, setreviewError] = useState();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    role: "",
    review: "",
  });

  //validation
  const { name, email, role, review } = formData;
  console.log(name);

  const HandleToogle = () => {
    setShow(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      role.trim() === "" ||
      review.trim() === ""
    ) {
      setError("Veulliez remplir tous les rubriques.");
      return;
    }
    setError();

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      setusernameError("Votre Nom doit contenir juste des lettres.");
      return;
    }
    setusernameError();

    if (!/\S+@\S+\.\S+/.test(email)) {
      setemailError("Enter une adresse email valide.");
      return;
    }
    setemailError();

    if (!/^[a-zA-Z\s]+$/.test(role)) {
      setroleError("Veullier entrer un role valide");
      return;
    }
    setroleError();

    if (review.length < 10) {
      setreviewError("Vous devez entez au moin 10 caractère.");
      return;
    }
    setreviewError();

    const newReview = {
      id: formData.id ? formData.id : Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role,
      review: formData.review,
    };

    console.log(newReview);
    isEdit ? dispatch(editReview(newReview)) : dispatch(addReview(newReview));

    setFormData({
      name: "",
      email: "",
      role: "",
      review: "",
    });
    setShow(false);
    alert("Merci !");
  };

  const HandleDelete = () => {
    dispatch(deleteReview(reviews[index].id));
    setIndex(0);
  };
  const HandleEdit = () => {
    setIsEdit(true);

    setShow(true);
    setFormData({
      id: reviews[index].id,
      name: reviews[index].name,
      email: reviews[index].email,
      role: reviews[index].role,
      review: reviews[index].review,
    });
  };

  return (
    <main className="container dark:text-gray-100 w-2/3 mx-auto h-screen">
      {reviews.length > 0 ? (
        <article className="text-center flex gap-4 flex-col items-center justify-center  ">
          <h4 className="text-xl">{reviews[index].name}</h4>
          <p className="text-blue-500">{reviews[index].role}</p>
          <p className="{Styles.info}">{reviews[index].review}</p>
          <div className="{Styles.button_container}">
            <button className="text-blue-500" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className="text-blue-500" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button
            className="bg-blue-500 my-4 text-white font-bold py-4 px-4 rounded-full inline-flex items-center"
            onClick={randomPerson}
          >
            slide
          </button>
        </article>
      ) : (
        <article className="text-center flex gap-4 flex-col items-center justify-center  ">
          {" "}
          No reviews
        </article>
      )}
      <div className="flex justify-around items-center ">
        <button
          class="bg-blue-500 my-4 text-white font-bold py-4 px-4 rounded-full inline-flex items-center"
          onClick={HandleToogle}
        >
          Ajouter
        </button>
        <button
          onClick={HandleDelete}
          class="bg-red-500 my-4 text-white font-bold py-4 px-4 rounded-full inline-flex items-center"
        >
          Supprimer
        </button>
        <button
          onClick={HandleEdit}
          class="bg-yellow-300 my-4 text-white font-bold py-4 px-4 rounded-full inline-flex items-center"
        >
          Modifier
        </button>
      </div>
      {show && (
        <div className=" dark:text-gray-100  min-w-[300px] relative rounded-lg p-8 sm:p-12 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full rounded py-3 dark:text-gray-100  dark:bg-gray-900 px-[14px]  text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                required
              />
              {nameerror && <p className="text-red-500">{nameerror}</p>}
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Your Email"
                onChange={handleChange}
                className="w-full rounded py-3 px-[14px] dark:text-gray-100  dark:bg-gray-900 text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                required
              />
              {emailerror && <p className="text-red-500">{emailerror}</p>}
            </div>
            <div className="mb-6">
              <input
                type="text"
                name="role"
                value={role}
                placeholder="Your Job"
                onChange={handleChange}
                className="w-full rounded py-3 px-[14px] dark:text-gray-100  dark:bg-gray-900 text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
              />
              {roleerror && <p className="text-red-500">{roleerror}</p>}
            </div>
            <div className="mb-6">
              <textarea
                name="review"
                value={review}
                rows="6"
                placeholder="Your Review"
                onChange={handleChange}
                className="w-full rounded py-3 dark:text-gray-100  px-[14px] dark:bg-gray-900 text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary"
                required
              ></textarea>
              {reviewerror && <p className="text-red-500">{reviewerror}</p>}
            </div>
            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full text-blue-500 font-semibold text-[24px] bg-primary rounded border border-primary p-3 transition hover:bg-opacity-90"
              >
                Envoyer
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      )}
    </main>
  );
};

export default Review;
