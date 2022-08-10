import { useDispatch, useSelector } from '@services/helpers/store.helper';
import { setTestValue } from '@services/store/test';

export const useTestState = () => {
  const { value: name } = useSelector((state) => state.test);

  const dispatch = useDispatch();

  const onChange = (value: string) => {
    dispatch(setTestValue(value));
  };

  return {
    name,
    onChange,
  };
};
