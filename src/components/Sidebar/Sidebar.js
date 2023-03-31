import React ,{useState , useEffect }from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';
import { Button,IconButton } from '@chakra-ui/react'
import { AddIcon} from '@chakra-ui/icons'
import { ChakraProvider } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

export default function Sidebar() {

  const [buckets , setBuckets] = useState(null);
  const [bname , setBname] = useState(null);

  //get api  to get all bucket name

  useEffect(() => {
     fetch('http://localhost:8000/buckets')
      .then (res => {
        return res.json();
     })
      .then(data => {
         setBuckets(data);
         console.log(data);
     });
  }, []);

 //post api to add any new bucket

  const handlesubmit = (e)=> {
   e.preventDefault();
   const body ={name : bname};
   fetch('http://localhost:8000/buckets' ,{
      method : "POST" ,
      headers : {"Content-type" :   "application/json"},
      body : JSON.stringify(body),

   })
   .then(()=> {
      alert('bucket added');
      window.location.reload();
   })
  }
  


  return (

        <div className='mainside'>
            
            {buckets && buckets.map((b) => (
               <Link style={{textDecoration : "none"}} to ={"/"+ b.id + "/" + b.name}> 
               <div className='bucket'>
                 <p>{b.name}</p>
               </div> 
               </Link>

            ))}
           <Input 
           value={bname}
           onChange={(e) =>setBname(e.target.value)}
           style={{color : "whitesmoke"}}
           variant='flushed' placeholder='bucket name' />

            <Button onClick={(e) => handlesubmit(e)}
            >ADD
            </Button>
            <IconButton aria-label='Add to friends' icon={<AddIcon />} />
           
                                  
        </div>
  )
}
