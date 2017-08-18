import { fromJS } from 'immutable';

function reducer(state = fromJS({
	contacts: [],
	contact: {},
	message: '',
	status: '',
}), { type, payload }) {
	switch (type) {
		case 'GET_CONTACTS': {
			const contacts = fromJS(payload.contacts);
			state = state.set('contacts', contacts);
			state = state.set('contact', contacts.get(0));
			break;
		}
		case 'SET_CONTACT': {
			state = state.set('contact', payload.contact);
			break;
		}
		case 'SET_SENT_STATUS': {
			console.log('setSEnt', payload.status)
			const { status } = payload;
			state = state.set('status', payload.status);
			if (status === 'Message Sent!') {
				state = state.set('message', '');
			}
			break;
		}
		case 'SET_MESSAGE': {
			state = state.set('message', payload.text);
		break;
		}
	}
	return state;
}

export default reducer;