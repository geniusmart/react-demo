import React,{Component} from 'react'

class App extends Component{

    //TODO 几种函数写法的区别
    changeName = ()=>{
        console.log("aaaa")
        this.props.onChange();
    }

    searchName = ()=>{
        //TODO 此处有没有办法复用
        const {onSearch} = this.props
        let name = this.refs.name.value;
        name = name?name:'geniusmart'
        //打印当前名称
        onSearch(name);
    }

    render() {
        const {name} = this.props
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
                    {state.isLoading?'isLoading':''}
                </p>
                <p>
                    {'your project: '}<br/>
                </p>
            </div>
        )
    }
}

export default App