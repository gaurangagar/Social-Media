import React from 'react';

const Postcard = () => {
    return (
              <div>
                <div className='bg-white'>
                  {/* Image will be placed here in the future */}
                  <h1 className='text-black'>gaurang  10-sept-2023</h1> <br />
                  <h1 className='text-black'>Helloooooooooooooooooooooooooooooooooooooo</h1> <br />
                  <h1 className='text-black'>Helloooooooooooooooooooooooooooooooooooooo</h1> <br />
                  <h1 className='text-black'>Helloooooooooooooooooooooooooooooooooooooo</h1> <br />
                  <h1 className='text-black'>Helloooooooooooooooooooooooooooooooooooooo</h1> <br />
                  <h1 className='text-black'>Helloooooooooooooooooooooooooooooooooooooo</h1> <br />
                  <h1 className='text-black'>Helloooooooooooooooooooooooooooooooooooooo</h1> <br />
                </div>
                <div className='flex justify-around p-2 bg-gray-500 h-[20%]'>
                  <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>Like</button>
                  <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>Comment</button>
                  <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>Share</button>
                </div>
              </div>
            );
          }

export default Postcard;
