import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Logo() {
  return (
    <div
      className="flex flex-row items-center leading-none text-blue-900 dark:text-white"
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg] text-blue-900 dark:text-white" />
      <p className="text-[44px] text-blue-900 dark:text-white">BizEase</p>
    </div>
  );
}