import { NavDashboard } from '../components';
import background from '../assets/background.png';



export function MarcarEmentas() {

  return (
    <div className="w-full">
      <NavDashboard />
      <div
        className="bg-cover bg-center h-screen w-100"
        style={{ backgroundImage: `url(${background})` }}
      >
      </div>
    </div>
  );

};

