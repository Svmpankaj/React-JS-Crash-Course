

const Home = () => {

    const handleClick = () => {
        console.log('hello, ninjas');
    }

    const handleClickAgain = (name) => {
        console.log('click me again', name);
    }

    return (
        <div className="home">
            <h2>homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('ram')}>Click me again</button>
        </div>
    )
}

export default Home
