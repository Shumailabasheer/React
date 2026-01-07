
import Button from './props/Button';

function App() {
  return (
 <>
 
 <Button text="View Details"/>
  <Button text="Signup" icon="fa-solid fa-user" iconBg={true}/>
   <Button text="Edit" icon="fa-solid fa-pencil" />
    <Button text="Delete" icon="fa-solid fa-trash" iconBg={true} />

 </>


  );
}

export default App;
