import Cart from "../Cart/Cart";
const Carts = ({selectCourse}) => {
    return (
        <div className="w-1/4">
            <h3 className="text-3xl">Carts section:{selectCourse.length}</h3>
            {
                selectCourse.map((carts,idx)=><Cart key={idx} idx={idx} cart={carts}></Cart>)
            }
        </div>
    );
};

export default Carts;