import ValueDemonstration from "@/components/ValueDemonstration";
import ThemeToggle from "@/components/ThemeToggle";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-primary" data-testid="text-app-title">
              Badho GPS Tracking
            </h1>
            <p className="text-sm text-muted-foreground" data-testid="text-app-subtitle">
              Free vehicle tracking service for Badho sellers
            </p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <ValueDemonstration />
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-footer">
            This exclusive service is available only to Badho sellers through our partnership with Wheels AI
          </p>
        </div>
      </footer>
    </div>
  );
}