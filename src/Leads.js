import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';


export default function Leads() {
  const history=useHistory;
  return (
    <div className="jodi">
      <h2 className="status">Lead status</h2>
      <form>
      NEW:<input type="radio" name="status"></input>
      <br></br>
      <br></br>
       CONTACTED:<input type="radio"  name="status"></input>
        <br></br>
        <br></br>
       QUALIFIED:<input type="radio"  name="status"></input>
        <br></br>
        <br></br>
       LOST:<input type="radio"  name="status"></input>
        <br></br>
        <br></br>
      CANCELLED:<input type="radio"  name="status"></input>
        <br></br>
        <br></br>
       CONFIRMED:<input type="radio"  name="status"></input>
       <br></br>
        <br></br>
       <Button variant="contained" onClick={()=>history.push("/")}>Submit</Button>
      </form>
    </div>
  );
}
