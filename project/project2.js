


function App(){
    const [inputarr,SetInputarr]=useState([])

    const [inputdata,SetInputdata]=useState({
        Name:"",
        RollNo:""
    });

 function changehandle(e){
       SetInputdata({...inputdata,
        [e.target.name]:e.target.value
    });
    
  }  

  let {Name,RollNo}=inputdata;
function changehandle(){
    SetInputarr([...inputarr,])
   
    console.log(inputdata,"input data what we enter")
    SetInputdata({Name:"",RollNo:""})
}
function changehandle2(){
    console.log("object store in arrray",inputarr)
}

    return(
        <div classname = "App">
            <input type="text" autoComplete="off" name='Name' value={inputdata.Name} onchange={changehandle}/>
            <input type="text" autoComplete="off" name='RollNo' value={inputdata.RollNo} onchange={changehandle}/>
        </div>
    );

}

export default App;