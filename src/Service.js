
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export default function Service() {
  const history=useHistory;
  return (
    <div>
      <div className="jodi">
      <h2 className="status">SERVICE-REQUEST</h2>
      <form>
      CREATED:<input type="radio" name="status"></input>
      <br></br>
      <br></br>
     OPEN:<input type="radio"  name="status"></input>
        <br></br>
        <br></br>
       IN PROCESS:<input type="radio"  name="status"></input>
        <br></br>
        <br></br>
       RELEASED:<input type="radio"  name="status"></input>
        <br></br>
        <br></br>
    CANCELLED:<input type="radio"  name="status"></input>
        <br></br>
        <br></br>
       COMPLETED: <input type="radio"  name="status"></input>
       <br></br>
        <br></br>
       <Button variant="contained" onClick={()=>history.push("/")}>Submit</Button>
      </form>
    </div>
    </div>
  );
}
