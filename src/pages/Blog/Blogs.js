import React from "react";
import Card from "./Card";
import "./Blog.css"
import image1 from "./apt.jpg";
import image2 from './CA.jpg'
import image3 from './CE.jpg'

const cards = [
  {
    id: 1,
    title: "Fazt Web",
    image: image1,
    url: "https://faztweb.com",
  },
  {
    id: 2,
    title: "Fazt Blog",
    image: image2,
    url: "https://blog.faztweb.com",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
];

function Blogs() {
  return (
    <div className="conainer d-flex justify-content-center align-items-center h-100">
      <br/>
      <div className="rw">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div><br/>
      <div className="rw">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
      <br/>
    </div>
  );
}

export default Blogs;
