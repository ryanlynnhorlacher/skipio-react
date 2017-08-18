import React from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import MessageText from './MessageText';
import Alert from './Alert';
import { clearStatus } from '../actions';

const Header = glamorous.div({
	display: 'flex',
	flexDirection: 'row',
	borderBottom: '1px solid #dedfe0',
	alignItems: 'center',
	padding: '10px 0px',
})

const GlamImg = glamorous.img({
  borderRadius: 7,
  width: 60,
  height: 60,
  marginRight: 20,
});

const Row = glamorous.div({
	padding: '10px 0px',
	display: 'flex',
	flexDirection: 'row',
})

const Container = glamorous.div({ paddingLeft: 15 })

const Label = glamorous.div({ fontWeight: 'bold', marginRight: 10, marginBottom: 5 })

const Name = glamorous.div({ fontSize: 20, fontWeight: 'bold' })

class SelectedComtact extends React.Component {

  render() {
  	const { full_name, avatar_url, phone_mobile_national } = this.props.contact.toJS()
    return (
      <Container>
        <Header>
        	<GlamImg src={ avatar_url } />
        	<Name>
        		{ full_name }
        	</Name>
        </Header>
        <Row>
        	<Label>Mobile</Label>{ phone_mobile_national }
        </Row>
        <MessageText 
        	contact={ this.props.contact }
        />
        <Alert status={ this.props.status } clearStatus={ this.props.clearStatus }/>
      </Container>  
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.get('contact'),
  status: state.get('status'),
})

const mapDispatchToProps = (dispatch) => ({
	clearStatus: () => dispatch(clearStatus())
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectedComtact);