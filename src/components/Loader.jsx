import { loader } from '../assets'

const Loader = ({title}) => (
  <div className='w-full flex justify-center flex-col items-center'>
    <img src={loader} alt="loader" className='w-32 h-32 object-contain'/>
    <h1 className='font-2xl text-white mt-2 font-bold'>{title || "Loading..."}</h1>
  </div>
);

export default Loader;
