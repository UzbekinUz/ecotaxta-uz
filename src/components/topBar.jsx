import { Mail, MapPin, Phone } from "lucide-react";
import topBar from "../language/topBar.json";

function TopBar({lang}) {
    return ( 
        <div className="bg-emerald-900 text-white py-2 text-sm block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap md:grid-cols-2 gap-0 justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center text-[13px]">
              <MapPin className="w-4 h-4 mr-2 text-emerald-400" />
              {lang === "ru" ? topBar.location.ru : lang === "uz" ? topBar.location.uz : topBar.location.en}
            </span>
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-emerald-400 text-[10px]" />
              ecotaxta@mail.ru
            </span>
          </div>
          <div className="flex space-x-4">
            <span className="flex items-center font-semibold text-[10px]">
              <Phone className="w-4 h-4 mr-2 text-emerald-400" />
              +998 90 080-90-00
            </span>
            <span className="flex items-center font-semibold text-[10px]">
              <Phone className="w-4 h-4 mr-2 text-emerald-400" />
              +998 90 712-20-80
            </span>
          </div>
        </div>
      </div>
     );
}

export default TopBar;