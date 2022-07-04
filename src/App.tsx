import React from 'react';
import ParamEditor from "./components/ParamEditor/ParamEditor";

interface Param {
    id: number
    name: string
    type?: string
}

interface Model {
    paramValues: ParamValue[];
}

interface ParamValue {
    paramId: number
    value: string
}

function App() {

    const params: Param[] = [
        {
            id: 1,
            name: "Назначение"
        },
        {
            id: 2,
            name: "длина"
        },
        {
            id: 2,
            name: "кастомный параметр"
        }
    ]

    const paramValues: ParamValue[] = [
        {
            paramId: 1,
            value: "повседневное"
        },
        {
            paramId: 2,
            value: "максимальная"
        },
        {
            paramId: 3,
            value: "измени меня!"
        },
    ]

    const model: Model = {
        paramValues: paramValues

    }

  return (
    <div>
      <ParamEditor params={params} model={model}/>
    </div>
  );
}

export default App;
