
document.addEventListener("DOMContentLoaded", function () {
    const citiesByState = {
        "AL": ["Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa", "Hoover", "Dothan", "Auburn", "Decatur", "Madison",
            "Florence", "Gadsden", "Vestavia Hills", "Prattville", "Phenix City", "Alabaster", "Opelika", "Enterprise", "Homewood",
            "Northport", "Anniston", "Prichard", "Athens", "Daphne", "Pelham", "Albertville", "Bessemer", "Mountain Brook",
            "Fairhope", "Selma", "Troy", "Center Point", "Helena", "Oxford", "Cullman", "Millbrook", "Saraland", "Hartselle",
            "Foley", "Muscle Shoals", "Hueytown", "Talladega", "Alexander City", "Scottsboro", "Sylacauga", "Jasper", "Gardendale",
            "Fort Payne", "Eufaula"],
        "AK": ["Anchorage", "Fairbanks", "Juneau", "Badger", "Knik-Fairview", "College", "Sitka", "Lakes", "Tanaina", "Ketchikan",
            "Wasilla", "Kalifornsky", "Steele Creek", "Meadow Lakes", "Kodiak", "Fritz Creek", "Homer", "Kenai", "Petersburg", "Sterling",
            "Soldotna", "Valdez", "Nome", "Kotzebue", "Unalaska", "Bethel", "Palmer", "Wrangell", "Seward", "Dillingham",
            "Cordova", "North Pole", "Houston", "Metlakatla", "Hooper Bay", "Mountain Village", "Chevak", "Gambell", "Sand Point", "Selawik",
            "Shishmaref", "Hoonah", "King Cove", "Togiak", "Scammon Bay", "Tanana", "Hydaburg", "Nulato", "Savoonga", "St. Mary's"],
        "AR": ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro", "Rogers", "Conway", "North Little Rock", "Bentonville", "Pine Bluff",
            "Hot Springs", "Benton", "Sherwood", "Texarkana", "Russellville", "Jacksonville", "Paragould", "Cabot", "West Memphis", "Searcy",
            "Van Buren", "Bryant", "El Dorado", "Maumelle", "Siloam Springs", "Forrest City", "Harrison", "Marion", "Helena-West Helena", "Camden",
            "Mountain Home", "Magnolia", "Arkadelphia", "Malvern", "Hope", "Wynne", "Monticello", "Batesville", "Trumann", "Berryville",
            "Stuttgart", "Heber Springs", "Greenwood", "Gentry", "Clarksville", "Pocahontas", "De Queen", "Lake City", "Nashville", "Beebe"],
        "AZ": ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", "Glendale", "Gilbert", "Tempe", "Peoria", "Surprise",
            "Yuma", "Avondale", "Goodyear", "Flagstaff", "Buckeye", "Lake Havasu City", "Casa Grande", "Sierra Vista", "Maricopa", "Oro Valley",
            "Prescott", "Bullhead City", "Prescott Valley", "Apache Junction", "Kingman", "Queen Creek", "Florence", "San Luis", "Sahuarita", "Douglas",
            "Eloy", "Payson", "Somerton", "Cottonwood", "Show Low", "Nogales", "Fort Mohave", "Chino Valley", "Coolidge", "Sedona",
            "New River", "Winslow", "Flowing Wells", "Tuba City", "Safford", "Globe", "Drexel Heights", "Verde Village", "Vail", "Tanque Verde"],
        "CA": ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim",
            "Stockton", "Riverside", "Irvine", "Santa Ana", "Chula Vista", "Fremont", "San Bernardino", "Modesto", "Fontana", "Oxnard",
            "Moreno Valley", "Huntington Beach", "Glendale", "Santa Clarita", "Garden Grove", "Santa Rosa", "Oceanside", "Rancho Cucamonga",
            "Ontario", "Lancaster", "Elk Grove", "Corona", "Palmdale", "Salinas", "Pomona", "Torrance", "Hayward", "Escondido", "Sunnyvale",
            "Pasadena", "Orange", "Fullerton", "Roseville", "Visalia", "Concord", "Thousand Oaks", "Simi Valley", "Santa Clara", "Victorville",
            "Vallejo", "Berkeley"],
        "CO": ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", "Thornton", "Arvada", "Westminster", "Pueblo", "Centennial",
            "Boulder", "Greeley", "Longmont", "Loveland", "Broomfield", "Grand Junction", "Castle Rock", "Commerce City", "Parker", "Littleton",
            "Northglenn", "Brighton", "Englewood", "Wheat Ridge", "Fountain", "Lafayette", "Windsor", "Erie", "Evans", "Louisville",
            "Golden", "Montrose", "Durango", "Cañon City", "Greenwood Village", "Sheridan", "Aspen", "Glenwood Springs", "Steamboat Springs",
            "Frederick", "Fort Morgan", "Woodland Park", "Edgewater", "Sterling", "Manitou Springs", "Trinidad", "Johnstown", "Firestone",
            "Eagle", "Alamosa"],
        "CT": ["Bridgeport", "New Haven", "Stamford", "Hartford", "Waterbury", "Norwalk", "Danbury", "New Britain", "West Hartford", "Greenwich",
            "Fairfield", "Hamden", "Bristol", "Meriden", "Manchester", "West Haven", "Milford", "Stratford", "East Hartford", "Middletown",
            "Wallingford", "Southington", "Norwich", "Shelton", "Newington", "Torrington", "Glastonbury", "Naugatuck", "New Milford", "Windsor",
            "Wethersfield", "North Haven", "Ansonia", "Darien", "Trumbull", "Vernon", "New Canaan", "Westport", "Simsbury", "South Windsor",
            "Farmington", "Groton", "Cheshire", "North Branford", "Mansfield", "East Haven", "New London", "Bethel", "Orange", "Ledyard"],
        "DE": ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna", "Milford", "Seaford", "Georgetown", "Elsmere", "New Castle",
            "Millsboro", "Laurel", "Harrington", "Camden", "Claymont", "Lewes", "Milton", "Middlesex", "Ocean View", "Bridgeville",
            "Selbyville", "Rising Sun-Lebanon", "Townsend", "Delmar", "Woodside", "Frederica", "Frankford", "Greenwood", "Cheswold", "Dagsboro",
            "South Bethany", "Fenwick Island", "Bethel", "Millville", "Rehoboth Beach", "Ellendale", "Dewey Beach", "Henlopen Acres", "Slaughter Beach", "Arden",
            "Ardencroft", "Ardentown", "Houston", "Wyoming", "Blades", "Bellefonte", "Hartly", "Bethany Beach", "Leipsic", "Fenwick"],
        "FL": ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Tallahassee", "Fort Lauderdale", "Port St. Lucie", "Cape Coral",
            "Pembroke Pines", "Hollywood", "Miramar", "Gainesville", "Coral Springs", "Miami Gardens", "Clearwater", "Palm Bay", "Pompano Beach", "West Palm Beach",
            "Lakeland", "Davie", "Boca Raton", "Sunrise", "Deltona", "Plantation", "Fort Myers", "Largo", "Melbourne", "Deerfield Beach",
            "Palm Coast", "Boynton Beach", "Lauderhill", "Weston", "Kissimmee", "Homestead", "Delray Beach", "Daytona Beach", "North Miami", "Tamarac",
            "Ocala", "Wellington", "Port Orange", "Jupiter", "Doral", "Coconut Creek", "Sanford", "Margate", "Sarasota", "Pensacola"],
        "GA": ["Atlanta", "Columbus", "Augusta", "Macon", "Savannah", "Athens", "Sandy Springs", "South Fulton", "Roswell", "Johns Creek",
            "Warner Robins", "Albany", "Alpharetta", "Marietta", "Stonecrest", "Smyrna", "Valdosta", "Brookhaven", "Dunwoody", "Peachtree Corners",
            "Gainesville", "Newnan", "Milton", "Rome", "East Point", "Woodstock", "Douglasville", "Hinesville", "Kennesaw", "LaGrange",
            "Statesboro", "Lawrenceville", "Dalton", "Chamblee", "Pooler", "Stockbridge", "Peachtree City", "Carrollton", "Griffin", "Canton",
            "McDonough", "Acworth", "Union City", "Sugar Hill", "Decatur", "Evans", "Conyers", "Powder Springs", "Douglas", "Covington"],
        "HI": ["Honolulu", "East Honolulu", "Pearl City", "Hilo", "Waipahu", "Kailua", "Kaneohe", "Mililani Town", "Ewa Gentry", "Kahului",
            "Mililani Mauka", "Kapolei", "Makakilo", "Ewa Beach", "Wahiawa", "Schofield Barracks", "Wailuku", "Lahaina", "Waimea", "Hawaiian Paradise Park",
            "Kalaoa", "Keaau", "Napili-Honokowai", "Hickam Housing", "Waialua", "Hauula", "Kula", "Waikoloa Village", "Holualoa", "Aiea",
            "Makawao", "Pukalani", "Pahala", "Kaunakakai", "Mountain View", "Lanai City", "Laie", "Hanapepe", "Waimea", "Anahola",
            "Eleele", "Captain Cook", "Honokaa", "Paia", "Papaikou", "Kealakekua", "Waimanalo", "Princeville", "Koloa", "Pepeekeo"],
        "ID": ["Boise", "Meridian", "Nampa", "Idaho Falls", "Caldwell", "Pocatello", "Coeur d'Alene", "Twin Falls", "Post Falls", "Rexburg",
            "Lewiston", "Eagle", "Moscow", "Kuna", "Ammon", "Chubbuck", "Hayden", "Mountain Home", "Blackfoot", "Garden City",
            "Jerome", "Burley", "Middleton", "Sandpoint", "Star", "Hailey", "Emmett", "Rathdrum", "Rupert", "Weiser",
            "Payette", "Buhl", "Preston", "Mountain Home AFB", "Gooding", "Kimberly", "Shelley", "Fruitland", "American Falls", "Bellevue",
            "Orofino", "St. Maries", "Salmon", "Grangeville", "Malad City", "Montpelier", "Driggs", "Filer", "Sugar City", "McCall"],
        "IL": ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford", "Springfield", "Elgin", "Peoria", "Champaign", "Waukegan",
            "Cicero", "Bloomington", "Arlington Heights", "Evanston", "Decatur", "Schaumburg", "Bolingbrook", "Palatine", "Skokie", "Des Plaines",
            "Orland Park", "Tinley Park", "Oak Lawn", "Berwyn", "Mount Prospect", "Normal", "Wheaton", "Hoffman Estates", "Oak Park", "Downers Grove",
            "Glenview", "Belleville", "Elmhurst", "Plainfield", "DeKalb", "Moline", "Urbana", "Lombard", "Buffalo Grove", "Bartlett",
            "Quincy", "Crystal Lake", "Streamwood", "Carol Stream", "Romeoville", "Rock Island", "Hanover Park", "Carpentersville", "Wheeling", "Park Ridge"],
        "IN": ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel", "Fishers", "Bloomington", "Hammond", "Gary", "Lafayette",
            "Muncie", "Noblesville", "Terre Haute", "Greenwood", "Kokomo", "Anderson", "Elkhart", "Mishawaka", "Lawrence", "Jeffersonville",
            "Columbus", "Westfield", "Portage", "New Albany", "Richmond", "Plainfield", "Merrillville", "Goshen", "Michigan City", "Crown Point",
            "Granger", "Valparaiso", "East Chicago", "Hobart", "Zionsville", "Schererville", "Brownsburg", "Marion", "Franklin", "Greenfield",
            "La Porte", "Seymour", "Clarksville", "Avon", "Munster", "Logansport", "Jasper", "Warsaw", "Bedford", "Huntington"],
        "IA": ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City", "Ankeny", "West Des Moines", "Ames", "Waterloo", "Council Bluffs",
            "Dubuque", "Urbandale", "Marion", "Bettendorf", "Mason City", "Marshalltown", "Clinton", "Newton", "Fort Dodge", "Ottumwa",
            "Muscatine", "Cedar Falls", "Indianola", "Altoona", "Burlington", "Johnston", "Clive", "North Liberty", "Carroll", "Spencer",
            "Pella", "Oskaloosa", "Storm Lake", "Waukee", "Boone", "Grinnell", "Norwalk", "Denison", "Charles City", "Mount Pleasant",
            "Fairfield", "Fort Madison", "Le Mars", "Decorah", "Estherville", "Keokuk", "Webster City", "Perry", "Waverly", "Washington"],
        "KS": ["Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka", "Lawrence", "Shawnee", "Lenexa", "Manhattan", "Salina",
            "Hutchinson", "Leavenworth", "Leawood", "Dodge City", "Garden City", "Emporia", "Junction City", "Derby", "Prairie Village", "Gardner",
            "Hays", "Pittsburg", "Newton", "Liberal", "Andover", "Great Bend", "McPherson", "El Dorado", "Ottawa", "Parsons",
            "Arkansas City", "Merriam", "Chanute", "Winfield", "Haysville", "Fort Scott", "Atchison", "Roeland Park", "Bonner Springs", "Wellington",
            "Independence", "Mission", "Ulysses", "Coffeyville", "Augusta", "Paola", "Lansing", "Concordia", "Abilene", "Bel Aire"],
        "KY": ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington", "Richmond", "Georgetown", "Florence", "Hopkinsville", "Nicholasville",
            "Elizabethtown", "Henderson", "Frankfort", "Jeffersontown", "Independence", "Paducah", "Radcliff", "Ashland", "Madisonville", "Erlanger",
            "Winchester", "Murray", "St. Matthews", "Danville", "Fort Thomas", "Shelbyville", "Shively", "Berea", "Shepherdsville", "Somerset",
            "Newport", "Mount Washington", "Clarksville", "Glasgow", "Fort Mitchell", "Alexandria", "Lawrenceburg", "Middlesboro", "Mayfield", "Lebanon",
            "Pikeville", "Versailles", "Bardstown", "Paris", "Russellville", "Taylor Mill", "Villa Hills", "Maysville", "Wilmore", "Corbin"],
        "LA": ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles", "Kenner", "Bossier City", "Monroe", "Alexandria", "Houma",
            "Marrero", "Central", "Slidell", "Prairieville", "Terrytown", "Ruston", "Metairie", "Hammond", "Harvey", "Laplace",
            "Bayou Cane", "New Iberia", "Natchitoches", "Opelousas", "Mandeville", "Crowley", "Sulphur", "Zachary", "Thibodaux", "Abbeville",
            "Gretna", "Bogalusa", "Pineville", "Estelle", "Chalmette", "Baker", "DeRidder", "Jennings", "Youngsville", "West Monroe",
            "Morgan City", "Eunice", "Covington", "Franklin", "Jeanerette", "Ville Platte", "Donaldsonville", "Bastrop", "Marksville", "Leesville"],
        "ME": ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn", "Biddeford", "Sanford", "Brunswick", "Scarborough", "Saco",
            "Westbrook", "Augusta", "Windham", "Waterville", "Presque Isle", "York", "Falmouth", "Kennebunk", "Orono", "Wells",
            "Standish", "Old Orchard Beach", "Brewer", "Topsham", "Caribou", "Bath", "Rockland", "Ellsworth", "Farmington", "Yarmouth",
            "Cumberland", "Hampden", "Gardiner", "Freeport", "Houlton", "Gray", "Skowhegan", "Buxton", "Kittery", "Bar Harbor",
            "Turner", "New Gloucester", "Norridgewock", "Camden", "Jay", "Boothbay Harbor", "Madison", "Lincoln", "Bridgton", "Poland"],
        "MD": ["Baltimore", "Columbia", "Germantown", "Silver Spring", "Waldorf", "Frederick", "Ellicott City", "Glen Burnie", "Gaithersburg", "Rockville",
            "Bethesda", "Dundalk", "Bowie", "Towson", "Aspen Hill", "Severn", "Wheaton", "Bel Air South", "Odenton", "Catonsville",
            "Hagerstown", "Essex", "Annapolis", "Clinton", "Reisterstown", "Pikesville", "Owings Mills", "Randallstown", "Woodlawn", "Crofton",
            "Parkville", "Suitland", "Cockeysville", "Severna Park", "Edgewood", "Lake Shore", "Middle River", "Eldersburg", "Hyattsville", "Havre de Grace",
            "Carney", "Pasadena", "Chillum", "Lutherville", "Camp Springs", "Elkridge", "Colesville", "South Laurel", "Fairland", "Montgomery Village"],
        "MA": ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell", "Brockton", "Quincy", "Lynn", "Fall River", "Newton",
            "Lawrence", "Somerville", "Framingham", "Haverhill", "Waltham", "Malden", "Brookline", "Medford", "Taunton", "Chicopee",
            "Weymouth", "Revere", "Peabody", "Methuen", "Barnstable", "Pittsfield", "Attleboro", "Everett", "Salem", "Westfield",
            "Leominster", "Beverly", "Fitchburg", "Holyoke", "Marlborough", "Woburn", "Chelsea", "Braintree", "Watertown", "Randolph",
            "Franklin", "Amherst", "Danvers", "Milton", "Dedham", "North Attleborough", "Gloucester", "Shrewsbury", "Needham", "West Springfield"],
        "MA": ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell", "Brockton", "Quincy", "Lynn", "New Bedford", "Fall River",
            "Newton", "Lawrence", "Somerville", "Waltham", "Haverhill", "Malden", "Medford", "Taunton", "Chicopee", "Weymouth",
            "Revere", "Peabody", "Methuen", "Barnstable", "Pittsfield", "Attleboro", "Everett", "Salem", "Westfield", "Leominster",
            "Fitchburg", "Beverly", "Holyoke", "Marlborough", "Woburn", "Chelsea", "Braintree", "Watertown", "Franklin", "Lexington",
            "Amherst", "Needham", "Agawam", "Randolph", "Melrose", "Danvers", "Dedham", "Belmont", "Natick", "Wellesley"],
        "MI": ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", "Lansing", "Flint", "Dearborn", "Livonia", "Westland",
            "Troy", "Farmington Hills", "Kalamazoo", "Wyoming", "Rochester Hills", "Southfield", "Taylor", "Pontiac", "St. Clair Shores", "Dearborn Heights",
            "Royal Oak", "Novi", "Battle Creek", "Saginaw", "Kentwood", "East Lansing", "Roseville", "Portage", "Midland", "Lincoln Park",
            "Muskegon", "Bay City", "Jackson", "Holland", "Eastpointe", "Port Huron", "Southgate", "Burton", "Madison Heights", "Oak Park",
            "Allen Park", "Garden City", "Wyandotte", "Mount Pleasant", "Monroe", "Birmingham", "Ferndale", "Ypsilanti", "Walker", "Adrian"],
        "MN": ["Minneapolis", "Saint Paul", "Rochester", "Duluth", "Bloomington", "Brooklyn Park", "Plymouth", "Maple Grove", "Woodbury", "St. Cloud",
            "Eagan", "Eden Prairie", "Coon Rapids", "Burnsville", "Blaine", "Lakeville", "Minnetonka", "Apple Valley", "Edina", "St. Louis Park",
            "Mankato", "Maplewood", "Moorhead", "Shakopee", "Richfield", "Cottage Grove", "Inver Grove Heights", "Roseville", "Andover", "Brooklyn Center",
            "Savage", "Hastings", "Oakdale", "Fridley", "Winona", "Shoreview", "Prior Lake", "White Bear Lake", "Champlin", "Farmington",
            "New Brighton", "Anoka", "Chaska", "Robbinsdale", "Forest Lake", "South St. Paul", "Stillwater", "Northfield", "Otsego", "Willmar"],
        "MS": ["Jackson", "Gulfport", "Southaven", "Biloxi", "Hattiesburg", "Olive Branch", "Tupelo", "Meridian", "Greenville", "Madison",
            "Horn Lake", "Pearl", "Clinton", "Brandon", "Ridgeland", "Pascagoula", "Oxford", "Starkville", "Columbus", "Vicksburg",
            "Gautier", "Clarksdale", "Ocean Springs", "Natchez", "Hernando", "Greenwood", "McComb", "Long Beach", "Laurel", "Brookhaven",
            "Byram", "Bay St. Louis", "Picayune", "Petal", "Canton", "Grenada", "Indianola", "Booneville", "Richland", "Kosciusko",
            "Corinth", "Amory", "Philadelphia", "Yazoo City", "Batesville", "West Point", "Cleveland", "Flowood", "Raymond", "Crystal Springs"],
        "MO": ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence", "Lee's Summit", "O'Fallon", "St. Joseph", "St. Charles", "Blue Springs",
            "Florissant", "Joplin", "Chesterfield", "Jefferson City", "Cape Girardeau", "Wildwood", "University City", "Ballwin", "Raytown", "Liberty",
            "Wentzville", "Mehlville", "Kirkwood", "Gladstone", "Belton", "Sedalia", "Hazelwood", "Maryland Heights", "Grandview", "Webster Groves",
            "Arnold", "Rolla", "Ferguson", "Affton", "Nixa", "Ozark", "Republic", "Parkville", "Creve Coeur", "Sikeston",
            "Neosho", "Bridgeton", "Hannibal", "Raymore", "Lebanon", "Jennings", "Poplar Bluff", "Carthage", "Lake St. Louis", "Moberly"],
        "MT": ["Billings", "Missoula", "Great Falls", "Bozeman", "Butte", "Helena", "Kalispell", "Havre", "Anaconda", "Miles City",
            "Belgrade", "Livingston", "Laurel", "Whitefish", "Sidney", "Lewistown", "Glendive", "Columbia Falls", "Polson", "Hamilton",
            "Dillon", "Hardin", "Glasgow", "Shelby", "Libby", "Cut Bank", "Deer Lodge", "Eureka", "Forsyth", "Red Lodge",
            "Baker", "Choteau", "Conrad", "Colstrip", "Wolf Point", "Townsend", "Malta", "Roundup", "Plentywood", "Chinook",
            "Thompson Falls", "Big Timber", "Bigfork", "Superior", "Manhattan", "Big Sky", "Stevensville", "West Yellowstone", "Lolo", "Four Corners"],
        "NE": ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney", "Fremont", "Hastings", "Norfolk", "Columbus", "Papillion",
            "La Vista", "Scottsbluff", "South Sioux City", "Beatrice", "Lexington", "Gering", "Alliance", "Blair", "York", "McCook",
            "Ralston", "Nebraska City", "Crete", "Seward", "Schuyler", "Plattsmouth", "Sidney", "Chadron", "Wayne", "Holdrege",
            "Auburn", "Gothenburg", "Ogallala", "Valentine", "David City", "Falls City", "St. Paul", "Central City", "Geneva", "West Point",
            "Broken Bow", "Fairbury", "Ord", "O'Neill", "Kimball", "Wahoo", "Tekamah", "Cozad", "Red Cloud", "Hartington"],
        "NV": ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Paradise", "Spring Valley", "Sunrise Manor", "Enterprise", "Sparks", "Carson City",
            "Whitney", "Pahrump", "Winchester", "Summerlin South", "Fernley", "Sun Valley", "Elko", "Mesquite", "Boulder City", "Spanish Springs",
            "Gardnerville Ranchos", "Cold Springs", "Dayton", "Incline Village", "Moapa Valley", "Laughlin", "Indian Hills", "Johnson Lane", "Battle Mountain", "Stagecoach",
            "Spring Creek", "Ely", "Zephyr Cove", "West Wendover", "Tonopah", "Carlin", "Hawthorne", "Yerington", "Minden", "Bunkerville",
            "Verdi", "Wells", "Silver Springs", "Panaca", "Beatty", "Caliente", "Smith Valley", "Pyramid Lake", "Schurz", "Lovelock"],
        "NH": ["Manchester", "Nashua", "Concord", "Derry", "Dover", "Rochester", "Salem", "Merrimack", "Hudson", "Londonderry",
            "Keene", "Bedford", "Portsmouth", "Goffstown", "Laconia", "Hampton", "Milford", "Durham", "Exeter", "Windham",
            "Hooksett", "Claremont", "Lebanon", "Pelham", "Somersworth", "Hanover", "Raymond", "Berlin", "Amherst", "Plaistow",
            "Seabrook", "Franklin", "Newmarket", "Bow", "Belmont", "Farmington", "Wolfeboro", "Pembroke", "Gilford", "Kingston",
            "Atkinson", "Newport", "Hollis", "Hampstead", "Weare", "Sandown", "Swanzey", "Greenland", "Brentwood", "Sunapee"],
        "NJ": ["Newark", "Jersey City", "Paterson", "Elizabeth", "Lakewood", "Edison", "Woodbridge", "Toms River", "Hamilton", "Trenton",
            "Clifton", "Camden", "Brick", "Cherry Hill", "Passaic", "Union City", "Old Bridge", "Franklin", "Middletown", "Bayonne",
            "East Orange", "North Bergen", "Vineland", "Union", "Piscataway", "New Brunswick", "Jackson", "Wayne", "Irvington", "Parsippany-Troy Hills",
            "Hoboken", "Perth Amboy", "Plainfield", "West New York", "Washington", "East Brunswick", "Bloomfield", "West Orange", "Evesham", "Bridgewater",
            "South Brunswick", "Egg Harbor", "Hackensack", "Sayreville", "Mount Laurel", "North Brunswick", "Kearny", "Linden", "Marlboro", "Teaneck"],
        "NM": ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell", "Farmington", "Hobbs", "Clovis", "Carlsbad", "Gallup",
            "Alamogordo", "Los Lunas", "Deming", "Chaparral", "Sunland Park", "Las Vegas", "Portales", "Los Alamos", "Artesia", "Lovington",
            "Silver City", "Espanola", "Anthony", "Raton", "Bernalillo", "Grants", "Socorro", "Shiprock", "Taos", "Belen",
            "Corrales", "Aztec", "Bloomfield", "Santa Teresa", "Truth or Consequences", "Edgewood", "White Rock", "Tucumcari", "Zuni Pueblo", "Tularosa",
            "Lordsburg", "Peralta", "Eunice", "Estancia", "Jemez Pueblo", "Milan", "Mesilla", "Dexter", "Bayard", "Fort Sumner"],
        "NY": ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica",
            "White Plains", "Hempstead", "Troy", "Niagara Falls", "Binghamton", "Freeport", "Valley Stream", "Rome", "Ithaca", "Long Beach",
            "Poughkeepsie", "North Tonawanda", "Jamestown", "Saratoga Springs", "Middletown", "Glen Cove", "Peekskill", "Kingston", "Lindenhurst", "Lockport",
            "Ossining", "Cortland", "Plattsburgh", "Watertown", "Newburgh", "Garden City", "Tonawanda", "Amsterdam", "Cohoes", "Glens Falls",
            "Batavia", "Lackawanna", "Oneonta", "Canandaigua", "Geneva", "Oswego", "Fulton", "Hornell", "Dunkirk", "Ogdensburg"],
        "NC": ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "Wilmington", "High Point", "Concord",
            "Greenville", "Asheville", "Jacksonville", "Gastonia", "Chapel Hill", "Rocky Mount", "Burlington", "Wilson", "Huntersville", "Kannapolis",
            "Apex", "Hickory", "Goldsboro", "Indian Trail", "Mooresville", "Monroe", "Salisbury", "New Bern", "Holly Springs", "Matthews",
            "Sanford", "Elizabeth City", "Garner", "Cornelius", "Fuquay-Varina", "Shelby", "Carrboro", "Asheboro", "Clemmons", "Morrisville",
            "Lenoir", "Wake Forest", "Thomasville", "Statesville", "Mint Hill", "Kernersville", "Wilson's Mills", "Roanoke Rapids", "Southern Pines", "Laurinburg"],
        "ND": ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo", "Williston", "Dickinson", "Mandan", "Jamestown", "Wahpeton",
            "Devils Lake", "Valley City", "Grafton", "Beulah", "Watford City", "Horace", "Lincoln", "Casselton", "Harvey", "New Town",
            "Hazen", "Stanley", "Bottineau", "Oakes", "Rugby", "Carrington", "Hillsboro", "Langdon", "Thompson", "Lisbon",
            "Cavalier", "Bowman", "Velva", "Larimore", "Mayville", "Killdeer", "Park River", "Linton", "Garrison", "Tioga",
            "Kindred", "Enderlin", "Harwood", "Washburn", "Hettinger", "Ashley", "Wishek", "Ellendale", "Cando", "Kenmare"],
        "OH": ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Parma", "Canton", "Youngstown", "Lorain",
            "Hamilton", "Springfield", "Kettering", "Elyria", "Lakewood", "Cuyahoga Falls", "Middletown", "Newark", "Euclid", "Mentor",
            "Beavercreek", "Dublin", "Strongsville", "Findlay", "Lima", "Huber Heights", "Marion", "Westerville", "Lancaster", "Grove City",
            "Delaware", "Reynoldsburg", "Fairfield", "Mansfield", "Upper Arlington", "Westlake", "Troy", "Shaker Heights", "Bowling Green", "North Olmsted",
            "North Ridgeville", "Stow", "Gahanna", "Massillon", "Brunswick", "Xenia", "Kent", "Austintown", "Medina", "Zanesville"],
        "OK": ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond", "Lawton", "Moore", "Midwest City", "Enid", "Stillwater",
            "Muskogee", "Bartlesville", "Owasso", "Shawnee", "Yukon", "Bixby", "Ardmore", "Ponca City", "Duncan", "Del City",
            "Jenks", "Sapulpa", "Bethany", "Sand Springs", "Mustang", "Durant", "Altus", "McAlester", "El Reno", "Chickasha",
            "Claremore", "Miami", "Woodward", "Ada", "Tahlequah", "Weatherford", "Guthrie", "Guymon", "Pryor Creek", "Warr Acres",
            "Blanchard", "Dewey", "Glenpool", "Poteau", "Newcastle", "Seminole", "Okmulgee", "Purcell", "Cushing", "Sallisaw"],
        "OR": ["Portland", "Eugene", "Salem", "Gresham", "Hillsboro", "Beaverton", "Bend", "Medford", "Springfield", "Corvallis",
            "Albany", "Tigard", "Lake Oswego", "Keizer", "Grants Pass", "Oregon City", "McMinnville", "Redmond", "Tualatin", "West Linn",
            "Woodburn", "Newberg", "Forest Grove", "Wilsonville", "Roseburg", "Klamath Falls", "Ashland", "Milwaukie", "Central Point", "Canby",
            "Hermiston", "Lebanon", "Pendleton", "Coos Bay", "Dallas", "The Dalles", "St. Helens", "La Grande", "Cornelius", "Gladstone",
            "Ontario", "Newport", "Troutdale", "Monmouth", "Seaside", "Sherwood", "Silverton", "Stayton", "Sweet Home", "Tillamook"],
        "PA": ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster", "Harrisburg", "York",
            "Altoona", "Wilkes-Barre", "State College", "Chester", "Bethel Park", "Williamsport", "Monroeville", "Norristown", "Plum", "Easton",
            "Lebanon", "Hazleton", "New Castle", "Johnstown", "McKeesport", "Hermitage", "Carlisle", "Butler", "Meadville", "Greensburg",
            "Pottsville", "Phoenixville", "Wilkinsburg", "West Mifflin", "Lansdale", "Hanover", "King of Prussia", "Waynesboro", "Drexel Hill", "Emmaus",
            "New Kensington", "Ephrata", "Chambersburg", "Latrobe", "Whitehall", "Gettysburg", "Bloomsburg", "Lower Burrell", "Ellwood City", "Sunbury"],
        "RI": ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence", "Woonsocket", "Coventry", "Cumberland", "North Providence", "South Kingstown",
            "West Warwick", "Johnston", "North Kingstown", "Newport", "Bristol", "Westerly", "Smithfield", "Lincoln", "Central Falls", "Portsmouth",
            "Barrington", "Middletown", "Tiverton", "Narragansett", "East Greenwich", "Scituate", "Burrillville", "Glocester", "Hopkinton", "Charlestown",
            "Exeter", "Richmond", "Jamestown", "Little Compton", "West Greenwich", "Foster", "Tiverton Four Corners", "Wakefield", "Kingston", "Greenville",
            "Ashaway", "Hope Valley", "Pascoag", "Wyoming", "Slatersville", "Saunderstown", "Bradford", "Clayville", "Harmony", "Mapleville"],
        "SC": ["Charleston", "Columbia", "North Charleston", "Mount Pleasant", "Rock Hill", "Greenville", "Summerville", "Goose Creek", "Sumter", "Florence",
            "Spartanburg", "Myrtle Beach", "Anderson", "Greer", "Aiken", "Mauldin", "Greenwood", "North Augusta", "Simpsonville", "Easley",
            "Conway", "Hanahan", "Lexington", "West Columbia", "Clemson", "Orangeburg", "Bluffton", "Gaffney", "Beaufort", "Newberry",
            "Tega Cay", "Fort Mill", "Port Royal", "Forest Acres", "Camden", "Georgetown", "Seneca", "York", "Laurens", "Dillon",
            "Lancaster", "Bennettsville", "Fountain Inn", "Irmo", "Walterboro", "Hartsville", "Moncks Corner", "Lake City", "Marion", "North Myrtle Beach"],
        "SD": ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown", "Mitchell", "Yankton", "Pierre", "Huron", "Spearfish",
            "Box Elder", "Vermillion", "Brandon", "Madison", "Sturgis", "Harrisburg", "Belle Fourche", "Tea", "Dell Rapids", "Mobridge",
            "Hot Springs", "Custer", "Milbank", "Sisseton", "Wagner", "Hartford", "Dakota Dunes", "Redfield", "Pine Ridge", "North Sioux City",
            "Flandreau", "Canton", "Lead", "Winner", "Lennox", "Gregory", "Britton", "Chamberlain", "Elk Point", "Garretson",
            "Clark", "Parker", "Tyndall", "Miller", "Fort Pierre", "Philip", "Kadoka", "Lemmon", "Faith", "Ipswich"],
        "TN": ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville", "Murfreesboro", "Franklin", "Jackson", "Johnson City", "Bartlett",
            "Hendersonville", "Kingsport", "Collierville", "Cleveland", "Smyrna", "Germantown", "Brentwood", "Columbia", "Spring Hill", "La Vergne",
            "Cookeville", "Gallatin", "Mount Juliet", "Lebanon", "Oak Ridge", "Morristown", "Maryville", "Bristol", "Shelbyville", "Tullahoma",
            "East Ridge", "Farragut", "Sevierville", "Dyersburg", "Springfield", "Goodlettsville", "Greeneville", "McMinnville", "Portland", "Soddy-Daisy",
            "Athens", "Elizabethton", "Lakeland", "Lawrenceburg", "Red Bank", "Martin", "Harriman", "Milan", "Signal Mountain", "Alcoa"],
        "TX": ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Laredo",
            "Lubbock", "Garland", "Irving", "Amarillo", "Grand Prairie", "Brownsville", "McKinney", "Frisco", "Pasadena", "McAllen",
            "Killeen", "Mesquite", "Midland", "Denton", "Waco", "Carrollton", "Round Rock", "Abilene", "Odessa", "Pearland",
            "Richardson", "Sugar Land", "Beaumont", "The Woodlands", "College Station", "Lewisville", "League City", "Tyler", "Wichita Falls", "Allen",
            "San Angelo", "Edinburg", "Conroe", "Bryan", "Mission", "New Braunfels", "Longview", "Pharr", "Flower Mound", "Baytown"],
        "UT": ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem", "Sandy", "St. George", "Ogden", "Layton", "South Jordan",
            "Lehi", "Millcreek", "Taylorsville", "Logan", "Murray", "Draper", "Bountiful", "Riverton", "Spanish Fork", "Pleasant Grove",
            "Eagle Mountain", "Kearns", "Tooele", "Herriman", "Cottonwood Heights", "Springville", "Midvale", "Roy", "American Fork", "Syracuse",
            "South Salt Lake", "Holladay", "Cedar City", "Clearfield", "Magna", "Kaysville", "South Ogden", "North Ogden", "Washington", "Hurricane",
            "Payson", "Brigham City", "Saratoga Springs", "Farmington", "West Haven", "Tremonton", "Heber City", "Park City", "North Salt Lake", "Vernal"],
        "VT": ["Burlington", "South Burlington", "Rutland", "Essex Junction", "Bennington", "Brattleboro", "Milton", "Hartford", "Barre", "Montpelier",
            "Middlebury", "Winooski", "St. Albans", "Shelburne", "St. Johnsbury", "Williston", "Northfield", "Lyndon", "Springfield", "Swanton",
            "Morristown", "Rockingham", "Colchester", "Hinesburg", "Waterbury", "Hartland", "Brandon", "Randolph", "Richmond", "Derby",
            "Newport", "Fair Haven", "Berlin", "North Bennington", "Castleton", "Manchester", "Poultney", "Johnson", "Chester", "Norwich",
            "Pittsford", "Woodstock", "Bethel", "Cavendish", "Enosburg Falls", "Fairfax", "Hardwick", "Barre Town", "Vergennes", "Windsor"],
        "VA": ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Newport News", "Alexandria", "Hampton", "Roanoke", "Portsmouth", "Suffolk",
            "Lynchburg", "Centreville", "Dale City", "Reston", "Harrisonburg", "Leesburg", "Ashburn", "McLean", "Tuckahoe", "Charlottesville",
            "Blacksburg", "Lake Ridge", "Danville", "Linton Hall", "Burke", "Manassas", "Woodbridge", "Annandale", "Petersburg", "Mechanicsville",
            "Springfield", "Franconia", "Fair Oaks", "Cave Spring", "Sterling", "Bailey’s Crossroads", "Tysons", "Oakton", "Lincolnia", "Hopewell",
            "Waynesboro", "Radford", "Marion", "Bristol", "Short Pump", "Winchester", "Front Royal", "Staunton", "South Riding", "Chantilly"],
        "WA": ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue", "Kent", "Everett", "Renton", "Federal Way", "Yakima",
            "Spokane Valley", "Kirkland", "Bellingham", "Kennewick", "Auburn", "Pasco", "Marysville", "Lakewood", "Redmond", "Shoreline",
            "Sammamish", "Richland", "Burien", "Olympia", "Lacey", "Edmonds", "Bremerton", "Puyallup", "Longview", "Lynnwood",
            "Bothell", "Walla Walla", "Issaquah", "Mount Vernon", "University Place", "Pullman", "Des Moines", "SeaTac", "Spanaway", "Lake Stevens",
            "Maple Valley", "Mercer Island", "Moses Lake", "Oak Harbor", "Kenmore", "Silverdale", "Covington", "Mill Creek", "Camas", "Battle Ground"],
        "WV": ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling", "Weirton", "Fairmont", "Martinsburg", "Beckley", "Clarksburg",
            "South Charleston", "Vienna", "St. Albans", "Bluefield", "Bridgeport", "Oak Hill", "Moundsville", "Elkins", "Dunbar", "Nitro",
            "Hurricane", "Princeton", "Keyser", "Ranson", "Charles Town", "Buckhannon", "Point Pleasant", "Westover", "Fayetteville", "New Martinsville",
            "Barboursville", "Lewisburg", "Ravenswood", "Pleasant Valley", "Petersburg", "Montgomery", "Kenova", "Belington", "Hinton", "Grafton",
            "Shinnston", "Richwood", "Summersville", "Rainelle", "Wellsburg", "Chester", "Ripley", "Spencer", "Marlinton", "Romney"],
        "WI": ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine", "Appleton", "Waukesha", "Eau Claire", "Oshkosh", "Janesville",
            "West Allis", "La Crosse", "Sheboygan", "Wauwatosa", "Fond du Lac", "Brookfield", "New Berlin", "Wausau", "Menomonee Falls", "Greenfield",
            "Beloit", "Franklin", "Oak Creek", "Manitowoc", "Sun Prairie", "West Bend", "Superior", "Stevens Point", "Neenah", "Muskego",
            "Caledonia", "Mount Pleasant", "De Pere", "Mequon", "Watertown", "South Milwaukee", "Marshfield", "Wisconsin Rapids", "Fitchburg", "Cudahy",
            "Howard", "Germantown", "Middleton", "Ashwaubenon", "Pewaukee", "Menasha", "Platteville", "River Falls", "Stoughton", "Hudson"],
        "WY": ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs", "Sheridan", "Green River", "Evanston", "Riverton", "Jackson",
            "Cody", "Rawlins", "Lander", "Torrington", "Powell", "Douglas", "Buffalo", "Ranchettes", "Worland", "Newcastle",
            "Bar Nunn", "Kemmerer", "Thermopolis", "Wheatland", "Mills", "Saratoga", "Moorcroft", "Pinedale", "Lovell", "Evansville",
            "Afton", "Glenrock", "Lusk", "Mountain View", "Greybull", "Pine Bluffs", "Basin", "Dubois", "Big Piney", "Shoshoni",
            "Sundance", "Upton", "Guernsey", "Lingle", "Midwest", "Chugwater", "Baggs", "Kirby", "Manville", "Opal"],
    }


    function updateCities() {
        const stateInput = document.getElementById("state").value.toUpperCase();
        const cityList = document.getElementById("cityList");

        // Clear existing options
        cityList.innerHTML = "";

        if (citiesByState[stateInput]) {
            citiesByState[stateInput].forEach(city => {
                let option = document.createElement("option");
                option.value = city;
                cityList.appendChild(option);
            });
        }
    }

    // Attach event listener to state input field
    document.getElementById("state").addEventListener("input", updateCities);
});

