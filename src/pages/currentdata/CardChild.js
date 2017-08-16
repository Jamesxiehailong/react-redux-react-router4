import React from 'react';
import Card from '../../components/card/Card';
import TitleCard from '../../components/titlecard/TitleCard';

export default class CardChild extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let {name}=this.props;
        return(
            <Card>
                <TitleCard txt={name}> 
                <p>氨氮：</p> 
                </TitleCard>
            </Card>
        )
    }
}