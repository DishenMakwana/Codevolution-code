import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import LifeCycle from './components/LifeCycleA';
import FragementDemo from './components/FragementDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FPParentInput from './components/FPParentInput';

class App extends Component {
    render() {
        return (
            <div className='App'>
                {/* <Hello /> */}
                {/* <Greet name='Bruce' heroName='Batman'> */}
                {/* <p>This is children props</p> */}
                {/* </Greet> */}
                {/* <Greet name='Clark' heroName='Superman'> */}
                {/* <button>Action</button> */}
                {/* </Greet> */}
                {/* <Greet name='Diana' heroName='Wonder Woman' /> */}
                {/* <Welcome name='Bruce' heroName='Batman' /> */}
                {/* <Welcome name='Clark' heroName='Superman' /> */}
                {/* <Welcome name='Diana' heroName='Wonder Woman' /> */}
                {/* <Message message='Welcome Visitor' /> */}
                {/* <Message message='Welcome Guest' /> */}
                {/* <Counter /> */}
                {/* <FunctionClick /> */}
                {/* <ClassClick /> */}
                {/* <EventBind /> */}
                {/* <ParentComponent /> */}
                {/* <UserGreeting /> */}
                {/* <NameList /> */}
                {/* <Stylesheets primary={true} /> */}
                {/* <LifeCycle /> */}
                {/* <FragementDemo /> */}
                {/* <Table /> */}
                {/* <ParentComp /> */}
                {/* <RefsDemo /> */}
                {/* <FocusInput /> */}
                {/* <FPParentInput /> */}
            </div>
        );
    }
}

export default App;
