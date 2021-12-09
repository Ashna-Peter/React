const Home = () => {
    const handelClick = (e) =>{
        console.log('hello ,ninja', e);
    }
    const handelClickAgain = (name, e) =>{
        console.log('hello' + name , e.target);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick = {handelClick}>Click me</button>
            <button onClick={(e) => handelClickAgain('mario' , e)}>Click me again</button>
        </div>
     );
}
 
export default Home;