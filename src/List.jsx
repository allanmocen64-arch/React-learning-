
function List(props){


        const ListItems = props.items.map(item=><li key={item.id}>
                                            {item.name}:&nbsp;
                                            {item.calories}</li>)

        
       

        const listItems = props.items.map(item=><li key={item.id}>
                                            {item.name}:&nbsp;
                                            {item.calories}</li>)
        return (
            <>
                <h2 className="list-category">{props.category}</h2>
                <ol className="list-items">{listItems}</ol>
            </>
            );
}
export default List