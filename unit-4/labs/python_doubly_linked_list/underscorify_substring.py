def underscorify_substring(string, sub_str):
 
    # Function Call to intervals of starting and ending index
    locations = collapse(get_locations(string, sub_str))
 
    # Function Call
    return underscorify(string, locations)
 
# Function finds all starting and ending index of the substring in given string
def get_locations(string, sub_str):
    locations = []
    start_idx = 0
    l = len(sub_str)
 
    # Traverse string
    while start_idx < len(string):
        # Find sub_str
        next_idx = string.find(sub_str, start_idx)
 
        # If location found, then insert pair int location[]
        if next_idx != -1:
            locations.append([next_idx, next_idx + l])
 
            # Update the start index
            start_idx = next_idx + 1
        else:
            break
    return locations
 
# Function to merge the locations of substrings that overlap each other or sit next to each other
 
 
def collapse(locations):
    if not locations:
        return locations
 
    # 2D list to store the merged location of substrings
    new_locations = [locations[0]]
    previous = locations[0]
 
    for i in range(1, len(locations)):
        current = locations[i]
 
        # Condition to check if the substring overlaps
        if current[0] <= previous[1]:
            previous[1] = current[1]
        else:
            new_locations.append(current)
            previous = new_locations[-1]
    return new_locations
 
# Function creates a new string with underscores added at correct positions
def underscorify(string, locations):
    locations_idx = 0
    string_idx = 0
    in_between_underscores = False
    final_chars = []
    i = 0
 
    # Traverse the string and check in locations[] to append _
    while string_idx < len(string) and locations_idx < len(locations):
        if string_idx == locations[locations_idx][i]:
            # Insert underscore
            final_chars.append("_")
            in_between_underscores = not in_between_underscores
 
            # Increment location index
            if not in_between_underscores:
                locations_idx += 1
            i = 1 if i == 0 else 0
 
        # Push the string
        final_chars.append(string[string_idx])
        string_idx += 1
 
    if locations_idx < len(locations):
        final_chars.append("_")
    elif string_idx < len(string):
        final_chars.append(string[string_idx:])
 
    # Return the resultant string
    return "".join(final_chars)
 
 
# Given string S1 and S2
# s1 = "examwill be a examexam"
# s2 = "exam"
 
# # Function Call
# print(underscorify_substring(s1, s2))