import Logo from "./Logo";
import LinkTree from "./LinkTree";
import { UserContext } from "../Utils/UserContext";

const Header = () => {
    return (
        <>
        <UserContext.Provider value="Bhuvan">
            <div className="flex justify-between border border-orange-500 border-t-0 border-r-0 border-l-0">
                <Logo/>
                <LinkTree />
            </div>
        </UserContext.Provider>
        </>
    );
}

export default Header;