import React ,{useEffect ,useState}from 'react'
import "./Cardpage.css" ;
import { useParams  } from 'react-router-dom';
import CardDetails from '../../components/Modals/CardDetails';

export default function Cardpage() {
    const params = useParams();
    const bucketid = params.pid;
    const bucketname = params.pname;

    const [cards, setcards] = useState();
    useEffect(() => {
    fetch(`http://localhost:8000/cards?bucket_id=${bucketid}`)
    .then(res => {
      return res.json();
    })
    .then( data => {
      setcards(data);
      console.log(data);
    })
    }, [bucketid])

  return (
    <div>
      <CardDetails/>
        <p>this is our bucket id {bucketid} and name {bucketname}</p>
      {
         cards && cards.map((c)=>(
          <div className='card'>
              <p> {c.name} </p>
          </div>
        ))
      }
          
    </div>
  )
}
