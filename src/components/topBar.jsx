import { Mail, MapPin, Phone } from "lucide-react";

function TopBar() {
    return ( 
        <div className="bg-emerald-900 text-white py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-emerald-400" />
              Toshkent shahri, O'zbekiston
            </span>
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-emerald-400" />
              ecotaxta@mail.ru
            </span>
          </div>
          <div className="flex space-x-4">
            <span className="flex items-center font-semibold">
              <Phone className="w-4 h-4 mr-2 text-emerald-400" />
              +998 90 080-90-00
            </span>
            <span className="flex items-center font-semibold">
              <Phone className="w-4 h-4 mr-2 text-emerald-400" />
              +998 90 712-20-80
            </span>
          </div>
        </div>
      </div>
     );
}

export default TopBar;