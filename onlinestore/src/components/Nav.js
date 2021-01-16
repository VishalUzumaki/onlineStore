import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
export default function navigation(){

return (

<>

     <div style={{float:'right',paddingRight:'20px',paddingTop:'5px'}}>
      <Button variant="outline-primary"> <Link to={"/"} > Home </Link></Button>{' '}

      <Button variant="outline-primary" > <Link to={"/store"}> Store </Link> </Button> {''}

      <Button variant="outline-primary"> <Link to={"/cart"}> Cart </Link> </Button> {''}

     </div>

</>
)


}
