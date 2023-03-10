import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthRoute from '../provider/AuthRoute';


import { Profile , Dashboard, MeusHorarios, ContactDashboard, MarcarEmentas} from '../dashboard'
import { Home, Ementa, Horarios, Contact,  } from '../pages';


import { Login } from '../components'


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<AuthRoute path={''} auth={false}> <Dashboard /> </AuthRoute> }  />
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={<Login />} />
                <Route path='/ementas' element={<Ementa />} />
                <Route path='/horarios' element={<Horarios />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/marcarementas' element={<MarcarEmentas/>} />
                <Route path='/meushorarios' element={<MeusHorarios/>} />
                <Route path='/contactdashboard' element={<ContactDashboard/>} />
            </Routes>
        </BrowserRouter>
    );
}