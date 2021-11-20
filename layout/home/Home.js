import NavBar from "../navbar/NavBar";
import PlantPagesIndex from "../plant-pages-index/PlantPagesIndex";
import ToDoList from "../to-do-list/ToDoList";
import CalendarFeature from "../calendar-feature/CalendarFeature";
import './Home.css';

function Home( { pages } ) {

    return(
        <>
        <NavBar />
        <h1 className='header'>Hows Your Garden?</h1>
        <div className='page'>
            <div className='index'>
                <PlantPagesIndex pages={pages}/>
            </div>
            <div className='calendar'>
                <CalendarFeature />
            </div>
            <div className='to-do-list'>
                <ToDoList />
            </div>
        </div>
        </>
    );
}

export default Home;