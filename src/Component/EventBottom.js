import React, { Component } from 'react';
import {Grid, Segment, Button, Header, Divider} from 'semantic-ui-react';


class EventBottom extends Component {
    render () {
        return (
            <Segment>
            <Grid columns={2} relaxed='very' style={{backgroundColor:"rgb(255, 230, 255)"}}>
                <Grid.Column>
                <Header size='medium' textAlign='center'>Event Description</Header>
                <p>{this.props.description}</p>
                </Grid.Column>

                <Grid.Column>
                    <Header size='medium' textAlign='center'>Location</Header>
                    <iframe src={this.props.map} style={{width:'33vw', height:'32vw'}}/>               
                    <Header size='medium' textAlign='center'>Share Event</Header>
                    <Grid columns='divided' columns={3}>
                    <Grid.Column width={5}>
                        <Button 
                        size='mini'
                        color='twitter'
                        icon='twitter'
                        content='Twitter'
                        />
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Button 
                        size='mini'
                        color='facebook'
                        icon='facebook'
                        content='Facebook'
                        />
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Button 
                        size='mini'
                        color='grey'
                        icon='paperclip'
                        content='Copy Link'
                        />
                    </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <Divider vertical/>
            </Segment>
        )
    };
}

export default EventBottom;