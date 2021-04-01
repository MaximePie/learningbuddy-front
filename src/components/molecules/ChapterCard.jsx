import React from 'react';
import {PropTypes} from 'prop-types';

export default function ChapterCard({ chapter }) {

  const { title, lessons} = chapter;

  return (
    <div className="Card">
      <h3 className="Card__name">{title}</h3>
      {lessons.map(({label, icon, url}, index) => (
        <p key={index} className="Card__lesson">
          <i className={`Card__lesson-icon ${icon === 'youtube' ? 'fab' : 'fas'} fa-${icon}`}/>
          <a className="Card__lesson-link" href={url}>
            {label}
          </a>
        </p>
      ))}
    </div>
  );
}

ChapterCard.propTypes = {
  chapter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    lessons: PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
      icon: PropTypes.string,
    })
  }).isRequired,
};

ChapterCard.propTypes = {
  question: PropTypes.shape({
    score: PropTypes.number,
    next_question_at: PropTypes.string,
    id: PropTypes.number,
    is_reverse: PropTypes.bool,
    wording: PropTypes.string,
    answer: PropTypes.string,
    category: PropTypes.shape({
      icon: PropTypes.string,
    }),
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  message: PropTypes.string,
};

ChapterCard.defaultProps = {
  message: '',
};
