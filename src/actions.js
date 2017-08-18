import axios from 'axios';
import token from './token';

export function sendMessage(text, id) {
	return (dispatch, getState) => {
		axios.post(`http://stage.skipio.com/api/v2/messages?token=${token}`, {
			recipients: [`contact-${id}`],
			message: {
				body: text,
			},
		})
	    .then(response => {
	      dispatch({
	      	type: 'SET_SENT_STATUS',
	      	payload: { status: 'Message Sent!' }
	      });
	    })
	    .catch(error => {
	      dispatch({
	      	type: 'SET_SENT_STATUS',
	      	payload: { status: 'Message Failed'}
	      })
	    });
	}
}

export function setMessage(text) {
	return {
		type: 'SET_MESSAGE',
		payload: { text },
	}
}

export function clearStatus() {
	return {
		type: 'SET_SENT_STATUS',
		payload: { status: '' },
	}
}

export function getContacts() {
	return (dispatch, getState) => {
		axios.get(`http://stage.skipio.com/api/v2/contacts?token=${token}`)
	    .then(response => {
	      dispatch({
	      	type: 'GET_CONTACTS',
	      	payload: { contacts: response.data.data }
	      });
	    })
	    .catch(error => {
	      console.log(error);
	    });
	}
}

export function setContact(contact) {
	return {
		type: 'SET_CONTACT',
		payload: { contact }
	}
}