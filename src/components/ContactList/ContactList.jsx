import PropTypes from 'prop-types';
import { Button } from '../ContactList/ContactList.styled';
import { RiDeleteBinLine } from 'react-icons/ri';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} : {contact.number}
          <Button onClick={() => onDeleteContact(contact.id)}>
            {' '}
            <RiDeleteBinLine />
          </Button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
