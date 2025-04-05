import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';


import MenuItem from './MenuItem'
import DarkModeSwitch from './DarkModeSwitch';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>

        {/* ---- Left side --- */}

        <div className='flex gap-4'>
          <MenuItem title='Home' address='/' Icon={AiFillHome}/>
          <MenuItem title='About' address='/about' Icon={BsFillInfoCircleFill}/>
        </div>

        {/* ---- Right side ---- */}

        <div className='flex items-center gap-4'>
            <DarkModeSwitch/>

            <Link  href={'/'} className='flex gap-1 items-center'>
             <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
               IMDb
             </span>
            </Link> 

        </div>
    </div>
  )
}

export default Header