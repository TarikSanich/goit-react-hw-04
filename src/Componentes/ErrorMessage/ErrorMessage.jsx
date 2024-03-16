import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <p className={css.message}>
      Something went wrong while fetching images🤔. Please try again.
    </p>
  );
}