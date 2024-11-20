import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import Loading from "./components/system/Loading";
import { userAtom, authStatus } from "@/lib/store";
import Home from "./components/system/Home";
import Dashboard from "./components/system/Dashboard";
import NavBar from "./components/system/Navigation";
import Footer from "./components/system/Footer";

function App() {
  const [user, setUser] = useAtom(userAtom);
  const [auth, setAuth] = useAtom(authStatus);
  const [loading, setLoading] = useState(true);

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
          setAuth(false);
        } else {
          setUser(userInfo);
          setAuth(true);
        }
      } else {
        setAuth(false);
      }
      setLoading(false);
    };

    getAuth();
  }, []);

  if (loading) return <Loading />;
  return (
    <>
      {auth ? (
        <>
          <NavBar />
          <Dashboard />
          <Footer />
        </>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
