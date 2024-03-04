export default function TabButton( {children, onClick} ){
    return <li><button onClick={ onClick }>{children}</button></li>
}

/* export default function TabButton(props){
    return <li><button onClick={()=> console.log('hey!')}>{props.children}</button></li>
} */