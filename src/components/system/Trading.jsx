import { useEffect } from "react";

function TradingViewWidget() {
  useEffect(() => {
    // Create and configure the TradingView widget script
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "BITSTAMP:BTCUSD",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com",
    });

    // Append the script to the container
    const container = document.getElementById("tradingview-widget-container");
    if (container) {
      container.appendChild(script);
    }

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (container && script.parentNode) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      id="tradingview-widget-container"
      className="relative bg-gray-100 rounded-lg shadow-lg p-4 h-[500px] w-full flex flex-col"
    >
      <div
        className="tradingview-widget-container__widget flex-1"
        style={{ width: "100%" }}
      ></div>
      <div className="text-center text-gray-600 mt-2">
        <a
          href="https://www.tradingview.com/"
          rel="noopener noreferrer nofollow"
          target="_blank"
          className="text-blue-500 mt-4"
        >
          Personal Trading Data
        </a>
      </div>
    </div>
  );
}

export default TradingViewWidget;
