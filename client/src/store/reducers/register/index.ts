import { RegisterState } from '../../types/State';
import { RegisterAction } from '../../actions/register/actionCreators';
import { RegisterActionName } from '../../actions/register/RegisterActionName';
import { initialRegisterState } from './constants';

export const registerReducer = (state: RegisterState = initialRegisterState, action: RegisterAction): RegisterState => {
  switch (action.type) {
    case RegisterActionName.RegisterPending:
      return {
        ...state,
        isRegistered: false,
        isRegisterPending: true,
        isError: false,
        error: '',
      };
    case RegisterActionName.RegisterReject:
      return {
        ...state,
        isRegistered: false,
        isRegisterPending: false,
        isError: true,
        error: action.error,
      };
    case RegisterActionName.RegisterSuccess:
      return {
        ...state,
        isRegistered: true,
        isRegisterPending: false,
        isError: false,
        error: '',
      };
    case RegisterActionName.RegisterClearState:
      return {
        ...state,
        isRegistered: false,
        isRegisterPending: false,
        isError: false,
        error: '',
      };
    default:
      return state;
  }
};
