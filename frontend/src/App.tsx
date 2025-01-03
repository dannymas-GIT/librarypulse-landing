import React from 'react';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const services = [
    {
      name: 'Backup Management',
      description: 'Manage and execute library system backups',
      path: '/app/backup'
    },
    {
      name: 'Switch Management',
      description: 'Configure and monitor network switches',
      path: '/app/switch'
    },
    {
      name: 'SonicWall Management',
      description: 'Manage SonicWall firewall settings',
      path: '/app/sonicwall'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Library Pulse
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Centralized management system for library infrastructure
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.name}
                href={service.path}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-900 flex items-center justify-between">
                    {service.name}
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-500 group-hover:translate-x-1 transition-all duration-200" />
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App; 