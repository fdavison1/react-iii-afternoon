import React, {Component} from 'react'
// import Buttons from './Buttons'

export default class CardInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
                id: 1,
                name: 'Fred',
                place: 'Katy, TX',
                employer:'DevMtn',
                movies: ['movie1','movie2','movie3'],
        }
        // this.state.id = this.state.id.bind(this)
    }
   

    // updateName(){
    //     this.state.name = props.data[]
    // }

    render(){
        return(
        <div>
            <div className="numbers">
                <h2>{`${this.props.data.name.first} ${this.props.data.name.last}`}</h2>
                <h3>{this.props.data.id}/25</h3>
            <div>
                </div>
            </div>
            <div><span>From: </span>{`${this.props.data.city}, ${this.props.data.country}`}</div>
            <div><span>Job Title:</span> {this.props.data.title}</div>
            <div><span>Employer: </span>{this.props.data.employer}</div>
            <br></br>
            <div><span>Favorite Movies:</span>
            <ol>{this.props.data.favoriteMovies.map(movie => (
                <li>{movie}</li>
            ))}</ol>
            </div>
            <div className="buttons">
                <button onClick={()=>this.props.decrease()}>{"< PREVIOUS"}</button>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>New</button>
                </div>
                <button onClick={()=>this.props.increase()}>NEXT ></button>
            </div>
        </div>
        )
    }
}