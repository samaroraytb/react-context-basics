import CounterContext from '../context/CounterContext';

const  DisplayCount = ()  => {
  return (
    <CounterContext.Consumer>
        {value => {
            const {count, onClickIncrease} = value
            console.log(count)

            return(
                <>
                <h1>Increase the Count</h1>
                <button type="button" onClick={onClickIncrease}>
                    Increase
                </button>
                <p>Count: {count}</p>
                </>
            )
        }}
    </CounterContext.Consumer>
  )
}

export default DisplayCount