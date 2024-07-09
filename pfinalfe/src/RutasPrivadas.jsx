/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const RutasPrivadas = ({ route }) => {
    const { auth } = useContext(AuthContext);
    return auth ? route : <Navigate to="/login"/>
};

export default RutasPrivadas