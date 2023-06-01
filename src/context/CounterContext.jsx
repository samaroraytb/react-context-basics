import React from 'react'

const CounterContext = React.createContext({
    count: 0,
    onClickIncrease: () => {},
})

export default CounterContext