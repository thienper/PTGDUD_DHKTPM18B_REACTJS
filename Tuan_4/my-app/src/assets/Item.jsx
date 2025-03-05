

function Item({ id, name, img }) {

    return (
        <>
            <img src={img} alt="" />
            <p> {name}</p>
            <span>{id}</span>

        </>
    )
}
export default Item;