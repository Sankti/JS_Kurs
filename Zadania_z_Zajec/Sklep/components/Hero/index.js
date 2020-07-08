import React from 'react';
import s from './style.module.css';
import AddArticle from '../AddArticle'

function Hero({ images, title, subtitle, button }) {
  return (
    <div className={s.root}>
      <div className={s.bg} style={{ backgroundImage: `url(${images[0]})` }} />

      <div className="d-flex align-items-center h-100">
        <div className={s.text}>
          <h2>{title}</h2>
          <div className="mt-4 mb-4">{subtitle}</div>
          <button className="btn btn-primary btn-lg">{button}</button>
        </div>
      </div>
      <AddArticle />
    </div>
  )
}

export default Hero

