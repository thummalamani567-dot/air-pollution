import React, { useState } from 'react';
import {
  MapPin,
  RefreshCw,
  Sun,
  CloudSun,
  CloudRain,
  Wind,
  Droplets,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Info,
} from 'lucide-react';
import { CITIES_DATA, CityAirData } from '../data/airData';

interface AirQualityDashboardProps {
  language: 'en' | 'te';
  onTakeAction: () => void;
}

export const AirQualityDashboard: React.FC<AirQualityDashboardProps> = ({
  language,
  onTakeAction,
}) => {
  const [selectedCityId, setSelectedCityId] = useState<string>('hyderabad');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<string>('10:24 AM');
  const [cityDataMap, setCityDataMap] = useState<Record<string, CityAirData>>(() => {
    const initial: Record<string, CityAirData> = {};
    CITIES_DATA.forEach((city) => {
      initial[city.cityId] = { ...city };
    });
    return initial;
  });

  const currentCity = cityDataMap[selectedCityId] || CITIES_DATA[0];

  // Refresh handler with realistic feedback
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setLastUpdated(timeStr);

      // Add a slight micro-variance to simulate real sensor feed
      setCityDataMap((prev) => {
        const current = prev[selectedCityId];
        if (!current) return prev;
        const delta = Math.floor(Math.random() * 5) - 2;
        const newAqi = Math.max(15, current.aqi + delta);
        return {
          ...prev,
          [selectedCityId]: {
            ...current,
            aqi: newAqi,
          },
        };
      });

      setIsRefreshing(false);
    }, 600);
  };

  // Calculate circular meter stroke offset
  // Circumference for r=42 is 2 * PI * 42 ~= 263.89
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  // Normalized AQI (capped at 300 for 100% circle coverage)
  const clampedAqi = Math.min(300, Math.max(0, currentCity.aqi));
  const progressRatio = clampedAqi / 300;
  const strokeDashoffset = circumference - progressRatio * circumference;

  // Pollutant thresholds for status badge
  const getPollutantStatus = (name: string, val: number) => {
    if (name === 'PM2.5') return val <= 30 ? 'Good' : val <= 60 ? 'Moderate' : 'High';
    if (name === 'PM10') return val <= 50 ? 'Good' : val <= 100 ? 'Moderate' : 'High';
    if (name === 'NO2') return val <= 40 ? 'Good' : 'Moderate';
    return val <= 20 ? 'Good' : 'Moderate';
  };

  return (
    <section
      id="air-quality"
      className="relative max-w-5xl mx-auto px-4 sm:px-6 -mt-6 z-20 mb-24 scroll-mt-24"
    >
      {/* Container with ambient glow & deep forest backdrop */}
      <div className="bg-gradient-to-b from-[#092318] to-[#06150E] border border-[#1E583D]/80 rounded-3xl p-6 sm:p-8 shadow-2xl ambient-glow backdrop-blur-xl">
        {/* Header: Location Selector & City Pills */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#153E2B]/60 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#4ADE80]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                {language === 'en' ? 'Current Air Quality Station' : 'ప్రస్తుత గాలి నాణ్యత కేంద్రం'}
              </span>
              <div className="relative inline-block mt-0.5">
                <select
                  value={selectedCityId}
                  onChange={(e) => setSelectedCityId(e.target.value)}
                  className="bg-transparent text-white font-bold text-lg sm:text-xl pr-8 py-0 border-none cursor-pointer focus:ring-0 focus:outline-none hover:text-[#4ADE80] transition-colors appearance-none"
                  aria-label="Select City"
                >
                  {CITIES_DATA.map((c) => (
                    <option key={c.cityId} value={c.cityId} className="bg-[#07160F] text-white">
                      {language === 'en' ? `${c.cityName}, ${c.state}` : `${c.cityNameTelugu}, ${c.state}`}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Quick City Switcher buttons */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {CITIES_DATA.slice(0, 4).map((c) => (
              <button
                key={c.cityId}
                onClick={() => setSelectedCityId(c.cityId)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedCityId === c.cityId
                    ? 'bg-emerald-500/20 text-[#4ADE80] border border-emerald-500/40 shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/40 border border-transparent'
                }`}
              >
                {language === 'en' ? c.cityName.split(' ')[0] : c.cityNameTelugu}
              </button>
            ))}
          </div>
        </div>

        {/* Metric Triple-Panel Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 items-center">
          {/* Column 1: Circular AQI Dial Indicator */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Ring */}
                <circle
                  className="text-gray-800/80"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="8"
                />
                {/* Colored Value Segment */}
                <circle
                  className="gauge-circle"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r={radius}
                  stroke={currentCity.categoryColor}
                  strokeLinecap="round"
                  strokeWidth="8"
                  style={{
                    strokeDasharray: circumference,
                    strokeDashoffset: strokeDashoffset,
                  }}
                />
              </svg>

              {/* Center AQI Score */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight tabular-nums leading-none">
                  {currentCity.aqi}
                </span>
                <span className="text-xs uppercase font-bold text-gray-400 tracking-wider mt-1">
                  AQI
                </span>
              </div>
            </div>

            <h3
              className="mt-3 text-lg font-bold transition-colors"
              style={{ color: currentCity.categoryColor }}
            >
              {language === 'en' ? currentCity.category : currentCity.categoryTelugu}
            </h3>
            <p className="text-xs text-gray-300 max-w-[240px] mt-1 leading-relaxed">
              {language === 'en' ? currentCity.summary : currentCity.summaryTelugu}
            </p>
          </div>

          {/* Column 2: Pollutant Concentrations */}
          <div className="space-y-3.5 px-2 sm:px-6 md:border-x md:border-[#153E2B]/60">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {language === 'en' ? 'Key Pollutants' : 'ముఖ్య కాలుష్య కారకాలు'}
            </div>

            {/* PM2.5 */}
            <div className="flex items-center justify-between py-1 border-b border-gray-800/60">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-2.5 h-2.5 rounded-full ring-4 ring-emerald-500/20"
                  style={{
                    backgroundColor:
                      getPollutantStatus('PM2.5', currentCity.pollutants.pm25) === 'Good'
                        ? '#22C55E'
                        : '#EAB308',
                  }}
                />
                <span className="text-sm font-medium text-gray-200">PM2.5</span>
              </div>
              <div className="text-sm font-bold text-white tabular-nums">
                {currentCity.pollutants.pm25}{' '}
                <span className="text-xs font-normal text-gray-400">µg/m³</span>
              </div>
            </div>

            {/* PM10 */}
            <div className="flex items-center justify-between py-1 border-b border-gray-800/60">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-2.5 h-2.5 rounded-full ring-4 ring-yellow-400/20"
                  style={{
                    backgroundColor:
                      getPollutantStatus('PM10', currentCity.pollutants.pm10) === 'Good'
                        ? '#22C55E'
                        : '#EAB308',
                  }}
                />
                <span className="text-sm font-medium text-gray-200">PM10</span>
              </div>
              <div className="text-sm font-bold text-white tabular-nums">
                {currentCity.pollutants.pm10}{' '}
                <span className="text-xs font-normal text-gray-400">µg/m³</span>
              </div>
            </div>

            {/* NO2 */}
            <div className="flex items-center justify-between py-1 border-b border-gray-800/60">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] ring-4 ring-emerald-500/20" />
                <span className="text-sm font-medium text-gray-200">NO₂</span>
              </div>
              <div className="text-sm font-bold text-white tabular-nums">
                {currentCity.pollutants.no2}{' '}
                <span className="text-xs font-normal text-gray-400">µg/m³</span>
              </div>
            </div>

            {/* SO2 */}
            <div className="flex items-center justify-between py-1 border-b border-gray-800/60">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] ring-4 ring-emerald-500/20" />
                <span className="text-sm font-medium text-gray-200">SO₂</span>
              </div>
              <div className="text-sm font-bold text-white tabular-nums">
                {currentCity.pollutants.so2}{' '}
                <span className="text-xs font-normal text-gray-400">µg/m³</span>
              </div>
            </div>

            {/* CO & O3 Quick strip */}
            <div className="pt-1 flex items-center justify-between text-xs text-gray-400">
              <span>CO: <strong className="text-white">{currentCity.pollutants.co} mg/m³</strong></span>
              <span>O₃: <strong className="text-white">{currentCity.pollutants.o3} µg/m³</strong></span>
            </div>
          </div>

          {/* Column 3: Weather Overview & Live Refresh */}
          <div className="flex flex-col items-center text-center justify-between h-full space-y-4">
            <div className="flex flex-col items-center">
              {/* Sun / Weather Icon */}
              <div className="text-amber-400 mb-2">
                {currentCity.weather.temp > 30 ? (
                  <Sun className="w-10 h-10 animate-[spin_16s_linear_infinite]" />
                ) : (
                  <CloudSun className="w-10 h-10 text-emerald-400" />
                )}
              </div>
              <span className="text-xs uppercase font-semibold tracking-wider text-gray-400">
                {language === 'en' ? 'Atmospheric Weather' : 'వాతావరణ వివరాలు'}
              </span>
              <div className="text-3xl font-extrabold text-white mt-0.5 tabular-nums">
                {currentCity.weather.temp}°C
              </div>
              <div className="text-sm text-gray-300 flex items-center gap-1.5 mt-0.5">
                <span>
                  {language === 'en'
                    ? currentCity.weather.condition
                    : currentCity.weather.conditionTelugu}
                </span>
              </div>

              {/* Humidity & Wind strip */}
              <div className="flex items-center gap-4 text-xs text-gray-400 mt-3">
                <span className="flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5 text-blue-400" /> {currentCity.weather.humidity}%
                </span>
                <span className="flex items-center gap-1">
                  <Wind className="w-3.5 h-3.5 text-emerald-400" /> {currentCity.weather.windSpeed} km/h
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center w-full pt-2">
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#1E583D] bg-[#07160F] text-xs font-semibold text-gray-200 hover:text-white hover:border-[#4ADE80] transition-all shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                type="button"
              >
                <RefreshCw
                  className={`w-3.5 h-3.5 text-[#4ADE80] ${
                    isRefreshing ? 'animate-spin' : ''
                  }`}
                />
                <span>{language === 'en' ? 'Refresh Sensor' : 'రిఫ్రెష్ చేయండి'}</span>
              </button>
              <span className="text-[11px] text-gray-500 mt-2 tabular-nums">
                {language === 'en' ? `Last updated: ${lastUpdated}` : `తాజా అప్‌డేట్: ${lastUpdated}`}
              </span>
            </div>
          </div>
        </div>

        {/* Advisory Callout Strip at bottom of card */}
        <div className="mt-8 pt-5 border-t border-[#153E2B]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#030B07]/50 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-[#4ADE80] shrink-0">
              <Info className="w-4 h-4" />
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              <strong className="text-white mr-1">
                {language === 'en' ? 'Health Advisory:' : 'ఆరోగ్య సూచన:'}
              </strong>
              {language === 'en' ? currentCity.healthAdvice : currentCity.healthAdviceTelugu}
            </p>
          </div>

          <button
            onClick={onTakeAction}
            className="shrink-0 px-4 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-[#4ADE80] border border-emerald-500/30 text-xs font-bold transition-colors cursor-pointer"
          >
            {language === 'en' ? 'View Protection Steps' : 'రక్షణ చర్యలు'}
          </button>
        </div>
      </div>
    </section>
  );
};
