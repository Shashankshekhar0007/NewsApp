import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={imageUrl || "https://via.placeholder.com/150"}
            className="card-img-top"
            alt="news"
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 60) : "Untitled"}...</h5>
            <p className="card-text">{description ? description.slice(0, 100) : "No description available"}...</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
