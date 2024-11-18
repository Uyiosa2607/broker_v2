/* eslint-disable react/prop-types */
import { supabase } from "./supabase";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { authStatus, userAtom } from "@/lib/store";
import { useEffect } from "react";

function PrivateRoute({ component: Component }) {
  const [auth, setAuth] = useAtom(authStatus);
  const [user, setUser] = useAtom(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const getAuth = async () => {
      const getAuthStatus = await supabase.auth.getUser();
      if (getAuthStatus.data.user) {
        const getUser = await supabase
          .from("Users")
          .select("*")
          .eq("id", getAuthStatus.data.user.id)
          .single();

        if (getUser.error) {
          console.error("Error fetching user info:", getUser.error);
          setAuth(false);
        } else {
          setUser(getUser.data);
          setAuth(true);
        }
        setAuth(true);
      } else {
        setAuth(false);
        navigate("/login");
      }
    };

    getAuth();
  }, [setUser, navigate, setAuth]);

  return auth ? <Component /> : null;
}

export default PrivateRoute;
