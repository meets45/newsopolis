import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, url, author, date } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            imgUrl ? imgUrl : "https://img.icons8.com/dusk/344/google-news.png"
          }
          className="card-img-top"
          alt="..."
        />
        <div
          className="card-body"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "dark" ? "#198266" : "white",
          }}
        >
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small>
              By {!author ? "Unknown" : author} at{" "}
              {new Date(date).toUTCString()}
            </small>
          </p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-sm btn-${
              props.mode === "light" ? "primary" : "dark"
            }`}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
