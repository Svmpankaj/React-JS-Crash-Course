import { useState } from "react";

const Home = () => {
    // let name = 'ram';
    const [name, setName] = useState('Ram');
    const [age, setAge] = useState(22);

    const handleClick = () => {
        setName('Munda')
        setAge(25);
    }

    return (
        <div className="home">
            <h2>homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Home
