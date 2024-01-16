import React, { useEffect } from 'react';

const HostAdviceWidget = () => {
  useEffect(() => {
    const embedHostAdviceScript = () => {
      const script = document.createElement('script');
      script.id = 'ha-embed';
      script.async = true;
      script.src = 'https://hostadvice.com/embed/widgets.js';

      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);
    };

    embedHostAdviceScript();
    return () => {
      const scriptElement = document.getElementById('ha-embed');
      if (scriptElement) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, []); 
  return (
    <div className="ha-widget px-8 md:px-24 pt-8" data-widget="latest-reviews" data-height="500" data-width="auto" data-id="94020" data-lang="en" data-params="above_stars:"></div>
  );
};

export default HostAdviceWidget;
