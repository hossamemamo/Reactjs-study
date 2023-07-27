import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

function CounterPage({initialCount}){
    const {count ,Increment} = useCounter(initialCount);
    return <div>
        <h1>
            Count is {count}
            <Button onClick={Increment}>
                Increment
            </Button>
        </h1>
    </div>
}

export default CounterPage;