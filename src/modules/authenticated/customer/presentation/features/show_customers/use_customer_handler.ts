import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { CustomerModel } from "../../../data/models/customer_model";
import { DeleteCustomer } from "../../../domain/usecases/delete_customer";
import { GetCustomers } from "../../../domain/usecases/get_customers";
import { selectCustomerAction, setIsActionLoading, setCustomer } from "../../reducers/customer_action_slice";
import { fetchCustomers, selectCustomers, setInitLoading, setIsGetCustomersLoading } from "../../reducers/show_customes_slice";

type CustomersController = {
  initLoading: boolean;
  isGetCustomersLoading: boolean;
  customers: CustomerModel[];
  getCustomers: () => void;
  deleteCustomer: ( customerId: number) => void;
  fetchCurrentCustomer:(customer:any)=>void
  isActionLoading:boolean,

};
function useCustomerHandler(): CustomersController {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const getCustomersUC = new GetCustomers();
  const deleteCustomerUC = new DeleteCustomer();
  const { authUser } = useSelector(selectAuth);
  const {  isActionLoading} = useSelector(selectCustomerAction);
  const { customers, initLoading, isGetCustomersLoading,  } = useSelector(selectCustomers);

  const getCustomers = () => {
    dispatch(setIsGetCustomersLoading(true));
    setTimeout(async () => {
      const resource = await getCustomersUC.execute(authUser?.accessToken!);
      dispatch(setIsGetCustomersLoading(false));
      dispatch(setInitLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchCustomers(value.data.data));
        },
        error: (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };

  const deleteCustomer = (customerId:number) => {
    message.loading("Loading ...")
    dispatch(setIsActionLoading(true));
    setTimeout(async () => {
      const resource = await deleteCustomerUC.execute({ token: authUser?.accessToken!, id: customerId,  });

      dispatch(setIsActionLoading(false));
      resource.whenWithResult({
        success: (value) => {
          message.success(value.data.message, 2);
          navigate(0);
        },
        error: (error) => {
          message.error(error.exception.message, 2);
        },
      });
    });
  };
  const fetchCurrentCustomer=(customer:any)=> {
    dispatch(setCustomer(customer))
  };

  return {
    isGetCustomersLoading,
    customers,
    getCustomers,
    initLoading,
    deleteCustomer,
    fetchCurrentCustomer,
    isActionLoading,
  };
}
export default useCustomerHandler;
