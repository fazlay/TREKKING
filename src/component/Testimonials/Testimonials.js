import React from 'react';

const Testimonials = () => {
  return (
    <div className=' container mx-auto py-20 md:px-20 '>
      <h1 className='text-4xl md:text-5xl font-extralight pb-4  text-gray-600'>
        WHY TREKKERS LOVE
        <span className='font-bold'> TRAVEL KING </span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 px-4 md:px-20 gap-2 md:gap-16'>
        <div className='one md:divide-x-2 md:divide-green-700'>
          <div className='py-10'>
            <img
              className='rounded-full mx-auto h-40 '
              src='https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg'
              alt=' Anonymus Hiker'
            />
          </div>

          <p className='pl-4 text-justify'>
            “Kedarkantha was my first trek and it was the most amazing
            experience. I couldn’t imagine that a trek could be that good! It
            was my first experience trekking, in snow, travelling alone, without
            connectivity, just with friends I made on the trek, it was amazing!
            The Indiahikes team even made a cake for a friend, whose birthday it
            was! Now all my trek friends and I can talk about are treks!”{' '}
            <b>–&nbsp;Ishani Ghotikar, Nutritionist, Hyderabad</b>
          </p>
        </div>
        <div className='one md:divide-x-2 md:divide-green-700'>
          <div className='py-10'>
          <img
              className='rounded-full mx-auto h-40 '
              src='https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg'
              alt=' Anonymus Hiker'
            />
          </div>

          <p className='pl-4 text-justify'>
            “Kedarkantha was my first trek and it was the most amazing
            experience. I couldn’t imagine that a trek could be that good! It
            was my first experience trekking, in snow, travelling alone, without
            connectivity, just with friends I made on the trek, it was amazing!
            The Indiahikes team even made a cake for a friend, whose birthday it
            was! Now all my trek friends and I can talk about are treks!”{' '}
            <b>–&nbsp;Ishani Ghotikar, Nutritionist, Hyderabad</b>
          </p>
        </div>
        <div className='one md:divide-x-2 md:divide-green-700'>
          <div className='py-10'>
          <img
              className='rounded-full mx-auto h-40 '
              src='https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg'
              alt=' Anonymus Hiker'
            />
          </div>

          <p className='pl-4 text-justify'>
            “Kedarkantha was my first trek and it was the most amazing
            experience. I couldn’t imagine that a trek could be that good! It
            was my first experience trekking, in snow, travelling alone, without
            connectivity, just with friends I made on the trek, it was amazing!
            The Indiahikes team even made a cake for a friend, whose birthday it
            was! Now all my trek friends and I can talk about are treks!”{' '}
            <b>–&nbsp;Ishani Ghotikar, Nutritionist, Hyderabad</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
