function ItemList(){
    const listoum = ['Alpha', 'Bravo', 'Charlie'];

    return (
        <ul>
            { listoum.map(elem => <li key={elem}> {elem}</li>)}
        </ul>
    )
}

export default ItemList;