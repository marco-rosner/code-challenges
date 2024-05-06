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
        j-=1
        return NORTH, i, j

    if direction==NORTH:
        i-=1
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
    cleanPath = []
    i, j, cleaned = 0, 0, 0
    direction = EAST
    xlen = len(R[0])
    ylen = len(R)

    if len(R) == 1 and R[0] == ".":
        return 1
     
    for line in R:
        path.append([*line])
    
    while cleanPath.count(str(i)+str(j)) < 1:
        if path[i][j] == '.':
            cleaned+=1
            cleanPath.append(str(i) + str(j))

        if path[i][j] == 'X':
            direction, i, j = changeDirection(direction, i, j)

        if i == ylen:
            direction = WEST

        if i == 0 and direction == WEST:
            direction = NORTH

        if i == 0 and j == 0 and direction == NORTH:
            direction = EAST

        if j == xlen:
            direction = SOUTH

        if j == 0 and direction == WEST:
            direction = NORTH

        if i == ylen and j == xlen and direction == SOUTH:
            direction = WEST

        i, j = move(direction, i, j)

    return cleaned

# print(solution(["."]))
print(solution(["...X..", "....XX", "..X..."]))