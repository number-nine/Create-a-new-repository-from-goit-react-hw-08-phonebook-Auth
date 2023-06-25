import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import * as contactsAPI from 'redux/contactOperations';
import {
  selectVisibleContacts,
} from 'redux/selectors';

import {
  ListWrapper,
} from './ContactsList.styled';
import { Button } from '../common.styled';


const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

   useEffect(() => {
     dispatch(contactsAPI.getAllContacts());
   }, [dispatch]);

  return visibleContacts.length === 0 ? (
    <p>Nothing to show</p>
  ) : (
    <ListWrapper>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
          
              <Button
                type="button"
                onClick={() => dispatch(contactsAPI.deleteContactById(id))}
              >
                 Delete
              </Button>
            
          </li>
        );
      })}
    </ListWrapper>
  );
};

export default ContactsList;
