import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
// import React from 'react';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentComponent from './components/ParentComponent';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
    return (
        <div className='App'>
            {/* <ClassCounter /> */}
            {/* <HookCounter /> */}
            {/* <HookCounterTwo /> */}
            {/* <HookCounterThree /> */}
            {/* <HookCounterFour /> */}
            {/* <HookCounterOne /> */}
            {/* <HookMouse /> */}
            {/* <MouseContainer /> */}
            {/* <IntervalHookCounter /> */}
            {/* <DataFetching /> */}
            {/* <UserContext.Provider value={'Dishen'}>
                <ChannelContext.Provider value={'Codevolution'}>
                    <ComponentC />
                </ChannelContext.Provider>
            </UserContext.Provider> */}
            {/* <CounterOne /> */}
            {/* <CounterTwo /> */}
            {/* <DataFetchingTwo /> */}
            <ParentComponent />
        </div>
    );
}

export default App;
