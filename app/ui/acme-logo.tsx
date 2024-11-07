import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-blue-500 dark:text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg] text-blue-500 dark:text-white" />
      <p className="text-[44px] text-blue-500 dark:text-white">BizEase</p>
    </div>
  );
}
