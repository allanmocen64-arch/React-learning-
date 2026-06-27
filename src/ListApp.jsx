import List from "./List";

    function ListApp(props){
        
        const fruits = [{id:1,name: "Apple",calories: 95},
                        {id:2,name: "Orange",calories: 47},
                        {id:3,name: "Banana",calories: 105},
                        {id:4,name: "Watermelon",calories: 30},
                        {id:5,name: "Mango",calories: 99}];

        const vegetables = [{id:1,name: "Carrot",calories: 25},
                            {id:2,name: "Broccoli",calories: 55},
                            {id:3,name: "Spinach",calories: 23},
                            {id:4,name: "Cauliflower",calories: 25},
                            {id:5,name: "Cabbage",calories: 22}];

        return (<>
                    <List items={fruits} category="Fruits" />
                    <List items={vegetables} category="Vegetables" />
                </>);
    }
    export default ListApp