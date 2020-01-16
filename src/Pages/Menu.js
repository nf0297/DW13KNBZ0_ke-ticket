import React, {Component} from 'react'
import {Dropdown, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Menu extends Component {

    onClickLogout = e => {
        localStorage.clear();
        window.location.href= "/";
    }

    render(){

    const trigger = (
        <Image avatar src='http://www.jardindemeriem.com/en/images/temoin/1.jpg'/>
    )

        return(
            <Dropdown
            pointing='top right'
            trigger={trigger}
            >  
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/profile/' icon='user circle outline' text='Profile'/>
                    <Dropdown.Item as={Link} to='/my-ticket' icon='ticket' text='My Ticket'/>
                    <Dropdown.Item as={Link} to='/order/add' icon='money bill alternate outline' text='Payment'/>
                    <Dropdown.Item as={Link} to='/event/add' icon='calendar alternate outline' text='Add Event'/>
                    <Dropdown.Divider/>
                    <Dropdown.Item icon='sign-out alternate' text='Log out' onClick={this.onClickLogout} />
                </Dropdown.Menu>
            </Dropdown>
        )
    };
}


export default Menu;