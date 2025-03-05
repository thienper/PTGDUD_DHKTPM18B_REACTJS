

function Item({ id, name, img }) {

    return (
        <>
            <div className="item-box">
                <img src={img} alt={name} />
                <p>{name}</p>
                <span>{id}</span>
            </div>

        </>
    )
}
export default Item;