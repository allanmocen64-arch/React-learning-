
function List(props){


        const ListItems = props.items.map(item=><li key={item.id}>
                                            {item.name}:&nbsp;
                                            {item.calories}</li>)

        
       

        const listItems = props.items.map(item=><li key={item.id}>
                                            {item.name}:&nbsp;
                                            {item.calories}</li>)
        return (
            <>
                <h2>{props.category}</h2>
                <ol>{listItems}</ol>
            </>
            );
}
export default List