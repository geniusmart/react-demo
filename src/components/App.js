import React, { Component } from 'react'
import { connect } from 'react-redux'
import {change,search} from '../actions'

class App extends Component{

    changeName = ()=>{
        console.log("aaaa")
        this.props.dispatch(change());

    }

    searchName = ()=>{
        //TODO 此处有没有办法复用
        let name = this.refs.name.value;
        name = name?name:'geniusmart'
        this.props.dispatch(search(name));
    }

    render() {
        const {name,isLoading,datas} = this.props
        return (
            <div>
                <p>
                    {'your name:  '}{name}{'  '}
                    <button onClick={this.changeName}>change</button>
                </p>
                <p>
                    <input type="text" ref="name"/>
                    {'  '}
                    <button onClick={this.searchName}>search</button>
                    {isLoading?'isLoading':''}
                </p>
                <p>
                    {'your project: '}<br/>
                    <ul>
                        {datas.map((post, i) =>
                            <li key={i}>{post.name}</li>
                        )}
                    </ul>
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        name : state.name,
        isLoading : state.isLoading,
        datas:state.datas
    }
}

//const mapDispatchToProps = ( TODO:作用


export default connect(mapStateToProps)(App)


//TODO 1.对象里成员函数的写法区别 2.dispacth如果没有传递到ui组件要如何处理