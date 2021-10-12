import Classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import mealsimg from './meals.jpg';
const Header = () => {
    return (
        <div>
        <header className={Classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton />
        </header>
        <div className={Classes["main-image"]}>
        <img src={mealsimg} alt="food"/>
        </div>
        </div>
    )
}

export default Header;