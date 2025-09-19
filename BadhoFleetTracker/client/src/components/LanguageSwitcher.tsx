import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  currentLanguage: 'en' | 'hi';
  onLanguageChange: (language: 'en' | 'hi') => void;
}

export default function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <Select value={currentLanguage} onValueChange={onLanguageChange} data-testid="select-language">
      <SelectTrigger className="w-32">
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4" data-testid="icon-globe" />
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en" data-testid="option-english">English</SelectItem>
        <SelectItem value="hi" data-testid="option-hindi">हिंदी</SelectItem>
      </SelectContent>
    </Select>
  );
}