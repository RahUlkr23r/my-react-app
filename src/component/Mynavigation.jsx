import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Mynavigation() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Use state

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login"); // Redirect to login if not logged in
        }
    }, [isLoggedIn, navigate]);

    return (
        <div>
            <br /><br /><br /><br /><br /><br /><br />
            <h1>Welcome to MyNavigation</h1>
        </div>
    );
}

export default Mynavigation;
