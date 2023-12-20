'use client'

import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Post from './Post'
import { PostProp } from './Post'
import Image from 'next/image'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const Carousels = ({ posts }: any) => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=''
        containerClass='container'
        dotListClass=''
        draggable
        focusOnSelect={false}
        infinite
        itemClass=''
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=''
        slidesToSlide={1}
        swipeable
      >
        {posts.map((post: any) => (
          <div key={post.title} className={` rounded-lg flex flex-col pr-3 `}>
            <Image
              src={`${post.path}.png`}
              alt={post.title}
              width={350}
              height={200}
              className={`rounded-tl-lg rounded-tr-lg w-full`}
            />
            <div className={`flex flex-col items-center gap-1 bg-white p-4`}>
              <div className={`flex self-end text-sm`}>{post.date}</div>
              <div className={`text-lg font-bold`}>{post.title}</div>
              <div className={`text-sm `}>{post.subtitle}</div>
              <div className={`p-1 bg-emerald-400 rounded-md`}>
                {post.category}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  )
}

export default Carousels
