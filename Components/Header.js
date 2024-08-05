import Logo from "./Logo";
import LinkTree from "./LinkTree";

const Header = () => {
    return (<div className="flex justify-between border border-orange-500 border-t-0 border-r-0 border-l-0">
        <Logo/>
        <LinkTree />
    </div>);
}

export default Header;