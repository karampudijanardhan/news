import React from "react";

function Card(props) {
  return (
    <div className="everything-card">
      {/* Main Card Content */}
      <div className="card-container">
        {/* Left Section (Image and Title) */}
        <div className="card-image-section">
          <b className="card-title">{props.title}</b>
          <img
            className="card-image"
            src={props.imgUrl}
            alt={props.title}
          />
        </div>

        {/* Right Section (Description and Info) */}
        <div className="card-content">
          <div className="description">
            <p className="description-text">
              {props.description?.substring(0, 200)}...
            </p>
          </div>
          <div className="info">
            <div className="source-info">
              <span className="font-semibold">Source:</span>
              <a
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {props.source.substring(0, 70)}
              </a>
            </div>
            <div className="origin">
              <p className="origin-item">
                <span className="font-semibold">Author:</span> {props.author}
              </p>
              <p className="origin-item">
                <span className="font-semibold">Published At:</span>{" "}
                {props.publishedAt}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Card Content */}
      <div className="additional-card">
        {/* Left Image Section */}
        <div
          className="additional-image"
          
          title={props.imageLeftTitle}
        ></div>

        {/* Right Content Section */}
        <div className="additional-content">
          <div className="mb-8">
            <p className="member-info">
              {props.memberIcon && (
                <svg className="member-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  {props.memberIcon}
                </svg>
              )}
              {props.memberText}
            </p>
            <div className="card-title-large">{props.cardTitle}</div>
            <p className="card-description">{props.cardDescription}</p>
          </div>
          <div className="author-info">
            {props.authorImage && (
              <img
                className="author-image"
                src={props.authorImage}
                alt={props.authorName}
              />
            )}
            <div className="text-sm">
              <p className="author-name">{props.authorName}</p>
              <p className="published-date">{props.publishedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;