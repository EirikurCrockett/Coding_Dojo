import React, { Component } from 'react';

class PersonCard extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    birthday = () => {
        this.setState({ age: this.state.age + 1})
    }

    render()
    {
        return(
            
            <div className="card">
                <h3>
                    {this.props.lastName}, {this.props.firstName}
                </h3>
                <p>
                    Age: {this.state.age}
                </p>
                <p>
                    Hair Color: {this.props.hairColor}
                </p>
                <button className="button" onClick={this.birthday}>
                    Happy Birthday!
                </button>
            </div>

        )
    }
}

export default PersonCard;