// import { useCreateMyUser } from "@/api/MyUserApi";
import {Auth0Provider} from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

type Props ={
    children:React.ReactNode;

}
const AuthProviderWithNavigate= ({children}:Props)=>{
    
    const navigate =useNavigate()
    // const {getAccessTokenSilently}=useAuth0();
    const domain =import.meta.env.VITE_AUTH0_DOMAIN;
    const clientID =import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri =import.meta.env.VITE_AUTH0_CALLBACK_URL;
    const audience =import.meta.env.VITE_AUTH0_AUDIENCE;

    if(!domain || !clientID || !redirectUri || !audience){
        throw new Error ("Unable to initialise auth");
    }

    const onRedirectCallback =async()=>{
        // const token=await getAccessTokenSilently()
        // console.log("token",token)
        navigate("/auth-callback")
    }
    return(
        <Auth0Provider
        domain={domain} 
        clientId={clientID} 
        authorizationParams={{
            redirect_uri:redirectUri,
            audience,
            }} 
        onRedirectCallback={onRedirectCallback}>
            {children}

        </Auth0Provider>
    )
}

export default AuthProviderWithNavigate;