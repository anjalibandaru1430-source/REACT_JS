let Emp=(props)=>{
        return <div>
        <h1>Emp component</h1>  
            <pre>{JSON.stringify(props)}</pre>
            <h2>Emp Id:{props.eid}</h2>
            <h2>Emp Name:{props.ename}</h2>
            <h2>Emp Location:{props.loc}</h2>
            
        </div>
    }   

export default Emp                                                                    ;