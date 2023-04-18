import { StyledInput, StyledTitle } from './ContactInput.styled';

export const ContactInput = ({
  title,
  name,
  value,
  type,
  onChange,
  pattern,
}) => {
  return (
    <>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledInput
        onChange={onChange}
        type={type}
        name={name}
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};
