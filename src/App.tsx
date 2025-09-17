// src/App.tsx
import { useState } from 'react';
import { PlanetSelector } from './components/PlanetSelector';
import { QuoteBuilder } from './components/QuoteBuilder';
import { ServiceCatalog } from './components/ServiceCatalog';
import { services, type Service } from './mockData'; 

type Step = 'planet_selection' | 'quote_builder';
type Planet = 'earth' | 'mars';

function App() {
  const [step, setStep] = useState<Step>('planet_selection');
  const [planet, setPlanet] = useState<Planet>('earth');
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [quoteItems, setQuoteItems] = useState<Service[]>([]);
  const [allServices, setAllServices] = useState<Service[]>(services);

  const handlePlanetSelect = (selectedPlanet: Planet) => {
    setPlanet(selectedPlanet);
    setStep('quote_builder');
  };

  const handleAddServiceToQuote = (service: Service) => {
    setQuoteItems(prevItems => [...prevItems, service]);
    setIsCatalogOpen(false);
  };

  return (
    <div className="min-h-screen">
      {step === 'planet_selection' && <PlanetSelector onSelect={handlePlanetSelect} />}
      {step === 'quote_builder' && (
        <QuoteBuilder 
          planet={planet} 
          quoteItems={quoteItems}
          onAddServiceClick={() => setIsCatalogOpen(true)}
        />
      )}
      <ServiceCatalog 
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        onSelectService={handleAddServiceToQuote}
        services={allServices} 
      />
    </div>
  );
}

export default App;
