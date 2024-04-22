declare module 'react-ios-pwa-prompt' {
  import React from 'react';

  interface PWAPromptProps {
    timesToShow?: number;
    promptOnVisit?: number;
    permanentlyHideOnDismiss?: boolean;
    copyTitle?: string;
    copyBody?: string;
    copyShareButtonLabel?: string;
    copyAddHomeButtonLabel?: string;
    copyClosePrompt?: string;
    delay?: number;
    debug?: boolean;
    onClose?: () => void;
  }

  const PWAPrompt: React.ComponentType<PWAPromptProps>;
  export default PWAPrompt;
}
