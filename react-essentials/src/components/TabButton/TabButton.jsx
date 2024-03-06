export default function TabButton( {children, onClick, isSelected} ){
    return <li><button className= { isSelected ? 'active' : undefined} onClick={ onClick }>{children}</button></li>
}

/* export default function TabButton(props){
    return <li><button onClick={()=> console.log('hey!')}>{props.children}</button></li>
} */