import { forwardRef, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';
import { useIsMutating } from '@tanstack/react-query';
import { TbUsers } from 'react-icons/tb';
import NoteActions from './NoteActions';
import TagList from './TagList';
import NoteEdit from './NoteEdit';
import Modal from '../../ui/Modal';
import colors from '../../utils/colors';
import * as propTypes from '../../utils/prop-types';

function formatDate(dateItem) {
  const date = new Date(dateItem);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so we add 1
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const NoteItem = forwardRef(function ({ note, className, style }, ref) {
  console.log(note)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosingDisabled, setIsClosingDisabled] = useState(false);
  const textContentRef = useRef(null);
  const isMutating = useIsMutating();

  // set height of text content to prevent cut lines
  useEffect(() => {
    if (!textContentRef?.current) return;
    const oldHeight = textContentRef.current.offsetHeight;
    const newHeight = Math.floor(oldHeight / 20) * 100;
    textContentRef.current.setAttribute('style', `height:${newHeight}px`);
  }, [note.textContent]);

  const selectedStyle = colors.find(({ colorHex }) => colorHex === note.colorHex)?.twClasses;

  const classes = twMerge(
    `${selectedStyle} group/note overflow-visible border flex select-none flex-col gap-3 rounded-lg px-5 transition hover:shadow-s1 cursor-pointer`,
    className,
  );

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => isClosingDisabled || setIsModalOpen(false)} className={selectedStyle}>
        <NoteEdit
          note={note}
          onClick={() => isClosingDisabled || setIsModalOpen(false)}
          disableClosing={isDisabled => setIsClosingDisabled(isDisabled)}
        />
      </Modal>
      <li className={classes} onClick={() => setIsModalOpen(true)} style={style} ref={ref}>
        {/**Lasted Updated */}
        <div className='flex gap-2 items-center '>
          <h1 className=' font-bold'>Last Updated:</h1>
          <h1 className="text-sm line-clamp-1 flex-[0_0_auto] truncate font-medium leading-5 text-neutral-800 dark:text-neutral-100">
            {formatDate(note?.updatedAt)}
          </h1>
        </div>

        {note?.title && (
          <h1 className="text-md line-clamp-1 flex-[0_0_auto] truncate font-medium leading-5 text-neutral-800 dark:text-neutral-100">
            {note.title}
          </h1>
        )}
        <p
          ref={textContentRef}
          className="line-clamp-6 max-h-[7.5rem] grow overflow-hidden truncate whitespace-pre-line text-sm text-neutral-800 dark:text-neutral-100"
        >
          {note.textContent}
        </p>
        <TagList note={note} />
        {note?.sharedUsers?.length > 0 && (
          <div className="flex items-center justify-start gap-1 [&>svg]:h-3 [&>svg]:w-3">
            <TbUsers className="stroke-neutral-700 dark:stroke-neutral-300" />
            <span className="flex h-6 items-center text-xs italic text-neutral-700 dark:text-neutral-300">{`Last edited by ${note.user.email === note.lastEditedBy.email ? 'you' : note.lastEditedBy.firstname
              }`}</span>
          </div>
        )}

        <NoteActions note={note} className={'[&_svg]:dark:stroke-neutral-300'} isDisabled={isMutating > 0} />

        {/**Created at */}
        <div className=' w-full justify-end flex gap-2 items-center '>
          <h1 className=' font-bold'>Created:</h1>
          <h1 className="text-sm line-clamp-1 flex-[0_0_auto] truncate font-medium leading-5 text-neutral-800 dark:text-neutral-100">
            {formatDate(note?.createdAt)}
          </h1>
        </div>
      </li>
    </>
  );
});

NoteItem.propTypes = {
  note: propTypes.note,
  className: PropTypes.string,
  style: PropTypes.object,
};

NoteItem.displayName = 'NoteItem';

export default NoteItem;
