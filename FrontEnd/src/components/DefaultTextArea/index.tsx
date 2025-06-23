import styles from './styles.module.css';

type DefaultTextAreaProps = {
  id?: string;
  name: string;
  labelText?: string;
  placeholderText?: string;
};

export function DefaultTextArea({
  name,
  labelText,
  placeholderText,
  id,
  ...rest
}: DefaultTextAreaProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <textarea
        className={styles.textarea}
        placeholder={placeholderText}
        name={name}
        {...rest}
      ></textarea>
    </>
  );
}
