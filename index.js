document.addEventListener("DOMContentLoaded", () => {
 
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
                     // Attach event listener to state input field
                    cityList.appendChild(option);
                });
            }
        }
          
        document.getElementById("state").addEventListener("input", updateCities);
    });

// Create a datalist and restrict input to match available options
function createDatalistWithValidation(inputId, datalistId, options) {
    const input = document.createElement("input");
    input.id = inputId;
    input.setAttribute("list", datalistId);
    input.setAttribute("placeholder", "Enter State Abbreviation");
    input.setAttribute("name", "state");
    input.type = "text";

    const datalist = document.createElement("datalist");
    datalist.id = datalistId;

    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        datalist.appendChild(optionElement);
    });

    // Add validation to restrict inputs to match the options
    input.addEventListener("input", function () {
        if (!options.includes(input.value.toUpperCase())) {
            input.setCustomValidity("Please select a valid state abbreviation.");
        } else {
            input.setCustomValidity(""); // Clear the error
        }
    });

    return { input, datalist };
}

// State abbreviations
const stateAbbreviations = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", 
    "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", 
    "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", 
    "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", 
    "WI", "WY"
];

// Create and append the input and datalist
const { input: stateInput, datalist: stateDatalist } = createDatalistWithValidation("stateInput", "stateList", stateAbbreviations);



    function getStateDriverLicenseFormat(state) {
        const stateDriverLicenseFormats = {
            "Alabama": { placeholder: "XXX-XXX-XX", pattern: "\\d{1,8}", title: "1-8 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Alaska": { placeholder: "XXX-XXX-X", pattern: "\\d{1,7}", title: "1-7 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Arizona": { placeholder: "A-XXX-XXX-XX", pattern: "[A-Za-z]\\d{8}", title: "1 Alpha + 8 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Arkansas": { placeholder: "XXX-XXX-XX", pattern: "\\d{1,8}", title: "1-8 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "California": { placeholder: "A-XXX-XXX-XX", pattern: "[A-Za-z]\\d{8}", title: "1 Alpha + 8 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Colorado": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Connecticut": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Delaware": { placeholder: "XXX-XXX-X", pattern: "\\d{1,7}", title: "1-7 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "District of Columbia": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Florida": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Georgia": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Hawaii": { placeholder: "A-XXX-XXX-XX", pattern: "[A-Za-z]\\d{8}", title: "1 Alpha + 8 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Idaho": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Illinois": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Indiana": { placeholder: "A-XXX-XXX-XXX", pattern: "[A-Za-z]\\d{9}", title: "1 Alpha + 9 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Iowa": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Kansas": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Kentucky": { placeholder: "A-XXX-XXX-XXX", pattern: "[A-Za-z]\\d{9}", title: "1 Alpha + 9 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Louisiana": { placeholder: "XXX-XXX-XX", pattern: "\\d{1,8}", title: "1-8 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Maine": { placeholder: "XXX-XXX-X", pattern: "\\d{7}", title: "7 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Maryland": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Massachusetts": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Michigan": { placeholder: "A-XXX-XXX-XXX-X", pattern: "[A-Za-z]\\d{10}", title: "1 Alpha + 10 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Minnesota": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Mississippi": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Missouri": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Montana": { placeholder: "A-XXX-XXX-XX", pattern: "[A-Za-z]\\d{8}", title: "1 Alpha + 8 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Nebraska": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Nevada": { placeholder: "X-XXX-XXX-XX", pattern: "[A-Za-z]\\d{8}", title: "X + 8 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "New Hampshire": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "New Jersey": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "New Mexico": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "New York": { placeholder: "A-XXX-XXX-X", pattern: "[A-Za-z]\\d{7}", title: "1 Alpha + 7 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "North Carolina": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "North Dakota": { placeholder: "AAA-XXX-XXX", pattern: "[A-Za-z]{3}\\d{6}", title: "3 Alpha + 6 Numeric", formatFunction: (value) => value.replace(/([A-Za-z]{3})|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Ohio": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Oklahoma": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Oregon": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Pennsylvania": { placeholder: "XXX-XXX-XX", pattern: "\\d{8}", title: "8 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Rhode Island": { placeholder: "XXX-XXX-X", pattern: "\\d{7}", title: "7 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "South Carolina": { placeholder: "XXX-XXX-XXX", pattern: "\\d{5,11}", title: "5-11 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "South Dakota": { placeholder: "XXX-XXX-XXX-XXX", pattern: "\\d{12}", title: "12 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Tennessee": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Texas": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Utah": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Vermont": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Virginia": { placeholder: "A-XXX-XXX-XXX", pattern: "[A-Za-z]\\d{8,11}", title: "1 Alpha + 8-11 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Washington": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "West Virginia": { placeholder: "XXX-XXX-X", pattern: "\\d{7}", title: "7 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Wisconsin": { placeholder: "A-XXX-XXX-XXX-XXXX", pattern: "[A-Za-z]\\d{13}", title: "1 Alpha + 13 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Wyoming": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "UNKNOWN": { placeholder: "DRIVER'S LICENSE #", title: "Enter a valid driver's license based on the selected state" }
        };
    
        // Normalize the state input for case-insensitive matching
        state = state.toLowerCase();
    
        for (const [key, format] of Object.entries(stateDriverLicenseFormats)) {
            if (key.toLowerCase() === state) {
                return format;
            }
        }
    
        return stateDriverLicenseFormats["UNKNOWN"];
    }
    
    
    function formatSSN(input) {
        const ssnInput = document.getElementById("ssnInput");

        if (ssnInput) {
            ssnInput.addEventListener("input", () => {
                let value = ssnInput.value.replace(/\D/g, ""); // Remove non-digits
                if (value.length > 9) value = value.slice(0, 9); // Limit to 9 digits
    
                // Format as XXX-XX-XXXX
                if (value.length <= 3) {
                    ssnInput.value = value;
                } else if (value.length <= 5) {
                    ssnInput.value = `${value.slice(0, 3)}-${value.slice(3)}`;
                } else {
                    ssnInput.value = `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5)}`;
                }
            });
        }
    }
    
    function formatPhoneNumber(input) {
        let value = input.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length > 3) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        }
        if (value.length > 6) {
            value = `${value.slice(0, 9)}-${value.slice(9, 13)}`;
        }
        input.value = value;
    }
        // Function to create a styled input group with placeholders
    function createInputGroup(labelText, inputConfig) {
        const inputGroup = document.createElement("div");
        inputGroup.className = "input-group";

        const label = document.createElement("label");
        label.setAttribute("for", inputConfig.id);
        label.textContent = labelText;

        let input;
        if (inputConfig.type === "datalist") {
            input = document.createElement("input");
            input.type = "text";
            input.id = inputConfig.id;
            input.name = inputConfig.name;
            input.placeholder = inputConfig.placeholder || "";

            const datalist = document.createElement("datalist");
            datalist.id = `${inputConfig.id}-options`;
            input.setAttribute("list", datalist.id);

            inputConfig.options.forEach(option => {
                const optionElem = document.createElement("option");
                optionElem.value = option;
                datalist.appendChild(optionElem);
            });

            inputGroup.appendChild(datalist);
        } else {
            input = document.createElement("input");
            input.type = inputConfig.type || "text";
            input.id = inputConfig.id;
            input.name = inputConfig.name;
            input.placeholder = inputConfig.placeholder || "";
        }

        inputGroup.appendChild(label);
        inputGroup.appendChild(input);

        return inputGroup;

    }

    
    // Helper function to create a card with a title and inputs
    function createCard(title, inputs) {
    const card = document.createElement("div");
    card.className = "card";

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;

    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    inputs.forEach(inputConfig => {
        const inputGroup = createInputGroup(inputConfig.label, inputConfig);
        cardContent.appendChild(inputGroup);
    });

    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    return card;
    }

    function createContainer(title, containerId, inputs) {
        const container = document.createElement("div");
        container.className = "container";
        container.id = containerId;

        const containerTitle = document.createElement("h2");
        containerTitle.textContent = title;
        container.appendChild(containerTitle);

        const card = document.createElement("div");
        card.className = "card";

        const cardContent = document.createElement("div");
        cardContent.className = "card-content";

        inputs.forEach(inputConfig => {
            const inputGroup = createInputGroup(inputConfig.label, inputConfig);
            cardContent.appendChild(inputGroup);
        });

        card.appendChild(cardContent);
        container.appendChild(card);

        return container;
    }


    function populateDefendantSection() {
        const defendantWrapper = document.getElementById("defendant-section");

        if (!defendantWrapper) {
            console.error("Defendant section not found!");
            return;
        }

        defendantWrapper.innerHTML = ""; // Clear existing content

        // Add Personal Info
        const personalInfoContainer = createContainer("Personal Info", "defendant-personal", [
            { label: "NAME", id: "firstName", name: "defendant[firstName]", placeholder:"FIRST", type: "text" },
            { label: "", id: "middleName", name: "defendant[middleName]", placeholder:"MIDDLE", type: "text" },
            { label: "", id: "lastName", name: "defendant[lastName]", placeholder:"LAST", type: "text" },
            
        ]);
        

// Add a new card for additional details
const additionalInfoCard = document.createElement("div");
additionalInfoCard.className = "card"; // Use the same styling class for a consistent appearance

const additionalInfoCardContent = document.createElement("div");
additionalInfoCardContent.className = "card-content";

                                    // Add input fields for Date of Birth, Social Security Number, and Driver's License
                                    const additionalInfoInputs = [
                                    { label: "DOB:", id: "dob", name: "defendant[dob]", placeholder: "MM/DD/YYYY", type: "date" },
                                    { label: "SSN#:", id: "ssnInput", name: "defendant[ssn]", placeholder: "XXX-XX-XXXX", type: "text",  pattern: "\d{3}-\d{2}-\d{4}", title: "SSN format: XXX-XX-XXXX"},
                                    ];
                                    additionalInfoInputs.forEach((inputConfig) => {
                                        const inputGroup = createInputGroup(inputConfig.label, inputConfig);
                                        additionalInfoCardContent.appendChild(inputGroup);
                                    });
                            // Dynamic State Dropdown and Driver's License Input
                            const stateInputGroup = createInputGroup("", {
                                id: "state-dropdown", // Correct ID here
                                name: "defendant[state]",
                                placeholder: "Select State",
                                type: "datalist",
                                options: [
                                    "Alabama (AL)", "Alaska (AK)", "Arizona (AZ)", "Arkansas (AR)", "California (CA)", "Colorado (CO)",
                                    "Connecticut (CT)", "Delaware (DE)", "Florida (FL)", "Georgia (GA)", "Hawaii (HI)", "Idaho (ID)",
                                    "Illinois (IL)", "Indiana (IN)", "Iowa (IA)", "Kansas (KS)", "Kentucky (KY)", "Louisiana (LA)",
                                    "Maine (ME)", "Maryland (MD)", "Massachusetts (MA)", "Michigan (MI)", "Minnesota (MN)", "Mississippi (MS)",
                                    "Missouri (MO)", "Montana (MT)", "Nebraska (NE)", "Nevada (NV)", "New Hampshire (NH)", "New Jersey (NJ)",
                                    "New Mexico (NM)", "New York (NY)", "North Carolina (NC)", "North Dakota (ND)", "Ohio (OH)", "Oklahoma (OK)",
                                    "Oregon (OR)", "Pennsylvania (PA)", "Rhode Island (RI)", "South Carolina (SC)", "South Dakota (SD)", "Tennessee (TN)",
                                    "Texas (TX)", "Utah (UT)", "Vermont (VT)", "Virginia (VA)", "Washington (WA)", "West Virginia (WV)", "Wisconsin (WI)", "Wyoming (WY)",
                                ],
                                defaulValue:"Georgia (GA)"
                            });
                            additionalInfoCardContent.appendChild(stateInputGroup);
                            
                            // Create the Driver's License Input Group
                            const dlInputGroup = createInputGroup("DMV#:", {
                                id: "dlInputConfig",
                                name: "defendant[dlNumber]",
                                placeholder: "DMV#",
                                type: "text",
                                title: "Enter a valid driver's license based on the selected state",
                            });
                            additionalInfoCardContent.appendChild(dlInputGroup);
                            
                            // Append the Card Content to the Card
                            additionalInfoCard.appendChild(additionalInfoCardContent);
                            personalInfoContainer.appendChild(additionalInfoCard);
                            
                            // Append Personal Info Container to the Wrapper
                            defendantWrapper.appendChild(personalInfoContainer);
                            
                            // Add Event Listeners for State Dropdown and Driver's License Input
                            const stateDropdown = document.getElementById("state-dropdown");
                            const dlInput = document.getElementById("dlInputConfig");
                            
                            if (stateDropdown && dlInput) {
                                stateDropdown.addEventListener("change", () => {
                                    const selectedState = stateDropdown.value.split(" (")[0]; // Extract the state name
                                    const stateFormat = getStateDriverLicenseFormat(selectedState) || { placeholder: "DRIVER'S LICENSE #", pattern: ".*" };
                            
                                    // Update the Driver's License Input based on State
                                    dlInput.placeholder = stateFormat.placeholder;
                                    dlInput.setAttribute("pattern", stateFormat.pattern);
                                    dlInput.title = stateFormat.title || "Enter a valid driver's license based on the selected state";
                                });
                            
                                dlInput.addEventListener("input", (event) => {
                                    const selectedState = stateDropdown.value.split(" (")[0];
                                    const stateFormat = getStateDriverLicenseFormat(selectedState);
                            
                                    if (stateFormat && stateFormat.formatFunction) {
                                        event.target.value = stateFormat.formatFunction(event.target.value);
                                    }
                                });
                            }

                     
                            
                       

        // Add Demographics
        const demographicsContainer = createContainer("Demographics", "defendant-demographics", [
            { label: "SEX:", id: "sex", name: "defendant[sex]", placeholder:"SEX", type: "datalist", options: ["Male", "Female"] },
            { label:  "RACE:", id: "race", name: "defendant[race]", placeholder:"RACE", type: "datalist", options: ["White", "Black", "Asian", "Hispanic", "Native American", "Other"] },
            { label: "HGT:", id: "height", name: "defendant[height]", placeholder: "HGT", type:  "datalist", options: [
                "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"",
                "6'0\"", "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\"", "6'6\"", "6'7\"", "6'8\"", "6'9\"", "6'10\"", "6'11\"", "7'0\""
            ] },
            { label: "WGT:", id: "weight", name: "defendant[weight]", placeholder: "WGT", type: "datalist", options: [
              "125 lbs", "126 lbs", "127 lbs", "128 lbs", "129 lbs", "130 lbs", "131 lbs", "132 lbs", "133 lbs", "134 lbs", "135 lbs", "136 lbs", "137 lbs", "138 lbs", "139 lbs", "140 lbs",
"141 lbs", "142 lbs", "143 lbs", "144 lbs", "145 lbs", "146 lbs", "147 lbs", "148 lbs", "149 lbs", "150 lbs", "151 lbs", "152 lbs", "153 lbs", "154 lbs", "155 lbs", "156 lbs", 
"157 lbs", "158 lbs", "159 lbs", "160 lbs", "161 lbs", "162 lbs", "163 lbs", "164 lbs", "165 lbs", "166 lbs", "167 lbs", "168 lbs", "169 lbs", "170 lbs", "171 lbs", "172 lbs", 
"173 lbs", "174 lbs", "175 lbs", "176 lbs", "177 lbs", "178 lbs", "179 lbs", "180 lbs", "181 lbs", "182 lbs", "183 lbs", "184 lbs", "185 lbs", "186 lbs", "187 lbs", "188 lbs", 
"189 lbs", "190 lbs", "191 lbs", "192 lbs", "193 lbs", "194 lbs", "195 lbs", "196 lbs", "197 lbs", "198 lbs", "199 lbs", "200 lbs", "201 lbs", "202 lbs", "203 lbs", "204 lbs", 
"205 lbs", "206 lbs", "207 lbs", "208 lbs", "209 lbs", "210 lbs", "211 lbs", "212 lbs", "213 lbs", "214 lbs", "215 lbs", "216 lbs", "217 lbs", "218 lbs", "219 lbs", "220 lbs", 
"221 lbs", "222 lbs", "223 lbs", "224 lbs", "225 lbs", "226 lbs", "227 lbs", "228 lbs", "229 lbs", "230 lbs", "231 lbs", "232 lbs", "233 lbs", "234 lbs", "235 lbs", "236 lbs", 
"237 lbs", "238 lbs", "239 lbs", "240 lbs", "241 lbs", "242 lbs", "243 lbs", "244 lbs", "245 lbs", "246 lbs", "247 lbs", "248 lbs", "249 lbs", "250 lbs", "251 lbs", "252 lbs", 
"253 lbs", "254 lbs", "255 lbs", "256 lbs", "257 lbs", "258 lbs", "259 lbs", "260 lbs", "261 lbs", "262 lbs", "263 lbs", "264 lbs", "265 lbs", "266 lbs", "267 lbs", "268 lbs", 
"269 lbs", "270 lbs", "271 lbs", "272 lbs", "273 lbs", "274 lbs", "275 lbs", "276 lbs", "277 lbs", "278 lbs", "279 lbs", "280 lbs", "281 lbs", "282 lbs", "283 lbs", "284 lbs", 
"285 lbs", "286 lbs", "287 lbs", "288 lbs", "289 lbs", "290 lbs", "291 lbs", "292 lbs", "293 lbs", "294 lbs", "295 lbs", "296 lbs", "297 lbs", "298 lbs", "299 lbs", "300 lbs", 
"301 lbs", "302 lbs", "303 lbs", "304 lbs", "305 lbs", "306 lbs", "307 lbs", "308 lbs", "309 lbs", "310 lbs", "311 lbs", "312 lbs", "313 lbs", "314 lbs", "315 lbs", "316 lbs", 
"317 lbs", "318 lbs", "319 lbs", "320 lbs", "321 lbs", "322 lbs", "323 lbs", "324 lbs", "325 lbs", "326 lbs", "327 lbs", "328 lbs", "329 lbs", "330 lbs", "331 lbs", "332 lbs", 
"333 lbs", "334 lbs", "335 lbs", "336 lbs", "337 lbs", "338 lbs", "339 lbs", "340 lbs", "341 lbs", "342 lbs", "343 lbs", "344 lbs", "345 lbs", "346 lbs", "347 lbs", "348 lbs", 
"349 lbs", "350 lbs", "351 lbs", "352 lbs", "353 lbs", "354 lbs", "355 lbs", "356 lbs", "357 lbs", "358 lbs", "359 lbs", "360 lbs", "361 lbs", "362 lbs", "363 lbs", "364 lbs", 
"365 lbs", "366 lbs", "367 lbs", "368 lbs", "369 lbs", "370 lbs", "371 lbs", "372 lbs", "373 lbs", "374 lbs", "375 lbs", "376 lbs", "377 lbs", "378 lbs", "379 lbs", "380 lbs", 
"381 lbs", "382 lbs", "383 lbs", "384 lbs", "385 lbs", "386 lbs", "387 lbs", "388 lbs", "389 lbs", "390 lbs", "391 lbs", "392 lbs", "393 lbs", "394 lbs", "395 lbs", "396 lbs", 
"397 lbs", "398 lbs", "399 lbs", "400 lbs", "401 lbs", "402 lbs", "403 lbs", "404 lbs", "405 lbs", "406 lbs", "407 lbs", "408 lbs", "409 lbs", "410 lbs", "411 lbs", "412 lbs", 
"413 lbs", "414 lbs", "415 lbs", "416 lbs", "417 lbs", "418 lbs", "419 lbs", "420 lbs", "421 lbs", "422 lbs", "423 lbs", "424 lbs", "425 lbs", "426 lbs", "427 lbs", "428 lbs", 
"429 lbs", "430 lbs", "431 lbs", "432 lbs", "433 lbs", "434 lbs", "435 lbs", "436 lbs", "437 lbs", "438 lbs", "439 lbs", "440 lbs", "441 lbs", "442 lbs", "443 lbs", "444 lbs", 
"445 lbs", "446 lbs", "447 lbs", "448 lbs", "449 lbs", "450 lbs", "451 lbs", "452 lbs", "453 lbs", "454 lbs", "455 lbs", "456 lbs", "457 lbs", "458 lbs", "459 lbs", "460 lbs", 
"461 lbs", "462 lbs", "463 lbs", "464 lbs", "465 lbs", "466 lbs", "467 lbs", "468 lbs", "469 lbs", "470 lbs", "471 lbs", "472 lbs", "473 lbs", "474 lbs", "475 lbs", "476 lbs", 
"477 lbs", "478 lbs", "479 lbs", "480 lbs", "481 lbs", "482 lbs", "483 lbs", "484 lbs", "485 lbs", "486 lbs", "487 lbs", "488 lbs", "489 lbs", "490 lbs", "491 lbs", "492 lbs", 
"493 lbs", "494 lbs", "495 lbs", "496 lbs", "497 lbs", "498 lbs", "499 lbs", "500 lbs"

            ] },
            { label: "HAIR:", id: "hair", name: "defendant[hair]", placeholder:"HAIR", type: "datalist", options: ["Black", "Brown", "Blonde", "Red", "Gray", "Bald", "Other"] },
            { label: "EYES:", id: "eyes", name: "defendant[eyes]", placeholder:"EYES", type: "datalist", options: ["Brown", "Blue", "Green", "Hazel", "Gray", "Other"] }
        ]);

        // Append the Contact Info Container
defendantWrapper.appendChild(demographicsContainer);
// Append the Contact Info Container
defendantWrapper.appendChild(demographicsContainer);

const contactInfoContainer = createContainer("Contact Info", "contact-info", [
    {
        label: "PHONE #:",
        id: "phoneInput",
        name: "defendant[phone]",
        placeholder: "(XXX) XXX-XXXX",
        type: "text",
        pattern: "\\(\\d{3}\\) \\d{3}-\\d{4}",
        title: "Phone number format: (XXX) XXX-XXXX",
    },
    {
        label: "",
        id: "deviceTypeDefault",
        name: "contact[deviceType]",
        placeholder: "DEVICE TYPE",
        type: "datalist",
        options: ["Mobile", "Home", "Other"],
    },
    {
        label: "EMAIL:",
        id: "emailUser",
        name: "contact[emailUser]",
        placeholder: "USER",
        type: "text",
    },
    {
        label: "@",
        id: "emailDomain",
        name: "contact[emailDomain]",
        type: "datalist",
        placeholder: "EMAIL",
        options: ["GMAIL.COM", "YAHOO.COM", "OUTLOOK.COM", "HOTMAIL.COM", "ICLOUD.COM"],
    },
    {
        label: "",
        id: "fullEmailOutput",
        name: "contact[fullEmail]",
        placeholder: "EMAIL ADDRESS",
        readonly: true,
    },
]);

// Append the container to the Defendant Wrapper
defendantWrapper.appendChild(contactInfoContainer);

// Add Event Listeners for Email Assistance
const emailUserInput = document.getElementById("emailUser");
const emailDomainInput = document.getElementById("emailDomain");
const fullEmailOutput = document.getElementById("fullEmailOutput");

if (emailUserInput && emailDomainInput && fullEmailOutput) {
    function updateCombinedEmail() {
        const username = emailUserInput.value.trim();
        const domain = emailDomainInput.value.trim();
        fullEmailOutput.value = username && domain ? `${username}@${domain}` : "";
    }

    // Attach event listeners
    emailUserInput.addEventListener("input", updateCombinedEmail);
    emailDomainInput.addEventListener("change", updateCombinedEmail);
}


// Append the container to the Defendant Wrapper
defendantWrapper.appendChild(contactInfoContainer);
// Create Residential Info Card
const residentialInfoCard = createCard("", [
    {
        label: "RESIDENCE:",
        id: "residenceType",
        name: "residential[type]",
        placeholder: "TYPE",
        type: "datalist",
        options: [
            "Apartment", "House", "Condo", "Mobile Home", "Townhouse", "Duplex", "Trailer", "Other"
        ]
    },
    {
        label: "RESIDENT:",
        id: "residentType",
        name: "residential[residentType]",
        placeholder: "TYPE",
        type: "datalist",
        options: [
            "Owner (Own)", "Renter (Lease)"
        ]
    },
    {
        label: "LENGTH:",
        id: "years",
        name: "residential[years]",
        placeholder: "YEARS",
        type: "datalist",
        options: Array.from({ length: 26 }, (_, i) => (i === 25 ? "25 +" : `${i} YRS`))
    },
    {
        label: "LIVES WITH:",
        id: "defendantLivesWith",
        name: "residential[livesWith]",
        placeholder: "SELF",
        type: "datalist",
        options: [
            "Self", "Roommate", "Husband", "Wife", "Son", "Daughter", "Children", "Girlfriend", "Boyfriend",
            "Sibling", "Grandparent", "Grandchild", "Aunt", "Uncle", "Cousin", "Friends", "Parents", "Other"
        ]
    }
]);

// Create Address Card
const addressCard = createCard("", [
    {
        label: "ADDRESS",
        id: "street",
        name: "address[street]",
        placeholder: "STREET",
        type: "text"
    },
    {
        label: "",
        id: "apt",
        name: "residential[apt]",
        placeholder: "APT #",
        type: "text",
        hidden: true // Apt field starts hidden
    },
    {
        label: "",
        id: "state",
        name: "address[state]",
        placeholder: "STATE",
        type: "datalist",
        options: [
            "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", 
            "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", 
            "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", 
            "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", 
            "WI", "WY"
        ]
    },
    {
        label: "",
        id: "cityList",
        name: "address[city]",
        placeholder: "CITY",
        type: "datalist",
        options: [] 
    },
    {
        label: "",
        id: "zipCode",
        name: "address[zipCode]",
        placeholder: "ZIP CODE",
        type: "text"
    }
]);


// Create the Residential Info Container
const residentialInfoContainer = document.createElement("div");
residentialInfoContainer.className = "container";
residentialInfoContainer.id = "residential-info";

// Add Title
const containerTitle = document.createElement("h2");
containerTitle.textContent = "Residential";
residentialInfoContainer.appendChild(containerTitle);

// Append Cards to Container
residentialInfoContainer.appendChild(addressCard);
residentialInfoContainer.appendChild(residentialInfoCard);

// Append Residential Info Container to Defendant Wrapper
defendantWrapper.appendChild(residentialInfoContainer);

    }

            // Call the function to populate the Defendant section
            populateDefendantSection();
         
            document.addEventListener("DOMContentLoaded", () => {
                const defendantWrapper = document.getElementById("defendant-section");
                if (defendantWrapper) {
                    defendantWrapper.appendChild(residentialInfoCard); // Append the Residential Info Card
                    defendantWrapper.appendChild(addressCard); // Append the Address Card
                }
            });
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
    
          
document.getElementById('ssnInput').addEventListener('input', function(e) {
    formatSSN(e.target);
    });
    
    
    document.getElementById('phoneInput').addEventListener('input', function (e) {
        formatPhoneNumber(e.target);
        });
        
    
stateSelectInput.addEventListener("input", function () {
    const selectedState = stateSelectInput.value;
    const pattern = stateLicenseFormats[selectedState] || "^.*$"; // Default pattern
    dlInputConfig.setAttribute("pattern", pattern);
    dlInputConfig.setAttribute(
        "title",
        `License format for ${selectedState}: ${
            pattern !== ".*" ? pattern.replace(/\\d/g, "0").replace(/\\w/g, "A") : "Any"
        }`
    );
});
// Ensure proper event attachment after elements are in the DOM
stateSelectInput.addEventListener("change", function () {
    if (!states.includes(stateSelectInput.value)) {
        stateSelectInput.setCustomValidity("Please select a valid state.");
    } else {
        stateSelectInput.setCustomValidity("");
    }
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
                targetSection.scrollIntoView({behavior: "smooth", block: "start" });
            } else {
                console.error(`Section with ID "${targetId}" not found.`);
            }
        });
    });
});

