def solution(S):
    count = 0
    B = len(S)
    i = 0

    while i < B: 

         if S[i] == "X":
            count +=1
            i += 3
         else:
             i+=1

    return count
     



print(solution(".X..X"))         
print(solution("X.XXXXX.X."))    
print(solution("XX.XXX.."))      
print(solution("XXXX"))          
print(solution('.X...XX'))       

