import Practice from "./prac";
function App() {

  const username = "chai aur code"
  return (
    // //here <> is a fragment as jsx needs to return a single element we return this within many elements.
    // <>
    // <Practice/>/* funtion name*/
    // <h1>HELLO</h1>
    // <p>Test para</p>
    // </>


    <>
    <Chai/>
    <h1>chai aur react {username}</h1>
    <p>test para</p>
   </>
   //here {username} is EVALUATED EXPRESSION means this will give the final output of the expression we cant use if else or something just the final answer
  )
  
}

export default App
