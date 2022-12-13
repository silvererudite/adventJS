const menuItems = [
    {
        name: "French Fries with Ketchup",
        price: 223,
        image: "plate__french-fries.png",
        alt: "French Fries",
        count: 0,
    },
    {
        name: "Salmon and Vegetables",
        price: 512,
        image: "plate__salmon-vegetables.png",
        alt: "Salmon and Vegetables",
        count: 0,
    },
    {
        name: "Spaghetti Meat Sauce",
        price: 782,
        image: "plate__spaghetti-meat-sauce.png",
        alt: "Spaghetti with Meat Sauce",
        count: 0,
    },
    {
        name: "Bacon, Eggs, and Toast",
        price: 599,
        image: "plate__bacon-eggs.png",
        alt: "Bacon, Eggs, and Toast",
        count: 0,
    },
    {
        name: "Chicken Salad with Parmesan",
        price: 698,
        image: "plate__chicken-salad.png",
        alt: "Chicken Salad with Parmesan",
        count: 0,
    },
    {
        name: "Fish Sticks and Fries",
        price: 634,
        image: "plate__fish-sticks-fries.png",
        alt: "Fish Sticks and Fries",
        count: 0,
    },
];

const ecomList = document.getElementById("food-list");

function MenuPlates(props) {
    const [hasAdded, addCart] = React.useState(false);
    const [buttonText, setButtonText] = React.useState("Add to Cart");
    const checkMark = <img src="images/check.svg" alt="Check" />;
    function handleClick(e) {
        addCart((hasAdded) => !hasAdded);
    }
    React.useEffect(() => {
        if (hasAdded) {
            setButtonText("In Cart");
        } else {
            setButtonText("Add to Cart");
        }
    }, [hasAdded]);

    return (
        <li>
            <div className="plate">
                <img src={props.image} alt={props.alt} className="plate" />
            </div>
            <div className="content">
                <p className="menu-item">{props.menu}</p>
                <p className="price">${props.price}</p>
                <button
                    className={hasAdded ? "in-cart" : "add"}
                    onClick={handleClick}
                >
                    {hasAdded && checkMark}
                    {buttonText}
                </button>
            </div>
        </li>
    );
}

ReactDOM.render(
    menuItems.map((x) => (
        <MenuPlates
            menu={x.name}
            price={x.price}
            image={"images/" + x.image}
            alt={x.alt}
        />
    )),
    ecomList
);
