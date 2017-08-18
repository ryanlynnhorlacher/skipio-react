import React from 'react';
import glamorous from 'glamorous';

const ContactDiv = glamorous.div({
	color: 'white',
  fontSize: 14,
  padding: '5px 0px 0px 5px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}, ({ active }) => ({
	color: active ? 'white' : '#dedfe0'
}));

const GlamImg = glamorous.img({
  borderRadius: 7,
  width: 35,
  height: 35,
  marginRight: 10,
});

const Contact = ({ contact, setContact, active }) => {
	function select() {
		setContact(contact)
	}
	return (
		<ContactDiv onClick={ select } active={ active }>
      <GlamImg src={contact.get('avatar_url')} />
      { contact.get('full_name') }
    </ContactDiv>
	);
}

export default Contact;