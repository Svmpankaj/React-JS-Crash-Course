const Home = () => {
    const handleClick = (e) => {
        console.log('hello, ninjas', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello' + name, e.target);
    }

    return (
        <div className="home">
            <h1>Homepage</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('ram', e)}>Click me again</button>
        </div>
    )
}

export default Home
