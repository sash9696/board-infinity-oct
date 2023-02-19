import './Counter.css'
import { useEffect, useState } from "react"


function Counter() {

    const [count, setCount] = useState(0)
    const [state, setState] = useState(false)

    // console.log(state)


    //Case 1 => When you are passing an empty dependency array
    //useffect will only run once , when the component mounts

    // useEffect(function () {
    //     console.log('useeffect rendered')
    // }, [])

    //Case 2 => When we are passing something in the dependency array

    //useffect will only  when the component mounts and also when the value in dependency array changes
    // useEffect(function () {
    //     console.log('useEffect Rendered')
    // }, [state, count])

    // console.log('Counter rendered')

    //Case 3 => when you are using a return function inside useEffect

    useEffect(function () {
        console.log('useeffect rendered')

        // window.addEventListener('click', function () { })

        return () => {
            // window.removeEventListener('click', function () { })
            console.log('component unmounts')
        }// cleanup function 
    }, [])




    return (
        <div className='counter'>
            <h1>Counter: {count}</h1>
            <div>
                <button onClick={() => setCount(count + 1)} >increment</button>
                <button onClick={() => setCount(count - 1)}>decrement</button>
            </div>
            <div>
                <button onClick={() => setState(!state)}>Toggle State</button>
            </div>

        </div>
    )
}

export default Counter