import React from 'react';
import Title from './Title';
import Photo from './photo';
import Img from './logo.svg'
class Wrapper extends React.Component{
    render(){
        return (
            <>
            <Photo src={Img} />
       <Title title="ghggj" style={{color :'red'}}/>
       <Title title=""  />
       
        </>
        )
        }}


export default Wrapper;