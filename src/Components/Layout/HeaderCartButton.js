import Classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
const HeaderCartButton = () => {
    return (
        <button className={Classes.button}>
            <span className={Classes.icon}><CartIcon  /></span>
            <span>Your Cart</span>
            <span className={Classes.badge}>0</span>
        </button>
    )
}

export default HeaderCartButton;