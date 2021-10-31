import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const About = () => {
  return (
    <div className='container md:divide-x md:divide-green-500 grid-cols-1  grid md:grid-cols-2 mx-auto pt-20 px-5 md:px-20 '>
      <div className='text mx-4'>
        <h1 className='text-3xl md:text-5xl font-extralight pb-4  text-gray-600'>
          <span className='font-bold'> WHY </span>
          CHOOSE US
        </h1>
        <p className=' font-light text-lg text-gray-600 text-justify py-10'>
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
      <div className="pl-8">
        <Carousel autoPlay>
          <div>
            <img
              alt=''
              src='https://images.unsplash.com/photo-1536028943632-1b302c2761b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRyZWtraW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
            />
          </div>
          <div>
            <img
              alt=''
              src='https://images.unsplash.com/photo-1611154046036-cd91e50978be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJla2tpbmd8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
            />
          </div>
          <div>
            <img
              alt=''
              src='https://images.unsplash.com/photo-1587325474165-d49e05df3a76?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHJla2tpbmd8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
            />
          </div>
          <div>
            <img
              alt=''
              src='https://images.unsplash.com/photo-1523341139367-9de570b874ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRyZWtraW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
            />
          </div>
          <div>
            <img
              alt=''
              src='https://images.unsplash.com/photo-1501535033-a594139be346?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyZWtraW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
            />
          </div>
          <div>
            <img
              alt=''
              src='https://images.unsplash.com/photo-1552590854-7a7d89b018ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRyZWtraW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
            />
          </div>
          <div>
            <img
              alt=''
              src='https://images.unsplash.com/photo-1617800809985-a4f937ede1b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyZWtraW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
            />
          </div>
          <div>
            <img
              alt=''
              src='https://images.unsplash.com/photo-1587325474165-d49e05df3a76?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHJla2tpbmd8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default About;
