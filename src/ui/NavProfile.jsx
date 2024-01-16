import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';


export default function NavProfile({ to }) {

  const inactiveStyles =
    'block rounded-md text-neutral-800 dark:text-neutral-300 px-2 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm font-semibold flex gap-3 items-center select-none';
  const activeStyles =
    'bg-primary-green-100 dark:bg-primary-green-900 hover:bg-primary-green-100 dark:hover:bg-primary-green-900';
  let styles;

  return (
    <li className={styles}>
      <NavLink
        to={to}
        className={({ isActive }) => {
          if (isActive) {
            styles = twMerge(inactiveStyles, activeStyles);
          } else {
            styles = inactiveStyles;
          }
          return styles;
        }}
        end
      >
      </NavLink>
    </li>
  );
}

NavProfile.propTypes = {
  to: PropTypes.string,
};
