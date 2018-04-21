var
countries = {
  "": "",
  "AF": "Afghanistan",
  "AX": "\u00c5land Islands",
  "AL": "Albania",
  "DZ": "Algeria",
  "AS": "American Samoa",
  "AD": "Andorra",
  "AO": "Angola",
  "AI": "Anguilla",
  "AQ": "Antarctica",
  "AG": "Antigua & Barbuda",
  "AR": "Argentina",
  "AM": "Armenia",
  "AW": "Aruba",
  "AC": "Ascension Island",
  "AU": "Australia",
  "AT": "Austria",
  "AZ": "Azerbaijan",
  "BS": "Bahamas",
  "BH": "Bahrain",
  "BD": "Bangladesh",
  "BB": "Barbados",
  "BY": "Belarus",
  "BE": "Belgium",
  "BZ": "Belize",
  "BJ": "Benin",
  "BM": "Bermuda",
  "BT": "Bhutan",
  "BO": "Bolivia",
  "BA": "Bosnia & Herzegovina",
  "BW": "Botswana",
  "BR": "Brazil",
  "IO": "British Indian Ocean Territory",
  "VG": "British Virgin Islands",
  "BN": "Brunei",
  "BG": "Bulgaria",
  "BF": "Burkina Faso",
  "BI": "Burundi",
  "KH": "Cambodia",
  "CM": "Cameroon",
  "CA": "Canada",
  "IC": "Canary Islands",
  "CV": "Cape Verde",
  "BQ": "Caribbean Netherlands",
  "KY": "Cayman Islands",
  "CF": "Central African Republic",
  "EA": "Ceuta & Melilla",
  "TD": "Chad",
  "CL": "Chile",
  "CN": "China",
  "CX": "Christmas Island",
  "CC": "Cocos (Keeling) Islands",
  "CO": "Colombia",
  "KM": "Comoros",
  "CG": "Congo - Brazzaville",
  "CD": "Congo - Kinshasa",
  "CK": "Cook Islands",
  "CR": "Costa Rica",
  "CI": "C\u00f4te d\u2019Ivoire",
  "HR": "Croatia",
  "CU": "Cuba",
  "CW": "Cura\u00e7ao",
  "CY": "Cyprus",
  "CZ": "Czechia",
  "DK": "Denmark",
  "DG": "Diego Garcia",
  "DJ": "Djibouti",
  "DM": "Dominica",
  "DO": "Dominican Republic",
  "EC": "Ecuador",
  "EG": "Egypt",
  "SV": "El Salvador",
  "GQ": "Equatorial Guinea",
  "ER": "Eritrea",
  "EE": "Estonia",
  "ET": "Ethiopia",
  "EZ": "Eurozone",
  "FK": "Falkland Islands",
  "FO": "Faroe Islands",
  "FJ": "Fiji",
  "FI": "Finland",
  "FR": "France",
  "GF": "French Guiana",
  "PF": "French Polynesia",
  "TF": "French Southern Territories",
  "GA": "Gabon",
  "GM": "Gambia",
  "GE": "Georgia",
  "DE": "Germany",
  "GH": "Ghana",
  "GI": "Gibraltar",
  "GR": "Greece",
  "GL": "Greenland",
  "GD": "Grenada",
  "GP": "Guadeloupe",
  "GU": "Guam",
  "GT": "Guatemala",
  "GG": "Guernsey",
  "GN": "Guinea",
  "GW": "Guinea-Bissau",
  "GY": "Guyana",
  "HT": "Haiti",
  "HN": "Honduras",
  "HK": "Hong Kong SAR China",
  "HU": "Hungary",
  "IS": "Iceland",
  "IN": "India",
  "ID": "Indonesia",
  "IR": "Iran",
  "IQ": "Iraq",
  "IE": "Ireland",
  "IM": "Isle of Man",
  "IL": "Israel",
  "IT": "Italy",
  "JM": "Jamaica",
  "JP": "Japan",
  "JE": "Jersey",
  "JO": "Jordan",
  "KZ": "Kazakhstan",
  "KE": "Kenya",
  "KI": "Kiribati",
  "XK": "Kosovo",
  "KW": "Kuwait",
  "KG": "Kyrgyzstan",
  "LA": "Laos",
  "LV": "Latvia",
  "LB": "Lebanon",
  "LS": "Lesotho",
  "LR": "Liberia",
  "LY": "Libya",
  "LI": "Liechtenstein",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "MO": "Macau SAR China",
  "MK": "Macedonia",
  "MG": "Madagascar",
  "MW": "Malawi",
  "MY": "Malaysia",
  "MV": "Maldives",
  "ML": "Mali",
  "MT": "Malta",
  "MH": "Marshall Islands",
  "MQ": "Martinique",
  "MR": "Mauritania",
  "MU": "Mauritius",
  "YT": "Mayotte",
  "MX": "Mexico",
  "FM": "Micronesia",
  "MD": "Moldova",
  "MC": "Monaco",
  "MN": "Mongolia",
  "ME": "Montenegro",
  "MS": "Montserrat",
  "MA": "Morocco",
  "MZ": "Mozambique",
  "MM": "Myanmar (Burma)",
  "NA": "Namibia",
  "NR": "Nauru",
  "NP": "Nepal",
  "NL": "Netherlands",
  "NC": "New Caledonia",
  "NZ": "New Zealand",
  "NI": "Nicaragua",
  "NE": "Niger",
  "NG": "Nigeria",
  "NU": "Niue",
  "NF": "Norfolk Island",
  "MP": "Northern Mariana Islands",
  "NO": "Norway",
  "OM": "Oman",
  "PK": "Pakistan",
  "PW": "Palau",
  "PS": "Palestinian Territories",
  "PA": "Panama",
  "PG": "Papua New Guinea",
  "PY": "Paraguay",
  "PE": "Peru",
  "PH": "Philippines",
  "PN": "Pitcairn Islands",
  "PL": "Poland",
  "PT": "Portugal",
  "PR": "Puerto Rico",
  "QA": "Qatar",
  "RE": "R\u00e9union",
  "RO": "Romania",
  "RU": "Russia",
  "RW": "Rwanda",
  "WS": "Samoa",
  "SM": "San Marino",
  "ST": "S\u00e3o Tom\u00e9 & Pr\u00edncipe",
  "SA": "Saudi Arabia",
  "SN": "Senegal",
  "RS": "Serbia",
  "SC": "Seychelles",
  "SL": "Sierra Leone",
  "SG": "Singapore",
  "SX": "Sint Maarten",
  "SK": "Slovakia",
  "SI": "Slovenia",
  "SB": "Solomon Islands",
  "SO": "Somalia",
  "ZA": "South Africa",
  "GS": "South Georgia & South Sandwich Islands",
  "KR": "South Korea",
  "SS": "South Sudan",
  "ES": "Spain",
  "LK": "Sri Lanka",
  "BL": "St. Barth\u00e9lemy",
  "SH": "St. Helena",
  "KN": "St. Kitts & Nevis",
  "LC": "St. Lucia",
  "MF": "St. Martin",
  "PM": "St. Pierre & Miquelon",
  "VC": "St. Vincent & Grenadines",
  "SD": "Sudan",
  "SR": "Suriname",
  "SJ": "Svalbard & Jan Mayen",
  "SZ": "Swaziland",
  "SE": "Sweden",
  "CH": "Switzerland",
  "SY": "Syria",
  "TW": "Taiwan",
  "TJ": "Tajikistan",
  "TZ": "Tanzania",
  "TH": "Thailand",
  "TL": "Timor-Leste",
  "TG": "Togo",
  "TK": "Tokelau",
  "TO": "Tonga",
  "TT": "Trinidad & Tobago",
  "TA": "Tristan da Cunha",
  "TN": "Tunisia",
  "TR": "Turkey",
  "TM": "Turkmenistan",
  "TC": "Turks & Caicos Islands",
  "TV": "Tuvalu",
  "UM": "U.S. Outlying Islands",
  "VI": "U.S. Virgin Islands",
  "UG": "Uganda",
  "UA": "Ukraine",
  "AE": "United Arab Emirates",
  "GB": "United Kingdom",
  "UN": "United Nations",
  "US": "United States",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VU": "Vanuatu",
  "VA": "Vatican City",
  "VE": "Venezuela",
  "VN": "Vietnam",
  "WF": "Wallis & Futuna",
  "EH": "Western Sahara",
  "YE": "Yemen",
  "ZM": "Zambia",
  "ZW": "Zimbabwe"
}
,
states = [
  {
    "short": "AL",
    "name": "Alabama",
    "country": "US"
  },
  {
    "short": "AK",
    "name": "Alaska",
    "country": "US"
  },
  {
    "short": "AZ",
    "name": "Arizona",
    "country": "US"
  },
  {
    "short": "AR",
    "name": "Arkansas",
    "country": "US"
  },
  {
    "short": "CA",
    "name": "California",
    "country": "US"
  },
  {
    "short": "CO",
    "name": "Colorado",
    "country": "US"
  },
  {
    "short": "CT",
    "name": "Connecticut",
    "country": "US"
  },
  {
    "short": "DC",
    "name": "District of Columbia",
    "alt": ["Washington DC", "Washington D.C."],
    "country": "US"
  },
  {
    "short": "DE",
    "name": "Delaware",
    "country": "US"
  },
  {
    "short": "FL",
    "name": "Florida",
    "country": "US"
  },
  {
    "short": "GA",
    "name": "Georgia",
    "country": "US"
  },
  {
    "short": "HI",
    "name": "Hawaii",
    "country": "US"
  },
  {
    "short": "ID",
    "name": "Idaho",
    "country": "US"
  },
  {
    "short": "IL",
    "name": "Illinois",
    "country": "US"
  },
  {
    "short": "IN",
    "name": "Indiana",
    "country": "US"
  },
  {
    "short": "IA",
    "name": "Iowa",
    "country": "US"
  },
  {
    "short": "KS",
    "name": "Kansas",
    "country": "US"
  },
  {
    "short": "KY",
    "name": "Kentucky",
    "country": "US"
  },
  {
    "short": "LA",
    "name": "Louisiana",
    "country": "US"
  },
  {
    "short": "ME",
    "name": "Maine",
    "country": "US"
  },
  {
    "short": "MD",
    "name": "Maryland",
    "country": "US"
  },
  {
    "short": "MA",
    "name": "Massachusetts",
    "country": "US"
  },
  {
    "short": "MI",
    "name": "Michigan",
    "country": "US"
  },
  {
    "short": "MN",
    "name": "Minnesota",
    "country": "US"
  },
  {
    "short": "MS",
    "name": "Mississippi",
    "country": "US"
  },
  {
    "short": "MO",
    "name": "Missouri",
    "country": "US"
  },
  {
    "short": "MT",
    "name": "Montana",
    "country": "US"
  },
  {
    "short": "NE",
    "name": "Nebraska",
    "country": "US"
  },
  {
    "short": "NV",
    "name": "Nevada",
    "country": "US"
  },
  {
    "short": "NH",
    "name": "New Hampshire",
    "country": "US"
  },
  {
    "short": "NJ",
    "name": "New Jersey",
    "country": "US"
  },
  {
    "short": "NM",
    "name": "New Mexico",
    "country": "US"
  },
  {
    "short": "NY",
    "name": "New York",
    "country": "US"
  },
  {
    "short": "NC",
    "name": "North Carolina",
    "country": "US"
  },
  {
    "short": "ND",
    "name": "North Dakota",
    "country": "US"
  },
  {
    "short": "OH",
    "name": "Ohio",
    "country": "US"
  },
  {
    "short": "OK",
    "name": "Oklahoma",
    "country": "US"
  },
  {
    "short": "OR",
    "name": "Oregon",
    "country": "US"
  },
  {
    "short": "PA",
    "name": "Pennsylvania",
    "country": "US"
  },
  {
    "short": "RI",
    "name": "Rhode Island",
    "country": "US"
  },
  {
    "short": "SC",
    "name": "South Carolina",
    "country": "US"
  },
  {
    "short": "SD",
    "name": "South Dakota",
    "country": "US"
  },
  {
    "short": "TN",
    "name": "Tennessee",
    "country": "US"
  },
  {
    "short": "TX",
    "name": "Texas",
    "country": "US"
  },
  {
    "short": "UT",
    "name": "Utah",
    "country": "US"
  },
  {
    "short": "VT",
    "name": "Vermont",
    "country": "US"
  },
  {
    "short": "VA",
    "name": "Virginia",
    "country": "US"
  },
  {
    "short": "WA",
    "name": "Washington",
    "country": "US"
  },
  {
    "short": "WV",
    "name": "West Virginia",
    "country": "US"
  },
  {
    "short": "WI",
    "name": "Wisconsin",
    "country": "US"
  },
  {
    "short": "WY",
    "name": "Wyoming",
    "country": "US"
  },
  {
    "short": "AS",
    "name": "American Samoa",
    "country": "US"
  },
  {
    "short": "GU",
    "name": "Guam",
    "country": "US"
  },
  {
    "short": "MP",
    "name": "Northern Mariana Islands",
    "country": "US"
  },
  {
    "short": "PR",
    "name": "Puerto Rico",
    "country": "US"
  },
  {
    "short": "UM",
    "name": "United States Minor Outlying Islands",
    "country": "US"
  },
  {
    "short": "VI",
    "name": "Virgin Islands",
    "country": "US"
  },

  {
    "short": "AB",
    "name": "Alberta",
    "country": "CA"
  },
  {
    "short": "BC",
    "name": "British Columbia",
    "country": "CA"
  },
  {
    "short": "MB",
    "name": "Manitoba",
    "country": "CA"
  },
  {
    "short": "NB",
    "name": "New Brunswick",
    "country": "CA"
  },
  {
    "short": "NL",
    "name": "Newfoundland and Labrador",
    "country": "CA",
    "alt": ["Newfoundland", "Labrador"]
  },
  {
    "short": "NS",
    "name": "Nova Scotia",
    "country": "CA"
  },
  {
    "short": "NU",
    "name": "Nunavut",
    "country": "CA"
  },
  {
    "short": "NT",
    "name": "Northwest Territories",
    "country": "CA"
  },
  {
    "short": "ON",
    "name": "Ontario",
    "country": "CA"
  },
  {
    "short": "PE",
    "name": "Prince Edward Island",
    "country": "CA"
  },
  {
    "short": "QC",
    "name": "Quebec",
    "country": "CA"
  },
  {
    "short": "SK",
    "name": "Saskatchewan",
    "country": "CA"
  },
  {
    "short": "YT",
    "name": "Yukon",
    "country": "CA"
  },

  {
    "name": "Ashmore and Cartier Islands",
    "country": "AU"
  },
  {
    "name": "Australian Antarctic Territory",
    "country": "AU"
  },
  {
    "short": "ACT",
    "name": "Australian Capital Territory",
    "country": "AU"
  },
  {
    "short": "CX",
    "name": "Christmas Island",
    "country": "AU"
  },
  {
    "short": "CC",
    "name": "Cocos Islands",
    "alt": ["Keeling Islands"],
    "country": "AU"
  },
  {
    "name": "Coral Sea Islands",
    "country": "AU"
  },
  {
    "short": "HM",
    "name": "Heard Island and McDonald Islands",
    "country": "AU"
  },
  {
    "short": "JBT",
    "name": "Jervis Bay Territory",
    "country": "AU"
  },
  {
    "short": "NSW",
    "name": "New South Wales",
    "country": "AU"
  },
  {
    "short": "NF",
    "name": "Norfolk Island",
    "country": "AU"
  },

  {
    "short": "NT",
    "name": "Northern Territory",
    "country": "AU"
  },
  {
    "short": "QLD",
    "name": "Queensland",
    "country": "AU"
  },
  {
    "short": "SA",
    "name": "South Australia",
    "country": "AU"
  },
  {
    "short": "TAS",
    "name": "Tasmania",
    "country": "AU"
  },
  {
    "short": "VIC",
    "name": "Victoria",
    "country": "AU"
  },
  {
    "short": "WA",
    "name": "Western Australia",
    "country": "AU"
  },

  {
    "name": "Aguascalientes",
    "short": "AG",
    "alt": ["AGS"],
    "country": "MX"
  },
  {
    "name": "Baja California",
    "short": "BC",
    "alt": ["BCN"],
    "country": "MX"
  },
  {
    "name": "Baja California Sur",
    "short": "BS",
    "alt": ["BCS"],
    "country": "MX"
  },
  {
    "name": "Campeche",
    "short": "CM",
    "alt": ["Camp", "CAM"],
    "country": "MX"
  },
  {
    "name": "Chiapas",
    "short": "CS",
    "alt": ["Chis", "CHP"],
    "country": "MX"
  },
  {
    "name": "Chihuahua",
    "short": "CH",
    "alt": ["Chih", "CHH"],
    "country": "MX"
  },
  {
    "name": "Coahuila",
    "short": "MX",
    "alt": ["Coah", "COA"],
    "country": "MX"
  },
  {
    "name": "Colima",
    "short": "CL",
    "alt": ["COL"],
    "country": "MX"
  },
  {
    "name": "Federal District",
    "short": "DF",
    "alt": ["DIF"],
    "country": "MX"
  },
  {
    "name": "Durango",
    "short": "DG",
    "alt": ["Dgo", "DUR"],
    "country": "MX"
  },
  {
    "name": "Guanajuato",
    "short": "GT",
    "alt": ["Gto", "GUA"],
    "country": "MX"
  },
  {
    "name": "Guerrero",
    "short": "GR",
    "alt": ["Gro", "GRO"],
    "country": "MX"
  },
  {
    "name": "Hidalgo",
    "short": "HG",
    "alt": ["Hgo", "HID"],
    "country": "MX"
  },
  {
    "name": "Jalisco",
    "short": "JA",
    "alt": ["Jal", "JAL"],
    "country": "MX"
  },
  {
    "name": "Mexico",
    "short": "ME",
    "alt": ["Edomex", "MEX"],
    "country": "MX"
  },
  {
    "name": "Michoacán",
    "short": "MI",
    "alt": ["Mich", "MIC"],
    "country": "MX"
  },
  {
    "name": "Morelos",
    "short": "MO",
    "alt": ["Mor", "MOR"],
    "country": "MX"
  },
  {
    "name": "Nayarit",
    "short": "NA",
    "alt": ["Nay", "NAY"],
    "country": "MX"
  },
  {
    "name": "Nuevo León",
    "short": "NL",
    "alt": ["NLE"],
    "country": "MX"
  },
  {
    "name": "Oaxaca",
    "short": "OA",
    "alt": ["Oax", "OAX"],
    "country": "MX"
  },
  {
    "name": "Puebla",
    "short": "PU",
    "alt": ["Pue", "PUE"],
    "country": "MX"
  },
  {
    "name": "Querétaro",
    "short": "QE",
    "alt": ["Qro", "QUE"],
    "country": "MX"
  },
  {
    "name": "Quintana Roo",
    "short": "QR",
    "alt": ["Q Roo", "ROO"],
    "country": "MX"
  },
  {
    "name": "San Luis Potosí",
    "short": "SL",
    "alt": ["SLP"],
    "country": "MX"
  },
  {
    "name": "Sinaloa",
    "short": "SI",
    "alt": ["SIN"],
    "country": "MX"
  },
  {
    "name": "Sonora",
    "short": "SO",
    "alt": ["SON"],
    "country": "MX"
  },
  {
    "name": "Tabasco",
    "short": "TB",
    "alt": ["TAB"],
    "country": "MX"
  },
  {
    "name": "Tamaulipas",
    "short": "TM",
    "alt": ["Tamps", "TAM"],
    "country": "MX"
  },
  {
    "name": "Tlaxcala",
    "short": "TL",
    "alt": ["Tlax", "TLA"],
    "country": "MX"
  },
  {
    "name": "Veracruz",
    "short": "VE",
    "alt": ["VER"],
    "country": "MX"
  },
  {
    "name": "Yucatán",
    "short": "YU",
    "alt": ["YUC"],
    "country": "MX"
  },
  {
    "name": "Zacatecas",
    "short": "ZA",
    "alt": ["ZAC"],
    "country": "MX"
  },

  {
    "name": "重庆",
    "short": "渝",
    "english": "Chongqing",
    "country": "CN"
  },
  {
    "name": "黑龙江",
    "short": "黑",
    "english": "Heilongjiang",
    "country": "CN"
  },
  {
    "name": "吉林",
    "short": "吉",
    "english": "Jilin",
    "country": "CN"
  },
  {
    "name": "海南",
    "short": "琼",
    "english": "Hainan",
    "country": "CN"
  },
  {
    "name": "北京",
    "short": "京",
    "english": "Beijing",
    "country": "CN"
  },
  {
    "name": "辽宁",
    "short": "辽",
    "english": "Liaoning",
    "country": "CN"
  },
  {
    "name": "内蒙古",
    "short": "蒙",
    "english": "Inner Mongolia",
    "alt": ["Nei Menggu"],
    "country": "CN"
  },
  {
    "name": "西藏",
    "short": "藏",
    "english": "Xizang",
    "alt": ["Tibet"],
    "country": "CN"
  },
  {
    "name": "青海",
    "short": "青",
    "english": "Qinghai",
    "country": "CN"
  },
  {
    "name": "宁夏",
    "short": "宁",
    "english": "Ningxia",
    "country": "CN"
  },
  {
    "name": "新疆",
    "short": "新",
    "english": "Xinjiang",
    "alt": ["Uygur"],
    "country": "CN"
  },
  {
    "name": "甘肃",
    "short": "甘",
    "english": "Gansu",
    "country": "CN"
  },
  {
    "name": "河北",
    "short": "冀",
    "english": "Hebei",
    "country": "CN"
  },
  {
    "name": "河南",
    "short": "豫",
    "english": "Henan",
    "country": "CN"
  },
  {
    "name": "湖北",
    "short": "鄂",
    "english": "Hubei",
    "country": "CN"
  },
  {
    "name": "湖南",
    "short": "湘",
    "english": "Hunan",
    "country": "CN"
  },
  {
    "name": "山东",
    "short": "鲁",
    "english": "Shandong",
    "country": "CN"
  },
  {
    "name": "江苏",
    "short": "苏",
    "english": "Jiangsu",
    "country": "CN"
  },
  {
    "name": "安徽",
    "short": "皖",
    "english": "Anhui",
    "country": "CN"
  },
  {
    "name": "山西",
    "short": "晋",
    "english": "Shanxi",
    "country": "CN"
  },
  {
    "name": "陕西",
    "short": "陕",
    "english": "Shaanxi",
    "country": "CN"
  },
  {
    "name": "四川",
    "short": "川",
    "english": "sichuan",
    "country": "CN"
  },
  {
    "name": "云南",
    "short": "滇",
    "english": "Yunnan",
    "country": "CN"
  },
  {
    "name": "贵州",
    "short": "黔",
    "english": "Guizhou",
    "country": "CN"
  },
  {
    "name": "浙江",
    "short": "浙",
    "english": "Zhejiang",
    "country": "CN"
  },
  {
    "name": "福建",
    "short": "闽",
    "english": "Fujian",
    "country": "CN"
  },
  {
    "name": "广西",
    "short": "桂",
    "english": "Guangxi",
    "country": "CN"
  },
  {
    "name": "上海",
    "short": "沪",
    "english": "Shanghai",
    "country": "CN"
  },
  {
    "name": "天津",
    "short": "津",
    "english": "Tianjin",
    "country": "CN"
  },
  {
    "name": "香港",
    "short": "港",
    "english": "Hongkong",
    "alt": ["Hong Kong"],
    "country": "CN"
  },
  {
    "name": "澳门",
    "short": "澳",
    "english": "Macau",
    "alt": ["Macao"],
    "country": "CN"
  },
  {
    "name": "台湾",
    "short": "台",
    "english": "Taiwan",
    "country": "CN"
  },
  {
    "name": "江西",
    "short": "赣",
    "english": "Jiangxi",
    "country": "CN"
  },
  {
    "name": "广东",
    "short": "粤",
    "english": "Guangdong",
    "country": "CN"
  },

  {
    "name": "Avon",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Bedfordshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Berkshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Borders",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Bristol",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Buckinghamshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Cambridgeshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Channel Islands",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Cheshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Cleveland",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Cornwall",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Cumbria",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Derbyshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Devon",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Dorset",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Durham",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "East Riding of Yorkshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "East Sussex",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Essex",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Gloucestershire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Greater Manchester",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Hampshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Herefordshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Hertfordshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Humberside",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Isle of Man",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Isle of Wight",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Isles of Scilly",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Kent",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Lancashire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Leicestershire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Lincolnshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "London",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Merseyside",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Middlesex",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Norfolk",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "North Yorkshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Northamptonshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Northumberland",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Nottinghamshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Oxfordshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Rutland",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Shropshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Somerset",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "South Yorkshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Staffordshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Suffolk",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Surrey",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Tyne and Wear",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Warwickshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "West Midlands",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "West Sussex",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "West Yorkshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Wiltshire",
    "country": "GB",
    "region": "England"
  },
  {
    "name": "Worcestershire",
    "country": "GB",
    "region": "England"
  },

  {
    "name": "Antrim",
    "country": "GB",
    "region": "Northern Ireland"
  },
  {
    "name": "Down",
    "country": "GB",
    "region": "Northern Ireland"
  },
  {
    "name": "Fermanagh",
    "country": "GB",
    "region": "Northern Ireland"
  },
  {
    "name": "Londonderry",
    "country": "GB",
    "region": "Northern Ireland"
  },
  {
    "name": "Tyrone",
    "country": "GB",
    "region": "Northern Ireland"
  },

  {
    "name": "Aberdeen City",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Aberdeenshire",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Angus",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Argyll and Bute",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Armagh",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Carmarthenshire",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Clackmannan",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Dumfries and Galloway",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "East Ayrshire",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "East Dunbartonshire",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "East Lothian",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "East Renfrewshire",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Edinburgh City",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Falkirk",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Fife",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Glasgow",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Highland",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Inverclyde",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Midlothian",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Moray",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "North Ayrshire",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "North Lanarkshire",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Orkney",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Perthshire and Kinross",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Renfrewshire",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Roxburghshire",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Shetland",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "South Ayrshire",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "South Lanarkshire",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Stirling",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "West Dunbartonshire",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "West Lothian",
    "country": "GB",
    "region": "Scotland"
  },
  {
    "name": "Western Isles",
    "country": "GB",
    "region": "Scotland"
  },

  {
    "name": "Blaenau Gwent",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Bridgend",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Caerphilly",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Cardiff",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Ceredigion",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Conwy",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Denbighshire",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Flintshire",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Gwynedd",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Isle of Anglesey",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Merthyr Tydfil",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Monmouthshire",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Neath Port Talbot",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Newport",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Pembrokeshire",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Powys",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Rhondda Cynon Taff",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Swansea",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "The Vale of Glamorgan",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Torfaen",
    "country": "GB",
    "region": "Wales"
  },
  {
    "name": "Wrexham",
    "country": "GB",
    "region": "Wales"
  },

  {
    "short": "BW",
    "name": "Baden-Württemberg",
    "country": "DE"
  },
  {
    "short": "BY",
    "name": "Bayern",
    "country": "DE"
  },
  {
    "short": "BE",
    "name": "Berlin",
    "country": "DE"
  },
  {
    "short": "BB",
    "name": "Brandenburg",
    "country": "DE"
  },
  {
    "short": "HB",
    "name": "Bremen",
    "country": "DE"
  },
  {
    "short": "HH",
    "name": "Hamburg",
    "country": "DE"
  },
  {
    "short": "HE",
    "name": "Hessen",
    "country": "DE"
  },
  {
    "short": "MV",
    "name": "Mecklenburg-Vorpommern",
    "country": "DE"
  },
  {
    "short": "NI",
    "name": "Niedersachsen",
    "country": "DE"
  },
  {
    "short": "NW",
    "name": "Nordrhein-Westfalen",
    "country": "DE"
  },
  {
    "short": "RP",
    "name": "Rheinland-Pfalz",
    "country": "DE"
  },
  {
    "short": "SL",
    "name": "Saarland",
    "country": "DE"
  },
  {
    "short": "SN",
    "name": "Sachsen",
    "country": "DE"
  },
  {
    "short": "ST",
    "name": "Sachsen-Anhalt",
    "country": "DE"
  },
  {
    "short": "SH",
    "name": "Schleswig-Holstein",
    "country": "DE"
  },
  {
    "short": "TH",
    "name": "Thüringen",
    "country": "DE"
  },

  {
    "short": "DR",
    "name": "Drenthe",
    "country": "NL"
  },
  {
    "short": "FL",
    "name": "Flevoland",
    "country": "NL"
  },
  {
    "short": "FR",
    "name": "Friesland",
    "country": "NL",
    "alt": ["Fryslân"]
  },
  {
    "short": "GD",
    "name": "Gelderland",
    "country": "NL"
  },
  {
    "short": "GR",
    "name": "Groningen",
    "country": "NL"
  },
  {
    "short": "LB",
    "name": "Limburg",
    "country": "NL"
  },
  {
    "short": "NB",
    "name": "Noord-Brabant",
    "country": "NL"
  },
  {
    "short": "NH",
    "name": "Noord-Holland",
    "country": "NL"
  },
  {
    "short": "OV",
    "name": "Overijssel",
    "country": "NL"
  },
  {
    "short": "UT",
    "name": "Utrecht",
    "country": "NL"
  },
  {
    "short": "ZH",
    "name": "Zuid-Holland",
    "country": "NL"
  },
  {
    "short": "ZL",
    "name": "Zeeland",
    "country": "NL"
  },

  {
    "short": "ANT",
    "name": "Antwerpen",
    "country": "BE"
  },
  {
    "short": "HAI",
    "name": "Henegouwen",
    "country": "BE",
    "alt": ["Hainaut"]
  },
  {
    "short": "LIE",
    "name": "Luik",
    "country": "BE",
    "alt": ["Liège"]
  },
  {
    "short": "LIM",
    "name": "Limburg",
    "country": "BE"
  },
  {
    "short": "LUX",
    "name": "Luxemburg",
    "country": "BE"
  },
  {
    "short": "NAM",
    "name": "Namen",
    "country": "BE"
  },
  {
    "short": "OVL",
    "name": "Oost-Vlaanderen",
    "country": "BE"
  },
  {
    "short": "VBR",
    "name": "Vlaams-Brabant",
    "country": "BE"
  },
  {
    "short": "WBR",
    "name": "Waals-Brabant",
    "country": "BE"
  },
  {
    "short": "WVL",
    "name": "West-Vlaanderen",
    "country": "BE"
  },

  {
    "name": "Hovedstaden",
    "country": "DK"
  },
  {
    "name": "Midtjylland",
    "country": "DK"
  },
  {
    "name": "Nordjylland",
    "country": "DK"
  },
  {
    "name": "Sjælland",
    "country": "DK"
  },
  {
    "name": "Syddanmark",
    "country": "DK"
  },

  {
    "name": "Adana",
    "country": "TR"
  },
  {
    "name": "Adıyaman",
    "country": "TR"
  },
  {
    "name": "Afyonkarahisar",
    "country": "TR"
  },
  {
    "name": "Ağrı",
    "country": "TR"
  },
  {
    "name": "Amasya",
    "country": "TR"
  },
  {
    "name": "Ankara",
    "country": "TR"
  },
  {
    "name": "Antalya",
    "country": "TR"
  },
  {
    "name": "Artvin",
    "country": "TR"
  },
  {
    "name": "Aydın",
    "country": "TR"
  },
  {
    "name": "Balıkesir",
    "country": "TR"
  },
  {
    "name": "Bilecik",
    "country": "TR"
  },
  {
    "name": "Bingöl",
    "country": "TR"
  },
  {
    "name": "Bitlis",
    "country": "TR"
  },
  {
    "name": "Bolu",
    "country": "TR"
  },
  {
    "name": "Burdur",
    "country": "TR"
  },
  {
    "name": "Bursa",
    "country": "TR"
  },
  {
    "name": "Çanakkale",
    "country": "TR"
  },
  {
    "name": "Çankırı",
    "country": "TR"
  },
  {
    "name": "Çorum",
    "country": "TR"
  },
  {
    "name": "Denizli",
    "country": "TR"
  },
  {
    "name": "Diyarbakır",
    "country": "TR"
  },
  {
    "name": "Edirne",
    "country": "TR"
  },
  {
    "name": "Elazığ",
    "country": "TR"
  },
  {
    "name": "Erzincan",
    "country": "TR"
  },
  {
    "name": "Erzurum",
    "country": "TR"
  },
  {
    "name": "Eskişehir",
    "country": "TR"
  },
  {
    "name": "Gaziantep",
    "country": "TR"
  },
  {
    "name": "Giresun",
    "country": "TR"
  },
  {
    "name": "Gümüşhane",
    "country": "TR"
  },
  {
    "name": "Hakkâri",
    "country": "TR"
  },
  {
    "name": "Hatay",
    "country": "TR"
  },
  {
    "name": "Isparta",
    "country": "TR"
  },
  {
    "name": "Mersin",
    "country": "TR"
  },
  {
    "name": "Istanbul",
    "country": "TR"
  },
  {
    "name": "İzmir",
    "country": "TR"
  },
  {
    "name": "Kars",
    "country": "TR"
  },
  {
    "name": "Kastamonu",
    "country": "TR"
  },
  {
    "name": "Kayseri",
    "country": "TR"
  },
  {
    "name": "Kırklareli",
    "country": "TR"
  },
  {
    "name": "Kırşehir",
    "country": "TR"
  },
  {
    "name": "Kocaeli",
    "country": "TR"
  },
  {
    "name": "Konya",
    "country": "TR"
  },
  {
    "name": "Kütahya",
    "country": "TR"
  },
  {
    "name": "Malatya",
    "country": "TR"
  },
  {
    "name": "Manisa",
    "country": "TR"
  },
  {
    "name": "Kahramanmaraş",
    "country": "TR"
  },
  {
    "name": "Mardin",
    "country": "TR"
  },
  {
    "name": "Muğla",
    "country": "TR"
  },
  {
    "name": "Muş",
    "country": "TR"
  },
  {
    "name": "Nevşehir",
    "country": "TR"
  },
  {
    "name": "Niğde",
    "country": "TR"
  },
  {
    "name": "Ordu",
    "country": "TR"
  },
  {
    "name": "Rize",
    "country": "TR"
  },
  {
    "name": "Sakarya",
    "country": "TR"
  },
  {
    "name": "Samsun",
    "country": "TR"
  },
  {
    "name": "Siirt",
    "country": "TR"
  },
  {
    "name": "Sinop",
    "country": "TR"
  },
  {
    "name": "Sivas",
    "country": "TR"
  },
  {
    "name": "Tekirdağ",
    "country": "TR"
  },
  {
    "name": "Tokat",
    "country": "TR"
  },
  {
    "name": "Trabzon",
    "country": "TR"
  },
  {
    "name": "Tunceli",
    "country": "TR"
  },
  {
    "name": "Şanlıurfa",
    "country": "TR"
  },
  {
    "name": "Uşak",
    "country": "TR"
  },
  {
    "name": "Van",
    "country": "TR"
  },
  {
    "name": "Yozgat",
    "country": "TR"
  },
  {
    "name": "Zonguldak",
    "country": "TR"
  },
  {
    "name": "Aksaray",
    "country": "TR"
  },
  {
    "name": "Bayburt",
    "country": "TR"
  },
  {
    "name": "Karaman",
    "country": "TR"
  },
  {
    "name": "Kırıkkale",
    "country": "TR"
  },
  {
    "name": "Batman",
    "country": "TR"
  },
  {
    "name": "Şırnak",
    "country": "TR"
  },
  {
    "name": "Bartın",
    "country": "TR"
  },
  {
    "name": "Ardahan",
    "country": "TR"
  },
  {
    "name": "Iğdır",
    "country": "TR"
  },
  {
    "name": "Yalova",
    "country": "TR"
  },
  {
    "name": "Karabük",
    "country": "TR"
  },
  {
    "name": "Kilis",
    "country": "TR"
  },
  {
    "name": "Osmaniye",
    "country": "TR"
  },
  {
    "name": "Düzce",
    "country": "TR"
  },

  {
    "short": "ID-AC",
    "name": "Special Region of Aceh",
    "country": "ID"
  },
  {
    "short": "ID-BA",
    "name": "Bali",
    "country": "ID"
  },
  {
    "short": "ID-BB",
    "name": "Bangka–Belitung Islands",
    "country": "ID"
  },
  {
    "short": "ID-BT",
    "name": "Banten",
    "country": "ID"
  },
  {
    "short": "ID-BE",
    "name": "Bengkulu",
    "country": "ID"
  },
  {
    "short": "ID-JT",
    "name": "Central Java",
    "country": "ID"
  },
  {
    "short": "ID-KT",
    "name": "Central Kalimantan",
    "country": "ID"
  },
  {
    "short": "ID-ST",
    "name": "Central Sulawesi",
    "country": "ID"
  },
  {
    "short": "ID-JI",
    "name": "East Java",
    "country": "ID"
  },
  {
    "short": "ID-KI",
    "name": "East Kalimantan",
    "country": "ID"
  },
  {
    "short": "ID-NT",
    "name": "East Nusa Tenggara",
    "country": "ID"
  },
  {
    "short": "ID-GO",
    "name": "Gorontalo",
    "country": "ID"
  },
  {
    "short": "ID-JK",
    "name": "Jakarta Special Capital Region",
    "country": "ID"
  },
  {
    "short": "ID-JA",
    "name": "Jambi",
    "country": "ID"
  },
  {
    "short": "ID-LA",
    "name": "Lampung",
    "country": "ID"
  },
  {
    "short": "ID-MA",
    "name": "Maluku",
    "country": "ID"
  },
  {
    "short": "ID-KU",
    "name": "North Kalimantan",
    "country": "ID"
  },
  {
    "short": "ID-MU",
    "name": "North Maluku",
    "country": "ID"
  },
  {
    "short": "ID-SA",
    "name": "North Sulawesi",
    "country": "ID"
  },
  {
    "short": "ID-SU",
    "name": "North Sumatra",
    "country": "ID"
  },
  {
    "short": "ID-PA",
    "name": "Special Region of Papua",
    "country": "ID"
  },
  {
    "short": "ID-RI",
    "name": "Riau",
    "country": "ID"
  },
  {
    "short": "ID-KR",
    "name": "Riau Islands",
    "country": "ID"
  },
  {
    "short": "ID-SG",
    "name": "Southeast Sulawesi",
    "country": "ID"
  },
  {
    "short": "ID-KS",
    "name": "South Kalimantan",
    "country": "ID"
  },
  {
    "short": "ID-SN",
    "name": "South Sulawesi",
    "country": "ID"
  },
  {
    "short": "ID-SS",
    "name": "South Sumatra",
    "country": "ID"
  },
  {
    "short": "ID-JB",
    "name": "West Java",
    "country": "ID"
  },
  {
    "short": "ID-KB",
    "name": "West Kalimantan",
    "country": "ID"
  },
  {
    "short": "ID-NB",
    "name": "West Nusa Tenggara",
    "country": "ID"
  },
  {
    "short": "ID-PB",
    "name": "Special Region of West Papua",
    "country": "ID"
  },
  {
    "short": "ID-SR",
    "name": "West Sulawesi",
    "country": "ID"
  },
  {
    "short": "ID-SB",
    "name": "West Sumatra",
    "country": "ID"
  },
  {
    "short": "ID-YO",
    "name": "Special Region of Yogyakarta",
    "country": "ID"
  },

  {
    "name": "Irbid",
    "country": "JO"
  },
  {
    "name": "Ajloun",
    "country": "JO"
  },
  {
    "name": "Jerash",
    "country": "JO"
  },
  {
    "name": "Mafraq",
    "country": "JO"
  },
  {
    "name": "Balqa",
    "country": "JO"
  },
  {
    "name": "Amman",
    "country": "JO"
  },
  {
    "name": "Zarqa",
    "country": "JO"
  },
  {
    "name": "Madaba",
    "country": "JO"
  },
  {
    "name": "Karak",
    "country": "JO"
  },
  {
    "name": "Tafilah",
    "country": "JO"
  },
  {
    "name": "Ma'an",
    "country": "JO"
  },
  {
    "name": "Aqaba",
    "country": "JO"
  },

  {
    "short": "AP",
    "name": "Andhra Pradesh",
    "country": "IN"
  },
  {
    "short": "AR",
    "name": "Arunachal Pradesh",
    "country": "IN"
  },
  {
    "short": "AS",
    "name": "Assam",
    "country": "IN"
  },
  {
    "short": "BR",
    "name": "Bihar",
    "country": "IN"
  },
  {
    "short": "CT",
    "name": "Chhattisgarh",
    "country": "IN"
  },
  {
    "short": "GA",
    "name": "Goa",
    "country": "IN"
  },
  {
    "short": "GJ",
    "name": "Gujarat",
    "country": "IN"
  },
  {
    "short": "HR",
    "name": "Haryana",
    "country": "IN"
  },
  {
    "short": "HP",
    "name": "Himachal Pradesh",
    "country": "IN"
  },
  {
    "short": "JK",
    "name": "Jammu and Kashmir",
    "country": "IN"
  },
  {
    "short": "JH",
    "name": "Jharkhand",
    "country": "IN"
  },
  {
    "short": "KA",
    "name": "Karnataka",
    "country": "IN"
  },
  {
    "short": "KL",
    "name": "Kerala",
    "country": "IN"
  },
  {
    "short": "MP",
    "name": "Madhya Pradesh",
    "country": "IN"
  },
  {
    "short": "MH",
    "name": "Maharashtra",
    "country": "IN"
  },
  {
    "short": "MN",
    "name": "Manipur",
    "country": "IN"
  },
  {
    "short": "ML",
    "name": "Meghalaya",
    "country": "IN"
  },
  {
    "short": "MZ",
    "name": "Mizoram",
    "country": "IN"
  },
  {
    "short": "NL",
    "name": "Nagaland",
    "country": "IN"
  },
  {
    "short": "OR",
    "name": "Odisha",
    "country": "IN"
  },
  {
    "short": "PB",
    "name": "Punjab",
    "country": "IN"
  },
  {
    "short": "RJ",
    "name": "Rajasthan",
    "country": "IN"
  },
  {
    "short": "SK",
    "name": "Sikkim",
    "country": "IN"
  },
  {
    "short": "TN",
    "name": "Tamil Nadu",
    "country": "IN"
  },
  {
    "short": "TG",
    "name": "Telangana",
    "country": "IN"
  },
  {
    "short": "TR",
    "name": "Tripura",
    "country": "IN"
  },
  {
    "short": "UP",
    "name": "Uttar Pradesh",
    "country": "IN"
  },
  {
    "short": "UT",
    "name": "Uttarakhand",
    "country": "IN"
  },
  {
    "short": "WB",
    "name": "West Bengal",
    "country": "IN"
  },
  {
    "short": "AN",
    "name": "Andaman and Nicobar Islands",
    "country": "IN"
  },
  {
    "short": "CH",
    "name": "Chandigarh",
    "country": "IN"
  },
  {
    "short": "DN",
    "name": "Dadra and Nagar Haveli",
    "country": "IN"
  },
  {
    "short": "DD",
    "name": "Daman and Diu",
    "country": "IN"
  },
  {
    "short": "LD",
    "name": "Lakshadweep",
    "country": "IN"
  },
  {
    "short": "DL",
    "name": "National Capital Territory of Delhi",
    "country": "IN"
  },
  {
    "short": "PY",
    "name": "Puducherry",
    "country": "IN"
  },


  {
    "name": "ភ្នំពេញ",
    "english": "Phnom Penh Municipality",
    "country": "KH"
  },
  {
    "name": "បន្ទាយមានជ័យ",
    "english": "Banteay Meanchey",
    "country": "KH"
  },
  {
    "name": "បាត់ដំបង",
    "english": "Battambang",
    "country": "KH"
  },
  {
    "name": "កំពង់ចាម",
    "english": "Kampong Cham",
    "country": "KH"
  },
  {
    "name": "កំពង់ឆ្នាំង",
    "english": "Kampong Chhnang",
    "country": "KH"
  },
  {
    "name": "កំពង់ស្ពឺ",
    "english": "Kampong Speu",
    "country": "KH"
  },
  {
    "name": "កំពង់ធំ",
    "english": "Kampong Thom",
    "country": "KH"
  },
  {
    "name": "កំពត",
    "english": "Kampot",
    "country": "KH"
  },
  {
    "name": "កណ្តាល",
    "english": "Kandal",
    "country": "KH"
  },
  {
    "name": "កោះកុង",
    "english": "Koh Kong",
    "country": "KH"
  },
  {
    "name": "កែប",
    "english": "Kep",
    "country": "KH"
  },
  {
    "name": "ក្រចេះ",
    "english": "Kratié",
    "country": "KH"
  },
  {
    "name": "មណ្ឌលគីរី",
    "english": "Mondulkiri",
    "country": "KH"
  },
  {
    "name": "ឧត្តរមានជ័យ",
    "english": "Oddar Meanchey",
    "country": "KH"
  },
  {
    "name": "បៃលិន",
    "english": "Pailin",
    "country": "KH"
  },
  {
    "name": "ព្រះសីហនុ",
    "english": "Preah Sihanouk",
    "country": "KH"
  },
  {
    "name": "ព្រះវិហារ",
    "english": "Preah Vihear",
    "country": "KH"
  },
  {
    "name": "ពោធិ៍សាត់",
    "english": "Pursat",
    "country": "KH"
  },
  {
    "name": "ព្រៃវែង",
    "english": "Prey Veng",
    "country": "KH"
  },
  {
    "name": "រតនគីរី",
    "english": "Ratanakiri",
    "country": "KH"
  },
  {
    "name": "សៀមរាប",
    "english": "Siem Reap",
    "country": "KH"
  },
  {
    "name": "ស្ទឹងត្រែង",
    "english": "Stung Treng",
    "country": "KH"
  },
  {
    "name": "ស្វាយរៀង",
    "english": "Svay Rieng",
    "country": "KH"
  },
  {
    "name": "តាកែវ",
    "english": "Takéo",
    "country": "KH"
  },
  {
    "name": "ត្បូងឃ្មុំ",
    "english": "Tbong Khmum",
    "country": "KH"
  },

  {
    "name": "Addis Ababa",
    "country": "ET"
  },
  {
    "name": "Afar Region",
    "country": "ET"
  },
  {
    "name": "Amhara Region",
    "country": "ET"
  },
  {
    "name": "Benishangul-Gumuz",
    "country": "ET"
  },
  {
    "name": "Dire Dawa",
    "country": "ET"
  },
  {
    "name": "Gambela",
    "country": "ET"
  },
  {
    "name": "Harari",
    "country": "ET"
  },
  {
    "name": "Oromia",
    "country": "ET"
  },
  {
    "name": "Somali",
    "country": "ET"
  },
  {
    "name": "Southern Nations, Nationalities, and Peoples' Region",
    "country": "ET"
  },
  {
    "name": "Tigray Region",
    "country": "ET"
  },

  {
    "name": "Chachapoyas",
    "region": "Amazonas",
    "country": "PE"
  },
  {
    "name": "Bagua",
    "region": "Amazonas",
    "country": "PE"
  },
  {
    "name": "Bongará",
    "region": "Amazonas",
    "country": "PE"
  },
  {
    "name": "Condorcanqui",
    "region": "Amazonas",
    "country": "PE"
  },
  {
    "name": "Luya",
    "region": "Amazonas",
    "country": "PE"
  },
  {
    "name": "Rodríguez de Mendoza",
    "region": "Amazonas",
    "country": "PE"
  },
  {
    "name": "Utcubamba",
    "region": "Amazonas",
    "country": "PE"
  },
  {
    "name": "Huaraz",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Aija",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Antonio Raymondi",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Asunción",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Bolognesi",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Carhuaz",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Carlos Fermín Fitzcarrald",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Casma",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Corongo",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Huari",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Huarmey",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Huaylas",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Mariscal Luzuriaga",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Ocros",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Pallasca",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Pomabamba",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Recuay",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Santa",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Sihuas",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Yungay",
    "region": "Ancash",
    "country": "PE"
  },
  {
    "name": "Abancay",
    "region": "Apurímac",
    "country": "PE"
  },
  {
    "name": "Andahuaylas",
    "region": "Apurímac",
    "country": "PE"
  },
  {
    "name": "Antabamba",
    "region": "Apurímac",
    "country": "PE"
  },
  {
    "name": "Aymaraes",
    "region": "Apurímac",
    "country": "PE"
  },
  {
    "name": "Cotabambas",
    "region": "Apurímac",
    "country": "PE"
  },
  {
    "name": "Chincheros",
    "region": "Apurímac",
    "country": "PE"
  },
  {
    "name": "Grau",
    "region": "Apurímac",
    "country": "PE"
  },
  {
    "name": "Arequipa",
    "region": "Arequipa",
    "country": "PE"
  },
  {
    "name": "Camaná",
    "region": "Arequipa",
    "country": "PE"
  },
  {
    "name": "Caravelí",
    "region": "Arequipa",
    "country": "PE"
  },
  {
    "name": "Castilla",
    "region": "Arequipa",
    "country": "PE"
  },
  {
    "name": "Caylloma",
    "region": "Arequipa",
    "country": "PE"
  },
  {
    "name": "Condesuyos",
    "region": "Arequipa",
    "country": "PE"
  },
  {
    "name": "Islay",
    "region": "Arequipa",
    "country": "PE"
  },
  {
    "name": "La Unión",
    "region": "Arequipa",
    "country": "PE"
  },
  {
    "name": "Huamanga",
    "region": "Ayacucho",
    "country": "PE"
  },
  {
    "name": "Cangallo",
    "region": "Ayacucho",
    "country": "PE"
  },
  {
    "name": "Huanca Sancos",
    "region": "Ayacucho",
    "country": "PE"
  },
  {
    "name": "Huanta",
    "region": "Ayacucho",
    "country": "PE"
  },
  {
    "name": "La Mar",
    "region": "Ayacucho",
    "country": "PE"
  },
  {
    "name": "Lucanas",
    "region": "Ayacucho",
    "country": "PE"
  },
  {
    "name": "Parinacochas",
    "region": "Ayacucho",
    "country": "PE"
  },
  {
    "name": "Páucar del Sara Sara",
    "region": "Ayacucho",
    "country": "PE"
  },
  {
    "name": "Sucre",
    "region": "Ayacucho",
    "country": "PE"
  },
  {
    "name": "Víctor Fajardo",
    "region": "Ayacucho",
    "country": "PE"
  },
  {
    "name": "Vilcas Huamán",
    "region": "Ayacucho",
    "country": "PE"
  },
  {
    "name": "Cajamarca",
    "region": "Cajamarca",
    "country": "PE"
  },
  {
    "name": "Cajabamba",
    "region": "Cajamarca",
    "country": "PE"
  },
  {
    "name": "Celendín",
    "region": "Cajamarca",
    "country": "PE"
  },
  {
    "name": "Chota",
    "region": "Cajamarca",
    "country": "PE"
  },
  {
    "name": "Contumazá",
    "region": "Cajamarca",
    "country": "PE"
  },
  {
    "name": "Cutervo",
    "region": "Cajamarca",
    "country": "PE"
  },
  {
    "name": "Hualgayoc",
    "region": "Cajamarca",
    "country": "PE"
  },
  {
    "name": "Jaén",
    "region": "Cajamarca",
    "country": "PE"
  },
  {
    "name": "San Ignacio",
    "region": "Cajamarca",
    "country": "PE"
  },
  {
    "name": "San Marcos",
    "region": "Cajamarca",
    "country": "PE"
  },
  {
    "name": "San Miguel",
    "region": "Cajamarca",
    "country": "PE"
  },
  {
    "name": "San Pablo",
    "region": "Cajamarca",
    "country": "PE"
  },
  {
    "name": "Santa Cruz",
    "region": "Cajamarca",
    "country": "PE"
  },
  {
    "name": "Callao",
    "region": "Callao",
    "country": "PE"
  },
  {
    "name": "Cusco",
    "region": "Cusco",
    "country": "PE"
  },
  {
    "name": "Acomayo",
    "region": "Cusco",
    "country": "PE"
  },
  {
    "name": "Anta",
    "region": "Cusco",
    "country": "PE"
  },
  {
    "name": "Calca",
    "region": "Cusco",
    "country": "PE"
  },
  {
    "name": "Canas",
    "region": "Cusco",
    "country": "PE"
  },
  {
    "name": "Canchis",
    "region": "Cusco",
    "country": "PE"
  },
  {
    "name": "Chumbivilcas",
    "region": "Cusco",
    "country": "PE"
  },
  {
    "name": "Espinar",
    "region": "Cusco",
    "country": "PE"
  },
  {
    "name": "La Convención",
    "region": "Cusco",
    "country": "PE"
  },
  {
    "name": "Paruro",
    "region": "Cusco",
    "country": "PE"
  },
  {
    "name": "Paucartambo",
    "region": "Cusco",
    "country": "PE"
  },
  {
    "name": "Quispicanchi",
    "region": "Cusco",
    "country": "PE"
  },
  {
    "name": "Urubamba",
    "region": "Cusco",
    "country": "PE"
  },
  {
    "name": "Huancavelica",
    "region": "Huancavelica",
    "country": "PE"
  },
  {
    "name": "Acobamba",
    "region": "Huancavelica",
    "country": "PE"
  },
  {
    "name": "Angaraes",
    "region": "Huancavelica",
    "country": "PE"
  },
  {
    "name": "Castrovirreyna",
    "region": "Huancavelica",
    "country": "PE"
  },
  {
    "name": "Churcampa",
    "region": "Huancavelica",
    "country": "PE"
  },
  {
    "name": "Huaytará",
    "region": "Huancavelica",
    "country": "PE"
  },
  {
    "name": "Tayacaja",
    "region": "Huancavelica",
    "country": "PE"
  },
  {
    "name": "Huánuco",
    "region": "Huánuco",
    "country": "PE"
  },
  {
    "name": "Ambo",
    "region": "Huánuco",
    "country": "PE"
  },
  {
    "name": "Dos de Mayo",
    "region": "Huánuco",
    "country": "PE"
  },
  {
    "name": "Huacaybamba",
    "region": "Huánuco",
    "country": "PE"
  },
  {
    "name": "Huamalíes",
    "region": "Huánuco",
    "country": "PE"
  },
  {
    "name": "Leoncio Prado",
    "region": "Huánuco",
    "country": "PE"
  },
  {
    "name": "Marañón",
    "region": "Huánuco",
    "country": "PE"
  },
  {
    "name": "Pachitea",
    "region": "Huánuco",
    "country": "PE"
  },
  {
    "name": "Puerto Inca",
    "region": "Huánuco",
    "country": "PE"
  },
  {
    "name": "Lauricocha",
    "region": "Huánuco",
    "country": "PE"
  },
  {
    "name": "Yarowilca",
    "region": "Huánuco",
    "country": "PE"
  },
  {
    "name": "Ica",
    "region": "Ica",
    "country": "PE"
  },
  {
    "name": "Chincha",
    "region": "Ica",
    "country": "PE"
  },
  {
    "name": "Nazca",
    "region": "Ica",
    "country": "PE"
  },
  {
    "name": "Palpa",
    "region": "Ica",
    "country": "PE"
  },
  {
    "name": "Pisco",
    "region": "Ica",
    "country": "PE"
  },
  {
    "name": "Huancayo",
    "region": "Junín",
    "country": "PE"
  },
  {
    "name": "Concepción",
    "region": "Junín",
    "country": "PE"
  },
  {
    "name": "Chanchamayo",
    "region": "Junín",
    "country": "PE"
  },
  {
    "name": "Jauja",
    "region": "Junín",
    "country": "PE"
  },
  {
    "name": "Junín",
    "region": "Junín",
    "country": "PE"
  },
  {
    "name": "Satipo",
    "region": "Junín",
    "country": "PE"
  },
  {
    "name": "Tarma",
    "region": "Junín",
    "country": "PE"
  },
  {
    "name": "Yauli",
    "region": "Junín",
    "country": "PE"
  },
  {
    "name": "Chupaca",
    "region": "Junín",
    "country": "PE"
  },
  {
    "name": "Trujillo",
    "region": "La Libertad",
    "country": "PE"
  },
  {
    "name": "Ascope",
    "region": "La Libertad",
    "country": "PE"
  },
  {
    "name": "Bolívar",
    "region": "La Libertad",
    "country": "PE"
  },
  {
    "name": "Chepén",
    "region": "La Libertad",
    "country": "PE"
  },
  {
    "name": "Julcán",
    "region": "La Libertad",
    "country": "PE"
  },
  {
    "name": "Otuzco",
    "region": "La Libertad",
    "country": "PE"
  },
  {
    "name": "Pacasmayo",
    "region": "La Libertad",
    "country": "PE"
  },
  {
    "name": "Pataz",
    "region": "La Libertad",
    "country": "PE"
  },
  {
    "name": "Sánchez Carrión",
    "region": "La Libertad",
    "country": "PE"
  },
  {
    "name": "Santiago de Chuco",
    "region": "La Libertad",
    "country": "PE"
  },
  {
    "name": "Gran Chimú",
    "region": "La Libertad",
    "country": "PE"
  },
  {
    "name": "Virú",
    "region": "La Libertad",
    "country": "PE"
  },
  {
    "name": "Chiclayo",
    "region": "Lambayeque",
    "country": "PE"
  },
  {
    "name": "Ferreñafe",
    "region": "Lambayeque",
    "country": "PE"
  },
  {
    "name": "Lambayeque",
    "region": "Lambayeque",
    "country": "PE"
  },
  {
    "name": "Lima",
    "region": "autonomous",
    "country": "PE"
  },
  {
    "name": "Huaura",
    "region": "Lima",
    "country": "PE"
  },
  {
    "name": "Barranca",
    "region": "Lima",
    "country": "PE"
  },
  {
    "name": "Cajatambo",
    "region": "Lima",
    "country": "PE"
  },
  {
    "name": "Canta",
    "region": "Lima",
    "country": "PE"
  },
  {
    "name": "Cañete",
    "region": "Lima",
    "country": "PE"
  },
  {
    "name": "Huaral",
    "region": "Lima",
    "country": "PE"
  },
  {
    "name": "Huarochirí",
    "region": "Lima",
    "country": "PE"
  },
  {
    "name": "Oyón",
    "region": "Lima",
    "country": "PE"
  },
  {
    "name": "Yauyos",
    "region": "Lima",
    "country": "PE"
  },
  {
    "name": "Maynas",
    "region": "Loreto",
    "country": "PE"
  },
  {
    "name": "Alto Amazonas",
    "region": "Loreto",
    "country": "PE"
  },
  {
    "name": "Loreto",
    "region": "Loreto",
    "country": "PE"
  },
  {
    "name": "Mariscal Ramón Castilla",
    "region": "Loreto",
    "country": "PE"
  },
  {
    "name": "Putumayo",
    "region": "Loreto",
    "country": "PE"
  },
  {
    "name": "Requena",
    "region": "Loreto",
    "country": "PE"
  },
  {
    "name": "Ucayali",
    "region": "Loreto",
    "country": "PE"
  },
  {
    "name": "Datem del Marañón",
    "region": "Loreto",
    "country": "PE"
  },
  {
    "name": "Tambopata",
    "region": "Madre de Dios",
    "country": "PE"
  },
  {
    "name": "Manú",
    "region": "Madre de Dios",
    "country": "PE"
  },
  {
    "name": "Tahuamanu",
    "region": "Madre de Dios",
    "country": "PE"
  },
  {
    "name": "Mariscal Nieto",
    "region": "Moquegua",
    "country": "PE"
  },
  {
    "name": "General Sánchez Cerro",
    "region": "Moquegua",
    "country": "PE"
  },
  {
    "name": "Ilo",
    "region": "Moquegua",
    "country": "PE"
  },
  {
    "name": "Pasco",
    "region": "Pasco",
    "country": "PE"
  },
  {
    "name": "Daniel Alcídes Carrión",
    "region": "Pasco",
    "country": "PE"
  },
  {
    "name": "Oxapampa",
    "region": "Pasco",
    "country": "PE"
  },
  {
    "name": "Piura",
    "region": "Piura",
    "country": "PE"
  },
  {
    "name": "Ayabaca",
    "region": "Piura",
    "country": "PE"
  },
  {
    "name": "Huancabamba",
    "region": "Piura",
    "country": "PE"
  },
  {
    "name": "Morropón",
    "region": "Piura",
    "country": "PE"
  },
  {
    "name": "Paita",
    "region": "Piura",
    "country": "PE"
  },
  {
    "name": "Sullana",
    "region": "Piura",
    "country": "PE"
  },
  {
    "name": "Talara",
    "region": "Piura",
    "country": "PE"
  },
  {
    "name": "Sechura",
    "region": "Piura",
    "country": "PE"
  },
  {
    "name": "Puno",
    "region": "Puno",
    "country": "PE"
  },
  {
    "name": "Azángaro",
    "region": "Puno",
    "country": "PE"
  },
  {
    "name": "Carabaya",
    "region": "Puno",
    "country": "PE"
  },
  {
    "name": "Chucuito",
    "region": "Puno",
    "country": "PE"
  },
  {
    "name": "El Collao",
    "region": "Puno",
    "country": "PE"
  },
  {
    "name": "Huancané",
    "region": "Puno",
    "country": "PE"
  },
  {
    "name": "Lampa",
    "region": "Puno",
    "country": "PE"
  },
  {
    "name": "Melgar",
    "region": "Puno",
    "country": "PE"
  },
  {
    "name": "Moho",
    "region": "Puno",
    "country": "PE"
  },
  {
    "name": "San Antonio de Putina",
    "region": "Puno",
    "country": "PE"
  },
  {
    "name": "San Román",
    "region": "Puno",
    "country": "PE"
  },
  {
    "name": "Sandia",
    "region": "Puno",
    "country": "PE"
  },
  {
    "name": "Yunguyo",
    "region": "Puno",
    "country": "PE"
  },
  {
    "name": "Moyobamba",
    "region": "San Martín",
    "country": "PE"
  },
  {
    "name": "Bellavista",
    "region": "San Martín",
    "country": "PE"
  },
  {
    "name": "El Dorado",
    "region": "San Martín",
    "country": "PE"
  },
  {
    "name": "Huallaga",
    "region": "San Martín",
    "country": "PE"
  },
  {
    "name": "Lamas",
    "region": "San Martín",
    "country": "PE"
  },
  {
    "name": "Mariscal Cáceres",
    "region": "San Martín",
    "country": "PE"
  },
  {
    "name": "Picota",
    "region": "San Martín",
    "country": "PE"
  },
  {
    "name": "Rioja",
    "region": "San Martín",
    "country": "PE"
  },
  {
    "name": "San Martín",
    "region": "San Martín",
    "country": "PE"
  },
  {
    "name": "Tocache",
    "region": "San Martín",
    "country": "PE"
  },
  {
    "name": "Tacna",
    "region": "Tacna",
    "country": "PE"
  },
  {
    "name": "Candarave",
    "region": "Tacna",
    "country": "PE"
  },
  {
    "name": "Jorge Basadre",
    "region": "Tacna",
    "country": "PE"
  },
  {
    "name": "Tarata",
    "region": "Tacna",
    "country": "PE"
  },
  {
    "name": "Tumbes",
    "region": "Tumbes",
    "country": "PE"
  },
  {
    "name": "Contralmirante Villar",
    "region": "Tumbes",
    "country": "PE"
  },
  {
    "name": "Zarumilla",
    "region": "Tumbes",
    "country": "PE"
  },
  {
    "name": "Coronel Portillo",
    "region": "Ucayali",
    "country": "PE"
  },
  {
    "name": "Atalaya",
    "region": "Ucayali",
    "country": "PE"
  },
  {
    "name": "Padre Abad",
    "region": "Ucayali",
    "country": "PE"
  },
  {
    "name": "Purús",
    "region": "Ucayali",
    "country": "PE"
  },

  {
    "name": "Camagüey",
    "country": "CU"
  },
  {
    "name": "Ciego de Ávila",
    "country": "CU"
  },
  {
    "name": "Cienfuegos",
    "country": "CU"
  },
  {
    "name": "Havana",
    "country": "CU"
  },
  {
    "name": "Bayamo",
    "country": "CU"
  },
  {
    "name": "Guantánamo",
    "country": "CU"
  },
  {
    "name": "Holguín",
    "country": "CU"
  },
  {
    "name": "Nueva Gerona",
    "country": "CU"
  },
  {
    "name": "Artemisa",
    "country": "CU"
  },
  {
    "name": "Las Tunas",
    "country": "CU"
  },
  {
    "name": "Matanzas",
    "country": "CU"
  },
  {
    "name": "San José de las Lajas",
    "country": "CU"
  },
  {
    "name": "Pinar del Río",
    "country": "CU"
  },
  {
    "name": "Sancti Spíritus",
    "country": "CU"
  },
  {
    "name": "Santiago de Cuba",
    "country": "CU"
  },
  {
    "name": "Santa Clara",
    "country": "CU"
  },

  {
    "name": "Ciudad Autónoma de Buenos Aires",
    "country": "AR"
  },
  {
    "name": "Buenos Aires",
    "country": "AR"
  },
  {
    "name": "Catamarca",
    "country": "AR"
  },
  {
    "name": "Chaco",
    "country": "AR"
  },
  {
    "name": "Chubut",
    "country": "AR"
  },
  {
    "name": "Córdoba",
    "country": "AR"
  },
  {
    "name": "Corrientes",
    "country": "AR"
  },
  {
    "name": "Entre Ríos",
    "country": "AR"
  },
  {
    "name": "Formosa",
    "country": "AR"
  },
  {
    "name": "Jujuy",
    "country": "AR"
  },
  {
    "name": "La Pampa",
    "country": "AR"
  },
  {
    "name": "La Rioja",
    "country": "AR"
  },
  {
    "name": "Mendoza",
    "country": "AR"
  },
  {
    "name": "Misiones",
    "country": "AR"
  },
  {
    "name": "Neuquén",
    "country": "AR"
  },
  {
    "name": "Río Negro",
    "country": "AR"
  },
  {
    "name": "Salta",
    "country": "AR"
  },
  {
    "name": "San Juan",
    "country": "AR"
  },
  {
    "name": "San Luis",
    "country": "AR"
  },
  {
    "name": "Santa Cruz",
    "country": "AR"
  },
  {
    "name": "Santa Fe",
    "country": "AR"
  },
  {
    "name": "Santiago del Estero",
    "country": "AR"
  },
  {
    "name": "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    "country": "AR"
  },
  {
    "name": "Tucumán",
    "country": "AR"
  },

  {
    "name": "Arica",
    "region": "XV Arica and Parinacota",
    "country": "CL"
  },
  {
    "name": "Parinacota",
    "region": "XV Arica and Parinacota",
    "country": "CL"
  },
  {
    "name": "Iquique",
    "region": "I Tarapacá",
    "country": "CL"
  },
  {
    "name": "Tamarugal",
    "region": "I Tarapacá",
    "country": "CL"
  },
  {
    "name": "Antofagasta",
    "region": "II Antofagasta",
    "country": "CL"
  },
  {
    "name": "El Loa",
    "region": "II Antofagasta",
    "country": "CL"
  },
  {
    "name": "Tocopilla",
    "region": "II Antofagasta",
    "country": "CL"
  },
  {
    "name": "Copiapó",
    "region": "III Atacama",
    "country": "CL"
  },
  {
    "name": "Huasco",
    "region": "III Atacama",
    "country": "CL"
  },
  {
    "name": "Chañaral",
    "region": "III Atacama",
    "country": "CL"
  },
  {
    "name": "Elqui",
    "region": "IV Coquimbo",
    "country": "CL"
  },
  {
    "name": "Limarí",
    "region": "IV Coquimbo",
    "country": "CL"
  },
  {
    "name": "Choapa",
    "region": "IV Coquimbo",
    "country": "CL"
  },
  {
    "name": "Isla de Pascua",
    "region": "V Valparaíso",
    "country": "CL"
  },
  {
    "name": "Los Andes",
    "region": "V Valparaíso",
    "country": "CL"
  },
  {
    "name": "Marga Marga",
    "region": "V Valparaíso",
    "country": "CL"
  },
  {
    "name": "Petorca",
    "region": "V Valparaíso",
    "country": "CL"
  },
  {
    "name": "Quillota",
    "region": "V Valparaíso",
    "country": "CL"
  },
  {
    "name": "San Antonio",
    "region": "V Valparaíso",
    "country": "CL"
  },
  {
    "name": "San Felipe de Aconcagua",
    "region": "V Valparaíso",
    "country": "CL"
  },
  {
    "name": "Valparaíso",
    "region": "V Valparaíso",
    "country": "CL"
  },
  {
    "name": "Cachapoal",
    "region": "VI O'Higgins",
    "country": "CL"
  },
  {
    "name": "Colchagua",
    "region": "VI O'Higgins",
    "country": "CL"
  },
  {
    "name": "Cardenal Caro",
    "region": "VI O'Higgins",
    "country": "CL"
  },
  {
    "name": "Talca",
    "region": "VII Maule",
    "country": "CL"
  },
  {
    "name": "Linares",
    "region": "VII Maule",
    "country": "CL"
  },
  {
    "name": "Curicó",
    "region": "VII Maule",
    "country": "CL"
  },
  {
    "name": "Cauquenes",
    "region": "VII Maule",
    "country": "CL"
  },
  {
    "name": "Concepción",
    "region": "VIII Biobío",
    "country": "CL"
  },
  {
    "name": "Ñuble",
    "region": "VIII Biobío",
    "country": "CL"
  },
  {
    "name": "Biobío",
    "region": "VIII Biobío",
    "country": "CL"
  },
  {
    "name": "Arauco",
    "region": "VIII Biobío",
    "country": "CL"
  },
  {
    "name": "Cautin",
    "region": "IX Araucanía",
    "country": "CL"
  },
  {
    "name": "Malleco",
    "region": "IX Araucanía",
    "country": "CL"
  },
  {
    "name": "Valdivia",
    "region": "XIV Los Ríos",
    "country": "CL"
  },
  {
    "name": "Ranco",
    "region": "XIV Los Ríos",
    "country": "CL"
  },
  {
    "name": "Llanquihue",
    "region": "X Los Lagos",
    "country": "CL"
  },
  {
    "name": "Osorno",
    "region": "X Los Lagos",
    "country": "CL"
  },
  {
    "name": "Chiloe",
    "region": "X Los Lagos",
    "country": "CL"
  },
  {
    "name": "Palena",
    "region": "X Los Lagos",
    "country": "CL"
  },
  {
    "name": "Coihaique",
    "region": "XI Aisén",
    "country": "CL"
  },
  {
    "name": "Aisén",
    "region": "XI Aisén",
    "country": "CL"
  },
  {
    "name": "General Carrera",
    "region": "XI Aisén",
    "country": "CL"
  },
  {
    "name": "Capitan Prat",
    "region": "XI Aisén",
    "country": "CL"
  },
  {
    "name": "Magallanes",
    "region": "XII Magallanes",
    "country": "CL"
  },
  {
    "name": "Ultima Esperanza",
    "region": "XII Magallanes",
    "country": "CL"
  },
  {
    "name": "Tierra del Fuego",
    "region": "XII Magallanes",
    "country": "CL"
  },
  {
    "name": "Antártica Chilena",
    "region": "XII Magallanes",
    "country": "CL"
  },
  {
    "name": "Santiago",
    "region": "RM Santiago Metropolitan",
    "country": "CL"
  },
  {
    "name": "Cordillera",
    "region": "RM Santiago Metropolitan",
    "country": "CL"
  },
  {
    "name": "Maipo",
    "region": "RM Santiago Metropolitan",
    "country": "CL"
  },
  {
    "name": "Talagante",
    "region": "RM Santiago Metropolitan",
    "country": "CL"
  },
  {
    "name": "Melipilla",
    "region": "RM Santiago Metropolitan",
    "country": "CL"
  },
  {
    "name": "Chacabuco",
    "region": "RM Santiago Metropolitan",
    "country": "CL"
  },

  {
    "name": "Cercado",
    "region": "Beni",
    "country": "BO"
  },
  {
    "name": "Iténez",
    "region": "Beni",
    "country": "BO"
  },
  {
    "name": "José Ballivián",
    "region": "Beni",
    "country": "BO"
  },
  {
    "name": "Mamoré",
    "region": "Beni",
    "country": "BO"
  },
  {
    "name": "Marbán",
    "region": "Beni",
    "country": "BO"
  },
  {
    "name": "Moxos",
    "region": "Beni",
    "country": "BO"
  },
  {
    "name": "Vaca Díez",
    "region": "Beni",
    "country": "BO"
  },
  {
    "name": "Yacuma",
    "region": "Beni",
    "country": "BO"
  },
  {
    "name": "Azurduy",
    "region": "Chuquisaca",
    "country": "BO"
  },
  {
    "name": "Belisario Boeto",
    "region": "Chuquisaca",
    "country": "BO"
  },
  {
    "name": "Hernando Siles",
    "region": "Chuquisaca",
    "country": "BO"
  },
  {
    "name": "Jaime Zudáñez",
    "region": "Chuquisaca",
    "country": "BO"
  },
  {
    "name": "Luis Calvo",
    "region": "Chuquisaca",
    "country": "BO"
  },
  {
    "name": "Nor Cinti",
    "region": "Chuquisaca",
    "country": "BO"
  },
  {
    "name": "Oropeza",
    "region": "Chuquisaca",
    "country": "BO"
  },
  {
    "name": "Sud Cinti",
    "region": "Chuquisaca",
    "country": "BO"
  },
  {
    "name": "Tomina",
    "region": "Chuquisaca",
    "country": "BO"
  },
  {
    "name": "Yamparáez",
    "region": "Chuquisaca",
    "country": "BO"
  },
  {
    "name": "Arani",
    "region": "Cochabamba",
    "country": "BO"
  },
  {
    "name": "Arque",
    "region": "Cochabamba",
    "country": "BO"
  },
  {
    "name": "Ayopaya",
    "region": "Cochabamba",
    "country": "BO"
  },
  {
    "name": "Capinota",
    "region": "Cochabamba",
    "country": "BO"
  },
  {
    "name": "Carrasco",
    "region": "Cochabamba",
    "country": "BO"
  },
  {
    "name": "Cercado",
    "region": "Cochabamba",
    "country": "BO"
  },
  {
    "name": "Chapare",
    "region": "Cochabamba",
    "country": "BO"
  },
  {
    "name": "Esteban Arce",
    "region": "Cochabamba",
    "country": "BO"
  },
  {
    "name": "Germán Jordán",
    "region": "Cochabamba",
    "country": "BO"
  },
  {
    "name": "Mizque",
    "region": "Cochabamba",
    "country": "BO"
  },
  {
    "name": "Campero",
    "region": "Cochabamba",
    "country": "BO"
  },
  {
    "name": "Punata",
    "region": "Cochabamba",
    "country": "BO"
  },
  {
    "name": "Quillacollo",
    "region": "Cochabamba",
    "country": "BO"
  },
  {
    "name": "Bolívar",
    "region": "Cochabamba",
    "country": "BO"
  },
  {
    "name": "Tapacarí",
    "region": "Cochabamba",
    "country": "BO"
  },
  {
    "name": "Tiraque",
    "region": "Cochabamba",
    "country": "BO"
  },
  {
    "name": "Abel Iturralde",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Aroma",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Bautista Saavedra",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Caranavi",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Eliodoro Camacho",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Franz Tamayo",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Gualberto Villarroel",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Ingavi",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Inquisivi",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "José Manuel Pando",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Larecaja",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Loayza",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Los Andes",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Manco Kapac",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Muñecas",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Nor Yungas",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Omasuyos",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Pacajes",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Murillo",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Sud Yungas",
    "region": "La Paz",
    "country": "BO"
  },
  {
    "name": "Atahuallpa",
    "region": "Oruro",
    "country": "BO"
  },
  {
    "name": "Carangas",
    "region": "Oruro",
    "country": "BO"
  },
  {
    "name": "Cercado",
    "region": "Oruro",
    "country": "BO"
  },
  {
    "name": "Eduardo Avaroa",
    "region": "Oruro",
    "country": "BO"
  },
  {
    "name": "Ladislao Cabrera",
    "region": "Oruro",
    "country": "BO"
  },
  {
    "name": "Litoral",
    "region": "Oruro",
    "country": "BO"
  },
  {
    "name": "Nor Carangas",
    "region": "Oruro",
    "country": "BO"
  },
  {
    "name": "Pantaléon Dalence",
    "region": "Oruro",
    "country": "BO"
  },
  {
    "name": "Poopó",
    "region": "Oruro",
    "country": "BO"
  },
  {
    "name": "Puerto de Mejillones",
    "region": "Oruro",
    "country": "BO"
  },
  {
    "name": "Sajama",
    "region": "Oruro",
    "country": "BO"
  },
  {
    "name": "San Pedro de Totora",
    "region": "Oruro",
    "country": "BO"
  },
  {
    "name": "Saucarí",
    "region": "Oruro",
    "country": "BO"
  },
  {
    "name": "Sebastián Pagador",
    "region": "Oruro",
    "country": "BO"
  },
  {
    "name": "Sud Carangas",
    "region": "Oruro",
    "country": "BO"
  },
  {
    "name": "Tomas Barrón",
    "region": "Oruro",
    "country": "BO"
  },
  {
    "name": "Abuná",
    "region": "Pando",
    "country": "BO"
  },
  {
    "name": "Federico Román",
    "region": "Pando",
    "country": "BO"
  },
  {
    "name": "Madre de Dios",
    "region": "Pando",
    "country": "BO"
  },
  {
    "name": "Manuripi",
    "region": "Pando",
    "country": "BO"
  },
  {
    "name": "Nicolás Suárez",
    "region": "Pando",
    "country": "BO"
  },
  {
    "name": "Alonso de Ibáñez",
    "region": "Potosí",
    "country": "BO"
  },
  {
    "name": "Antonio Quijarro",
    "region": "Potosí",
    "country": "BO"
  },
  {
    "name": "Bernardino Bilbao",
    "region": "Potosí",
    "country": "BO"
  },
  {
    "name": "Charcas",
    "region": "Potosí",
    "country": "BO"
  },
  {
    "name": "Chayanta",
    "region": "Potosí",
    "country": "BO"
  },
  {
    "name": "Cornelio Saavedra",
    "region": "Potosí",
    "country": "BO"
  },
  {
    "name": "Daniel Campos",
    "region": "Potosí",
    "country": "BO"
  },
  {
    "name": "Enrique Baldivieso",
    "region": "Potosí",
    "country": "BO"
  },
  {
    "name": "José María Linares",
    "region": "Potosí",
    "country": "BO"
  },
  {
    "name": "Modesto Omiste",
    "region": "Potosí",
    "country": "BO"
  },
  {
    "name": "Nor Chichas",
    "region": "Potosí",
    "country": "BO"
  },
  {
    "name": "Nor Lípez",
    "region": "Potosí",
    "country": "BO"
  },
  {
    "name": "Rafael Bustillo",
    "region": "Potosí",
    "country": "BO"
  },
  {
    "name": "Sur Chichas",
    "region": "Potosí",
    "country": "BO"
  },
  {
    "name": "Sur Lípez",
    "region": "Potosí",
    "country": "BO"
  },
  {
    "name": "Tomás Frías",
    "region": "Potosí",
    "country": "BO"
  },
  {
    "name": "Andrés Ibáñez",
    "region": "Santa Cruz",
    "country": "BO"
  },
  {
    "name": "Ángel Sandoval",
    "region": "Santa Cruz",
    "country": "BO"
  },
  {
    "name": "Chiquitos",
    "region": "Santa Cruz",
    "country": "BO"
  },
  {
    "name": "Cordillera",
    "region": "Santa Cruz",
    "country": "BO"
  },
  {
    "name": "Florida",
    "region": "Santa Cruz",
    "country": "BO"
  },
  {
    "name": "Germán Busch",
    "region": "Santa Cruz",
    "country": "BO"
  },
  {
    "name": "Guarayos",
    "region": "Santa Cruz",
    "country": "BO"
  },
  {
    "name": "Ichilo",
    "region": "Santa Cruz",
    "country": "BO"
  },
  {
    "name": "Ignacio Warnes",
    "region": "Santa Cruz",
    "country": "BO"
  },
  {
    "name": "José Miguel de Velasco",
    "region": "Santa Cruz",
    "country": "BO"
  },
  {
    "name": "Manuel María Caballero",
    "region": "Santa Cruz",
    "country": "BO"
  },
  {
    "name": "Ñuflo de Chávez",
    "region": "Santa Cruz",
    "country": "BO"
  },
  {
    "name": "Obispo Santistevan",
    "region": "Santa Cruz",
    "country": "BO"
  },
  {
    "name": "Sara",
    "region": "Santa Cruz",
    "country": "BO"
  },
  {
    "name": "Vallegrande",
    "region": "Santa Cruz",
    "country": "BO"
  },
  {
    "name": "Aniceto Arce",
    "region": "Tarija",
    "country": "BO"
  },
  {
    "name": "Burnet O'Connor",
    "region": "Tarija",
    "country": "BO"
  },
  {
    "name": "Cercado",
    "region": "Tarija",
    "country": "BO"
  },
  {
    "name": "Eustaquio Méndez",
    "region": "Tarija",
    "country": "BO"
  },
  {
    "name": "Gran Chaco",
    "region": "Tarija",
    "country": "BO"
  },
  {
    "name": "José María Avilés",
    "region": "Tarija",
    "country": "BO"
  },

  {
    "name": "La Coruña",
    "short": "C",
    "country": "ES"
  },
  {
    "name": "Lugo",
    "short": "LU",
    "country": "ES"
  },
  {
    "name": "Vizcaya",
    "short": "BI",
    "country": "ES"
  },
  {
    "name": "Guipúzcoa",
    "short": "SS",
    "country": "ES"
  },
  {
    "name": "Huesca",
    "short": "HU",
    "country": "ES"
  },
  {
    "name": "Lérida",
    "short": "L",
    "country": "ES"
  },
  {
    "name": "Gerona",
    "short": "GI",
    "country": "ES"
  },
  {
    "name": "Barcelona",
    "short": "B",
    "country": "ES"
  },
  {
    "name": "Tarragona",
    "short": "T",
    "country": "ES"
  },
  {
    "name": "Castellón",
    "short": "CS",
    "country": "ES"
  },
  {
    "name": "Valencia",
    "short": "V",
    "country": "ES"
  },
  {
    "name": "Alicante",
    "short": "A",
    "country": "ES"
  },
  {
    "name": "Murcia",
    "short": "MU",
    "country": "ES"
  },
  {
    "name": "Zaragoza",
    "short": "Z",
    "country": "ES"
  },
  {
    "name": "Teruel",
    "short": "TE",
    "country": "ES"
  },
  {
    "name": "Cuenca",
    "short": "CU",
    "country": "ES"
  },
  {
    "name": "Albacete",
    "short": "AB",
    "country": "ES"
  },
  {
    "name": "Almeria",
    "short": "AL",
    "country": "ES"
  },
  {
    "name": "Granada",
    "short": "GR",
    "country": "ES"
  },
  {
    "name": "Málaga",
    "short": "MA",
    "country": "ES"
  },
  {
    "name": "Tenerife",
    "short": "TF",
    "country": "ES"
  },
  {
    "name": "Cádiz",
    "short": "CA",
    "country": "ES"
  },
  {
    "name": "Sevilla",
    "short": "SE",
    "country": "ES"
  },
  {
    "name": "Huelva",
    "short": "H",
    "country": "ES"
  },
  {
    "name": "Las Palmas",
    "short": "GC",
    "country": "ES"
  },
  {
    "name": "Madrid",
    "short": "M",
    "country": "ES"
  },
  {
    "name": "Badajoz",
    "short": "BA",
    "country": "ES"
  },
  {
    "name": "Cáceres",
    "short": "CC",
    "country": "ES"
  },
  {
    "name": "Toledo",
    "short": "TO",
    "country": "ES"
  },
  {
    "name": "Ciudad Real",
    "short": "CR",
    "country": "ES"
  },
  {
    "name": "Salamanca",
    "short": "SA",
    "country": "ES"
  },
  {
    "name": "Córdoba",
    "short": "CO",
    "country": "ES"
  },
  {
    "name": "Jaén",
    "short": "J",
    "country": "ES"
  },
  {
    "name": "Ávila",
    "short": "AV",
    "country": "ES"
  },
  {
    "name": "Valladolid",
    "short": "VA",
    "country": "ES"
  },
  {
    "name": "Zamora",
    "short": "ZA",
    "country": "ES"
  },
  {
    "name": "Álava",
    "short": "VI",
    "country": "ES"
  },
  {
    "name": "Segovia",
    "short": "SG",
    "country": "ES"
  },
  {
    "name": "Burgos",
    "short": "BU",
    "country": "ES"
  },
  {
    "name": "Pontevedra",
    "short": "PO",
    "country": "ES"
  },
  {
    "name": "León",
    "short": "LE",
    "country": "ES"
  },
  {
    "name": "Orense",
    "short": "OU",
    "country": "ES"
  },
  {
    "name": "Palencia",
    "short": "P",
    "country": "ES"
  },
  {
    "name": "La Rioja",
    "short": "LO",
    "country": "ES"
  },
  {
    "name": "Soria",
    "short": "SO",
    "country": "ES"
  },
  {
    "name": "Guadalajara",
    "short": "GU",
    "country": "ES"
  },

  {
    "name": "বরগুনা",
    "english": "Barguna",
    "region": "Barisal",
    "country": "BD"
  },
  {
    "name": "বরিশাল",
    "english": "Barisal",
    "region": "Barisal",
    "country": "BD"
  },
  {
    "name": "ভোলা",
    "english": "Bhola",
    "region": "Barisal",
    "country": "BD"
  },
  {
    "name": "ঝালকাঠি",
    "english": "Jhalokati",
    "region": "Barisal",
    "country": "BD"
  },
  {
    "name": "পটুয়াখালী",
    "english": "Patuakhali",
    "region": "Barisal",
    "country": "BD"
  },
  {
    "name": "পিরোজপুর",
    "english": "Pirojpur",
    "region": "Barisal",
    "country": "BD"
  },
  {
    "name": "বান্দরবান",
    "english": "Bandarban",
    "region": "Chittagong",
    "country": "BD"
  },
  {
    "name": "ব্রাহ্মণবাড়ীয়া",
    "english": "Brahmanbaria",
    "region": "Chittagong",
    "country": "BD"
  },
  {
    "name": "চাঁদপুর",
    "english": "Chandpur",
    "region": "Chittagong",
    "country": "BD"
  },
  {
    "name": "চট্টগ্রাম",
    "english": "Chittagong",
    "region": "Chittagong",
    "country": "BD"
  },
  {
    "name": "কুমিল্লা",
    "english": "Comilla",
    "region": "Chittagong",
    "country": "BD"
  },
  {
    "name": "কক্সবাজার",
    "english": "Cox's Bazar",
    "region": "Chittagong",
    "country": "BD"
  },
  {
    "name": "ফেনী",
    "english": "Feni",
    "region": "Chittagong",
    "country": "BD"
  },
  {
    "name": "খাগড়াছড়ি",
    "english": "Khagrachhari",
    "region": "Chittagong",
    "country": "BD"
  },
  {
    "name": "লক্ষীপুর",
    "english": "Lakshmipur",
    "region": "Chittagong",
    "country": "BD"
  },
  {
    "name": "নোয়াখালী",
    "english": "Noakhali",
    "region": "Chittagong",
    "country": "BD"
  },
  {
    "name": "রাঙ্গামাটি",
    "english": "Rangamati",
    "region": "Chittagong",
    "country": "BD"
  },
  {
    "name": "ঢাকা",
    "english": "Dhaka",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "ফরিদপুর",
    "english": "Faridpur",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "গাজীপুর",
    "english": "Gazipur",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "গোপালগঞ্জ",
    "english": "Gopalganj",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "জামালপুর",
    "english": "Jamalpur",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "কিশোরগঞ্জ",
    "english": "Kishoreganj",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "মাদারীপুর",
    "english": "Madaripur",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "মানিকগঞ্জ",
    "english": "Manikganj",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "মুন্সীগঞ্জ",
    "english": "Munshiganj",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "ময়মনসিংহ",
    "english": "Mymensingh",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "নারায়ণগঞ্জ",
    "english": "Narayanganj",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "নরসিংদী",
    "english": "Narsingdi",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "নেত্রকোনা",
    "english": "Netrakona",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "রাজবাড়ী",
    "english": "Rajbari",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "শরীয়তপুর",
    "english": "Shariatpur",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "শেরপুর",
    "english": "Sherpur",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "টাঙ্গাইল",
    "english": "Tangail",
    "region": "Dhaka",
    "country": "BD"
  },
  {
    "name": "বাগেরহাট",
    "english": "Bagerhat",
    "region": "Khulna",
    "country": "BD"
  },
  {
    "name": "চুয়াডাঙ্গা",
    "english": "Chuadanga",
    "region": "Khulna",
    "country": "BD"
  },
  {
    "name": "যশোর",
    "english": "Jessore",
    "region": "Khulna",
    "country": "BD"
  },
  {
    "name": "ঝিনাইদহ",
    "english": "Jhenaidah",
    "region": "Khulna",
    "country": "BD"
  },
  {
    "name": "খুলনা",
    "english": "Khulna",
    "region": "Khulna",
    "country": "BD"
  },
  {
    "name": "কুষ্টিয়া",
    "english": "Kushtia",
    "region": "Khulna",
    "country": "BD"
  },
  {
    "name": "মাগুরা",
    "english": "Magura",
    "region": "Khulna",
    "country": "BD"
  },
  {
    "name": "মেহেরপুর",
    "english": "Meherpur",
    "region": "Khulna",
    "country": "BD"
  },
  {
    "name": "নড়াইল",
    "english": "Narail",
    "region": "Khulna",
    "country": "BD"
  },
  {
    "name": "সাতক্ষিরা",
    "english": "Satkhira",
    "region": "Khulna",
    "country": "BD"
  },
  {
    "name": "বগুড়া",
    "english": "Bogra",
    "region": "Rajshahi",
    "country": "BD"
  },
  {
    "name": "জয়পুরহাট",
    "english": "Joypurhat",
    "region": "Rajshahi",
    "country": "BD"
  },
  {
    "name": "নওগাঁ",
    "english": "Naogaon",
    "region": "Rajshahi",
    "country": "BD"
  },
  {
    "name": "নাটোর",
    "english": "Natore",
    "region": "Rajshahi",
    "country": "BD"
  },
  {
    "name": "নওয়াবগঞ্জ",
    "english": "Chapainawabganj",
    "region": "Rajshahi",
    "country": "BD"
  },
  {
    "name": "পাবনা",
    "english": "Pabna",
    "region": "Rajshahi",
    "country": "BD"
  },
  {
    "name": "রাজশাহী",
    "english": "Rajshahi",
    "region": "Rajshahi",
    "country": "BD"
  },
  {
    "name": "সিরাজগঞ্জ",
    "english": "Sirajganj",
    "region": "Rajshahi",
    "country": "BD"
  },
  {
    "name": "দিনাজপুর",
    "english": "Dinajpur",
    "region": "Rangpur",
    "country": "BD"
  },
  {
    "name": "গাইবান্ধা",
    "english": "Gaibandha",
    "region": "Rangpur",
    "country": "BD"
  },
  {
    "name": "কুড়িগ্রাম",
    "english": "Kurigram",
    "region": "Rangpur",
    "country": "BD"
  },
  {
    "name": "লালমনিরহাট",
    "english": "Lalmonirhat",
    "region": "Rangpur",
    "country": "BD"
  },
  {
    "name": "নীলফামারী",
    "english": "Nilphamari",
    "region": "Rangpur",
    "country": "BD"
  },
  {
    "name": "পঞ্চগড়",
    "english": "Panchagarh",
    "region": "Rangpur",
    "country": "BD"
  },
  {
    "name": "রংপুর",
    "english": "Rangpur",
    "region": "Rangpur",
    "country": "BD"
  },
  {
    "name": "ঠাকুরগাঁ",
    "english": "Thakurgaon",
    "region": "Rangpur",
    "country": "BD"
  },
  {
    "name": "হবিগঞ্জ",
    "english": "Habiganj",
    "region": "Sylhet",
    "country": "BD"
  },
  {
    "name": "মৌলভীবাজার",
    "english": "Moulvibazar",
    "region": "Sylhet",
    "country": "BD"
  },
  {
    "name": "সুনামগঞ্জ",
    "english": "Sunamganj",
    "region": "Sylhet",
    "country": "BD"
  },
  {
    "name": "সিলেট",
    "english": "Sylhet",
    "region": "Sylhet",
    "country": "BD"
  },

  {
    "name": "Azad Kashmir",
    "country": "PK"
  },
  {
    "name": "Bahawalpur",
    "country": "PK"
  },
  {
    "name": "Bannu",
    "country": "PK"
  },
  {
    "name": "Dera Ghazi Khan",
    "country": "PK"
  },
  {
    "name": "Dera Ismail Khan",
    "country": "PK"
  },
  {
    "name": "Faisalabad",
    "country": "PK"
  },
  {
    "name": "F.A.T.A.",
    "country": "PK"
  },
  {
    "name": "Gujranwala",
    "country": "PK"
  },
  {
    "name": "Hazara",
    "country": "PK"
  },
  {
    "name": "Hyderabad",
    "country": "PK"
  },
  {
    "name": "Islamabad",
    "country": "PK"
  },
  {
    "name": "Kalat",
    "country": "PK"
  },
  {
    "name": "Karachi",
    "country": "PK"
  },
  {
    "name": "Kohat",
    "country": "PK"
  },
  {
    "name": "Lahore",
    "country": "PK"
  },
  {
    "name": "Larkana",
    "country": "PK"
  },
  {
    "name": "Makran",
    "country": "PK"
  },
  {
    "name": "Malakand",
    "country": "PK"
  },
  {
    "name": "Mardan",
    "country": "PK"
  },
  {
    "name": "Mirpur Khas",
    "country": "PK"
  },
  {
    "name": "Multan",
    "country": "PK"
  },
  {
    "name": "Nasirabad",
    "country": "PK"
  },
  {
    "name": "Northern Areas",
    "country": "PK"
  },
  {
    "name": "Peshawar",
    "country": "PK"
  },
  {
    "name": "Quetta",
    "country": "PK"
  },
  {
    "name": "Rawalpindi",
    "country": "PK"
  },
  {
    "name": "Sargodha",
    "country": "PK"
  },
  {
    "name": "Sahiwal",
    "country": "PK"
  },
  {
    "name": "Sibi",
    "country": "PK"
  },
  {
    "name": "Sukkur",
    "country": "PK"
  },
  {
    "name": "Zhob",
    "country": "PK"
  },

  {
    "short": "AB",
    "name": "Abia",
    "country": "NG"
  },
  {
    "short": "FC",
    "name": "Abuja",
    "country": "NG"
  },
  {
    "short": "AD",
    "name": "Adamawa",
    "country": "NG"
  },
  {
    "short": "AK",
    "name": "Akwa Ibom",
    "country": "NG"
  },
  {
    "short": "AN",
    "name": "Anambra",
    "country": "NG"
  },
  {
    "short": "BA",
    "name": "Bauchi",
    "country": "NG"
  },
  {
    "short": "BY",
    "name": "Bayelsa",
    "country": "NG"
  },
  {
    "short": "BE",
    "name": "Benue",
    "country": "NG"
  },
  {
    "short": "BO",
    "name": "Borno",
    "country": "NG"
  },
  {
    "short": "CR",
    "name": "Cross River",
    "country": "NG"
  },
  {
    "short": "DE",
    "name": "Delta",
    "country": "NG"
  },
  {
    "short": "EB",
    "name": "Ebonyi",
    "country": "NG"
  },
  {
    "short": "ED",
    "name": "Edo",
    "country": "NG"
  },
  {
    "short": "EK",
    "name": "Ekiti",
    "country": "NG"
  },
  {
    "short": "EN",
    "name": "Enugu",
    "country": "NG"
  },
  {
    "short": "GO",
    "name": "Gombe",
    "country": "NG"
  },
  {
    "short": "IM",
    "name": "Imo",
    "country": "NG"
  },
  {
    "short": "JI",
    "name": "Jigawa",
    "country": "NG"
  },
  {
    "short": "KD",
    "name": "Kaduna",
    "country": "NG"
  },
  {
    "short": "KN",
    "name": "Kano",
    "country": "NG"
  },
  {
    "short": "KT",
    "name": "Katsina",
    "country": "NG"
  },
  {
    "short": "KE",
    "name": "Kebbi",
    "country": "NG"
  },
  {
    "short": "KO",
    "name": "Kogi",
    "country": "NG"
  },
  {
    "short": "KW",
    "name": "Kwara",
    "country": "NG"
  },
  {
    "short": "LA",
    "name": "Lagos",
    "country": "NG"
  },
  {
    "short": "NA",
    "name": "Nasarawa",
    "country": "NG"
  },
  {
    "short": "NI",
    "name": "Niger",
    "country": "NG"
  },
  {
    "short": "OG",
    "name": "Ogun",
    "country": "NG"
  },
  {
    "short": "ON",
    "name": "Ondo",
    "country": "NG"
  },
  {
    "short": "OS",
    "name": "Osun",
    "country": "NG"
  },
  {
    "short": "OY",
    "name": "Oyo",
    "country": "NG"
  },
  {
    "short": "PL",
    "name": "Plateau",
    "country": "NG"
  },
  {
    "short": "RI",
    "name": "Rivers",
    "country": "NG"
  },
  {
    "short": "SO",
    "name": "Sokoto",
    "country": "NG"
  },
  {
    "short": "TA",
    "name": "Taraba",
    "country": "NG"
  },
  {
    "short": "YO",
    "name": "Yobe",
    "country": "NG"
  },
  {
    "short": "ZA",
    "name": "Zamfara",
    "country": "NG"
  },

  {
    "name": "愛知県",
    "english": "Aichi",
    "country": "JP"
  },
  {
    "name": "秋田県",
    "english": "Akita",
    "country": "JP"
  },
  {
    "name": "青森県",
    "english": "Aomori",
    "country": "JP"
  },
  {
    "name": "千葉県",
    "english": "Chiba",
    "country": "JP"
  },
  {
    "name": "愛媛県",
    "english": "Ehime",
    "country": "JP"
  },
  {
    "name": "福井県",
    "english": "Fukui",
    "country": "JP"
  },
  {
    "name": "福岡県",
    "english": "Fukuoka",
    "country": "JP"
  },
  {
    "name": "福島県",
    "english": "Fukushima",
    "country": "JP"
  },
  {
    "name": "岐阜県",
    "english": "Gifu",
    "country": "JP"
  },
  {
    "name": "群馬県",
    "english": "Gunma",
    "country": "JP"
  },
  {
    "name": "広島県",
    "english": "Hiroshima",
    "country": "JP"
  },
  {
    "name": "北海道",
    "english": "Hokkaidō",
    "country": "JP"
  },
  {
    "name": "兵庫県",
    "english": "Hyōgo",
    "country": "JP"
  },
  {
    "name": "茨城県",
    "english": "Ibaraki",
    "country": "JP"
  },
  {
    "name": "石川県",
    "english": "Ishikawa",
    "country": "JP"
  },
  {
    "name": "岩手県",
    "english": "Iwate",
    "country": "JP"
  },
  {
    "name": "香川県",
    "english": "Kagawa",
    "country": "JP"
  },
  {
    "name": "鹿児島県",
    "english": "Kagoshima",
    "country": "JP"
  },
  {
    "name": "神奈川県",
    "english": "Kanagawa",
    "country": "JP"
  },
  {
    "name": "高知県",
    "english": "Kōchi",
    "country": "JP"
  },
  {
    "name": "熊本県",
    "english": "Kumamoto",
    "country": "JP"
  },
  {
    "name": "京都府",
    "english": "Kyōto",
    "country": "JP"
  },
  {
    "name": "三重県",
    "english": "Mie",
    "country": "JP"
  },
  {
    "name": "宮城県",
    "english": "Miyagi",
    "country": "JP"
  },
  {
    "name": "宮崎県",
    "english": "Miyazaki",
    "country": "JP"
  },
  {
    "name": "長野県",
    "english": "Nagano",
    "country": "JP"
  },
  {
    "name": "長崎県",
    "english": "Nagasaki",
    "country": "JP"
  },
  {
    "name": "奈良県",
    "english": "Nara",
    "country": "JP"
  },
  {
    "name": "新潟県",
    "english": "Niigata",
    "country": "JP"
  },
  {
    "name": "大分県",
    "english": "Ōita",
    "country": "JP"
  },
  {
    "name": "岡山県",
    "english": "Okayama",
    "country": "JP"
  },
  {
    "name": "沖縄県",
    "english": "Okinawa",
    "country": "JP"
  },
  {
    "name": "大阪府",
    "english": "Ōsaka",
    "country": "JP"
  },
  {
    "name": "佐賀県",
    "english": "Saga",
    "country": "JP"
  },
  {
    "name": "埼玉県",
    "english": "Saitama",
    "country": "JP"
  },
  {
    "name": "滋賀県",
    "english": "Shiga",
    "country": "JP"
  },
  {
    "name": "島根県",
    "english": "Shimane",
    "country": "JP"
  },
  {
    "name": "静岡県",
    "english": "Shizuoka",
    "country": "JP"
  },
  {
    "name": "栃木県",
    "english": "Tochigi",
    "country": "JP"
  },
  {
    "name": "徳島県",
    "english": "Tokushima",
    "country": "JP"
  },
  {
    "name": "東京都",
    "english": "Tōkyō",
    "country": "JP"
  },
  {
    "name": "鳥取県",
    "english": "Tottori",
    "country": "JP"
  },
  {
    "name": "富山県",
    "english": "Toyama",
    "country": "JP"
  },
  {
    "name": "和歌山県",
    "english": "Wakayama",
    "country": "JP"
  },
  {
    "name": "山形県",
    "english": "Yamagata",
    "country": "JP"
  },
  {
    "name": "山口県",
    "english": "Yamaguchi",
    "country": "JP"
  },
  {
    "name": "山梨県",
    "english": "Yamanashi",
    "country": "JP"
  },

  {
    "short": "B",
    "name": "Burgenland",
    "country": "AT"
  },
  {
    "short": "K",
    "name": "Kärnten",
    "country": "AT"
  },
  {
    "short": "NÖ",
    "name": "Niederösterreich",
    "country": "AT"
  },
  {
    "short": "OÖ",
    "name": "Oberösterreich",
    "country": "AT"
  },
  {
    "short": "S",
    "name": "Salzburg",
    "country": "AT"
  },
  {
    "short": "ST",
    "name": "Steiermark",
    "country": "AT"
  },
  {
    "short": "T",
    "name": "Tirol",
    "country": "AT"
  },
  {
    "short": "V",
    "name": "Vorarlberg",
    "country": "AT"
  },
  {
    "short": "W",
    "name": "Wien",
    "country": "AT"
  },

  {
    "short": "AC",
    "name": "Acre",
    "country": "BR"
  },
  {
    "short": "AL",
    "name": "Alagoas",
    "country": "BR"
  },
  {
    "short": "AP",
    "name": "Amapá",
    "country": "BR"
  },
  {
    "short": "AM",
    "name": "Amazonas",
    "country": "BR"
  },
  {
    "short": "BA",
    "name": "Bahia",
    "country": "BR"
  },
  {
    "short": "CE",
    "name": "Ceará",
    "country": "BR"
  },
  {
    "short": "DF",
    "name": "Distrito Federal",
    "country": "BR"
  },
  {
    "short": "ES",
    "name": "Espírito Santo",
    "country": "BR"
  },
  {
    "short": "GO",
    "name": "Goiás",
    "country": "BR"
  },
  {
    "short": "MA",
    "name": "Maranhão",
    "country": "BR"
  },
  {
    "short": "MT",
    "name": "Mato Grosso",
    "country": "BR"
  },
  {
    "short": "MS",
    "name": "Mato Grosso do Sul",
    "country": "BR"
  },
  {
    "short": "MG",
    "name": "Minas Gerais",
    "country": "BR"
  },
  {
    "short": "PA",
    "name": "Pará",
    "country": "BR"
  },
  {
    "short": "PB",
    "name": "Paraíba",
    "country": "BR"
  },
  {
    "short": "PR",
    "name": "Paraná",
    "country": "BR"
  },
  {
    "short": "PE",
    "name": "Pernambuco",
    "country": "BR"
  },
  {
    "short": "PI",
    "name": "Piauí",
    "country": "BR"
  },
  {
    "short": "RJ",
    "name": "Rio de Janeiro",
    "country": "BR"
  },
  {
    "short": "RN",
    "name": "Rio Grande do Norte",
    "country": "BR"
  },
  {
    "short": "RS",
    "name": "Rio Grande do Sul",
    "country": "BR"
  },
  {
    "short": "RO",
    "name": "Rondônia",
    "country": "BR"
  },
  {
    "short": "RR",
    "name": "Roraima",
    "country": "BR"
  },
  {
    "short": "SC",
    "name": "Santa Catarina",
    "country": "BR"
  },
  {
    "short": "SP",
    "name": "São Paulo",
    "country": "BR"
  },
  {
    "short": "SE",
    "name": "Sergipe",
    "country": "BR"
  },
  {
    "short": "TO",
    "name": "Tocantins",
    "country": "BR"
  },

  {
    "name": "Abra",
    "country": "PH"
  },
  {
    "name": "Agusan del Norte",
    "country": "PH"
  },
  {
    "name": "Agusan del Sur",
    "country": "PH"
  },
  {
    "name": "Aklan",
    "country": "PH"
  },
  {
    "name": "Albay",
    "country": "PH"
  },
  {
    "name": "Antique",
    "country": "PH"
  },
  {
    "name": "Apayao",
    "country": "PH"
  },
  {
    "name": "Aurora",
    "country": "PH"
  },
  {
    "name": "Basilan",
    "country": "PH"
  },
  {
    "name": "Bataan",
    "country": "PH"
  },
  {
    "name": "Batanes",
    "country": "PH"
  },
  {
    "name": "Batangas",
    "country": "PH"
  },
  {
    "name": "Benguet",
    "country": "PH"
  },
  {
    "name": "Biliran",
    "country": "PH"
  },
  {
    "name": "Bohol",
    "country": "PH"
  },
  {
    "name": "Bukidnon",
    "country": "PH"
  },
  {
    "name": "Bulacan",
    "country": "PH"
  },
  {
    "name": "Cagayan",
    "country": "PH"
  },
  {
    "name": "Camarines Norte",
    "country": "PH"
  },
  {
    "name": "Camarines Sur",
    "country": "PH"
  },
  {
    "name": "Camiguin",
    "country": "PH"
  },
  {
    "name": "Capiz",
    "country": "PH"
  },
  {
    "name": "Catanduanes",
    "country": "PH"
  },
  {
    "name": "Cavite",
    "country": "PH"
  },
  {
    "name": "Cebu",
    "country": "PH"
  },
  {
    "name": "Compostela Valley",
    "country": "PH"
  },
  {
    "name": "Cotabato",
    "country": "PH"
  },
  {
    "name": "Davao del Norte",
    "country": "PH"
  },
  {
    "name": "Davao del Sur",
    "country": "PH"
  },
  {
    "name": "Davao Occidental",
    "country": "PH"
  },
  {
    "name": "Davao Oriental",
    "country": "PH"
  },
  {
    "name": "Dinagat Islands",
    "country": "PH"
  },
  {
    "name": "Eastern Samar",
    "country": "PH"
  },
  {
    "name": "Guimaras",
    "country": "PH"
  },
  {
    "name": "Ifugao",
    "country": "PH"
  },
  {
    "name": "Ilocos Norte",
    "country": "PH"
  },
  {
    "name": "Ilocos Sur",
    "country": "PH"
  },
  {
    "name": "Iloilo",
    "country": "PH"
  },
  {
    "name": "Isabela",
    "country": "PH"
  },
  {
    "name": "Kalinga",
    "country": "PH"
  },
  {
    "name": "La Union",
    "country": "PH"
  },
  {
    "name": "Laguna",
    "country": "PH"
  },
  {
    "name": "Lanao del Norte",
    "country": "PH"
  },
  {
    "name": "Lanao del Sur",
    "country": "PH"
  },
  {
    "name": "Leyte",
    "country": "PH"
  },
  {
    "name": "Maguindanao",
    "country": "PH"
  },
  {
    "name": "Marinduque",
    "country": "PH"
  },
  {
    "name": "Masbate",
    "country": "PH"
  },
  {
    "name": "Misamis Occidental",
    "country": "PH"
  },
  {
    "name": "Misamis Oriental",
    "country": "PH"
  },
  {
    "name": "Mountain Province",
    "country": "PH"
  },
  {
    "name": "Negros Occidental",
    "country": "PH"
  },
  {
    "name": "Negros Oriental",
    "country": "PH"
  },
  {
    "name": "Northern Samar",
    "country": "PH"
  },
  {
    "name": "Nueva Ecija",
    "country": "PH"
  },
  {
    "name": "Nueva Vizcaya",
    "country": "PH"
  },
  {
    "name": "Occidental Mindoro",
    "country": "PH"
  },
  {
    "name": "Oriental Mindoro",
    "country": "PH"
  },
  {
    "name": "Palawan",
    "country": "PH"
  },
  {
    "name": "Pampanga",
    "country": "PH"
  },
  {
    "name": "Pangasinan",
    "country": "PH"
  },
  {
    "name": "Quezon",
    "country": "PH"
  },
  {
    "name": "Quirino",
    "country": "PH"
  },
  {
    "name": "Rizal",
    "country": "PH"
  },
  {
    "name": "Romblon",
    "country": "PH"
  },
  {
    "name": "Samar",
    "country": "PH"
  },
  {
    "name": "Sarangani",
    "country": "PH"
  },
  {
    "name": "Siquijor",
    "country": "PH"
  },
  {
    "name": "Sorsogon",
    "country": "PH"
  },
  {
    "name": "South Cotabato",
    "country": "PH"
  },
  {
    "name": "Southern Leyte",
    "country": "PH"
  },
  {
    "name": "Sultan Kudarat",
    "country": "PH"
  },
  {
    "name": "Sulu",
    "country": "PH"
  },
  {
    "name": "Surigao del Norte",
    "country": "PH"
  },
  {
    "name": "Surigao del Sur",
    "country": "PH"
  },
  {
    "name": "Tarlac",
    "country": "PH"
  },
  {
    "name": "Tawi-Tawi",
    "country": "PH"
  },
  {
    "name": "Zambales",
    "country": "PH"
  },
  {
    "name": "Zamboanga del Norte",
    "country": "PH"
  },
  {
    "name": "Zamboanga del Sur",
    "country": "PH"
  },
  {
    "name": "Zamboanga Sibugay",
    "country": "PH"
  },
  {
    "name": "Metro Manila",
    "country": "PH"
  },

  {
    "name": "Hà Nội",
    "country": "VN"
  },
  {
    "name": "Hà Giang",
    "country": "VN"
  },
  {
    "name": "Cao Bằng",
    "country": "VN"
  },
  {
    "name": "Bắc Kạn",
    "country": "VN"
  },
  {
    "name": "Tuyên Quang",
    "country": "VN"
  },
  {
    "name": "Lào Cai",
    "country": "VN"
  },
  {
    "name": "Điện Biên",
    "country": "VN"
  },
  {
    "name": "Lai Châu",
    "country": "VN"
  },
  {
    "name": "Sơn La",
    "country": "VN"
  },
  {
    "name": "Yên Bái",
    "country": "VN"
  },
  {
    "name": "Hòa Bình",
    "country": "VN"
  },
  {
    "name": "Thái Nguyên",
    "country": "VN"
  },
  {
    "name": "Lạng Sơn",
    "country": "VN"
  },
  {
    "name": "Quảng Ninh",
    "country": "VN"
  },
  {
    "name": "Bắc Giang",
    "country": "VN"
  },
  {
    "name": "Phú Thọ",
    "country": "VN"
  },
  {
    "name": "Vĩnh Phúc",
    "country": "VN"
  },
  {
    "name": "Bắc Ninh",
    "country": "VN"
  },
  {
    "name": "Hải Dương",
    "country": "VN"
  },
  {
    "name": "Hải Phòng",
    "country": "VN"
  },
  {
    "name": "Hưng Yên",
    "country": "VN"
  },
  {
    "name": "Thái Bình",
    "country": "VN"
  },
  {
    "name": "Hà Nam",
    "country": "VN"
  },
  {
    "name": "Nam Định",
    "country": "VN"
  },
  {
    "name": "Ninh Bình",
    "country": "VN"
  },
  {
    "name": "Thanh Hóa",
    "country": "VN"
  },
  {
    "name": "Nghệ An",
    "country": "VN"
  },
  {
    "name": "Hà Tĩnh",
    "country": "VN"
  },
  {
    "name": "Quảng Bình",
    "country": "VN"
  },
  {
    "name": "Quảng Trị",
    "country": "VN"
  },
  {
    "name": "Thừa Thiên–Huế",
    "country": "VN"
  },
  {
    "name": "Đà Nẵng",
    "country": "VN"
  },
  {
    "name": "Quảng Nam",
    "country": "VN"
  },
  {
    "name": "Quảng Ngãi",
    "country": "VN"
  },
  {
    "name": "Bình Định",
    "country": "VN"
  },
  {
    "name": "Phú Yên",
    "country": "VN"
  },
  {
    "name": "Khánh Hòa",
    "country": "VN"
  },
  {
    "name": "Ninh Thuận",
    "country": "VN"
  },
  {
    "name": "Bình Thuận",
    "country": "VN"
  },
  {
    "name": "Kon Tum",
    "country": "VN"
  },
  {
    "name": "Gia Lai",
    "country": "VN"
  },
  {
    "name": "Đắk Lắk",
    "country": "VN"
  },
  {
    "name": "Đắk Nông",
    "country": "VN"
  },
  {
    "name": "Lâm Đồng",
    "country": "VN"
  },
  {
    "name": "Bình Phước",
    "country": "VN"
  },
  {
    "name": "Tây Ninh",
    "country": "VN"
  },
  {
    "name": "Bình Dương",
    "country": "VN"
  },
  {
    "name": "Đồng Nai",
    "country": "VN"
  },
  {
    "name": "Bà Rịa–Vũng Tàu",
    "country": "VN"
  },
  {
    "name": "Thành phố Hồ Chí Minh",
    "country": "VN"
  },
  {
    "name": "Long An",
    "country": "VN"
  },
  {
    "name": "Tiền Giang",
    "country": "VN"
  },
  {
    "name": "Bến Tre",
    "country": "VN"
  },
  {
    "name": "Trà Vinh",
    "country": "VN"
  },
  {
    "name": "Vĩnh Long",
    "country": "VN"
  },
  {
    "name": "Đồng Tháp",
    "country": "VN"
  },
  {
    "name": "An Giang",
    "country": "VN"
  },
  {
    "name": "Kiên Giang",
    "country": "VN"
  },
  {
    "name": "Cần Thơ",
    "country": "VN"
  },
  {
    "name": "Hậu Giang",
    "country": "VN"
  },
  {
    "name": "Sóc Trăng",
    "country": "VN"
  },
  {
    "name": "Bạc Liêu",
    "country": "VN"
  },
  {
    "name": "Cà Mau",
    "country": "VN"
  },

  {
    "name": "San José",
    "country": "CR"
  },
  {
    "name": "Alajuela",
    "country": "CR"
  },
  {
    "name": "Cartago",
    "country": "CR"
  },
  {
    "name": "Heredia",
    "country": "CR"
  },
  {
    "name": "Guanacaste",
    "country": "CR"
  },
  {
    "name": "Puntarenas",
    "country": "CR"
  },
  {
    "name": "Limón",
    "country": "CR"
  },

  {
    "name": "Auckland",
    "country": "NZ"
  },
  {
    "name": "New Plymouth",
    "country": "NZ"
  },
  {
    "name": "Hawke's Bay",
    "country": "NZ"
  },
  {
    "name": "Wellington",
    "country": "NZ"
  },
  {
    "name": "Nelson",
    "country": "NZ"
  },
  {
    "name": "Marlborough",
    "country": "NZ"
  },
  {
    "name": "Westland",
    "country": "NZ"
  },
  {
    "name": "Canterbury",
    "country": "NZ"
  },
  {
    "name": "Otago",
    "country": "NZ"
  },
  {
    "name": "Southland",
    "country": "NZ"
  }
]
,
$form = $('#paypal-form'),
shoppingCart = JSON.parse(localStorage['shoppingCart']),
populateStates = function(country) {
  // loop through countries object
  for (c in countries) {
    // find matching abbreviation
    if (countries[c] === country) {
      // loop through states array
      for (var i = 0; i < states.length; i++) {
        // populate with states from selected country
        if (states[i].country === c) {
          $('select[name="state"]').append(
            '<option value="' + states[i].name + '">' + states[i].name + '</option>'
          );
        }
      }
    }
  }
};
// only execute code if shopping cart has contents
if (shoppingCart.items.length > 0) {
  // get cart items ready to send to PayPal
  $.each(shoppingCart.items, function(i) {
    var
    cartItem = shoppingCart.items[i],
    title = cartItem.title,
    price = cartItem.price,
    qty = cartItem.quantity,
    sku = cartItem.sku;
    // create div and add data for each item in cart to PayPal form
    $( '<div/>' ).html( '<input type="hidden" name="quantity_' + (i+1) + "' value=" + qty + '"/>' ).insertBefore('#paypal-btn');

  	$('<div/>').html('<input type="hidden" name="item_name_' + (i+1) + '" value="' + title + '"/>').insertBefore('#paypal-btn');

  	$('<div/>').html('<input type="hidden" name="item_number_' + (i+1) + '" value="' + sku + '"/>' ).insertBefore('#paypal-btn');

  	$('<div/>').html('<input type="hidden" name="amount_' + (i+1) + '" value="' + parseFloat(Math.round( (price * qty) * 100) / 100).toFixed(2) + '"/>' ).insertBefore('#paypal-btn');
  });
  // add shipping rate once outside loop
  // we appended the '_1' because it needed to be tied to an existing product
  // so we tie it to the first product in the cart
  $('<div/>')
  .html(
    '<input type="hidden" name="shipping_1" value="' + shoppingCart.shipping + '" />'
  ).insertBefore('#paypal-btn');
  // configure PayPal form
  $form
  .attr("action", 'https://www.paypal.com/cgi-bin/webscr')
  .find("input[name='business']").val('notnewhq@gmail.com')
  .end()
  .find("input[name='currency_code']" )
  .val('USD');
  // populate countries dropdown
  for (country in countries) {
    var dropdown = $('select[name="country"]');
    // add countries to dropdown on a loop because lazy
    dropdown.append(
      '<option value="' + countries[country] + '">' + countries[country] + '</option>'
    );
  }
  // dependent state dropdown
  $('select[name="country"]').change(function(e) {
    // store the value of the dropdown selection in 'sel'
    var sel = $(this).val();
    // if there's already a list of states, delete it
    $('select[name="state"]').empty();
    // populate states based on selection
    populateStates(sel);
    // only show states dropdown when there are states in it
    if ( $('select[name="state"]').find('option').length ) {
      $('.form-field--state')
      .fadeIn() // show
      .find('select')
      .attr('required', ''); // make required
    } else {
      $('.form-field--state')
      .fadeOut() // hide
      .find('select')
      .removeAttr('required'); // make not required
    }
  });
  // user shipping info form
  $('form#shipping').submit(function(e) {
    // store form data in variables
    var
    form = $(this),
    firstName = form.find('input[name="first-name"]').val(),
    lastName = form.find('input[name="last-name"]').val(),
    address1 = form.find('input[name="address-1"]').val(),
    address2 = form.find('input[name="address-2"]').val(),
    country = form.find('select[name="country"]').val(),
    city = form.find('input[name="city"]').val(),
    state = form.find('select[name="state"]').val(),
    zip = form.find('input[name="zip"]').val(),
    email = form.find('input[name="email"]').val();
    // stop form from reloading page
    e.preventDefault();
    // add all shipping info to PayPal form on submission
    // FIRST NAME
    $('<div/>')
    .html(
      '<input type="hidden" name="first_name" value="' + firstName + '" />'
    )
    .insertBefore('#paypal-btn');
    // LAST NAME
    $('<div/>')
    .html(
      '<input type="hidden" name="last_name" value="' + lastName + '" />'
    )
    .insertBefore('#paypal-btn');
    // ADDRESS 1
    $('<div/>')
    .html(
      '<input type="hidden" name="address1" value="' + address1 + '" />'
    )
    .insertBefore('#paypal-btn');
    // ADDRESS 2
    $('<div/>')
    .html(
      '<input type="hidden" name="address2" value="' + address2 + '" />'
    )
    .insertBefore('#paypal-btn');
    // CITY
    $('<div/>')
    .html(
      '<input type="hidden" name="city" value="' + city + '" />'
    )
    .insertBefore('#paypal-btn');
    // STATE
    $('<div/>')
    .html(
      '<input type="hidden" name="state" value="' + state + '" />'
    )
    .insertBefore('#paypal-btn');
    // COUNTRY
    $('<div/>')
    .html(
      '<input type="hidden" name="country" value="' + country + '" />'
    )
    .insertBefore('#paypal-btn');
    // ZIP
    $('<div/>')
    .html(
      '<input type="hidden" name="zip" value="' + zip + '" />'
    )
    .insertBefore('#paypal-btn');
    // EMAIL
    $('<div/>')
    .html(
      '<input type="hidden" name="email" value="' + email + '" />'
    )
    .insertBefore('#paypal-btn');
    // bring in "Pay with PayPal" button on shipping submission
    $('.checkout-payment').addClass('is-visible');
  });

}
