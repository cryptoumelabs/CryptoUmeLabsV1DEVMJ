import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";

const Category = () => {
  const CategoryArray = [
    {
      images: images.creatorbackground13,
      name: "Afro-American Art",
    },
    {
      images: images.creatorbackground2,
      name: "Unsigned Artist Music Audio",
    },
    {
      images: images.creatorbackground3,
      name: "Entirtment Art",
    },
    {
      images: images.creatorbackground4,
      name: "Time Life",
    },
    {
      images: images.creatorbackground5,
      name: "City Art",
    },
    {
      images: images.creatorbackground6,
      name: "Sports",
    },
    {
      images: images.creatorbackground7,
      name: "Digital Art",
    },
    {
      images: images.creatorbackground8,
      name: "Faces",
    },
    {
      images: images.creatorbackground12,
      name: "Music Arist Album Covers",
    },
    {
      images: images.creatorbackground9,
      name: "Art",
    },
    {
      images: images.creatorbackground11,
      name: "Music Videos",
    },
  ];
  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={i + 1}>
            <Image
              src={el.images}
              className={Style.category_box_img}
              alt="Background image"
              width={350}
              height={150}
              object-fit="cover"
            />

            <div className={Style.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>{el.name}</h4>
                <small>{i + 1}995 NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
