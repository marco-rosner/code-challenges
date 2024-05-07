EAST = 'E'
NORTH = 'N'
SOUTH = 'S'
WEST = 'W'

def changeDirection(direction, i, j):
    if direction==EAST:
        j-=1
        return SOUTH, i, j
    
    if direction==SOUTH:
        i-=1
        return WEST, i, j

    if direction==WEST:
        j+=1
        return NORTH, i, j

    if direction==NORTH:
        i+=1
        return EAST, i, j

def move(direction, i, j):
    if direction==EAST:
        j+=1
    
    if direction==WEST:
        j-=1
    
    if direction==SOUTH:
        i+=1

    if direction==NORTH:
        i-=1
    
    return i, j

def solution(R):
    path = []
    robotPath = []
    stepsToFindSqDirty = 6
    i, j, cleaned = 0, 0, 0
    direction = EAST
    xlen = len(R[0])-1
    ylen = len(R)-1

    if len(R) == 1 and R[0] == ".":
        return 1
     
    for line in R:
        path.append([*line])
    
    while stepsToFindSqDirty >= 0:
        stepsToFindSqDirty -= 1
        
        if path[i][j] == '.':
            address = str(i) + str(j)
            if robotPath.count(address) == 0:
                cleaned+=1
                robotPath.append(address)
                stepsToFindSqDirty = 6

        if path[i][j] == 'X':
            direction, i, j = changeDirection(direction, i, j)

        if i == ylen and direction == SOUTH:
            direction = WEST

        if i == 0 and direction == WEST:
            direction = NORTH

        if i == 0 and direction == NORTH:
            direction = EAST

        if i == 0 and j == 0 and direction == NORTH:
            direction = EAST

        if j == xlen and direction == EAST:
            direction = SOUTH

        if j == 0 and direction == WEST:
            direction = NORTH

        if i == ylen and j == xlen and direction == SOUTH:
            direction = WEST

        i, j = move(direction, i, j)

    return cleaned

print(solution(["."])) # 1
print(solution(["...X..", "....XX", "..X..."])) # 6
print(solution(["...X..", "XX..XX", "......"])) # 10