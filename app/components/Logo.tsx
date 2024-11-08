import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" passHref>
      <div className="flex flex-row items-center leading-none text-blue-900 dark:text-white cursor-pointer">
        <GlobeAltIcon className="h-12 w-12 rotate-[15deg] text-blue-900 dark:text-white" />
        <p className="text-[44px] text-blue-900 dark:text-white">BizEase</p>
      </div>
    </Link>
  );
}
