import { AISignalChecker } from "@/components/AISignalChecker";

// Homepage "Try it now": a real check that runs in the browser, then sends
// people to the app's detector and humanizer.
const InteractiveDemo = () => (
  <section className="py-16 md:py-24" id="try-it">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold md:text-4xl">Try the free AI detector and humanizer</h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Paste any text for an instant writing-signal check, then get the full AI score or a human rewrite in the app.
          </p>
        </div>
        <AISignalChecker source="home" title="Free AI writing check" />
      </div>
    </div>
  </section>
);

export default InteractiveDemo;
