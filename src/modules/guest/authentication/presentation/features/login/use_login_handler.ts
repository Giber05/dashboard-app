import { message, notification } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../../../core/utils/redux";
import Login from "../../../domain/usecases/login";
import { isAuthLoading, selectAuth, setLoggedInUser } from "../../reducers/auth_reducer";

export type LoginController = {
  isLoadingUser: boolean;
  onFinish: (values: { email: string; password: string; role: string }) => void;
};

function useLoginHandler(): LoginController {
  const dispatch = useAppDispatch();
  const { isLoadingUser } = useSelector(selectAuth);
  const login = new Login();
  const navigate = useNavigate();

  const onFinish = (values: { email: string; password: string; role: string }) => {
    message.loading("Loading ... ");
    dispatch(isAuthLoading(true));
    setTimeout(async () => {
      const resource = await login.execute({ email: values.email, password: values.password, role: values.role });
      dispatch(isAuthLoading(false));

      resource.whenWithResult({
        success: async (value) => {
          dispatch(setLoggedInUser(value.data));
          navigate("/dashboard");
        },
        error: (error) => {
          notification.error({ message: error.exception.message, placement: "topRight", duration: 5 });
        },
      });
    }, 1000);
  };

  return {
    isLoadingUser,
    onFinish,
  };
}

export default useLoginHandler;
