import Image from 'next/image';

const Avatar = ({ width, height }) => {
  return (
    <div className="flex xl:max-w-none absolute bottom-0 right-0">
      <Image
        src={'/avatar.png'}
        width={width}
        height={height}
        alt="Foto de perfil"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;