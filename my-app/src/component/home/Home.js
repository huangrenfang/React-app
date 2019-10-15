import React, { Component } from 'react';

class Home extends Component {
    state = {
        data: ['1','2','3'],
        imgHeight: 176
    }
    componentDidMount(){
        fetch('https://bird.ioliu.cn/netease/song?id=222222',{
            method:"GET"
        }).then((res)=>{
            return res.json()
        }).catch((err)=>{
            console.log(err,"2")
        }).then((res)=>{
            console.log(res)
        })
        
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Home;