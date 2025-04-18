import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

function SuccessModal({ isOpen, onClose, onNewSubmission }: { 
  isOpen: boolean; 
  onClose: () => void;
  onNewSubmission: () => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-900 border border-red-600/30 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-green-400 mb-4">
            Form Submitted Successfully!
          </DialogTitle>
        </DialogHeader>
        <div className="text-center space-y-6">
          <p className="text-lg">
            Thank you for your submission. We'll contact you soon regarding your coffee machine request.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button 
              onClick={onClose}
              className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg"
            >
              Close
            </Button>
            <Button 
              onClick={onNewSubmission}
              className="bg-red-600 hover:bg-red-700 px-8 py-4 text-lg"
              variant="outline"
            >
              Submit Another
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}