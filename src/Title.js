import React from 'react';

class Title extends React.Component{
    render(){
      

        return (
            <>
        <h1 style={this.props.style}>{this.props.title}</h1>
        
        
        </>
        )
        }}


export default Title;