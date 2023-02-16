import { NavDashboard } from '../components';
//
import background from '../assets/background.png';

export function MeusHorarios() {




  return (
    <div>
      <div>
        <NavDashboard />
      </div>
      <div
        className="bg-cover bg-center h-screen w-100"
        style={{ backgroundImage: `url(${background})` }}
      >
      </div>
    </div>
  );
}




