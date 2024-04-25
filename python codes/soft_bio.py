import json

# Dictionary to map bio attributes to numbers
bio_attributes = {
    "Gender": {"Male": 0, "Female": 1, "Other": 2},
    "Age": {"0-11": 0, "12-17": 1, "18-24": 2, "25-34": 3, "35-44": 4, "45-54": 5, "55-67": 6, ">65": 7, "Unknown": -1},
    "Height": {"Child: Below 150 cm": 0, "Short: 150 - 160 cm": 1, "Medium: 160 - 170 cm": 2, "Tall: Above 170 cm": 3, "Unknown": -1},
    "Weight": {"Thin: Below 60 kg": 0, "Medium: 60 - 80 kg": 1, "Fat: Above 80 kg": 2, "Unknown": -1},
    "Ethnicity": {"Indian": 0, "Black": 1, "Turkish White": 2, "White": 3},
    "Hair Color": {"Black": 0, "Brown": 1, "White": 2, "Red": 3, "Gray": 4, "Occluded": 5, "Unknown": -1},
    "Hair Style": {"Bald": 0, "Short": 1, "Medium": 2, "Long": 3, "Horse Tail": 4, "Unknown": -1},
    "Beard": {"Yes": 0, "No": 1, "Unknown": -1},
    "Moustache": {"Yes": 0, "No": 1, "Unknown": -1},
    "Glasses": {"Normal": 0, "Sun": 1, "Unknown": -1},
    "Head Accessories": {"Hat": 0, "Scarf": 1, "Neckless": 2, "Cannot see": 3, "Unknown": -1},
    "Upper Body Cloths": {"TShirt": 0, "Blouse": 1, "Sweater": 2, "Coat": 3, "Dress": 4, "Uniform": 5, "Shirt": 6, "Suit": 7, "Hoodie": 8, "Unknown": -1},
    "Lower Body Cloths": {"Jeans": 0, "Leggings": 1, "Pants": 2, "Shorts": 3, "Skirt": 4, "Dress": 5, "Uniform": 6, "Suit": 7, "Unknown": -1},
    "Feet": {"Sports Shoes": 0, "Classic Shoe": 1, "High Heels": 2, "Boots": 3, "Sandal": 4, "Nothing": 5, "Unknown": -1},
    "Accessories": {"Bag": 0, "Backpack Bag": 1, "Rolling Bag": 2, "Umbrella": 3, "Sports Bag": 4, "Market Bag": 5, "Nothing": 6, "Unknown": -1},
    "Action": {
        "drink": 0, "eat snacks": 1, "brush hair": 2, "drop something": 3, "pick up something": 4,
        "throw away something": 5, "sit down": 6, "stand up": 7, "applaud": 8, "read": 9,
        "write": 10, "put on a coat": 11, "take off a coat": 12, "put on glasses": 13, "take off glasses": 14,
        "put on a hat": 15, "take off a hat": 16, "throw away a hat": 17, "cheer": 18, "wave hands": 19,
        "kick something": 20, "reach into pockets": 21, "jump on single leg": 22, "jump on two legs": 23,
        "make a phone call": 24, "play with cell phones": 25, "point somewhere": 26, "look at the watch": 27,
        "rub hands": 28, "bow": 29, "shake head": 30, "salute": 31, "cross palms together": 32,
        "cross arms in front to say no": 33, "wear headphones": 34, "take off headphones": 35, "make a shh sign": 36,
        "touch the hair": 37, "thumb up": 38, "thumb down": 39, "make an OK sign": 40, "make a victory sign": 41,
        "punch with fists": 42, "figure snap": 43, "open the bottle": 44, "smell": 45, "squat": 46,
        "apply cream to face": 47, "apply cream to hands": 48, "grasp a bag": 49, "put down a bag": 50,
        "put something into a bag": 51, "take something out of a bag": 52, "open a box": 53, "move a box": 54,
        "put up hands": 55, "put hands on hips": 56, "wrap arms around": 57, "shake arms": 58,
        "step on the spot walk": 59, "kick aside": 60, "kick backward": 61, "cough": 62, "sneeze": 63,
        "yawn": 64, "blow nose": 65, "stagger": 66, "headache": 67, "chest discomfort": 68,
        "backache": 69, "neck-ache": 70, "vomit": 71, "use a fan": 72, "stretch body": 73,
        "punching someone": 74, "kicking someone": 75, "pushing someone": 76, "slap someone on the back": 77,
        "point someone": 78, "hug": 79, "give something to someone": 80, "steal something from other’s pocket": 81,
        "rob something from someone": 82, "shake hands": 83, "walk toward someone": 84, "walk away from someone": 85,
        "hit someone with something": 86, "threat someone with a knife": 87, "bump into someone": 88,
        "walk side by side": 89, "high five": 90, "drink a toast": 91, "move something with someone": 92,
        "take a phone for someone": 93, "stalk someone": 94, "whisper in someone’s ear": 95,
        "exchange something with someone": 96, "lend an arm to support someone": 97, "rock-paper-scissors": 98,
        "hover": 99, "land": 100, "land at designated locations": 101, "move forward": 102, "move backward": 103,
        "move left": 104, "move right": 105, "ascend": 106, "descend": 107, "accelerate": 108,
        "decelerate": 109, "come over here": 110, "stay where you are": 111, "rear right turn": 112,
        "rear left turn": 113, "abandon landing": 114, "all clear": 115, "not clear": 116, "have command": 117,
        "follow me": 118, "turn left": 119, "turn right": 120, "throw litter": 121, "dig a hole": 122,
        "mow": 123, "set on fire": 124, "smoke": 125, "cut the tree": 126, "fishing": 127,
        "pick a lock": 128, "pollute walls": 129, "hold someone hostage": 130, "threat someone with a gun": 131,
        "wave a goodbye": 132, "chase someone": 133, "comfort someone": 134, "drag someone": 135,
        "sweep the floor": 136, "mop the floor": 137, "bounce the ball": 138, "shoot at the basket": 139,
        "swing the racket": 140, "leg pressing": 141, "escape (to survive)": 142, "call for help": 143,
        "wear a mask": 144, "take off a mask": 145, "bend arms around someone’s shoulder": 146, "run": 147,
        "stab someone with a knife": 148, "throw a frisbee": 149, "carry a carrying pole": 150,
        "use a lever to lift something": 151, "walk": 152, "open an umbrella": 153, "close an umbrella": 154
    }
}

