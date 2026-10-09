export interface PollutantInfo {
  name: string;
  chemicalFormula: string;
  value: number;
  unit: string;
  status: 'Good' | 'Moderate' | 'High' | 'Severe';
  statusColor: string;
  safeLimit: string;
}

export interface CityAirData {
  cityId: string;
  cityName: string;
  cityNameTelugu: string;
  state: string;
  aqi: number;
  category: 'Good' | 'Moderate' | 'Unhealthy for Sensitive' | 'Unhealthy' | 'Very Unhealthy' | 'Hazardous';
  categoryTelugu: string;
  categoryColor: string;
  gaugeGradient: {
    start: string;
    end: string;
  };
  summary: string;
  summaryTelugu: string;
  healthAdvice: string;
  healthAdviceTelugu: string;
  maskRecommended: boolean;
  outdoorExercise: 'Safe' | 'Caution' | 'Avoid';
  pollutants: {
    pm25: number;
    pm10: number;
    no2: number;
    so2: number;
    co: number;
    o3: number;
  };
  weather: {
    temp: number;
    condition: string;
    conditionTelugu: string;
    humidity: number;
    windSpeed: number;
    uvIndex: number;
  };
}

export const CITIES_DATA: CityAirData[] = [
  {
    cityId: 'hyderabad',
    cityName: 'Hyderabad',
    cityNameTelugu: 'హైదరాబాద్',
    state: 'Telangana',
    aqi: 82,
    category: 'Moderate',
    categoryTelugu: 'మితమైనది',
    categoryColor: '#EAB308',
    gaugeGradient: { start: '#22C55E', end: '#EAB308' },
    summary: 'Air quality is acceptable. However, sensitive people should be careful.',
    summaryTelugu: 'గాలి నాణ్యత ఆమోదయోగ్యంగా ఉంది. సున్నితమైన వ్యక్తులు జాగ్రత్తగా ఉండాలి.',
    healthAdvice: 'Sensitive individuals with asthma or respiratory allergies should limit prolonged outdoor exertion.',
    healthAdviceTelugu: 'ఆస్తమా లేదా శ్వాసకోశ సమస్యలు ఉన్నవారు ఎక్కువ సమయం ఆరుబయట గడపకుండా ఉండాలి.',
    maskRecommended: false,
    outdoorExercise: 'Safe',
    pollutants: {
      pm25: 32,
      pm10: 58,
      no2: 18,
      so2: 6,
      co: 0.8,
      o3: 24,
    },
    weather: {
      temp: 32,
      condition: 'Sunny',
      conditionTelugu: 'ఎండగా ఉంది',
      humidity: 52,
      windSpeed: 11,
      uvIndex: 6,
    },
  },
  {
    cityId: 'delhi',
    cityName: 'Delhi NCR',
    cityNameTelugu: 'ఢిల్లీ ఎన్‌సీఆర్',
    state: 'Delhi',
    aqi: 215,
    category: 'Very Unhealthy',
    categoryTelugu: 'చాలా అనారోగ్యకరమైనది',
    categoryColor: '#EF4444',
    gaugeGradient: { start: '#F97316', end: '#EF4444' },
    summary: 'Air quality is hazardous for sensitive groups and harmful to the general public.',
    summaryTelugu: 'గాలి నాణ్యత చాలా తీవ్రంగా ఉంది. ప్రతి ఒక్కరి ఆరోగ్యంపై ప్రభావం పడవచ్చు.',
    healthAdvice: 'Wear an N95 mask outdoors. Run air purifiers indoors and keep windows closed during morning rush.',
    healthAdviceTelugu: 'బయటకు వెళ్లేటప్పుడు N95 మాస్క్ ధరించండి. తలుపులు, కిటికీలు మూసి ఉంచండి.',
    maskRecommended: true,
    outdoorExercise: 'Avoid',
    pollutants: {
      pm25: 142,
      pm10: 220,
      no2: 48,
      so2: 19,
      co: 2.3,
      o3: 45,
    },
    weather: {
      temp: 29,
      condition: 'Hazy',
      conditionTelugu: 'పొగమంచు',
      humidity: 64,
      windSpeed: 6,
      uvIndex: 5,
    },
  },
  {
    cityId: 'bengaluru',
    cityName: 'Bengaluru',
    cityNameTelugu: 'బెంగళూరు',
    state: 'Karnataka',
    aqi: 54,
    category: 'Good',
    categoryTelugu: 'మంచిది',
    categoryColor: '#22C55E',
    gaugeGradient: { start: '#10B981', end: '#22C55E' },
    summary: 'Air quality is satisfactory and poses minimal or no health risk.',
    summaryTelugu: 'గాలి నాణ్యత చాలా బాగుంది. ఎలాంటి ఆరోగ్య ప్రమాదం లేదు.',
    healthAdvice: 'Ideal conditions for jogging, cycling, and spending time in open parks.',
    healthAdviceTelugu: 'ఉదయం వాకింగ్ మరియు బహిరంగ వ్యాయామాలకు సరైన సమయం.',
    maskRecommended: false,
    outdoorExercise: 'Safe',
    pollutants: {
      pm25: 14,
      pm10: 38,
      no2: 12,
      so2: 4,
      co: 0.5,
      o3: 18,
    },
    weather: {
      temp: 27,
      condition: 'Pleasant & Breezy',
      conditionTelugu: 'చల్లని గాలులు',
      humidity: 58,
      windSpeed: 14,
      uvIndex: 7,
    },
  },
  {
    cityId: 'mumbai',
    cityName: 'Mumbai',
    cityNameTelugu: 'ముంబై',
    state: 'Maharashtra',
    aqi: 118,
    category: 'Unhealthy for Sensitive',
    categoryTelugu: 'సున్నిత వ్యక్తులకు హానికరం',
    categoryColor: '#F97316',
    gaugeGradient: { start: '#EAB308', end: '#F97316' },
    summary: 'Members of sensitive groups may experience health effects.',
    summaryTelugu: 'సున్నిత వర్గాల ప్రజలు స్వల్ప శ్వాస సమస్యలను ఎదుర్కోవచ్చు.',
    healthAdvice: 'Children, seniors and people with lung issues should reduce intense outdoor activities.',
    healthAdviceTelugu: 'పిల్లలు, వృద్ధులు ఎక్కువ సేపు బహిరంగ ఆటలు తగ్గించాలి.',
    maskRecommended: true,
    outdoorExercise: 'Caution',
    pollutants: {
      pm25: 45,
      pm10: 92,
      no2: 28,
      so2: 10,
      co: 1.1,
      o3: 31,
    },
    weather: {
      temp: 31,
      condition: 'Humid & Overcast',
      conditionTelugu: 'తేమతో కూడిన వాతావరణం',
      humidity: 78,
      windSpeed: 16,
      uvIndex: 6,
    },
  },
  {
    cityId: 'visakhapatnam',
    cityName: 'Visakhapatnam',
    cityNameTelugu: 'విశాఖపట్నం',
    state: 'Andhra Pradesh',
    aqi: 68,
    category: 'Moderate',
    categoryTelugu: 'మితమైనది',
    categoryColor: '#EAB308',
    gaugeGradient: { start: '#22C55E', end: '#EAB308' },
    summary: 'Coastal breeze keeps pollutant levels moderate. Acceptable outdoor air.',
    summaryTelugu: 'సముద్ర గాలుల వల్ల గాలి నాణ్యత అనుకూలంగా ఉంది.',
    healthAdvice: 'Good time for coastal walks. Keep indoor spaces well ventilated.',
    healthAdviceTelugu: 'సముద్రపు తీరంలో నడకకు అనుకూలం. గదిలో గాలి ప్రసరణ ఉంచండి.',
    maskRecommended: false,
    outdoorExercise: 'Safe',
    pollutants: {
      pm25: 22,
      pm10: 48,
      no2: 14,
      so2: 7,
      co: 0.6,
      o3: 20,
    },
    weather: {
      temp: 30,
      condition: 'Coastal Breeze',
      conditionTelugu: 'తీరప్రాంత గాలి',
      humidity: 72,
      windSpeed: 18,
      uvIndex: 8,
    },
  },
];

