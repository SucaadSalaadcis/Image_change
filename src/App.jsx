import { useState } from 'react'


function App() {
  
  // counter
  const [tiro, setTiro] = useState(1)
    const handleIncrimentTiro = () => {
      setTiro(tiro + 1)
    }
    const handledecrimentTiro = () => {
      if(tiro > 1){
    setTiro(tiro - 1)
  
  }  }

  // images
  const images = [
    'https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150713999.jpg?t=st=1716871613~exp=1716875213~hmac=80b1b989744d362715af816b4cfa775b9b5c246968f63a94430f2e0794b2733f&w=740',
    'https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150714005.jpg?t=st=1716871664~exp=1716875264~hmac=8a36cbd9b85719bc0ac14819a511ca3954ce6d6112d6cfc11a34c42b7400c6aa&w=740', 
    'https://img.freepik.com/premium-photo/visual-business_931878-438160.jpg?w=740',
    // 'src/assets/3L.png',
    'https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150714001.jpg?t=st=1716871876~exp=1716875476~hmac=17c9ce0967b8cf53534cd63d2b13d32d8986bd4609fe8aa746b6e981f30c5f3d&w=740'
  ];
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <>
    <div className='flex'>
      {/* 4 images */}
      <div className='w-[93px] h-auto cursor-pointer ml-[110px]  mt-[130px] space-y-2'>
      {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => setMainImage(image)}
            className='hover:border-red-900 border-4 rounded-md' 
          />
        ))}
      </div>
      {/* main image */}
    <div className=' mt-32'>
    <img className='w-[90%] ml-5 flex shrink-0 rounded-md h-[400px]' src={mainImage} alt="" />
    </div>
    {/* text plus buttons */}
    <div className='flex flex-col ml-5 mt-32'>
    <p className='font-bold text-xl w-[450px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur reprehenderit odit sed sapiente, voluptatibus beatae ad illum impedit similique optio. </p>
      <p className='text-gray-600 mt-3'>3 pcs</p>
      <span className='mt-3'> MRP:<del className='ml-2'>$20 </del>  <span className='ml-4'>Price: <span className='font-bold'>$19</span></span> </span> 
      <p className='mt-3'>You Save: <span className='font-bold'>5%</span> <span className='ml-3'>Inclusive of all texes</span> </p>
      <p className='font-bold mt-3'>In Stock</p>
      <p className='mt-3'>Sold by <span className='text-blue-500'>Kaaftoon online</span></p>
      <br/> 
      {/* the inc/dec buttons */}
      <div className='flex gap-5'>
      <button onClick={handledecrimentTiro} className='w-[40px] rounded-full  bg-orange-500 text-3xl h-[40px] text-white '>-</button>
      <h1 className='text-4xl'>{tiro}</h1>
      <button onClick={handleIncrimentTiro} className='w-[40px] bg-orange-500 rounded-full text-3xl h-[40px] text-white '>+</button>
      </div>
      {/* last button */}
      <div className=' mt-3'>
      <button className='bg-orange-500 text-white w-[35%] text-1xl h-[40px] shadow-2xl rounded-md '>
     <span> add to cart</span>  <i class="fa-solid fa-basket-shopping ml-2 text-white"></i> </button>
    </div>

    </div>

      </div>

    </>
  )
}

export default App