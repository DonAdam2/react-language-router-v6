import { useDispatch, useSelector } from 'react-redux';
//selectors
import { getTestAction } from '@/ts/store/app/selectors/AppSelectors';
//actions
import { setTestAction } from '@/ts/store/app/actions/AppActions';
//state
import { State } from '@/ts/store/rootReducer';

const TestComponent = () => {
  const dispatch = useDispatch(),
    testAction = useSelector((state: State) => getTestAction(state));

  return (
    <div className="container">
      <p>
        Current environment API is <strong>{process.env.BASE_URL}</strong>
      </p>
      <p>
        Testing the store <strong>{testAction}</strong>
      </p>
      <button onClick={() => dispatch(setTestAction())}>Change text</button>
    </div>
  );
};

export default TestComponent;
