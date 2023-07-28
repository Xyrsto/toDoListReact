import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TopBar extends Component {
    state = { loggedUser: ''}

    componentDidMount(){
        
    }

    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark bg-gradient d-flex shadow">
                    <div class="row w-100">
                        <div class="col align-self-center">
                            <Link to = '/' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">ShowSpot</span></Link>
                        </div>
                        <div class="col-2 text-end small align-self-center">
                                {this.state.loggedUser == '' 
                                ?
                                    <div class="row justify-content-end">
                                        <div class="col-4 p-2 m-1 small">
                                            {window.location.href.includes('login') 
                                                ?
                                                <Link to = '/login' style={{ textDecoration: 'none', color: 'red', borderBottom: '1px solid red'}}><span class = "activePage">Login</span></Link>
                                                :
                                                <Link to = '/login' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">Login</span></Link>
                                            }
                                        </div>
                                        <div class="col-4 p-2 m-1 small border-start">
                                            {window.location.href.includes('register') 
                                            ?
                                            <Link to = '/register' style={{ textDecoration: 'none', color: 'red', borderBottom: '1px solid red'}}><span class = "activePage">Registar</span></Link>
                                            :
                                            <Link to = '/register' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">Registar</span></Link>
                                            }
                                        </div>
                                    </div>
                                :
                                <div class="row justify-content-end">
                                    <div class="col-6 p-2 m-1 small">
                                    {window.location.href.includes('userpage')
                                        ?
                                        <Link to = '/userpage' style={{ textDecoration: 'none', color: 'red', borderBottom: '1px solid'}}><span class = "activePage">{this.state.loggedUser}</span></Link>
                                        :
                                        <Link to = '/userpage' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">{this.state.loggedUser}</span></Link>
                                        }
                                        
                                    </div>
                                    <div class="col-4 p-2 m-1 small border-start">
                                        {window.location.href.includes('library') 
                                        ?
                                        <Link to = '/library' style={{ textDecoration: 'none', color: 'red', borderBottom: '1px solid red'}}><span class = "activePage">Biblioteca</span></Link>
                                        :
                                        <Link to = '/library' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">Biblioteca</span></Link>
                                        }
                                    </div>    
                                </div>
                                }              
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}
export default TopBar;