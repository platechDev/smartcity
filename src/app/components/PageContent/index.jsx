import NavBar from "../NavBar"

export default function PageContent({ children }){
    return(      
    <div className='flex flex-row'>
        <NavBar/>
        <div className="flex ml-[95px] transition-margin duration-800">
             { children }
        </div>
    </div>
   
   
    )
    
}