export interface FeatureDetail {
  id: string;
  title: string;
  titleTelugu: string;
  subtitle: string;
  subtitleTelugu: string;
  description: string;
  descriptionTelugu: string;
  stats: { label: string; labelTelugu: string; value: string }[];
  keyPoints: { title: string; titleTelugu: string; desc: string; descTelugu: string }[];
  actionTips: string[];
  actionTipsTelugu: string[];
}

export const FEATURE_DETAILS: Record<string, FeatureDetail> = {
  causes: {
    id: 'causes',
    title: 'Causes & Effects of Air Pollution',
    titleTelugu: 'వాయు కాలుష్యం కారణాలు & ప్రభావాలు',
    subtitle: 'Understanding the silent killers in our atmosphere',
    subtitleTelugu: 'మన వాతావరణంలోని ప్రమాదకర కారకాలను అర్థం చేసుకోండి',
    description: 'Particulate matter (PM2.5 and PM10) from vehicle exhausts, thermal coal plants, construction dust, and stubble burning penetrate deep into human lung alveoli, causing severe cardiac and respiratory illness.',
    descriptionTelugu: 'వాహనాల పొగ, కర్మాగారాలు మరియు పంట వ్యర్థాల దహనం నుండి వచ్చే కాలుష్య కారకాలు శ్వాసకోశ మరియు గుండె సంబంధిత సమస్యలకు దారితీస్తున్నాయి.',
    stats: [
      { label: 'Global Annual Deaths', labelTelugu: 'వార్షిక మరణాలు', value: '7.0 Million' },
      { label: 'Life Expectancy Drop', labelTelugu: 'ఆయుఃప్రమాణం తగ్గుదల', value: '3.8 Years' },
      { label: 'PM2.5 Health Threshold', labelTelugu: 'సురక్షిత పరిమితి', value: '< 15 µg/m³' },
    ],
    keyPoints: [
      {
        title: 'Vehicular Emissions',
        titleTelugu: 'వాహనాల ఉద్గారాలు',
        desc: 'Over 40% of urban nitrogen oxides (NOx) and carbon monoxide originate from combustion engine gridlocks.',
        descTelugu: 'నగరాల్లో 40% పైగా నైట్రోజన్ ఆక్సైడ్లు మరియు కార్బన్ మోనాక్సైడ్ వాహనాల ద్వారానే ఉత్పత్తి అవుతాయి.',
      },
      {
        title: 'Industrial Smog & Power',
        titleTelugu: 'పారిశ్రామిక పొగ & విద్యుత్',
        desc: 'Thermal coal power stations release sulfur dioxide (SO2) leading to acid rain and heavy particulate accumulation.',
        descTelugu: 'బొగ్గు ఆధారిత విద్యుత్ కేంద్రాలు సల్ఫర్ డయాక్సైడ్ విడుదల చేసి ఆమ్ల వర్షాలకు కారణమవుతాయి.',
      },
      {
        title: 'Agricultural Crop Residue',
        titleTelugu: 'పంట వ్యర్థాల దహనం',
        desc: 'Seasonal post-harvest burning creates thick winter inversions across northern and central river basins.',
        descTelugu: 'పంట కోతల తర్వాత వ్యర్థాలను తగలబెట్టడం వల్ల శీతాకాలంలో దట్టమైన పొగమంచు వ్యాపిస్తుంది.',
      },
    ],
    actionTips: [
      'Track the daily AQI before planning morning jogs or school sports.',
      'Install indoor oxygen-boosting plants like Sansevieria (Snake Plant) and Areca Palm.',
      'Avoid open trash or garden waste burning in residential communities.',
    ],
    actionTipsTelugu: [
      'ఉదయం వ్యాయామం చేసే ముందు రోజువారీ AQI ని తనిఖీ చేయండి.',
      'ఇళ్లలో గాలిని శుభ్రపరిచే మొక్కలను (స్నేక్ ప్లాంట్, అరేకా పామ్) పెంచండి.',
      'చెత్తను మరియు ఎండిన ఆకులను బహిరంగంగా కాల్చడం నివారించండి.',
    ],
  },
  prevention: {
    id: 'prevention',
    title: 'Actionable Prevention Methods',
    titleTelugu: 'నివారణ పద్ధతులు & పరిష్కారాలు',
    subtitle: 'Proven personal, community, and city-level solutions',
    subtitleTelugu: 'వ్యక్తిగత మరియు సామాజిక స్థాయి ప్రభావవంతమైన పరిష్కారాలు',
    description: 'Cutting down emissions requires a combination of cleaner mobility choices, community afforestation, renewable energy adoption, and conscious energy consumption at home.',
    descriptionTelugu: 'కాలుష్యాన్ని తగ్గించడానికి ప్రజా రవాణా వినియోగం, మొక్కలు నాటడం, మరియు పునరుత్పాదక శక్తి వాడకం అత్యంత ముఖ్యం.',
    stats: [
      { label: 'CO2 Absorbed per Tree', labelTelugu: 'చెట్టు పీల్చే CO2', value: '22 kg / yr' },
      { label: 'Public Transit Reduction', labelTelugu: 'కాలుష్య తగ్గింపు', value: '-65% PM' },
      { label: 'EV Carbon Reduction', labelTelugu: 'ఈవీ తగ్గింపు', value: '-70% Tailpipe' },
    ],
    keyPoints: [
      {
        title: 'Active Mobility & Transit',
        titleTelugu: 'ప్రజా రవాణా & సైక్లింగ్',
        desc: 'Choosing metro rail, shared electric buses, or cycling for trips under 3km cuts personal carbon footprint significantly.',
        descTelugu: 'మెట్రో రైళ్లు, ఎలక్ట్రిక్ బస్సులు వాడటం ద్వారా వ్యక్తిగత కాలుష్య పాదముద్ర గణనీయంగా తగ్గుతుంది.',
      },
      {
        title: 'Urban Native Forests',
        titleTelugu: 'నగర వనాలు & మొక్కల పెంపకం',
        desc: 'Miyawaki dense urban forests act as living bio-filters trapping PM2.5 particles on leaf surfaces.',
        descTelugu: 'మియావాకి పద్ధతిలో దట్టమైన అడవులను పెంచడం ద్వారా గాలిలోని దుమ్మును చెట్లు శోషిస్తాయి.',
      },
      {
        title: 'Clean Energy & Solar Rooftops',
        titleTelugu: 'సౌర శక్తి & స్వచ్ఛమైన ఇంధనం',
        desc: 'Switching home electricity to rooftop solar decreases dependence on carbon-heavy coal power stations.',
        descTelugu: 'సౌరశక్తిని వినియోగించడం ద్వారా బొగ్గు విద్యుత్ కేంద్రాల పై ఆధారపడటం తగ్గుతుంది.',
      },
    ],
    actionTips: [
      'Commit to carpooling or taking public transit at least two days a week.',
      'Support local green corridors and protect mature canopy trees in your colony.',
      'Switch to induction stoves and energy star rated appliances.',
    ],
    actionTipsTelugu: [
      'వారానికి కనీసం రెండు రోజులు ప్రజా రవాణా లేదా కార్‌పూలింగ్ ఎంచుకోండి.',
      'మీ ప్రాంతంలో పచ్చదనం పెంపొందించే ఉద్యమాల్లో భాగస్వాములు కావండి.',
      'విద్యుత్ ఆదా చేసే పరికరాలను ఉపయోగించండి.',
    ],
  },
  campaigns: {
    id: 'campaigns',
    title: 'Awareness Campaigns & Youth Drives',
    titleTelugu: 'అవగాహన ప్రచారాలు & విద్యార్థి కార్యక్రమాలు',
    subtitle: 'Grassroots movements driving tangible policy change',
    subtitleTelugu: 'నిజమైన మార్పును తీసుకొచ్చే యువజన ఉద్యమాలు',
    description: 'AirCare unites schools, colleges, and environmental youth clubs across Telangana, Andhra Pradesh, and India to organize clean air marches, tree plantation drives, and school air sensor networks.',
    descriptionTelugu: 'పాఠశాలలు, కళాశాలలు మరియు యువజన సంఘాలను ఏకం చేసి స్వచ్ఛమైన గాలి కోసం పెద్ద ఎత్తున ఉద్యమాలు నిర్వహిస్తున్నాము.',
    stats: [
      { label: 'Active Youth Drives', labelTelugu: 'కార్యక్రమాలు', value: '142 Events' },
      { label: 'Trees Planted', labelTelugu: 'నాటిన మొక్కలు', value: '45,200+' },
      { label: 'Schools Joined', labelTelugu: 'పాఠశాలలు', value: '180+ Campuses' },
    ],
    keyPoints: [
      {
        title: 'Campus Air Monitor Initiative',
        titleTelugu: 'పాఠశాల గాలి నాణ్యత మానిటర్లు',
        desc: 'Low-cost IoT sensors installed across 180+ high schools teaching students real-world atmospheric science.',
        descTelugu: 'విద్యార్థులకు వాతావరణ శాస్త్రం నేర్పడానికి పాఠశాలల్లో IoT సెన్సార్ల ఏర్పాటు.',
      },
      {
        title: 'Clean Air Cyclothon',
        titleTelugu: 'స్వచ్ఛ గాలి సైకిల్‌యాత్ర',
        desc: 'Annual 15km city ride advocating for dedicated non-motorized transport lanes and pedestrian safety.',
        descTelugu: 'సురక్షిత సైకిల్ మార్గాల కోసం ప్రతి సంవత్సరం 15 కిలోమీటర్ల సైక్లింగ్ ర్యాలీ.',
      },
      {
        title: 'Haritha Harami Youth Planting',
        titleTelugu: 'హరిత వనం యువత మొక్కలు',
        desc: 'Student-led sapling drives focusing on high air-filtration native flora like Neem, Peepal, and Banyan.',
        descTelugu: 'వేప, రావి, మర్రి వంటి అధిక ప్రాణవాయువు ఇచ్చే దేశీయ చెట్ల నాటే ఉద్యమం.',
      },
    ],
    actionTips: [
      'Register your school or college green club for free AirCare campaign kits.',
      'Participate in our upcoming weekend native sapling plantation drives.',
      'Host a 30-minute Clean Air student seminar with our ready presentation slides.',
    ],
    actionTipsTelugu: [
      'మీ పాఠశాల లేదా కళాశాల గ్రీన్ క్లబ్‌ను నమోదు చేసుకోండి.',
      'రాబోయే వారాంతపు మొక్కలు నాటే కార్యక్రమంలో పాల్గొనండి.',
      'స్వచ్ఛమైన గాలి పై మీ స్నేహితులకు అవగాహన కల్పించండి.',
    ],
  },
  community: {
    id: 'community',
    title: 'Student Community & Changemakers',
    titleTelugu: 'విద్యార్థి సమాజం & మార్పు నాయకులు',
    subtitle: 'Connecting passionate climate ambassadors across regions',
    subtitleTelugu: 'పర్యావరణ ప్రేమికులను ఒకే వేదిక పైకి తీసుకురావడం',
    description: 'More than 12,000 students share local pollution hotspot reports, organize peer workshops, and lead neighbourhood transformations with AirCare toolkits.',
    descriptionTelugu: '12,000 మందికి పైగా విద్యార్థులు తమ ప్రాంతాల్లో కాలుష్య నివేదికలను పంచుకుంటూ నాయకత్వం వహిస్తున్నారు.',
    stats: [
      { label: 'Student Ambassadors', labelTelugu: 'విద్యార్థి రాయబారులు', value: '12,400+' },
      { label: 'Hotspots Mapped', labelTelugu: 'గుర్తించిన ప్రాంతాలు', value: '3,850 Sites' },
      { label: 'Monthly Workshops', labelTelugu: 'వర్క్‌షాప్‌లు', value: '24 Hosted' },
    ],
    keyPoints: [
      {
        title: 'Peer-to-Peer Training',
        titleTelugu: 'స్నేహితుల శిక్షణ',
        desc: 'Student leaders train classmates on interpreting AQI dials, recognizing peak pollution hours, and preventive care.',
        descTelugu: 'గాలి నాణ్యత సూచికలను పరిశీలించి స్నేహితులకు తగిన సూచనలు ఇవ్వడం.',
      },
      {
        title: 'Hyperlocal Sensor Networks',
        titleTelugu: 'స్థానిక సెన్సార్ నెట్‌వర్క్',
        desc: 'Community monitoring catches construction dust violations and industrial smoke leaks in residential zones.',
        descTelugu: 'నివాస ప్రాంతాల్లో అక్రమ ధూళి, పొగ కాలుష్యాలను గుర్తించే నిఘా.',
      },
      {
        title: 'Recognition & Badges',
        titleTelugu: 'సర్టిఫికెట్లు & గుర్తింపు',
        desc: 'Active student changemakers earn verified digital certifications, leadership awards, and climate fellowships.',
        descTelugu: 'చురుగ్గా పాల్గొనే విద్యార్థులకు గుర్తింపు పత్రాలు మరియు అవార్డులు.',
      },
    ],
    actionTips: [
      'Take the Clean Air Pledge today to receive your official AirCare Changemaker badge.',
      'Join our regional Discord / WhatsApp student environmental council.',
      'Submit local air pollution photos and issues to our community radar map.',
    ],
    actionTipsTelugu: [
      'ఈరోజే స్వచ్ఛమైన గాలి ప్రతిజ్ఞ చేసి డిజిటల్ సర్టిఫికెట్ పొందండి.',
      'మన విద్యార్థి పర్యావరణ వేదికలో చేరండి.',
      'మీ ప్రాంతంలోని కాలుష్య సమస్యలను ఫోటోలతో తెలియజేయండి.',
    ],
  },
};
