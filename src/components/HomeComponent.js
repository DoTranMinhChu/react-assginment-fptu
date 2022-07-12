import DashBoard from './DashboardComponent';
import Header from './HeaderComponent';
import Main from './MainComponents';


export default function Home({ bathShower, bedding, lighting }) {
    return (
        <>
            <Header />
            <DashBoard />
            <Main bathShower={bathShower} bedding={bedding} lighting={lighting}/>

        </>
    )
}