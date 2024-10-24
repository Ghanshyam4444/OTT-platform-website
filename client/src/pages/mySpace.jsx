import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
export const MySpace = () => {
    const { authorization_token } = useAuth();
    const { user } = useAuth();
    const [data, setData] = useState({
        name: "no user",
        phone: "",
        isSubscribed: "false",
    });
    const getUserData = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/auth/myspace", {
                method: "GET",
                headers: {
                    Authorization: authorization_token,
                }
            })
            if (response.ok) {
                const userData = await response.json();
                setData((prevData) => ({
                    ...prevData,
                    ...userData // Assuming userData has fields that match your state
                }));
            }
            else {
                console.log("user data is not coming");
            }

        } catch (error) {
            console.log("some error is coming");
        }
    }
    useEffect(() => {
        getUserData();
    }, [])
    return (
        <>
            <div className="container1">
                <div className="back-img">
                    <div className="user_info p-font">
                        <div>
                            {data.name}
                        </div>
                        <div>
                            {data.phone}
                        </div>
                        <div className="edit_profile">
                            <input type="submit" className="edit_profile_button" variant="contained" color="secondary" value="Edit" />
                        </div>
                    </div>
                    <div className="user_info p-font">
                        <div className="subscribe_now">
                            {data.isSubscribed === "false" ? (
                                <>
                                    <div>
                                        plz Subscribe to see all new movies
                                    </div>
                                    <Link to={`/subscriber_plans/${user._id}`}>
                                        <input type="button" className="subscribe_now_button" variant="contained" color="secondary" value="Subscribe Now" />
                                    </Link>
                                </>
                            ) : (
                                <div>Thank you for subscribing!</div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}