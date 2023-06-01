import { Component } from "react"
import CounterContext from "./context/CounterContext"
import DisplayCount from './components/DisplayCount'

class App extends Component{
  state = {count : 0}

  onClickIncrease = () => {
    this.setState((prevState) => ({count: prevState.count + 1}))
  }
  
render(){
  const {count} = this.state
  return (
    <CounterContext.Provider value={{onClickIncrease: this.onClickIncrease, count}}>
      <DisplayCount />
    </CounterContext.Provider>
  )}
}

export default App
//if not provide all the values in provider then value would be undefined for components.
// if I not provide value in the object then undefined will be logged in when user click on Increase Count button.

