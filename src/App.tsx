// src/App.tsx
import { useState, useEffect } from 'react';
import { PlanetSelector } from './components/PlanetSelector';
import { QuoteBuilder } from './components/QuoteBuilder';
import { ServiceCatalog } from './components/ServiceCatalog';
// ИЗМЕНЕНИЕ: импортируем и данные, и тип из mockData
import { services, type Service } from './mockData'; 

type Step = 'planet_selection' | 'quote_builder';
type Planet = 'earth' | 'mars';

function App() {
  const [step, setStep] = useState<Step>('planet_selection');
  const [planet, setPlanet] = useState<Planet>('earth');
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [quoteItems, setQuoteItems] = useState<Service[]>([]);
  
  // ИЗМЕНЕНИЕ: Убираем логику загрузки, просто используем mockData
  const [allServices, setAllServices] = useState<Service[]>(services);
  const [isLoading, setIsLoading] = useState(false); // Загрузки нет
  const [error, setError] = useState<string | null>(null);

  // useEffect больше не нужен для загрузки

  const handlePlanetSelect = (selectedPlanet: Planet) => {
    setPlanet(selectedPlanet);
    setStep('quote_builder');
  };

  const handleAddServiceToQuote = (service: Service) => {
    setQuoteItems(prevItems => [...prevItems, service]);
    setIsCatalogOpen(false);
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Загрузка каталога...</div>;
  }
  
  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

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
