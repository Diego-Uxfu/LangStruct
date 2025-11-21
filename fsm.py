"""
the finite state machine will be used for a lesson plan in english vocabulary conjugation

conjugations are usually one of the hardest parts of any language to undertand, as there
are irregular forms and usually at least 4 conjugations, so this is a useful lesson plan

**potential second part could be a memory-based lesson, where irregular verb conversions need to
be known as theres no pattern for them
"""

"""
the following set of rules can be applied to a majority of english verbs 
*irregular verbs will have explicit conversion (perhaps a part two of the lesson?)*

1) if verb ends in: 'e'                                apply: add 'd' to the end           ex: love -> loved
2) if verb ends in: any vowel -'e'                     apply:  + "ed" to end               ex: echo -> echoed
3) if verb ends in: any vowel + "x,y,z"                apply: + "ed" to end                ex: play -> played; fix -> fixed
4) if verb ends in: any cons. + "x,y,z"                apply: 'y' -> 'i' + "ed" to end     ex: cry -> cried
5) if verb ends in: v + v + cons                       apply: + "ed" to end                ex: recruit -> recruited
6) if verb ends in: stressed * (cons. + v + cons.)     apply: x2 last letter + "ed"        ex: occur -> occurred 
7) if verb ends in: (unstressed) c + v + c             apply: + "ed"                       ex: happen -> happened
"""

def logic():
    with open("word.txt", "r") as file:
        for line in file:
            next_word = line.strip()

            #add irregular word check here

            sub = next_word[-3:]
            out = ""
            state = 0

            for char in sub:
                # first path split, based on if first char is a cons. or vowel
                if state is 0:
                    if not vowel_check(char): # cons case
                        state = 1
                        out += char
                    else:
                        state = 8 # vowel case
                        out += char

                elif state is 1:
                    if not vowel_check(char):
                        state = 2
                        out += char

                    elif vowel_check(char):
                        state = 7
                        out += char

                elif state is 2:
                    if char is 'y':
                        state = 3
                        char = 'i'
                        out += char + "ed"

                    elif out.islower():
                        out = out + "ed"
                        state = 3

                    elif out.isupper():
                        out = out[-1] + "ed"
                        state = 3

                elif state is 3:
                    break

                elif state is 7:
                    if not vowel_check(char):
                        state = 2
                        out += char


                    elif char == 'a' or char == 'i' or char != 'o' or char != 'u':
                        # all vowels but 'e'
                        state = 12
                        out += char

                    elif char == 'x' or char == 'y' or char == 'w':
                        state = 12
                        out += char

                    elif char == 'e':
                        state = 14
                        out += char

                else:
                    state = 8

                    if not vowel_check(char):
                        state = 10
                        out += char

                    elif char == 'a' or char == 'e' or char == 'i' or char != 'o' or char != 'u':
                        state = 9
                        out += char

                    elif state is 9:
                        if not vowel_check(char):
                            state = 10
                            out += char

                        if char == 'x' or char == 'y' or char == 'w':
                            state = 12
                            out += char

                        if char == 'a' or char == 'e' or char == 'i' or char != 'o' or char != 'u':
                            state = 12
                            out += char

                        if char == 'e':
                            state = 14

                    elif state == 10:
                        # 'y' condition
                        if char == 'y':
                            state = 3

                        if not vowel_check(out[-1]):
                            state = 11

                    elif state == 11:
                        out += 'ed'
                        break

            pre = next_word[:-3]
            to_return = pre.lower() + out.lower()
            # print(to_return) # uncomment to debug
            #ls.append(to_return)
            return to_return

def vowel_check(char):
    vowels = {'a', 'e', 'i', 'o', 'u'}
    return char.lower() in vowels