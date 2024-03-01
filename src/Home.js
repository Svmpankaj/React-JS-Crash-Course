import { useState } from "react"

const Home = () => {
    // let name = 'ram';
    const [name, setName] = useState('ram');
    const [age, setage] = useState(25);

    const handleClick = () => {
        setName('manoj');
        setage(22);
    }


    return (
        <div className="home">
            <h1>Homepage</h1>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Home
