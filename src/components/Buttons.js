import React, {Component} from 'react'

export default class Buttons extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>
            </div>
        )
    }
}