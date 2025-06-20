
import './App.css'

function App() {

  function handleClick(){
    alert("I am clicked");
  }

  function handleMouseOver(){
    alert("para k uper mouse lekar aaye ho...")
  }
  function handleInputChange(e){
    console.log("value till now: ", e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("form submit kardu kya!!");
  }

  return (
    <div>


    <button inClick={() => alert("Button click hua h")}>
      Click me
    </button>
      
    {/* <form>
      <input type="text" onChange={handleInputChange}></input>
      <button type="submit">Submit</button>
    </form>
 */}

      {/* <p onMouseOver={handleMouseOver}>
        i am a para.
      </p>
      <button onClick={handleClick}>
        Click me
      </button> */}
    </div>
  )
}

export default App
