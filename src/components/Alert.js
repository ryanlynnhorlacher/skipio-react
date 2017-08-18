import React from 'react';
import glamorous from 'glamorous';

const AlertDiv = glamorous.div({
	borderRadius: 7,
	width: 300,
	height: 50,
	textAlign: 'center',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
}, ({ status }) => {
	if (status === 'Message Sent!') {
		return {
			backgroundColor: '#6fe288',
			border: '1px solid #4b9e5d',
			color: '#2d6339',
		}
	} else {
		return {
			backgroundColor: '#ef6b6b',
			border: '1px solid #914242',
			color: '#632d2d',
		}
	}
});

const Container = glamorous.div({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	marginTop: 15,
})


class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false }
  }

  hide = () => {
  	this.setState({ visible: false });
  	this.props.clearStatus();
  }

  componentWillReceiveProps(nextProps) {
  	if (nextProps.status !== '' && nextProps.status !== this.props.status) {
  		this.setState({ visible: true });
  		setTimeout( this.hide, 5000);
  	}
  }

  render() {
  	if (this.state.visible) {
	    return (
	    	<Container>
		      <AlertDiv status={ this.props.status }>
		        { this.props.status }
		      </AlertDiv>  
		    </Container>
	    );
	  }
	  return null;
  }
}

export default Alert;