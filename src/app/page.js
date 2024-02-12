'use client';

import { useState } from 'react';

export default function Home() {
  const phrases = [
    'No',
    'Are you sure?',
    'Really sure?',
    'Bae please',
    'Are you positive???',
    'Just think about it',
    "If you say no, I'll be very sad",
    "I'll be very very sad 🥹",
    "I'll be very very very sad 🥹",
    "I'll be very very very sad 🥹😭😭",
    "Ok fine, I'll stop asking...",
    'Just kidding, PLEASE SAY YES',
    "You're breaking my heart ;(",
  ];
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };
  const getNoButtonText = () => {
    const index = noCount % phrases.length;
    return phrases[index];
  };
  console.log(
    '%cđược thực hiện bởi chuyên gia, không khuyến cáo bắt trước làm theo dưới mọi hình thức',
    'background: red; color: yellow; font-size: x-large'
  );
  return (
    <main className='flex justify-center items-center h-screen'>
      {yesPressed ? (
        <div className='bear-with-kissing'>
          <img src='/bear-kiss-bear-kisses.gif' width={300} height={300} />
          <h4 className='text-3xl font-semibold text-center p-5'>
            Okeyyy Yayyyyyyyy !! 😘
          </h4>
        </div>
      ) : (
        <div className='bear-with-heart'>
          <div className='flex justify-center'>
            <img src='/cute-love-bear-roses.gif' width={300} height={300} />
          </div>
          <h4 className='text-3xl text-center pb-5'>
            Will you be my Valentine?
          </h4>
          <div className='flex justify-center'>
            <div className='text-center'>
              <button
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
                className='rounded-md bg-green-600 px-3 py-1 text-white font-semibold m-2'
              >
                Yes
              </button>
              <button
                onClick={handleNoClick}
                className='rounded-md bg-red-600 px-3 py-1 text-white font-semibold m-2'
              >
                {getNoButtonText()}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