document.addEventListener("DOMContentLoaded", () => {
    const dmvInput = document.getElementById("dmv");
    let allowBackspace = false;

    dmvInput.addEventListener("input", (event) => {
        let value = dmvInput.value.replace(/-/g, ''); // Remove existing dashes
        let formattedValue = '';

        if (allowBackspace) {
            allowBackspace = false;
            return; // Skip formatting if user pressed backspace
        }

        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 3 === 0 && i < 12) {
                formattedValue += '-'; // Add dash after every 3rd character
            }
            formattedValue += value[i];
        }

        dmvInput.value = formattedValue;
    });

    dmvInput.addEventListener("keydown", (event) => {
        if (event.key === "Backspace") {
            allowBackspace = true; // Allow backspace to remove dashes
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const dobInput = document.getElementById("date-of-birth");
    const ageDisplay = document.getElementById("age-display");

    function calculateAge() {
        let dobValue = dobInput.value;

        if (dobValue) {
            let birthDate = new Date(dobValue);
            let today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            let monthDiff = today.getMonth() - birthDate.getMonth();

            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--; // Adjust age if birthday hasn't occurred yet this year
            }

            ageDisplay.value = age;
        } else {
            ageDisplay.value = ""; // Clear age field if no DOB is selected
        }
    }

    // Update age on DOB input change
    dobInput.addEventListener("input", calculateAge);

    // Run on page load if DOB exists
    if (dobInput.value) {
        calculateAge();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let datalistInputs = document.querySelectorAll("input[list]");

    datalistInputs.forEach(input => {
        input.addEventListener("focus", function () {
            this.setAttribute("autocomplete", "off"); // Disable autocomplete interference
            this.value = ""; // Clears the input temporarily to show all options
        });

        input.addEventListener("blur", function () {
            if (!this.value.trim()) {
                this.value = sessionStorage.getItem(this.id) || ""; // Restore previous value if empty
            }
        });

        input.addEventListener("input", function () {
            sessionStorage.setItem(this.id, this.value); // Save input value for auto-save
        });
    });

    // Function to lock all inputs (including datalist and date fields) in a row and persist through refresh
    window.lockRow = function (rowId) {
        let rowElements = document.querySelectorAll(`#${rowId} input`);
        rowElements.forEach(element => {
            element.readOnly = true;
            element.style.backgroundColor = "#d3d3d3"; // Grey out the field
            element.style.pointerEvents = "none"; // Prevent interactions
        });

        // Lock alternate ID if present
        let row = document.getElementById(rowId);
        let altId = row?.getAttribute("data-alt-id");
        if (altId) {
            lockRow(altId); // Recursively lock alt ID
        }

        // Store locked state in sessionStorage
        sessionStorage.setItem(`locked-${rowId}`, "true");
    };

    // Function to unlock fields in a row and remove grey-out effect
    window.unlockRow = function (rowId) {
        let rowElements = document.querySelectorAll(`#${rowId} input`);
        rowElements.forEach(element => {
            element.readOnly = false;
            element.style.backgroundColor = ""; // Restore normal background
            element.style.pointerEvents = "auto"; // Allow interactions again
        });

        // Unlock alternate ID if present
        let row = document.getElementById(rowId);
        let altId = row?.getAttribute("data-alt-id");
        if (altId) {
            unlockRow(altId); // Recursively unlock alt ID
        }

        // Remove locked state from sessionStorage
        sessionStorage.removeItem(`locked-${rowId}`);
    };

    // Function to restore locked state from sessionStorage on page load
    function restoreLockedRows() {
        document.querySelectorAll(".card-content").forEach(row => {
            let rowId = row.id;
            if (sessionStorage.getItem(`locked-${rowId}`) === "true") {
                lockRow(rowId);
            }
        });
    }

    // Auto-save function to store progress every 3 seconds
    function autoSaveForm() {
        let formFields = document.querySelectorAll("input");
        formFields.forEach(field => {
            sessionStorage.setItem(field.id, field.value);
        });
    }

    // Restore saved data from sessionStorage
    function restoreFormData() {
        let formFields = document.querySelectorAll("input");
        formFields.forEach(field => {
            if (sessionStorage.getItem(field.id)) {
                field.value = sessionStorage.getItem(field.id);
            }
        });
    }

    // Auto-save every 3 seconds
    setInterval(autoSaveForm, 3000);

    // Restore saved data and locked states on page load
    restoreFormData();
    restoreLockedRows();
});


function updateCourtAndJail() {
    let county = document.getElementById("county").value;
    console.log("Selected County:", county);
    // Future logic for updating court and jail options based on county will be added here
}

document.addEventListener('DOMContentLoaded', () => {
    const countyCourts = {
        'Barrow': [
            'State Court',
            'Superior Court',
            'Auburn City Court',
            'Statham City Court',
            'Winder City Court'
        ],
        'Bartow': [
            'State Court',
            'Superior Court',
            'Adairsville City Court',
            'Cartersville City Court'
        ],
        'Carroll': [
            'State Court',
            'Superior Court',
            'Carrollton City Court',
            'Villa Rica City Court'
        ],
        'Cherokee': [
            'State Court',
            'Superior Court',
            'Canton City Court',
            'Woodstock City Court'
        ],
        'Clarke': [
            'State Court',
            'Superior Court',
            'Athens-Clarke County Court'
        ],
        'Cobb': [
            'State Court',
            'Superior Court',
            'Marietta City Court',
            'Smyrna City Court',
            'Kennesaw City Court',
            'Acworth City Court',
            'Powder Springs City Court',
            'Austell City Court'
        ],
        'Floyd': [
            'State Court',
            'Superior Court',
            'Rome City Court',
            'Cave Spring City Court'
        ],
        'Gordon': [
            'State Court',
            'Superior Court',
            'Calhoun City Court',
            'Fairmount City Court'
        ],
        'Gwinnett': [
            'State Court',
            'Superior Court',
            'Duluth City Court',
            'Lawrenceville City Court',
            'Lilburn City Court',
            'Norcross City Court',
            'Snellville City Court',
            'Suwanee City Court'
        ],
        'Haralson': [
            'State Court',
            'Superior Court',
            'Bremen City Court',
            'Tallapoosa City Court',
            'Buchanan City Court',
            'Waco City Court'
        ],
        'Paulding': [
            'State Court',
            'Superior Court',
            'Hiram City Court',
            'Dallas City Court'
        ],
        'Polk': [
            'State Court',
            'Superior Court',
            'Cedartown City Court',
            'Rockmart City Court',
            'Aragon City Court',
            'Braswell City Court'
        ],
        'Pickens': [
            'State Court',
            'Superior Court',
            'Jasper City Court',
            'Nelson City Court',
            'Talking Rock City Court'
        ]
    };

    const countyInput = document.getElementById('county');
    const courtInput = document.getElementById('courtLocation');
    const courtDatalist = document.getElementById('court-options');

    countyInput.addEventListener('input', () => {
        const selectedCounty = countyInput.value;

        // Clear previous options
        courtDatalist.innerHTML = '<option value="">Select Court</option>';
        if (selectedCounty in countyCourts) {
            countyCourts[selectedCounty].forEach(court => {
                let option = document.createElement('option');
                option.value = court;
                courtDatalist.appendChild(option);
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const courtDateInput = document.getElementById('courtDateInput');

    courtDateInput.addEventListener('change', () => {
        let value = courtDateInput.value;

    });
});

document.addEventListener('DOMContentLoaded', () => {
    const heightInput = document.getElementById('height');

    heightInput.addEventListener('input', () => {
        let numericString = heightInput.value.replace(/[^0-9]/g, ''); // Strip non-digits

        if (numericString === '') {
            heightInput.value = ''; // Allow clearing the field
            return;
        }

        let feet = parseInt(numericString.substring(0, 1), 10) || 0; // First digit is feet
        let inches = parseInt(numericString.substring(1), 10) || 0; // Remaining digits are inches

        if (inches > 11) {
            inches = inches % 10; // Prevent inches from exceeding 11
        }

        // Preserve backspace functionality by only formatting when more than 1 digit is entered
        if (numericString.length === 1) {
            heightInput.value = feet; // Show only feet for single-digit input
        } else {
            heightInput.value = `${feet}'${inches}"`; // Properly format feet & inches
        }
    });

    // WEIGHT FORMATTING
    const weightInput = document.getElementById('weight');
    weightInput.addEventListener('blur', () => {
        const value = weightInput.value.replace(/[^0-9]/g, ''); // Strip non-numeric characters
        if (value) {
            weightInput.value = `${parseInt(value, 10)} lbs`;
        } else {
            weightInput.value = ''; // Clear if empty
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const bondAmountInput = document.getElementById('bondAmount');

    bondAmountInput.addEventListener('input', () => {
        let value = bondAmountInput.value.replace(/[^0-9.]/g, ''); // Remove non-numeric characters except for '.'

        // Ensure only one decimal point
        let parts = value.split('.');
        if (parts.length > 2) {
            value = parts[0] + '.' + parts.slice(1).join(''); // Keep only the first decimal point
        }

        bondAmountInput.value = value; // Update the field with clean numeric value
    });

    bondAmountInput.addEventListener('blur', () => {
        let value = bondAmountInput.value.replace(/[^0-9.]/g, ''); // Remove unwanted characters
        let numericValue = parseFloat(value);

        if (!isNaN(numericValue)) {
            bondAmountInput.value = numericValue.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
            });
        } else {
            bondAmountInput.value = ''; // Clear if invalid
        }
    });
});

function updateMultiSelect(inputId, datalistId) {
    let inputElement = document.getElementById(inputId);
    let currentValue = inputElement.value;

    if (currentValue === "None") {
        inputElement.value = ""; // Clear if "None" is selected
    }

    let existingValues = inputElement.value.split(', ');
    let datalistOptions = [...document.getElementById(datalistId).options].map(option => option.value);

    if (datalistOptions.includes(currentValue) && !existingValues.includes(currentValue)) {
        existingValues.push(currentValue);
        inputElement.value = existingValues.join(', ');
    }
}

const ssnInput = document.getElementById('ssnInput');

/**
 * Formats a string of digits as a US Social Security Number (xxx-xx-xxxx).
 * @param {string} inputValue The unformatted input string.
 * @returns {string} The formatted SSN string.
 */
function formatSsn(inputValue) {
    // Remove all non-digit characters
    const digits = inputValue.replace(/[^0-9]/g, '');

    // If fewer than 4 digits, just return what we have
    if (digits.length < 4) {
        return digits;
    }
    // If 4 or 5 digits, we have: xxx-xx
    if (digits.length < 6) {
        return digits.slice(0, 3) + '-' + digits.slice(3);
    }
    // If 6 or more digits, format: xxx-xx-xxxx
    return digits.slice(0, 3) + '-' + digits.slice(3, 5) + '-' + digits.slice(5, 9);
}

// Listen for input on the SSN field
ssnInput.addEventListener('input', function () {
    this.value = formatSsn(this.value);
});
document.addEventListener("DOMContentLoaded", function () {
// Ensure popups are hidden initially
document.getElementById("idMarksPopup").style.display = "none";
document.getElementById("chargesPopup").style.display = "none";
});

function openIdMarksPopup() {
document.getElementById("idMarksPopup").style.display = "block";
}

function closeIdMarksPopup() {
document.getElementById("idMarksPopup").style.display = "none";
}

function openChargesPopup() {
document.getElementById("chargesPopup").style.display = "block";
}

function closeChargesPopup() {
document.getElementById("chargesPopup").style.display = "none";
}


let idMarksArray = [];

function openIdMarksPopup() {
    document.getElementById("idMarksPopup").style.display = "block";
}

function closeIdMarksPopup() {
    document.getElementById("idMarksPopup").style.display = "none";
}

function addIdMark() {
    let type = document.getElementById("idMarkType").value;
    let location = document.getElementById("idMarkLocation").value;
    let quantity = document.getElementById("idMarkQuantity").value;

    if (type === "" || location === "") {
        alert("Please select a type and specify a location.");
        return;
    }

    let idMarkEntry = `${quantity}x ${type} on ${location}`;
    idMarksArray.push(idMarkEntry);

    document.getElementById("idMarks").value = idMarksArray.join(", ");
    document.getElementById("idMarksData").value = idMarksArray.join("|"); // Hidden input for backend processing
    closeIdMarksPopup();
}

let chargesArray = [];

function openChargesPopup() {
    document.getElementById("chargesPopup").style.display = "block";
}

function closeChargesPopup() {
    document.getElementById("chargesPopup").style.display = "none";
}

function addCharge() {
    let type = document.getElementById("chargeType").value;
    let severity = document.getElementById("chargeSeverity").value;

    if (type === "") {
        alert("Please select or enter a charge.");
        return;
    }

    let chargeEntry = `${type} (${severity})`;
    chargesArray.push(chargeEntry);

    document.getElementById("charges").value = chargesArray.join(", ");
    document.getElementById("chargesData").value = chargesArray.join("|"); // Hidden input for backend processing
    closeChargesPopup();
}


document.addEventListener("DOMContentLoaded", function () {
    let today = new Date();
    let month = (today.getMonth() + 1).toString().padStart(2, '0'); // Get month (January is 0)
    let day = today.getDate().toString().padStart(2, '0'); // Get day and pad with zero if needed
    let year = today.getFullYear();

    let formattedDate = `${month}/${day}/${year}`; // Format: MM/DD/YYYY
    document.getElementById("todayDate").value = formattedDate;
});


document.querySelector("form").addEventListener("submit", function (event) {
    let courtDateInput = document.getElementById("dateInput");
    let selectedDate = new Date(courtDateInput.value);

    if (!isNaN(selectedDate)) {
        let formattedCourtDate = `${(selectedDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}/${selectedDate
                .getDate()
                .toString()
                .padStart(2, '0')}/${selectedDate.getFullYear()}`;

        courtDateInput.value = formattedCourtDate; // Modify before submission
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const heightInput = document.getElementById('height');

    heightInput.addEventListener('input', () => {
        let numericString = heightInput.value.replace(/[^0-9]/g, ''); // Strip non-digits

        if (numericString === '') {
            heightInput.value = ''; // Allow clearing the field
            return;
        }

        let feet = parseInt(numericString.substring(0, 1), 10) || 0; // First digit is feet
        let inches = parseInt(numericString.substring(1), 10) || 0; // Remaining digits are inches

        if (inches > 11) {
            inches = inches % 10; // Prevent inches from exceeding 11
        }

        // Preserve backspace functionality by only formatting when more than 1 digit is entered
        if (numericString.length === 1) {
            heightInput.value = feet; // Show only feet for single-digit input
        } else {
            heightInput.value = `${feet}'${inches}"`; // Properly format feet & inches
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
const residenceType = document.getElementById("residenceType");
const defApt = document.getElementById("defApt"); // Ensure correct ID
const defAptCard = document.getElementById("defAptCard"); // Correct the selector

function toggleCardVisibility() {
if (residenceType.value.toLowerCase() === "apartment") {
    defApt.style.display = "block"; // Show APT field
    defAptCard.style.display = "block";   // Show the card
} else {
    defApt.style.display = "none";  // Hide APT field
    defAptCard.style.display = "none";    // Hide the entire card
}
}

// Run function on page load to ensure correct state
toggleCardVisibility();

// Listen for changes
residenceType.addEventListener("input", toggleCardVisibility);
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the residenceType and residentType dropdowns
    const residenceType = document.getElementById("residenceType");
    const residentType = document.getElementById("residentType");

    residenceType.addEventListener("input", function () {
        if (residenceType.value.toLowerCase() === "apartment") {
            residentType.value = "rent"; // Auto-select "Renter (Lease)"
        }
    });
});







































document.addEventListener("DOMContentLoaded", function () {
    const citiesByState = {
        "AL": ["Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa", "Hoover", "Dothan", "Auburn", "Decatur", "Madison",
            "Florence", "Gadsden", "Vestavia Hills", "Prattville", "Phenix City", "Alabaster", "Opelika", "Enterprise", "Homewood",
            "Northport", "Anniston", "Prichard", "Athens", "Daphne", "Pelham", "Albertville", "Bessemer", "Mountain Brook",
            "Fairhope", "Selma", "Troy", "Center Point", "Helena", "Oxford", "Cullman", "Millbrook", "Saraland", "Hartselle",
            "Foley", "Muscle Shoals", "Hueytown", "Talladega", "Alexander City", "Scottsboro", "Sylacauga", "Jasper", "Gardendale",
            "Fort Payne", "Eufaula"],
        "AK": ["Anchorage", "Fairbanks", "Juneau", "Badger", "Knik-Fairview", "College", "Sitka", "Lakes", "Tanaina", "Ketchikan",
            "Wasilla", "Kalifornsky", "Steele Creek", "Meadow Lakes", "Kodiak", "Fritz Creek", "Homer", "Kenai", "Petersburg", "Sterling",
            "Soldotna", "Valdez", "Nome", "Kotzebue", "Unalaska", "Bethel", "Palmer", "Wrangell", "Seward", "Dillingham",
            "Cordova", "North Pole", "Houston", "Metlakatla", "Hooper Bay", "Mountain Village", "Chevak", "Gambell", "Sand Point", "Selawik",
            "Shishmaref", "Hoonah", "King Cove", "Togiak", "Scammon Bay", "Tanana", "Hydaburg", "Nulato", "Savoonga", "St. Mary's"],
        "AR": ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro", "Rogers", "Conway", "North Little Rock", "Bentonville", "Pine Bluff",
            "Hot Springs", "Benton", "Sherwood", "Texarkana", "Russellville", "Jacksonville", "Paragould", "Cabot", "West Memphis", "Searcy",
            "Van Buren", "Bryant", "El Dorado", "Maumelle", "Siloam Springs", "Forrest City", "Harrison", "Marion", "Helena-West Helena", "Camden",
            "Mountain Home", "Magnolia", "Arkadelphia", "Malvern", "Hope", "Wynne", "Monticello", "Batesville", "Trumann", "Berryville",
            "Stuttgart", "Heber Springs", "Greenwood", "Gentry", "Clarksville", "Pocahontas", "De Queen", "Lake City", "Nashville", "Beebe"],
        "AZ": ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", "Glendale", "Gilbert", "Tempe", "Peoria", "Surprise",
            "Yuma", "Avondale", "Goodyear", "Flagstaff", "Buckeye", "Lake Havasu City", "Casa Grande", "Sierra Vista", "Maricopa", "Oro Valley",
            "Prescott", "Bullhead City", "Prescott Valley", "Apache Junction", "Kingman", "Queen Creek", "Florence", "San Luis", "Sahuarita", "Douglas",
            "Eloy", "Payson", "Somerton", "Cottonwood", "Show Low", "Nogales", "Fort Mohave", "Chino Valley", "Coolidge", "Sedona",
            "New River", "Winslow", "Flowing Wells", "Tuba City", "Safford", "Globe", "Drexel Heights", "Verde Village", "Vail", "Tanque Verde"],
        "CA": ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim",
            "Stockton", "Riverside", "Irvine", "Santa Ana", "Chula Vista", "Fremont", "San Bernardino", "Modesto", "Fontana", "Oxnard",
            "Moreno Valley", "Huntington Beach", "Glendale", "Santa Clarita", "Garden Grove", "Santa Rosa", "Oceanside", "Rancho Cucamonga",
            "Ontario", "Lancaster", "Elk Grove", "Corona", "Palmdale", "Salinas", "Pomona", "Torrance", "Hayward", "Escondido", "Sunnyvale",
            "Pasadena", "Orange", "Fullerton", "Roseville", "Visalia", "Concord", "Thousand Oaks", "Simi Valley", "Santa Clara", "Victorville",
            "Vallejo", "Berkeley"],
        "CO": ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", "Thornton", "Arvada", "Westminster", "Pueblo", "Centennial",
            "Boulder", "Greeley", "Longmont", "Loveland", "Broomfield", "Grand Junction", "Castle Rock", "Commerce City", "Parker", "Littleton",
            "Northglenn", "Brighton", "Englewood", "Wheat Ridge", "Fountain", "Lafayette", "Windsor", "Erie", "Evans", "Louisville",
            "Golden", "Montrose", "Durango", "Cañon City", "Greenwood Village", "Sheridan", "Aspen", "Glenwood Springs", "Steamboat Springs",
            "Frederick", "Fort Morgan", "Woodland Park", "Edgewater", "Sterling", "Manitou Springs", "Trinidad", "Johnstown", "Firestone",
            "Eagle", "Alamosa"],
        "CT": ["Bridgeport", "New Haven", "Stamford", "Hartford", "Waterbury", "Norwalk", "Danbury", "New Britain", "West Hartford", "Greenwich",
            "Fairfield", "Hamden", "Bristol", "Meriden", "Manchester", "West Haven", "Milford", "Stratford", "East Hartford", "Middletown",
            "Wallingford", "Southington", "Norwich", "Shelton", "Newington", "Torrington", "Glastonbury", "Naugatuck", "New Milford", "Windsor",
            "Wethersfield", "North Haven", "Ansonia", "Darien", "Trumbull", "Vernon", "New Canaan", "Westport", "Simsbury", "South Windsor",
            "Farmington", "Groton", "Cheshire", "North Branford", "Mansfield", "East Haven", "New London", "Bethel", "Orange", "Ledyard"],
        "DE": ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna", "Milford", "Seaford", "Georgetown", "Elsmere", "New Castle",
            "Millsboro", "Laurel", "Harrington", "Camden", "Claymont", "Lewes", "Milton", "Middlesex", "Ocean View", "Bridgeville",
            "Selbyville", "Rising Sun-Lebanon", "Townsend", "Delmar", "Woodside", "Frederica", "Frankford", "Greenwood", "Cheswold", "Dagsboro",
            "South Bethany", "Fenwick Island", "Bethel", "Millville", "Rehoboth Beach", "Ellendale", "Dewey Beach", "Henlopen Acres", "Slaughter Beach", "Arden",
            "Ardencroft", "Ardentown", "Houston", "Wyoming", "Blades", "Bellefonte", "Hartly", "Bethany Beach", "Leipsic", "Fenwick"],
        "FL": ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Tallahassee", "Fort Lauderdale", "Port St. Lucie", "Cape Coral",
            "Pembroke Pines", "Hollywood", "Miramar", "Gainesville", "Coral Springs", "Miami Gardens", "Clearwater", "Palm Bay", "Pompano Beach", "West Palm Beach",
            "Lakeland", "Davie", "Boca Raton", "Sunrise", "Deltona", "Plantation", "Fort Myers", "Largo", "Melbourne", "Deerfield Beach",
            "Palm Coast", "Boynton Beach", "Lauderhill", "Weston", "Kissimmee", "Homestead", "Delray Beach", "Daytona Beach", "North Miami", "Tamarac",
            "Ocala", "Wellington", "Port Orange", "Jupiter", "Doral", "Coconut Creek", "Sanford", "Margate", "Sarasota", "Pensacola"],
        "GA": ["Atlanta", "Columbus", "Augusta", "Macon", "Savannah", "Athens", "Sandy Springs", "South Fulton", "Roswell", "Johns Creek",
            "Warner Robins", "Albany", "Alpharetta", "Marietta", "Stonecrest", "Smyrna", "Valdosta", "Brookhaven", "Dunwoody", "Peachtree Corners",
            "Gainesville", "Newnan", "Milton", "Rome", "East Point", "Woodstock", "Douglasville", "Hinesville", "Kennesaw", "LaGrange",
            "Statesboro", "Lawrenceville", "Dalton", "Chamblee", "Pooler", "Stockbridge", "Peachtree City", "Carrollton", "Griffin", "Canton",
            "McDonough", "Acworth", "Union City", "Sugar Hill", "Decatur", "Evans", "Conyers", "Powder Springs", "Douglas", "Covington"],
        "HI": ["Honolulu", "East Honolulu", "Pearl City", "Hilo", "Waipahu", "Kailua", "Kaneohe", "Mililani Town", "Ewa Gentry", "Kahului",
            "Mililani Mauka", "Kapolei", "Makakilo", "Ewa Beach", "Wahiawa", "Schofield Barracks", "Wailuku", "Lahaina", "Waimea", "Hawaiian Paradise Park",
            "Kalaoa", "Keaau", "Napili-Honokowai", "Hickam Housing", "Waialua", "Hauula", "Kula", "Waikoloa Village", "Holualoa", "Aiea",
            "Makawao", "Pukalani", "Pahala", "Kaunakakai", "Mountain View", "Lanai City", "Laie", "Hanapepe", "Waimea", "Anahola",
            "Eleele", "Captain Cook", "Honokaa", "Paia", "Papaikou", "Kealakekua", "Waimanalo", "Princeville", "Koloa", "Pepeekeo"],
        "ID": ["Boise", "Meridian", "Nampa", "Idaho Falls", "Caldwell", "Pocatello", "Coeur d'Alene", "Twin Falls", "Post Falls", "Rexburg",
            "Lewiston", "Eagle", "Moscow", "Kuna", "Ammon", "Chubbuck", "Hayden", "Mountain Home", "Blackfoot", "Garden City",
            "Jerome", "Burley", "Middleton", "Sandpoint", "Star", "Hailey", "Emmett", "Rathdrum", "Rupert", "Weiser",
            "Payette", "Buhl", "Preston", "Mountain Home AFB", "Gooding", "Kimberly", "Shelley", "Fruitland", "American Falls", "Bellevue",
            "Orofino", "St. Maries", "Salmon", "Grangeville", "Malad City", "Montpelier", "Driggs", "Filer", "Sugar City", "McCall"],
        "IL": ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford", "Springfield", "Elgin", "Peoria", "Champaign", "Waukegan",
            "Cicero", "Bloomington", "Arlington Heights", "Evanston", "Decatur", "Schaumburg", "Bolingbrook", "Palatine", "Skokie", "Des Plaines",
            "Orland Park", "Tinley Park", "Oak Lawn", "Berwyn", "Mount Prospect", "Normal", "Wheaton", "Hoffman Estates", "Oak Park", "Downers Grove",
            "Glenview", "Belleville", "Elmhurst", "Plainfield", "DeKalb", "Moline", "Urbana", "Lombard", "Buffalo Grove", "Bartlett",
            "Quincy", "Crystal Lake", "Streamwood", "Carol Stream", "Romeoville", "Rock Island", "Hanover Park", "Carpentersville", "Wheeling", "Park Ridge"],
        "IN": ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel", "Fishers", "Bloomington", "Hammond", "Gary", "Lafayette",
            "Muncie", "Noblesville", "Terre Haute", "Greenwood", "Kokomo", "Anderson", "Elkhart", "Mishawaka", "Lawrence", "Jeffersonville",
            "Columbus", "Westfield", "Portage", "New Albany", "Richmond", "Plainfield", "Merrillville", "Goshen", "Michigan City", "Crown Point",
            "Granger", "Valparaiso", "East Chicago", "Hobart", "Zionsville", "Schererville", "Brownsburg", "Marion", "Franklin", "Greenfield",
            "La Porte", "Seymour", "Clarksville", "Avon", "Munster", "Logansport", "Jasper", "Warsaw", "Bedford", "Huntington"],
        "IA": ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City", "Ankeny", "West Des Moines", "Ames", "Waterloo", "Council Bluffs",
            "Dubuque", "Urbandale", "Marion", "Bettendorf", "Mason City", "Marshalltown", "Clinton", "Newton", "Fort Dodge", "Ottumwa",
            "Muscatine", "Cedar Falls", "Indianola", "Altoona", "Burlington", "Johnston", "Clive", "North Liberty", "Carroll", "Spencer",
            "Pella", "Oskaloosa", "Storm Lake", "Waukee", "Boone", "Grinnell", "Norwalk", "Denison", "Charles City", "Mount Pleasant",
            "Fairfield", "Fort Madison", "Le Mars", "Decorah", "Estherville", "Keokuk", "Webster City", "Perry", "Waverly", "Washington"],
        "KS": ["Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka", "Lawrence", "Shawnee", "Lenexa", "Manhattan", "Salina",
            "Hutchinson", "Leavenworth", "Leawood", "Dodge City", "Garden City", "Emporia", "Junction City", "Derby", "Prairie Village", "Gardner",
            "Hays", "Pittsburg", "Newton", "Liberal", "Andover", "Great Bend", "McPherson", "El Dorado", "Ottawa", "Parsons",
            "Arkansas City", "Merriam", "Chanute", "Winfield", "Haysville", "Fort Scott", "Atchison", "Roeland Park", "Bonner Springs", "Wellington",
            "Independence", "Mission", "Ulysses", "Coffeyville", "Augusta", "Paola", "Lansing", "Concordia", "Abilene", "Bel Aire"],
        "KY": ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington", "Richmond", "Georgetown", "Florence", "Hopkinsville", "Nicholasville",
            "Elizabethtown", "Henderson", "Frankfort", "Jeffersontown", "Independence", "Paducah", "Radcliff", "Ashland", "Madisonville", "Erlanger",
            "Winchester", "Murray", "St. Matthews", "Danville", "Fort Thomas", "Shelbyville", "Shively", "Berea", "Shepherdsville", "Somerset",
            "Newport", "Mount Washington", "Clarksville", "Glasgow", "Fort Mitchell", "Alexandria", "Lawrenceburg", "Middlesboro", "Mayfield", "Lebanon",
            "Pikeville", "Versailles", "Bardstown", "Paris", "Russellville", "Taylor Mill", "Villa Hills", "Maysville", "Wilmore", "Corbin"],
        "LA": ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles", "Kenner", "Bossier City", "Monroe", "Alexandria", "Houma",
            "Marrero", "Central", "Slidell", "Prairieville", "Terrytown", "Ruston", "Metairie", "Hammond", "Harvey", "Laplace",
            "Bayou Cane", "New Iberia", "Natchitoches", "Opelousas", "Mandeville", "Crowley", "Sulphur", "Zachary", "Thibodaux", "Abbeville",
            "Gretna", "Bogalusa", "Pineville", "Estelle", "Chalmette", "Baker", "DeRidder", "Jennings", "Youngsville", "West Monroe",
            "Morgan City", "Eunice", "Covington", "Franklin", "Jeanerette", "Ville Platte", "Donaldsonville", "Bastrop", "Marksville", "Leesville"],
        "ME": ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn", "Biddeford", "Sanford", "Brunswick", "Scarborough", "Saco",
            "Westbrook", "Augusta", "Windham", "Waterville", "Presque Isle", "York", "Falmouth", "Kennebunk", "Orono", "Wells",
            "Standish", "Old Orchard Beach", "Brewer", "Topsham", "Caribou", "Bath", "Rockland", "Ellsworth", "Farmington", "Yarmouth",
            "Cumberland", "Hampden", "Gardiner", "Freeport", "Houlton", "Gray", "Skowhegan", "Buxton", "Kittery", "Bar Harbor",
            "Turner", "New Gloucester", "Norridgewock", "Camden", "Jay", "Boothbay Harbor", "Madison", "Lincoln", "Bridgton", "Poland"],
        "MD": ["Baltimore", "Columbia", "Germantown", "Silver Spring", "Waldorf", "Frederick", "Ellicott City", "Glen Burnie", "Gaithersburg", "Rockville",
            "Bethesda", "Dundalk", "Bowie", "Towson", "Aspen Hill", "Severn", "Wheaton", "Bel Air South", "Odenton", "Catonsville",
            "Hagerstown", "Essex", "Annapolis", "Clinton", "Reisterstown", "Pikesville", "Owings Mills", "Randallstown", "Woodlawn", "Crofton",
            "Parkville", "Suitland", "Cockeysville", "Severna Park", "Edgewood", "Lake Shore", "Middle River", "Eldersburg", "Hyattsville", "Havre de Grace",
            "Carney", "Pasadena", "Chillum", "Lutherville", "Camp Springs", "Elkridge", "Colesville", "South Laurel", "Fairland", "Montgomery Village"],
        "MA": ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell", "Brockton", "Quincy", "Lynn", "Fall River", "Newton",
            "Lawrence", "Somerville", "Framingham", "Haverhill", "Waltham", "Malden", "Brookline", "Medford", "Taunton", "Chicopee",
            "Weymouth", "Revere", "Peabody", "Methuen", "Barnstable", "Pittsfield", "Attleboro", "Everett", "Salem", "Westfield",
            "Leominster", "Beverly", "Fitchburg", "Holyoke", "Marlborough", "Woburn", "Chelsea", "Braintree", "Watertown", "Randolph",
            "Franklin", "Amherst", "Danvers", "Milton", "Dedham", "North Attleborough", "Gloucester", "Shrewsbury", "Needham", "West Springfield"],
        "MA": ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell", "Brockton", "Quincy", "Lynn", "New Bedford", "Fall River",
            "Newton", "Lawrence", "Somerville", "Waltham", "Haverhill", "Malden", "Medford", "Taunton", "Chicopee", "Weymouth",
            "Revere", "Peabody", "Methuen", "Barnstable", "Pittsfield", "Attleboro", "Everett", "Salem", "Westfield", "Leominster",
            "Fitchburg", "Beverly", "Holyoke", "Marlborough", "Woburn", "Chelsea", "Braintree", "Watertown", "Franklin", "Lexington",
            "Amherst", "Needham", "Agawam", "Randolph", "Melrose", "Danvers", "Dedham", "Belmont", "Natick", "Wellesley"],
        "MI": ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", "Lansing", "Flint", "Dearborn", "Livonia", "Westland",
            "Troy", "Farmington Hills", "Kalamazoo", "Wyoming", "Rochester Hills", "Southfield", "Taylor", "Pontiac", "St. Clair Shores", "Dearborn Heights",
            "Royal Oak", "Novi", "Battle Creek", "Saginaw", "Kentwood", "East Lansing", "Roseville", "Portage", "Midland", "Lincoln Park",
            "Muskegon", "Bay City", "Jackson", "Holland", "Eastpointe", "Port Huron", "Southgate", "Burton", "Madison Heights", "Oak Park",
            "Allen Park", "Garden City", "Wyandotte", "Mount Pleasant", "Monroe", "Birmingham", "Ferndale", "Ypsilanti", "Walker", "Adrian"],
        "MN": ["Minneapolis", "Saint Paul", "Rochester", "Duluth", "Bloomington", "Brooklyn Park", "Plymouth", "Maple Grove", "Woodbury", "St. Cloud",
            "Eagan", "Eden Prairie", "Coon Rapids", "Burnsville", "Blaine", "Lakeville", "Minnetonka", "Apple Valley", "Edina", "St. Louis Park",
            "Mankato", "Maplewood", "Moorhead", "Shakopee", "Richfield", "Cottage Grove", "Inver Grove Heights", "Roseville", "Andover", "Brooklyn Center",
            "Savage", "Hastings", "Oakdale", "Fridley", "Winona", "Shoreview", "Prior Lake", "White Bear Lake", "Champlin", "Farmington",
            "New Brighton", "Anoka", "Chaska", "Robbinsdale", "Forest Lake", "South St. Paul", "Stillwater", "Northfield", "Otsego", "Willmar"],
        "MS": ["Jackson", "Gulfport", "Southaven", "Biloxi", "Hattiesburg", "Olive Branch", "Tupelo", "Meridian", "Greenville", "Madison",
            "Horn Lake", "Pearl", "Clinton", "Brandon", "Ridgeland", "Pascagoula", "Oxford", "Starkville", "Columbus", "Vicksburg",
            "Gautier", "Clarksdale", "Ocean Springs", "Natchez", "Hernando", "Greenwood", "McComb", "Long Beach", "Laurel", "Brookhaven",
            "Byram", "Bay St. Louis", "Picayune", "Petal", "Canton", "Grenada", "Indianola", "Booneville", "Richland", "Kosciusko",
            "Corinth", "Amory", "Philadelphia", "Yazoo City", "Batesville", "West Point", "Cleveland", "Flowood", "Raymond", "Crystal Springs"],
        "MO": ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence", "Lee's Summit", "O'Fallon", "St. Joseph", "St. Charles", "Blue Springs",
            "Florissant", "Joplin", "Chesterfield", "Jefferson City", "Cape Girardeau", "Wildwood", "University City", "Ballwin", "Raytown", "Liberty",
            "Wentzville", "Mehlville", "Kirkwood", "Gladstone", "Belton", "Sedalia", "Hazelwood", "Maryland Heights", "Grandview", "Webster Groves",
            "Arnold", "Rolla", "Ferguson", "Affton", "Nixa", "Ozark", "Republic", "Parkville", "Creve Coeur", "Sikeston",
            "Neosho", "Bridgeton", "Hannibal", "Raymore", "Lebanon", "Jennings", "Poplar Bluff", "Carthage", "Lake St. Louis", "Moberly"],
        "MT": ["Billings", "Missoula", "Great Falls", "Bozeman", "Butte", "Helena", "Kalispell", "Havre", "Anaconda", "Miles City",
            "Belgrade", "Livingston", "Laurel", "Whitefish", "Sidney", "Lewistown", "Glendive", "Columbia Falls", "Polson", "Hamilton",
            "Dillon", "Hardin", "Glasgow", "Shelby", "Libby", "Cut Bank", "Deer Lodge", "Eureka", "Forsyth", "Red Lodge",
            "Baker", "Choteau", "Conrad", "Colstrip", "Wolf Point", "Townsend", "Malta", "Roundup", "Plentywood", "Chinook",
            "Thompson Falls", "Big Timber", "Bigfork", "Superior", "Manhattan", "Big Sky", "Stevensville", "West Yellowstone", "Lolo", "Four Corners"],
        "NE": ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney", "Fremont", "Hastings", "Norfolk", "Columbus", "Papillion",
            "La Vista", "Scottsbluff", "South Sioux City", "Beatrice", "Lexington", "Gering", "Alliance", "Blair", "York", "McCook",
            "Ralston", "Nebraska City", "Crete", "Seward", "Schuyler", "Plattsmouth", "Sidney", "Chadron", "Wayne", "Holdrege",
            "Auburn", "Gothenburg", "Ogallala", "Valentine", "David City", "Falls City", "St. Paul", "Central City", "Geneva", "West Point",
            "Broken Bow", "Fairbury", "Ord", "O'Neill", "Kimball", "Wahoo", "Tekamah", "Cozad", "Red Cloud", "Hartington"],
        "NV": ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Paradise", "Spring Valley", "Sunrise Manor", "Enterprise", "Sparks", "Carson City",
            "Whitney", "Pahrump", "Winchester", "Summerlin South", "Fernley", "Sun Valley", "Elko", "Mesquite", "Boulder City", "Spanish Springs",
            "Gardnerville Ranchos", "Cold Springs", "Dayton", "Incline Village", "Moapa Valley", "Laughlin", "Indian Hills", "Johnson Lane", "Battle Mountain", "Stagecoach",
            "Spring Creek", "Ely", "Zephyr Cove", "West Wendover", "Tonopah", "Carlin", "Hawthorne", "Yerington", "Minden", "Bunkerville",
            "Verdi", "Wells", "Silver Springs", "Panaca", "Beatty", "Caliente", "Smith Valley", "Pyramid Lake", "Schurz", "Lovelock"],
        "NH": ["Manchester", "Nashua", "Concord", "Derry", "Dover", "Rochester", "Salem", "Merrimack", "Hudson", "Londonderry",
            "Keene", "Bedford", "Portsmouth", "Goffstown", "Laconia", "Hampton", "Milford", "Durham", "Exeter", "Windham",
            "Hooksett", "Claremont", "Lebanon", "Pelham", "Somersworth", "Hanover", "Raymond", "Berlin", "Amherst", "Plaistow",
            "Seabrook", "Franklin", "Newmarket", "Bow", "Belmont", "Farmington", "Wolfeboro", "Pembroke", "Gilford", "Kingston",
            "Atkinson", "Newport", "Hollis", "Hampstead", "Weare", "Sandown", "Swanzey", "Greenland", "Brentwood", "Sunapee"],
        "NJ": ["Newark", "Jersey City", "Paterson", "Elizabeth", "Lakewood", "Edison", "Woodbridge", "Toms River", "Hamilton", "Trenton",
            "Clifton", "Camden", "Brick", "Cherry Hill", "Passaic", "Union City", "Old Bridge", "Franklin", "Middletown", "Bayonne",
            "East Orange", "North Bergen", "Vineland", "Union", "Piscataway", "New Brunswick", "Jackson", "Wayne", "Irvington", "Parsippany-Troy Hills",
            "Hoboken", "Perth Amboy", "Plainfield", "West New York", "Washington", "East Brunswick", "Bloomfield", "West Orange", "Evesham", "Bridgewater",
            "South Brunswick", "Egg Harbor", "Hackensack", "Sayreville", "Mount Laurel", "North Brunswick", "Kearny", "Linden", "Marlboro", "Teaneck"],
        "NM": ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell", "Farmington", "Hobbs", "Clovis", "Carlsbad", "Gallup",
            "Alamogordo", "Los Lunas", "Deming", "Chaparral", "Sunland Park", "Las Vegas", "Portales", "Los Alamos", "Artesia", "Lovington",
            "Silver City", "Espanola", "Anthony", "Raton", "Bernalillo", "Grants", "Socorro", "Shiprock", "Taos", "Belen",
            "Corrales", "Aztec", "Bloomfield", "Santa Teresa", "Truth or Consequences", "Edgewood", "White Rock", "Tucumcari", "Zuni Pueblo", "Tularosa",
            "Lordsburg", "Peralta", "Eunice", "Estancia", "Jemez Pueblo", "Milan", "Mesilla", "Dexter", "Bayard", "Fort Sumner"],
        "NY": ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica",
            "White Plains", "Hempstead", "Troy", "Niagara Falls", "Binghamton", "Freeport", "Valley Stream", "Rome", "Ithaca", "Long Beach",
            "Poughkeepsie", "North Tonawanda", "Jamestown", "Saratoga Springs", "Middletown", "Glen Cove", "Peekskill", "Kingston", "Lindenhurst", "Lockport",
            "Ossining", "Cortland", "Plattsburgh", "Watertown", "Newburgh", "Garden City", "Tonawanda", "Amsterdam", "Cohoes", "Glens Falls",
            "Batavia", "Lackawanna", "Oneonta", "Canandaigua", "Geneva", "Oswego", "Fulton", "Hornell", "Dunkirk", "Ogdensburg"],
        "NC": ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "Wilmington", "High Point", "Concord",
            "Greenville", "Asheville", "Jacksonville", "Gastonia", "Chapel Hill", "Rocky Mount", "Burlington", "Wilson", "Huntersville", "Kannapolis",
            "Apex", "Hickory", "Goldsboro", "Indian Trail", "Mooresville", "Monroe", "Salisbury", "New Bern", "Holly Springs", "Matthews",
            "Sanford", "Elizabeth City", "Garner", "Cornelius", "Fuquay-Varina", "Shelby", "Carrboro", "Asheboro", "Clemmons", "Morrisville",
            "Lenoir", "Wake Forest", "Thomasville", "Statesville", "Mint Hill", "Kernersville", "Wilson's Mills", "Roanoke Rapids", "Southern Pines", "Laurinburg"],
        "ND": ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo", "Williston", "Dickinson", "Mandan", "Jamestown", "Wahpeton",
            "Devils Lake", "Valley City", "Grafton", "Beulah", "Watford City", "Horace", "Lincoln", "Casselton", "Harvey", "New Town",
            "Hazen", "Stanley", "Bottineau", "Oakes", "Rugby", "Carrington", "Hillsboro", "Langdon", "Thompson", "Lisbon",
            "Cavalier", "Bowman", "Velva", "Larimore", "Mayville", "Killdeer", "Park River", "Linton", "Garrison", "Tioga",
            "Kindred", "Enderlin", "Harwood", "Washburn", "Hettinger", "Ashley", "Wishek", "Ellendale", "Cando", "Kenmare"],
        "OH": ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Parma", "Canton", "Youngstown", "Lorain",
            "Hamilton", "Springfield", "Kettering", "Elyria", "Lakewood", "Cuyahoga Falls", "Middletown", "Newark", "Euclid", "Mentor",
            "Beavercreek", "Dublin", "Strongsville", "Findlay", "Lima", "Huber Heights", "Marion", "Westerville", "Lancaster", "Grove City",
            "Delaware", "Reynoldsburg", "Fairfield", "Mansfield", "Upper Arlington", "Westlake", "Troy", "Shaker Heights", "Bowling Green", "North Olmsted",
            "North Ridgeville", "Stow", "Gahanna", "Massillon", "Brunswick", "Xenia", "Kent", "Austintown", "Medina", "Zanesville"],
        "OK": ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond", "Lawton", "Moore", "Midwest City", "Enid", "Stillwater",
            "Muskogee", "Bartlesville", "Owasso", "Shawnee", "Yukon", "Bixby", "Ardmore", "Ponca City", "Duncan", "Del City",
            "Jenks", "Sapulpa", "Bethany", "Sand Springs", "Mustang", "Durant", "Altus", "McAlester", "El Reno", "Chickasha",
            "Claremore", "Miami", "Woodward", "Ada", "Tahlequah", "Weatherford", "Guthrie", "Guymon", "Pryor Creek", "Warr Acres",
            "Blanchard", "Dewey", "Glenpool", "Poteau", "Newcastle", "Seminole", "Okmulgee", "Purcell", "Cushing", "Sallisaw"],
        "OR": ["Portland", "Eugene", "Salem", "Gresham", "Hillsboro", "Beaverton", "Bend", "Medford", "Springfield", "Corvallis",
            "Albany", "Tigard", "Lake Oswego", "Keizer", "Grants Pass", "Oregon City", "McMinnville", "Redmond", "Tualatin", "West Linn",
            "Woodburn", "Newberg", "Forest Grove", "Wilsonville", "Roseburg", "Klamath Falls", "Ashland", "Milwaukie", "Central Point", "Canby",
            "Hermiston", "Lebanon", "Pendleton", "Coos Bay", "Dallas", "The Dalles", "St. Helens", "La Grande", "Cornelius", "Gladstone",
            "Ontario", "Newport", "Troutdale", "Monmouth", "Seaside", "Sherwood", "Silverton", "Stayton", "Sweet Home", "Tillamook"],
        "PA": ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster", "Harrisburg", "York",
            "Altoona", "Wilkes-Barre", "State College", "Chester", "Bethel Park", "Williamsport", "Monroeville", "Norristown", "Plum", "Easton",
            "Lebanon", "Hazleton", "New Castle", "Johnstown", "McKeesport", "Hermitage", "Carlisle", "Butler", "Meadville", "Greensburg",
            "Pottsville", "Phoenixville", "Wilkinsburg", "West Mifflin", "Lansdale", "Hanover", "King of Prussia", "Waynesboro", "Drexel Hill", "Emmaus",
            "New Kensington", "Ephrata", "Chambersburg", "Latrobe", "Whitehall", "Gettysburg", "Bloomsburg", "Lower Burrell", "Ellwood City", "Sunbury"],
        "RI": ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence", "Woonsocket", "Coventry", "Cumberland", "North Providence", "South Kingstown",
            "West Warwick", "Johnston", "North Kingstown", "Newport", "Bristol", "Westerly", "Smithfield", "Lincoln", "Central Falls", "Portsmouth",
            "Barrington", "Middletown", "Tiverton", "Narragansett", "East Greenwich", "Scituate", "Burrillville", "Glocester", "Hopkinton", "Charlestown",
            "Exeter", "Richmond", "Jamestown", "Little Compton", "West Greenwich", "Foster", "Tiverton Four Corners", "Wakefield", "Kingston", "Greenville",
            "Ashaway", "Hope Valley", "Pascoag", "Wyoming", "Slatersville", "Saunderstown", "Bradford", "Clayville", "Harmony", "Mapleville"],
        "SC": ["Charleston", "Columbia", "North Charleston", "Mount Pleasant", "Rock Hill", "Greenville", "Summerville", "Goose Creek", "Sumter", "Florence",
            "Spartanburg", "Myrtle Beach", "Anderson", "Greer", "Aiken", "Mauldin", "Greenwood", "North Augusta", "Simpsonville", "Easley",
            "Conway", "Hanahan", "Lexington", "West Columbia", "Clemson", "Orangeburg", "Bluffton", "Gaffney", "Beaufort", "Newberry",
            "Tega Cay", "Fort Mill", "Port Royal", "Forest Acres", "Camden", "Georgetown", "Seneca", "York", "Laurens", "Dillon",
            "Lancaster", "Bennettsville", "Fountain Inn", "Irmo", "Walterboro", "Hartsville", "Moncks Corner", "Lake City", "Marion", "North Myrtle Beach"],
        "SD": ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown", "Mitchell", "Yankton", "Pierre", "Huron", "Spearfish",
            "Box Elder", "Vermillion", "Brandon", "Madison", "Sturgis", "Harrisburg", "Belle Fourche", "Tea", "Dell Rapids", "Mobridge",
            "Hot Springs", "Custer", "Milbank", "Sisseton", "Wagner", "Hartford", "Dakota Dunes", "Redfield", "Pine Ridge", "North Sioux City",
            "Flandreau", "Canton", "Lead", "Winner", "Lennox", "Gregory", "Britton", "Chamberlain", "Elk Point", "Garretson",
            "Clark", "Parker", "Tyndall", "Miller", "Fort Pierre", "Philip", "Kadoka", "Lemmon", "Faith", "Ipswich"],
        "TN": ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville", "Murfreesboro", "Franklin", "Jackson", "Johnson City", "Bartlett",
            "Hendersonville", "Kingsport", "Collierville", "Cleveland", "Smyrna", "Germantown", "Brentwood", "Columbia", "Spring Hill", "La Vergne",
            "Cookeville", "Gallatin", "Mount Juliet", "Lebanon", "Oak Ridge", "Morristown", "Maryville", "Bristol", "Shelbyville", "Tullahoma",
            "East Ridge", "Farragut", "Sevierville", "Dyersburg", "Springfield", "Goodlettsville", "Greeneville", "McMinnville", "Portland", "Soddy-Daisy",
            "Athens", "Elizabethton", "Lakeland", "Lawrenceburg", "Red Bank", "Martin", "Harriman", "Milan", "Signal Mountain", "Alcoa"],
        "TX": ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Laredo",
            "Lubbock", "Garland", "Irving", "Amarillo", "Grand Prairie", "Brownsville", "McKinney", "Frisco", "Pasadena", "McAllen",
            "Killeen", "Mesquite", "Midland", "Denton", "Waco", "Carrollton", "Round Rock", "Abilene", "Odessa", "Pearland",
            "Richardson", "Sugar Land", "Beaumont", "The Woodlands", "College Station", "Lewisville", "League City", "Tyler", "Wichita Falls", "Allen",
            "San Angelo", "Edinburg", "Conroe", "Bryan", "Mission", "New Braunfels", "Longview", "Pharr", "Flower Mound", "Baytown"],
        "UT": ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem", "Sandy", "St. George", "Ogden", "Layton", "South Jordan",
            "Lehi", "Millcreek", "Taylorsville", "Logan", "Murray", "Draper", "Bountiful", "Riverton", "Spanish Fork", "Pleasant Grove",
            "Eagle Mountain", "Kearns", "Tooele", "Herriman", "Cottonwood Heights", "Springville", "Midvale", "Roy", "American Fork", "Syracuse",
            "South Salt Lake", "Holladay", "Cedar City", "Clearfield", "Magna", "Kaysville", "South Ogden", "North Ogden", "Washington", "Hurricane",
            "Payson", "Brigham City", "Saratoga Springs", "Farmington", "West Haven", "Tremonton", "Heber City", "Park City", "North Salt Lake", "Vernal"],
        "VT": ["Burlington", "South Burlington", "Rutland", "Essex Junction", "Bennington", "Brattleboro", "Milton", "Hartford", "Barre", "Montpelier",
            "Middlebury", "Winooski", "St. Albans", "Shelburne", "St. Johnsbury", "Williston", "Northfield", "Lyndon", "Springfield", "Swanton",
            "Morristown", "Rockingham", "Colchester", "Hinesburg", "Waterbury", "Hartland", "Brandon", "Randolph", "Richmond", "Derby",
            "Newport", "Fair Haven", "Berlin", "North Bennington", "Castleton", "Manchester", "Poultney", "Johnson", "Chester", "Norwich",
            "Pittsford", "Woodstock", "Bethel", "Cavendish", "Enosburg Falls", "Fairfax", "Hardwick", "Barre Town", "Vergennes", "Windsor"],
        "VA": ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Newport News", "Alexandria", "Hampton", "Roanoke", "Portsmouth", "Suffolk",
            "Lynchburg", "Centreville", "Dale City", "Reston", "Harrisonburg", "Leesburg", "Ashburn", "McLean", "Tuckahoe", "Charlottesville",
            "Blacksburg", "Lake Ridge", "Danville", "Linton Hall", "Burke", "Manassas", "Woodbridge", "Annandale", "Petersburg", "Mechanicsville",
            "Springfield", "Franconia", "Fair Oaks", "Cave Spring", "Sterling", "Bailey’s Crossroads", "Tysons", "Oakton", "Lincolnia", "Hopewell",
            "Waynesboro", "Radford", "Marion", "Bristol", "Short Pump", "Winchester", "Front Royal", "Staunton", "South Riding", "Chantilly"],
        "WA": ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue", "Kent", "Everett", "Renton", "Federal Way", "Yakima",
            "Spokane Valley", "Kirkland", "Bellingham", "Kennewick", "Auburn", "Pasco", "Marysville", "Lakewood", "Redmond", "Shoreline",
            "Sammamish", "Richland", "Burien", "Olympia", "Lacey", "Edmonds", "Bremerton", "Puyallup", "Longview", "Lynnwood",
            "Bothell", "Walla Walla", "Issaquah", "Mount Vernon", "University Place", "Pullman", "Des Moines", "SeaTac", "Spanaway", "Lake Stevens",
            "Maple Valley", "Mercer Island", "Moses Lake", "Oak Harbor", "Kenmore", "Silverdale", "Covington", "Mill Creek", "Camas", "Battle Ground"],
        "WV": ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling", "Weirton", "Fairmont", "Martinsburg", "Beckley", "Clarksburg",
            "South Charleston", "Vienna", "St. Albans", "Bluefield", "Bridgeport", "Oak Hill", "Moundsville", "Elkins", "Dunbar", "Nitro",
            "Hurricane", "Princeton", "Keyser", "Ranson", "Charles Town", "Buckhannon", "Point Pleasant", "Westover", "Fayetteville", "New Martinsville",
            "Barboursville", "Lewisburg", "Ravenswood", "Pleasant Valley", "Petersburg", "Montgomery", "Kenova", "Belington", "Hinton", "Grafton",
            "Shinnston", "Richwood", "Summersville", "Rainelle", "Wellsburg", "Chester", "Ripley", "Spencer", "Marlinton", "Romney"],
        "WI": ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine", "Appleton", "Waukesha", "Eau Claire", "Oshkosh", "Janesville",
            "West Allis", "La Crosse", "Sheboygan", "Wauwatosa", "Fond du Lac", "Brookfield", "New Berlin", "Wausau", "Menomonee Falls", "Greenfield",
            "Beloit", "Franklin", "Oak Creek", "Manitowoc", "Sun Prairie", "West Bend", "Superior", "Stevens Point", "Neenah", "Muskego",
            "Caledonia", "Mount Pleasant", "De Pere", "Mequon", "Watertown", "South Milwaukee", "Marshfield", "Wisconsin Rapids", "Fitchburg", "Cudahy",
            "Howard", "Germantown", "Middleton", "Ashwaubenon", "Pewaukee", "Menasha", "Platteville", "River Falls", "Stoughton", "Hudson"],
        "WY": ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs", "Sheridan", "Green River", "Evanston", "Riverton", "Jackson",
            "Cody", "Rawlins", "Lander", "Torrington", "Powell", "Douglas", "Buffalo", "Ranchettes", "Worland", "Newcastle",
            "Bar Nunn", "Kemmerer", "Thermopolis", "Wheatland", "Mills", "Saratoga", "Moorcroft", "Pinedale", "Lovell", "Evansville",
            "Afton", "Glenrock", "Lusk", "Mountain View", "Greybull", "Pine Bluffs", "Basin", "Dubois", "Big Piney", "Shoshoni",
            "Sundance", "Upton", "Guernsey", "Lingle", "Midwest", "Chugwater", "Baggs", "Kirby", "Manville", "Opal"],
    }


    function updateCities() {
        const stateInput = document.getElementById("state").value.toUpperCase();
        const cityList = document.getElementById("cityList");

        // Clear existing options
        cityList.innerHTML = "";

        if (citiesByState[stateInput]) {
            citiesByState[stateInput].forEach(city => {
                let option = document.createElement("option");
                option.value = city;
                cityList.appendChild(option);
            });
        }
    }

    // Attach event listener to state input field
    document.getElementById("state").addEventListener("input", updateCities);
});























