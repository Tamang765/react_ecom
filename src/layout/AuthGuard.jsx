import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/slice/authSlice";
import { getOrderItem } from "../redux/slice/orderItemSlice";
import { setToken } from "../utils/axios";

const AuthGuard = ({ children }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // const user = useSelector((state) => state.auth.singleUser);
  useEffect(() => {
    if (token ) {
      setToken(token);
      dispatch(getUser());          dispatch(getOrderItem())

    }
  }, [token, dispatch]);


  return <>{children}</>;
};

export default AuthGuard;
