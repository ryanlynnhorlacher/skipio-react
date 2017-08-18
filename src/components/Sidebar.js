import React from 'react';
import glamorous from 'glamorous';
import Contact from './Contact';

const SidebarDiv = glamorous.div({
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  overflow: 'auto',
  width: 200,
  backgroundColor: 'black',
});

const Header = glamorous.h3({
	color: 'white',
	textAlign: 'center',
})

const Sidebar = ({ setContact, contact, contacts}) => {

  function displayContacts() {
    return contacts.map(c => (
    	<Contact
      	key={c.get('id')}
      	contact={ c }
      	setContact={ setContact }
      	active={ contact.get('id') === c.get('id') }
      />
    ))
  }

  return (
    <SidebarDiv>
    	<Header>
    		Contacts
    	</Header>
      { displayContacts() }
    </SidebarDiv>
  );
}

export default Sidebar;