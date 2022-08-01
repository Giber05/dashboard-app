import { message, notification } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { CustomerModel } from "../../../data/models/customer_model";
import { AddCustomer } from "../../../domain/usecases/add_customer";
import { EditCustomer } from "../../../domain/usecases/edit_customer";
import { selectCustomerAction, setIsActionLoading, setIsActionModalVisible } from "../../reducers/customer_action_slice";

export type EditCustomerController = {
  isActionLoading: boolean;
  onFormSubmitted: (values: { name: string; address: string; country: string; phone_number: string; job_title: string; status: boolean }) => void;
  changeCustomerActionModalVisibility: (visible: boolean) => void;
  isActionModalVisible:boolean,
  customer:CustomerModel|null,
};

function useEditCustomerHandler(): EditCustomerController {
  const dispatch = useAppDispatch();
  const { authUser } = useSelector(selectAuth);
  const { isActionLoading,isActionModalVisible, customer } = useSelector(selectCustomerAction);
  const editCustomerUC = new EditCustomer();
  const navigate = useNavigate();
  

  const onFormSubmitted = (values: { name: string; address: string; country: string; phone_number: string; job_title: string; status: boolean }) => {
    message.loading("Loading ...");
    dispatch(setIsActionLoading(true));
    setTimeout(async () => {
      const resource = await editCustomerUC.execute({ token: authUser?.accessToken!,id:customer?.id!, name: values.name, address: values.address, country: values.country, status: values.status, jobTitle: values.job_title, phoneNumber: values.phone_number });
      dispatch(setIsActionLoading(false));

      resource.whenWithResult({
        success: async (value) => {
    message.success(value.data.message);

          navigate("/customer");
        },
        error: (error) => {
          message.error(error.exception.message);

        },
      });
    }, 1000);
  };

  const changeCustomerActionModalVisibility = (visible: boolean) => {
    dispatch(setIsActionModalVisible(visible));
  };
  return {
    isActionLoading,
    onFormSubmitted,
    changeCustomerActionModalVisibility,
    isActionModalVisible,
    customer,
  };
}

export default useEditCustomerHandler;
