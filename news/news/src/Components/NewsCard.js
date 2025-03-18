import React from 'react';
import { Card } from 'react-bootstrap';

const NewsCard = ({ article }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={article.urlToImage || 'https://via.placeholder.com/300'} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.description}</Card.Text>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;