import './TabButton.css';

export default function TabButton( {children, isSelected, ...props} ){
    return ( <> 
        <li>
            <button className= { isSelected ? 'active' : undefined} { ...props } >
                {children}
            </button>
        </li> 
    </> )
}

/* export default function TabButton(props){
    return <li><button onClick={()=> console.log('hey!')}>{props.children}</button></li>
} */