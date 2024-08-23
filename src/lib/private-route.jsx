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
      const getAuthStatus = await supabase.auth.getSession();
      if (getAuthStatus.data.session) {
        const { data: userInfo, error } = await supabase
          .from("Users")
          .select("*")
          .eq("id", getAuthStatus.data.session.user.id)
          .single();

        if (error) {
          console.error("Error fetching user info:", error);
          setUser(userInfo);
          setAuth(false);
        } else {
          setUser(userInfo);
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
