@@ .. @@
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
-import CompactMarketingPage from "@/pages/CompactMarketingPage";
+import MarketingPage from "@/pages/MarketingPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
-      <Route path="/" component={CompactMarketingPage} />
+      <Route path="/" component={MarketingPage} />
       {/* Fallback to 404 */}
       <Route component={NotFound} />
     </Switch>
  );
}