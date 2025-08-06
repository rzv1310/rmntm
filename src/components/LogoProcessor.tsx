import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { processLogoBackground } from '@/lib/background-removal';
import { toast } from 'sonner';

interface LogoProcessorProps {
  currentLogoUrl: string;
  onLogoProcessed: (newLogoUrl: string) => void;
}

export const LogoProcessor = ({ currentLogoUrl, onLogoProcessed }: LogoProcessorProps) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcessLogo = async () => {
    setIsProcessing(true);
    toast.info('Procesarea logo-ului a început...');

    try {
      const processedLogoUrl = await processLogoBackground(currentLogoUrl);
      onLogoProcessed(processedLogoUrl);
      toast.success('Backgroundul a fost eliminat cu succes!');
    } catch (error) {
      console.error('Error processing logo:', error);
      toast.error('Eroare la procesarea logo-ului. Încearcă din nou.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={handleProcessLogo}
        disabled={isProcessing}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {isProcessing ? 'Procesez...' : 'Elimină Background Logo'}
      </Button>
    </div>
  );
};