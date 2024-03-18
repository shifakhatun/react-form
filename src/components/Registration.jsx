import { useState } from "react";


const Registration = () => {

    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[isSubmit, setIsSubmit]=useState(false);
    const [ischecked, setChecked]=useState(false);

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!ischecked){
            console.log(alert("try again"));
            return;
        } 
       const  user = {
        Name:name, Email:email, Password: password
       };
       console.log(user);
       setIsSubmit(true);
    };

    
    return (
        <div>
            <div className="h-screen w-full flex justify-center items-center bg-purple-500">
            <form 
            onSubmit={(event)=>handleSubmit(event)}
            action="" className="w-2/3 lg:w-2/5 bg-white rounded p-8 shadow-lg "  > 
            <h1 className="text-4xl mb-6 text-purple-500 text-center">Signup form
            </h1>
            
            <label className="mb-2 text-lg">Name</label>
            <input 
            onChange={(event)=> setName(event.target.value)}
            // onChange={(event)=> console.log(event.target.value)}
            type="text" placeholder="Enter your name"
            className="py-2 px-1 border-2 w-full rounded"
            required
            />

            <label className="mb-2 text-lg">Email</label>
            <input 
            onChange={(event)=> setEmail(event.target.value)}
            type="email" placeholder="Enter your email"
            className="py-2 px-1 border-2 w-full rounded"
            required
            />

            <label className="mb-2 text-lg">Password</label>
            <input 
            onChange={(event)=> setPassword(event.target.value)}
            type="password" placeholder="Enter your password"
            className="py-2 px-1 border-2 w-full rounded"
            required
            />

              <input type="checkbox" onChange={(event)=>setChecked(event.target.checked)} /> do yu agree with terms and condition

            <div className="flex justify-end mt-3">
                <button type="submit" className="bg-purple-500 h-12 w-20 text-xl text-white">
                    SignUp
                    </button>
            </div>
            </form>    

            {
                isSubmit && <div className=" fixed top-0 flex justify-center items-center h-screen w-full bg-purple-500">
                <div className="w-1/2 h-1/2 rounded bg-purple-300 text-center " >
                   <h1 className="text-3xl mb-6 text-purple-500">you have submitted the form successfully
                     </h1>
                     <p className="text-xl">Name: {name} </p>


                </div>
                </div>    
            }        
            </div>
        </div>
    );
};

export default Registration;