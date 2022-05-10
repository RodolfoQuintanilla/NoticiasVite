import { useContext } from "react";
import NoticiasContext from "../context/NotificasionProvider";

const useNoticias = () => {
   return useContext(NoticiasContext)
}

export default useNoticias;