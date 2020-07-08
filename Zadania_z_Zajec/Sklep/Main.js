import React from 'react'
import { homepage } from './homepage.const.js';

import Hero from './components/Hero';
import CTAComponent from './components/CTA';
import OurServices from './components/OurServices';
import OurProjects from './components/OurProjects';
import BlogList from './components/BlogList';

import ArticleList from './components/ArticleList'
import AddArticle from './components/AddArticle'


export default function Main() {
  const {
    hero,
    CTA,
    ourServices,
    ourProjects,
    CTA2,
    blogs,
    ourPartners,
  } = homepage;
  return (
    <div className="">
      <Hero {...hero} />
      <AddArticle />
      <ArticleList />
      <CTAComponent {...CTA} />
      <OurServices {...ourServices} />
      <OurProjects {...ourProjects} />
      <CTAComponent {...CTA2} />
      <BlogList {...blogs} />
      <OurServices {...ourPartners} />
    </div>
  )
}
