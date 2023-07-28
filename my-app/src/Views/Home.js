import React, { Component } from 'react';
import TopBar from './TopBar.js';
import {Link} from 'react-router-dom';

class Home extends Component {
    state = { loggedUser: ''}

    componentDidMount(){
        
    }


    render(){
        return(
            <div>
                <div class = "fixed-top container-fluid  p-0" style={{maxHeight:"100%", overflowY: 'auto', overflowX: 'hidden'}}>
                    <TopBar/> 
                </div>             
            </div>
        )
    }
}
export default Home;