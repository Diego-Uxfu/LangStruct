"""

the finite state machine will be used for a lesson plan in english vocabulary conjugation

conjugations are usually one of the hardest parts of any language to undertand, as there
are irregular forms and usually at least 4 conjugations, so this is a useful lesson plan

**potential second part could be a memory-based lesson, where irregular verb conversions need to
be known as theres no pattern for them

"""

"""

the following set of rules can be applied to a majority of english verbs 
*irregular vrebs will have explicit conversion (perhaps a part two of the lesson?)*

if verb ends in: 'e'        apply: add 'd' to the end   ex: love -> loved
if verb ends in: any vowel -'e'     apply:  + "ed" to end     ex: echo -> echoed
if verb ends in: any vowel + "x,y,z"          apply: + "ed" to end       ex: play -> played; fix -> fixed
if verb ends in:            apply:                      ex:
if verb ends in:            apply:                      ex:
if verb ends in:            apply:                      ex:
if verb ends in:            apply:                      ex:
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
                if state is 0:
                    if not vowel_check(char):
                        state = 1
                        out += char
                    else:
                        state = 8
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
                        state = 6

                    elif out.isupper():
                        out = out[-1] + "ed"
                        state = 5




def vowel_check(char):
    vowels = {'a', 'e', 'i', 'o', 'u'}
    return char.lower() in vowels