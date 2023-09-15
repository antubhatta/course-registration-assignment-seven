
const Cart = ({cart,idx}) => {
    const {title}=cart;
    return (
        <div>
            <h1>{idx+1} {title}</h1>
        </div>
    );
};

export default Cart;