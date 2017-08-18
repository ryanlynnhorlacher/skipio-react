import React from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import { sendMessage, setMessage } from '../actions';

const TextArea = glamorous.textarea({
	border: '1px solid #dedfe0',
	borderRadius: 7,
	outline: 'none',
	resize: 'none',
	padding: 5,
	':focus': {
		border: '1px solid #84c7d8'
	}
})

const Container = glamorous.div({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
})

const Button = glamorous.button({
	borderRadius: 7,
	color: 'white',
	outline: 'none',
	cursor: 'pointer',
})

const Clear = glamorous(Button)({
	backgroundColor: '#a33939',
	':hover': {
		backgroundColor: '#c15d5d',
	},
})

const Submit = glamorous(Button)({
	backgroundColor: '#4b9335',
	':hover': {
		backgroundColor: '#6eba57',
	},
	':disabled': {
		backroundColor: 'black',
	}
}, ({ disabled }) => {
	if (disabled) {
		return {
			backgroundColor: '#a5a5a5',
			':hover': {
				backgroundColor: '#a5a5a5',
		}
	}}
})

const ButtonRow = glamorous.div({
	marginTop: 10,
})

const Label = glamorous.div({ fontWeight: 'bold', marginRight: 10, marginBottom: 5 })

class MessageText extends React.Component {

	onChange = (e) => {
		this.props.setMessage(e.target.value)
	}

	clear = (e) => {
		e.preventDefault();
		this.props.setMessage('')
	};

	sendMessage = (e) => {
		e.preventDefault();
		this.props.sendMessage(this.props.message, this.props.contact.get('id'));
	}

  render() {
  	const { message } = this.props;
    return (
      <Container>
      	<Label> Message Text</Label>
        <TextArea rows='5' cols='50' onChange={this.onChange} value={message}/>
        <ButtonRow>
        	<Clear onClick={this.clear}>Clear Message</Clear>
        	<Submit onClick={ this.sendMessage } disabled={ message === '' }>Send Message</Submit>
        </ButtonRow>
      </Container>  
    );
  }
}

const mapStateToProps = (state) => ({
	message: state.get('message'),
})

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (text, id) => dispatch(sendMessage()),
  setMessage: (text) => dispatch(setMessage(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageText);