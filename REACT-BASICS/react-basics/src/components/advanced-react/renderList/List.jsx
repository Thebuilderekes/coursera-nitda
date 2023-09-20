
export default function List(props){


  const lowCaloriesDesserts = props.data.filter((dessert)=>{
   return dessert.calories < 500
  }).sort((a, b)=>{return a.calories - b.calories}).map((dessert) =>{
    return <li key = {dessert.name}>{dessert.name} - {dessert.calories} cal </li>
  });

  return (
    <div>
         <ul>
    {lowCaloriesDesserts}
        </ul>
    </div>
  )
}
