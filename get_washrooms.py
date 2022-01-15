import json 

with open("washrooms.json", "r") as inputfile:
    data = json.load(inputfile)
# { "title": "1025 Boundary Rd", 
# "address1": "1025 Boundary Rd", 
# "address2": "Vancouver, BC V5K 4T2, Canada", 
# "coords": { "lat": 49.27640467784375, "lng": -123.0254882067459 }, 
# "placeId": "ChIJn80lMNFwhlQR2-ZTw_YZBok" }

output = []
for val in data:
    output.append({
        "title": val["fields"]["name"],
        "address1": val["fields"]["address"], 
        "address2": "Vancouver, BC, Canada", 
        "coords": {"lat": val["fields"]["geom"]["coordinates"][1],
                    "lng": val["fields"]["geom"]["coordinates"][0] },
        "placeId": val["recordid"],
        "upvotes": 0, 
        "downvotes": 0
    })

with open("output.json", "w+") as outfile:
    json.dump(output, outfile, indent=4)