import UseEffectHook from './hooks/useEffectHook';
import UseMemoHook from './hooks/UseMemoHook';
import { UseStateHook } from './hooks/useStateHook';

export default function App() {
    return (
        <>
            <h1>Hello</h1>
            {/* <UseStateHook /> */}
            {/* <UseEffectHook/> */}
            <UseMemoHook></UseMemoHook>
        </>
    );
}
