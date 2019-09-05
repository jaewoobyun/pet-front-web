import React, {Component} from 'react';
import Zoom from 'react-reveal/Zoom'
// var Zoom = require('react-reveal/Zoom') //와 같다

class App extends Component {

  //LifeCycle
  constructor(props) {
    super(props)
    this.state={
      // testString: "테스트 페이지",
      data: []
    }
    // console.log(this.state.data)
  }

  //LifeCycle
  // componentDidMount() {
  //   // this.setState({
  //   //   testString: "변화된 페이지",
  //   //   data: []
  //   // })
  //   // console.log(this.state.data)
  //   this.getData
  //   // this.setState({
  //   //   testString: "변화된 페이지",
  //   //   data: this.getData
  //   // })
  // }

  getData =(event)=> {
    event.preventDefault()
    fetch('http://localhost:3000/data')
    .then(res => res.json())
    .then(resData => {
      console.log(resData)
      this.setState({
        // data:resData
        name: resData[0].name,
        age: resData[0].age
      })
      // console.log(resData)
    })
  }

  postData =(event)=>{
    event.preventDefault()
    fetch('http://localhost:3000/data')
    .then()

  }

  //LifeCycle
  render(){
    return(
      //react 는 항상 div tag 로 감싸줘야된다.
      <div>
        <Zoom>
          <center>
            <h1>React Reveal My Dog List MySql</h1>
          </center>
        </Zoom>
        <form style={{flexDirection: 'column'}}>
          <center>
            <input 
              type = 'text'
              id = "name"
              placeholder = "이름"
              // ref = {(name)=>{this.input.name}}
            />
            <input 
              type = 'text'
              id = "age"
              placeholder = "나이"
              // ref = {(age)=>{this.input.age}}
            />
            <button 
            style = {{ width:'100px'}}
            onClick={this.postData.bind(this)}
            >강아지 등록</button>
            <button 
            style = {{ width:'100px'}}
            onClick={this.getData.bind(this)}
            >강아지 조회</button>
          </center>
        </form>
        {/* <p>{this.state.testString}</p>
        <p>{this.state.data}</p> */}

        <Zoom>
          <span>{this.state.name} 의 나이는 {this.state.age} </span>
          <p>awefoajwefoajwo</p>
        </Zoom>
      </div>
    )
  }
}

export default App;
