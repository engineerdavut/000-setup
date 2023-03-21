import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import GeneratorComponent from './GeneratorComponent';
import GrandParentComponent from './GrandParentComponent';
import ConditionComponent from './ConditionComponent';
import MapComponent from './MapComponent';
import EventComponent from './EventComponent';
import StateComponent from './state/StateComponent';
import { FormComponent } from './FormComponent';
import { TableComponent } from './TableComponent';
import { MapContainerComponent } from './MapContainerComponent';
import { ObjectComponent } from './ObjectComponent';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import BasicPagination from './BasicPagination';
import BasicSpeedDial from './BasicSpeedDial';
import { HolderComponent } from './redux/HolderComponent';
import { Provider } from 'react-redux';
import store from './redux/CoreStore';
import ComboComponent from './advanced/ComboComponent';
import { FormikUse } from './formik/FormikComponent';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
      <PrimarySearchAppBar/>
        <h2>Merhaba Dunya</h2>
        {/*<MyComponent/>*/}
        {/*<GeneratorComponent company="Godoro" department="reactjs"/>*/}
        {/*<GeneratorComponent company="fibiler" department="java"/>*/}
        {/*<GrandParentComponent/>*/}
        <ConditionComponent/>
        <MapComponent/>
        <EventComponent/>
        <StateComponent/>
        <FormComponent/>
        <TableComponent/>
        <MapContainerComponent/>
        <ObjectComponent/>
        <BasicPagination/>
        <BasicSpeedDial/>
        <HolderComponent/>
        <ComboComponent/>

        <FormikUse/>
        

        
      </header>
    </div>
    </Provider>
  );
}

export default App;
