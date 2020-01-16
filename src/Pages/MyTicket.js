import React, {Component} from 'react'
import {Container, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import moment from 'moment'

import HeaderHome from './HeaderHome'
import FooterHome from './FooterHome' 
import Ticket from '../Component/Content/Layout/Ticket'
import {getTicketApproved} from '../Redux/_action/ActionOrder'

class MyTicket extends Component {

    componentDidMount() {
        const id = localStorage.getItem("id");
        this.props.dispatch(getTicketApproved(id))
        console.log(id);
        }


    render () {
        console.log(this.props.Approved)
        return (
            <Container fluid>
                <HeaderHome/>
                    <div style={{backgroundColor:'rgb(255, 230, 255)'}}>
                    <Container style={{paddingTop:'10vh', paddingBottom:'20vh'}}>
                        <Header size='huge' content='My Ticket' style={{color:"rgb(250, 65, 96"}}/>
                        {this.props.Approved.map(Item => {
                                const checkDate = new Date(Item.Event.starttime);
                                const endDate = new Date(Item.Event.endtime);
                                const name = localStorage.getItem("name");
                                const id = localStorage.getItem("id");
                                const end = moment(endDate).format("DD MMMM YYYY");
                                const date = moment(checkDate).format("DD MMMM YYYY");
                                const startHrs = moment(checkDate).format("HH.mm");
                                const endHrs = moment(endDate).format("HH.mm");
                                console.log(Item);
                        return (
                            <Ticket
                                id={id}
                                status={Item.status}
                                name={name}
                                title={Item.Event.title}
                                price={Item.Event.price}
                                date={date}
                                address={Item.Event.address}
                            />
                            );
                        })}
                    </Container>
                    </div>
                <FooterHome/>
            </Container>
        )
    };
}

// state
const mapStatetoProps = state => ({
    Approved: state.ReducerOrder.ticket,
  })
export default connect(mapStatetoProps)(MyTicket);