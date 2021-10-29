import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const About = () => {
  return (
    <div className='container divide-x divide-green-500 grid md:grid-cols-2 mx-auto pt-20 px-20 '>
      <div className='text mx-4'>
        <h1 className='text-5xl font-extralight pb-4  text-gray-600'>
          <span className='font-bold'> WHY </span>
          CHOOSE US
        </h1>
        <p className=" font-light text-lg text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          distinctio officiis rem repellat, iusto porro in dolore itaque eaque
          perferendis consequuntur mollitia modi nostrum laboriosam aliquam
          inventore veritatis commodi facilis alias illum provident nesciunt
          architecto. Repellendus voluptatem perferendis voluptatibus eum
          voluptates officia aliquam ducimus, incidunt, ipsam natus esse maiores
          corporis consequatur provident sunt dolores minus inventore delectus
          corrupti asperiores perspiciatis nam excepturi est iure? Fugiat, vero
          reprehenderit, vel architecto quisquam nostrum sint ipsam earum
          delectus sunt magnam maxime nam id officiis, corrupti odio atque nisi
          itaque? Modi, autem pariatur omnis molestias quis expedita blanditiis
          totam tempora praesentium, iste, cumque atque?
        </p>
      </div>
      <div className='slider pl-4'>
        <Carousel autoPlay showStatus={false} className='presentation-mode'>
          <div>
            <img
              alt=''
              src='https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/260/2018/05/03020437/Before-After-03.jpg'
            />
            <p className='legend'>After</p>
          </div>
          <div>
            <img
              alt=''
              src='https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/260/2018/05/03020436/Before-After-04.jpg'
            />
            <p className='legend'>After</p>
          </div>
          <div>
            <img
              alt=''
              src='https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/260/2018/05/03020438/Before-After-01.jpg'
            />
            <p className='legend'>After</p>
          </div>
          <div>
            <img
              alt=''
              src='https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/260/2018/05/03020437/Before-After-02.jpg'
            />
            <p className='legend'>Before After</p>
          </div>
          <div>
            <img
              alt=''
              src='https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/260/2018/05/03020437/Before-After-03.jpg'
            />
            <p className='legend'>After</p>
          </div>
          <div>
            <img
              alt=''
              src='https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/260/2018/05/03020436/Before-After-04.jpg'
            />
            <p className='legend'></p>
          </div>
          <div>
            <img
              alt=''
              src='https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/260/2018/05/03020438/Before-After-01.jpg'
            />
            <p className='legend'></p>
          </div>
          <div>
            <img
              alt=''
              src='https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/260/2018/05/03020437/Before-After-02.jpg'
            />
            <p className='legend'></p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default About;
