

const Watch = ({watch}) => {
    const {name,price}=watch
    return (
        <div>
            <h2>Watches</h2>
            <p>Watch: {watch.name}</p>
            <p>Price: {watch.price}</p>
        </div>
    );
};

export default Watch;