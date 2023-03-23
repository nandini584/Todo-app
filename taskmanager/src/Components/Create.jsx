import '../App.css'
export default function Create({setinputtxt, todo, settodo, inputtxt}){
    function handlecreatechange(e){
          return setinputtxt(e.target.value)
    }
    const submit = (e)=> {
     e.preventDefault();
        settodo([
            ...todo, 
            {text : inputtxt, completed: false, id: Math.random() * 1000}
        ])
        setinputtxt("");

    }
    return(<header>
        <div>
            <h1 className="heading">
            Ready to Conquer?

            </h1>
           
        </div>

    <form action="">
        <input type="text" value={inputtxt}
        placeholder="Enter Task of the day" className="create--task" onChange={handlecreatechange}/>
        <button className="create" onClick={submit} > 
            Create
        </button>
    </form>
    </header>);
}