document.addEventListener("DOMContentLoaded", () => {
    // Function to create a styled input group with placeholders
    function createInputGroup(labelText, inputConfig) {
        const inputGroup = document.createElement("div");
        inputGroup.className = "input-group";

        const label = document.createElement("label");
        label.setAttribute("for", inputConfig.id);
        label.textContent = labelText;

        const input = document.createElement(inputConfig.type === "datalist" ? "input" : "input");
        input.type = inputConfig.type || "text";
        input.id = inputConfig.id;
        input.name = inputConfig.name;
        if (inputConfig.placeholder) input.placeholder = inputConfig.placeholder;

        // Handle datalist
        if (inputConfig.type === "datalist" && inputConfig.options) {
            const datalist = document.createElement("datalist");
            datalist.id = `${inputConfig.id}-options`;
            input.setAttribute("list", datalist.id);

            inputConfig.options.forEach(option => {
                const optionElem = document.createElement("option");
                optionElem.value = option;
                datalist.appendChild(optionElem);
            });

            inputGroup.appendChild(datalist);
        }

        inputGroup.appendChild(label);
        inputGroup.appendChild(input);
        return inputGroup;
    }
    function createContainer(title, containerId, inputs) {
        const container = document.createElement("div");
        container.className = "container";
        container.id = containerId;
    
        // Add the title to the container
        const containerTitle = document.createElement("h2");
        containerTitle.textContent = title;
        container.appendChild(containerTitle);
    
        // Create the card
        const card = document.createElement("div");
        card.className = "card";
    
        const cardContent = document.createElement("div");
        cardContent.className = "card-content";
    
        // Add input groups to the card content
        inputs.forEach(inputConfig => {
            const inputGroup = createInputGroup(inputConfig.label, inputConfig);
            cardContent.appendChild(inputGroup);
        });
    
        card.appendChild(cardContent);
        container.appendChild(card);
        return container;
    }

    // Populate the Defendant section dynamically
    function populateDefendantSection() {
        const defendantWrapper = document.getElementById("defendant-section");

        if (!defendantWrapper) {
            console.error("Defendant section not found!");
            return;
        }

        defendantWrapper.innerHTML = ""; // Clear existing content

        // Add Personal Info
        const personalInfoContainer = createContainer("Name", "defendant-personal", [
            { label: "FIRST:", id: "firstName", name: "defendant[firstName]", placeholder:"FIRST", type: "text" },
            { label: "MIDDLE:", id: "middleName", name: "defendant[middleName]", placeholder:"MIDDLE", type: "text" },
            { label: "LAST:", id: "lastName", name: "defendant[lastName]", placeholder:"LAST", type: "text" },
        ]);
        defendantWrapper.appendChild(personalInfoContainer);

        // Add Demographics
        const demographicsContainer = createContainer("Demographics", "defendant-demographics", [
            { label: "SEX:", id: "sex", name: "defendant[sex]", placeholder:"SEX", type: "datalist", options: ["Male", "Female"] },
            { label:  "RACE:", id: "race", name: "defendant[race]", placeholder:"RACE", type: "datalist", options: ["White", "Black", "Asian", "Hispanic", "Native American", "Other"] },
            { label: "HGT:", id: "height", name: "defendant[height]", placeholder: "HGT", type:  "datalist", options: [
                "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"",
                "6'0\"", "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\"", "6'6\"", "6'7\"", "6'8\"", "6'9\"", "6'10\"", "6'11\"", "7'0\""
            ] },
            { label: "WGT:", id: "weight", name: "defendant[weight]", placeholder: "WGT", type: "datalist", options: [
                "125", "130", "135", "140", "145", "150", "155", "160", "165", "170", "175", "180", "185", "190", "195", "200",
                "205", "210", "215", "220", "225", "230", "235", "240", "245", "250", "255", "260", "265", "270", "275", "280",
                "285", "290", "295", "300", "305", "310", "315", "320", "325", "330", "335", "340", "345", "350", "355", "360",
                "365", "370", "375", "380", "385", "390", "395", "400", "405", "410", "415", "420", "425", "430", "435", "440",
                "445", "450", "455", "460", "465", "470", "475", "480", "485", "490", "495", "500"
            ] },
            { label: "HAIR:", id: "hair", name: "defendant[hair]", placeholder:"HAIR", type: "datalist", options: ["Black", "Brown", "Blonde", "Red", "Gray", "Bald", "Other"] },
            { label: "EYES:", id: "eyes", name: "defendant[eyes]", placeholder:"EYES", type: "datalist", options: ["Brown", "Blue", "Green", "Hazel", "Gray", "Other"] }
        ]);
        defendantWrapper.appendChild(demographicsContainer);
    }

    // Call the function to populate the Defendant section
    populateDefendantSection();

    // Height Formatting Logic
    const heightInput = document.getElementById("height");
    if (heightInput) {
        heightInput.addEventListener("input", () => {
            let numericString = heightInput.value.replace(/[^0-9]/g, ""); // Strip non-digits

            if (numericString === "") {
                heightInput.value = ""; // Allow clearing the field
                return;
            }

            let feet = parseInt(numericString.substring(0, 1), 10) || 0; // First digit is feet
            let inches = parseInt(numericString.substring(1), 10) || 0; // Remaining digits are inches

            if (inches > 11) {
                inches = inches % 10; // Prevent inches from exceeding 11
            }

            if (numericString.length === 1) {
                heightInput.value = feet; // Show only feet for single-digit input
            } else {
                heightInput.value = `${feet}'${inches}"`; // Properly format feet & inches
            }
        });
    }

    // Weight Formatting Logic
    const weightInput = document.getElementById("weight");
    if (weightInput) {
        weightInput.addEventListener("blur", () => {
            const value = weightInput.value.replace(/[^0-9]/g, ""); // Strip non-numeric characters
            if (value) {
                weightInput.value = `${parseInt(value, 10)} lbs`;
            } else {
                weightInput.value = ""; // Clear if empty
            }
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        // Dynamically create and add the height datalist
        const heightDatalist = document.createElement("datalist");
        heightDatalist.id = "height-options";
    
        for (let feet = 5; feet <= 7; feet++) {
            for (let inches = 0; inches <= 11; inches++) {
                if (feet === 7 && inches > 0) break; // Stop at 7'0"
                const option = document.createElement("option");
                option.value = `${feet}'${inches}"`;
                heightDatalist.appendChild(option);
            }
        }
    
        document.body.appendChild(heightDatalist); // Append to the document body
    
        // Dynamically create and add the weight datalist
        const weightDatalist = document.createElement("datalist");
        weightDatalist.id = "weight-options";
    
        for (let weight = 125; weight <= 500; weight += 1) {
            const option = document.createElement("option");
            option.value = weight;
            weightDatalist.appendChild(option);
        }
    
        document.body.appendChild(weightDatalist); // Append to the document body
    });
    


});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".section-buttons button").forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                document.querySelectorAll(".container-wrapper").forEach(section => section.classList.remove("active"));
                targetSection.classList.add("active");
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                console.error(`Section with ID "${targetId}" not found.`);
            }
        });
    });
});


