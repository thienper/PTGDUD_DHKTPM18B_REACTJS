import face from "../assets/face.png";

function Info() {
    return (
        <>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-2">
                    <img src={face} alt="" />
                </div>

                <div className=" col-sm-12 col-md-6 col-lg-10">
                    <div className="row">
                        <div className="col-12">
                            <div className="font-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusantium sapiente ab corporis dolorum non culpa expedita alias minus! Fugit maxime non facere nihil ratione, eligendi hic sit ea quia!</div>
                        </div>

                        <div className="col-12">
                            <div className="row">
                                <div className="col-3"><button>6.5k subscribse</button></div>
                                <div className="col-2"><button>Share</button></div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Info;