import { createContext, useContext, useEffect, useState} from "react";
export const AuthContext=createContext();
export const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [MovieDetails,setMovieDetails]=useState([]);
    const [WebSeries,setWebSeries]=useState([]);
    const authorization_token=`Bearer ${token}`;

    const storeTokenInLS=(servertoken)=>{
        setToken(servertoken);
        return localStorage.setItem("token",servertoken);
    }
    const logout_user=()=>{
        setToken("");
        setUser("");
        return localStorage.removeItem("token");
    }



    const getAllWebSeries=async()=>{
        try {
            const response=await fetch("http://localhost:8000/api/content/webseries",{
                method:"GET",
            })
            if(response.ok)
            {
                const data=await response.json();
                setWebSeries(data);
                console.log("success");
            }
            else
            {
                console.log("error");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getAllMovies = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/content/movies", {
                method: "GET",
            })
            if (response.ok) {
                const movie_data = await response.json();
                setMovieDetails(movie_data);
            }
            else {
                console.log("some error is coming")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: authorization_token,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
            } else {
                console.error("Error fetching user data");
            }
        } catch (error) {
            console.error("Error fetching user data")
        }
    }


    let isLoggedIn=!!token;
    let isAdmin=user.isAdmin;
    let isSubscriber=user.isSubscriber;

    useEffect(() => {
        if (isLoggedIn) {
            userAuthentication();
            getAllMovies();
            getAllWebSeries();
        }
    }, [isLoggedIn])
    
    return(
    <AuthContext.Provider value={{token,authorization_token,storeTokenInLS,logout_user,isLoggedIn,user,isAdmin,isSubscriber,MovieDetails,WebSeries}}>
        {children}
    </AuthContext.Provider>
    )
}







export const useAuth=()=>{
    const AuthContextvalue=useContext(AuthContext);
    if(!AuthContextvalue)
    {
        throw new Error("useAuth used outside of the provider");
    }
    return AuthContextvalue;
}
