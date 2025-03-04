import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image
          src='/dog6.png'
          alt='man-with-dog'
          width={128}
          height={128}
          priority
        />
      </div>
      <Link href='/'>Home</Link>
      <Link href='/myaccount'>My Account</Link>
      <Link href='/walker'>Walker</Link>
    </nav>
  );
};

export default Navbar;