# Load the filenames from the text file
file_names = []
with open('/home/socialab/Documents/Long_Range_Datasets/Soft_Bio_file_names.txt', 'r') as file:
    file_names = file.readlines()

#print(file_names)
import json

# Initialize dictionaries to store counts for each main attribute
attribute_counts = {attribute: {} for attribute in bio_attributes.keys()}

# Function to map attribute values to labels
def map_values_to_labels(value, attribute):
    return list(bio_attributes[attribute].keys())[list(bio_attributes[attribute].values()).index(value)]

# Iterate through each file name
for file_name in file_names:
    # Split the filename by underscore and extract attribute values
    file_name = file_name.strip().replace('.mp4', '')
    name_split = file_name.strip().split('_')

   
    
    GENDER = int(name_split[10])
    age = int(name_split[11])
    height = int(name_split[12])
    weight = int(name_split[13])
    ethnicity = int(name_split[14])
    hair_color = int(name_split[15])
    hair_style = int(name_split[16])
    beard = int(name_split[17])
    moustache = int(name_split[18])
    glasses = int(name_split[19])
    head_accessories = int(name_split[20])
    upper_body_cloths = int(name_split[21])
    lower_body_cloths = int(name_split[22])
    feet = int(name_split[23])
    accessories = int(name_split[24])
    action = int(name_split[25])

    # Map each attribute value to its corresponding label and increment the count
    for attribute, value in [('Gender', GENDER), ('Age', age), ('Height', height), ('Weight', weight), ('Ethnicity', ethnicity),
                             ('Hair Color', hair_color), ('Hair Style', hair_style), ('Beard', beard), ('Moustache', moustache),
                             ('Glasses', glasses), ('Head Accessories', head_accessories), ('Upper Body Cloths', upper_body_cloths),
                             ('Lower Body Cloths', lower_body_cloths), ('Feet', feet), ('Accessories', accessories), ('Action', action)]:
        label = map_values_to_labels(value, attribute)
        attribute_counts[attribute][label] = attribute_counts[attribute].get(label, 0) + 1

# Save the counts to a JSON file
with open('/home/socialab/Documents/long-range_recog.github.io/attribute_counts.json', 'w') as file:
    json.dump(attribute_counts, file, indent=4)

print("Attribute counts saved to attribute_counts.json.")
