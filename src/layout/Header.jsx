import { useIsMutating } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { TbCloudCheck, TbMenu2 } from 'react-icons/tb';
import Button from '../ui/Button';
import Spinner from '../ui/Spinner';
import ColorThemes from '../ui/ColorThemes';
import { useState } from 'react';
import SidebarMenu from './SidebarMenu';
import Tooltip from '../ui/Tooltip';

export default function Header({ isAuth = true, className }) {
  const isMutatingNotes = useIsMutating({ mutationKey: ['notes'] });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const classes = twMerge(
    'flex items-center h-full w-full justify-items-end justify-between gap-2 border-b border-neutral-200 pr-6 pl-4 sm:px-10 dark:border-neutral-600',
    className,
  );

  return (
    <header className={classes}>
      <div className="flex w-min items-center gap-4">
        <Button
          className={`${isAuth || 'hidden'} dark:text-neutral-300 sm:hidden`}
          onClick={() => setIsSidebarOpen(s => !s)}
        >
          <TbMenu2 className="h-6 w-6" />
        </Button>
        {isAuth && <SidebarMenu onClose={() => setIsSidebarOpen(false)} isOpen={isSidebarOpen} />}
      </div>
      <div className="flex items-center gap-2 sm:gap-6">
        <ColorThemes />
      </div>
    </header>
  );
}

Header.propTypes = {
  isAuth: PropTypes.bool,
  className: PropTypes.string,
};
