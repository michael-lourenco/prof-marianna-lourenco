// next image
import Image from 'next/image';

const Avatar = ({ width, height }) => {
  //737 x 678
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src={'/avatar.png'}
        width={width}
        height={height}
        alt=''
        className='translate-z-0 w-full h-full'
      />
    </div>
  );
};

export default Avatar;
