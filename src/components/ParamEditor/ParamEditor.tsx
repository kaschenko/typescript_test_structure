import React, {useState} from 'react';
// @ts-ignore
import style from '../ParamEditor/ParamEditor.module.css'

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

interface Props {
    params: Param[]
    model: Model
}

const ParamEditor: React.FC<Props> = ({params, model}) => {

    const [inputValue, setInputValue] = useState(model.paramValues)

    const getModel = ()  => {
        console.log(inputValue)
    }

    return (
        <div className={style.container}>
            <div className={style.specialForm}>
                <div className={style.customColumn}>
                    {
                        params.map(param =>
                        <div >
                            <div key={param.id} className={style.customDiv}>{param.name}</div>
                        </div>
                        )
                    }
                </div>
                <div className={style.customColumn}>
                    {
                        inputValue.map(param =>
                        <div>
                            <input key={param.paramId} className={style.customInput} value={param.value}
                                   onChange={e => setInputValue([...inputValue.filter(el => el.paramId !== param.paramId),{
                                       paramId: param.paramId,
                                       value: e.target.value
                                   }].sort((a, b) => (a.paramId - b.paramId))
                                   )} type="text" />
                        </div>
                        )
                    }
                </div>
            </div>
            <button className={style.customButton} onClick={getModel}>Получить в консоли сущности</button>
        </div>
    );
};

export default ParamEditor;